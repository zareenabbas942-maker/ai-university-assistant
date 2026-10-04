import { ChatRequest, ChatResponse } from '../types/chat';

const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const normalizedApiBaseUrl = configuredApiBaseUrl?.replace(/\/+$/, '');

export const API_BASE_URL = configuredApiBaseUrl
  ? /\/api$/i.test(normalizedApiBaseUrl ?? '')
    ? normalizedApiBaseUrl
    : `${normalizedApiBaseUrl}/api`
  : import.meta.env.PROD
    ? ''
    : '/api';

export async function sendChatMessage(
  request: ChatRequest
): Promise<ChatResponse> {
  const question = request.question.trim();

  if (!question) {
    throw new Error('Please enter a question before sending.');
  }

  if (!API_BASE_URL) {
    throw new Error(
      'VITE_API_BASE_URL is not configured. Set it in Vercel to your Render backend URL, then redeploy.'
    );
  }

  const chatEndpoint = `${API_BASE_URL}/chat`;
  const response = await fetch(chatEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: question,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Backend returned status ${response.status} from ${chatEndpoint}`
    );
  }

  const data = await response.json();

  let answer = '';

  // Normal string response
  if (typeof data.reply === 'string') {
    answer = data.reply;
  }

  // Gemini structured response
  else if (data.reply && typeof data.reply === 'object') {
    if (typeof data.reply.text === 'string') {
      answer = data.reply.text;
    } else if (Array.isArray(data.reply)) {
      answer = data.reply
        .map((item: any) => {
          if (typeof item === 'string') {
            return item;
          }

          if (item && typeof item.text === 'string') {
            return item.text;
          }

          return '';
        })
        .filter(Boolean)
        .join('\n');
    }
  }

  // Extract sources from backend
  const sources = Array.isArray(data.sources)
    ? data.sources
    : [];

  return {
    answer: answer.trim() || 'No AI response was generated.',
    sources,
  };
}