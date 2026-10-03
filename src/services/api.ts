import { ChatRequest, ChatResponse } from '../types/chat';

export const API_BASE_URL = '/api';

export async function sendChatMessage(
  request: ChatRequest
): Promise<ChatResponse> {
  const question = request.question.trim();

  if (!question) {
    throw new Error('Please enter a question before sending.');
  }

  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: question,
    }),
  });

  if (!response.ok) {
    throw new Error(`Backend returned status ${response.status}`);
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