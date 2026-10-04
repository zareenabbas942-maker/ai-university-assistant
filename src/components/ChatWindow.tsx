import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  Building,
  Calendar,
  DollarSign,
} from 'lucide-react';

import { ChatMessageItem, ChatStatus } from '../types/chat';
import { sendChatMessage } from '../services/api';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { SuggestedQuestions } from './SuggestedQuestions';

interface ChatWindowProps {
  externalQuestion?: string;
  onExternalQuestionHandled?: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  externalQuestion,
  onExternalQuestionHandled,
}) => {
  const initialWelcomeMessage: ChatMessageItem = {
    id: 'welcome-msg',
    sender: 'assistant',
    text: `Hello and welcome! 👋 I am your **AI University Assistant**.

I am here to help you navigate university information and student services. You can ask me about:

* **Admissions & Requirements:** Application information, eligibility and admission process.
* **Academic Programs:** Undergraduate degree programs and available fields.
* **Faculties & Departments:** Faculties, institutes and academic departments.
* **Scholarships & Financial Aid:** Available scholarship categories and financial assistance.
* **Hostel Facilities:** Hostel availability, eligibility and allocation.
* **Quota Information:** Available admission quota categories.

Select one of the suggested questions below or type your question in the message box.`,
    timestamp: 'Just now',
    sources: [],
  };

  const [messages, setMessages] = useState<ChatMessageItem[]>([
    initialWelcomeMessage,
  ]);

  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  useEffect(() => {
    if (
      externalQuestion &&
      externalQuestion.trim() &&
      status === 'idle'
    ) {
      handleSendMessage(externalQuestion.trim());
      onExternalQuestionHandled?.();
    }
  }, [externalQuestion, status]);

  const handleSendMessage = async (text: string) => {
    const questionText = text.trim();

    if (
      !questionText ||
      status === 'sending' ||
      status === 'generating'
    ) {
      return;
    }

    setErrorMessage(null);

    const userMessage: ChatMessageItem = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInputText('');
    setStatus('sending');

    try {
      const response = await sendChatMessage({
        question: questionText,
      });

      const aiAnswer =
        typeof response.answer === 'string'
          ? response.answer.trim()
          : '';

      if (!aiAnswer) {
        throw new Error(
          'The AI service returned an empty response.'
        );
      }

      const assistantMessage: ChatMessageItem = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: aiAnswer,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sources: Array.isArray(response.sources)
          ? response.sources
          : [],
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);

      setStatus('completed');
    } catch (error: unknown) {

      const errorMsg =
        error instanceof Error
          ? error.message
          : 'Unable to connect to the AI University Assistant.';

      setErrorMessage(errorMsg);
      setStatus('error');

      const errorBotMessage: ChatMessageItem = {
        id: `assistant-error-${Date.now()}`,
        sender: 'assistant',
        text: `I could not generate the AI response.

${errorMsg}

Check that the FastAPI backend is reachable and the frontend API URL is configured correctly.`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isError: true,
        sources: [],
      };

      setMessages((previous) => [
        ...previous,
        errorBotMessage,
      ]);
    } finally {
      setTimeout(() => {
        setStatus('idle');
      }, 300);
    }
  };

  const handleSelectSuggestedQuestion = (
    question: string
  ) => {
    handleSendMessage(question);
  };

  const handleClearChat = () => {
    if (
      window.confirm(
        'Are you sure you want to reset the chat conversation?'
      )
    ) {
      setMessages([initialWelcomeMessage]);
      setInputText('');
      setErrorMessage(null);
      setStatus('idle');
    }
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full">

      {/* UNIVERSITY ASSISTANT HEADER */}
      <div className="bg-white border-x border-b border-[#e2ede4] rounded-b-2xl p-4 sm:p-5 shadow-sm mb-4">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <div className="flex items-center gap-3">

            {/* AI ICON */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16382b] to-[#10291f] border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] shadow-sm shrink-0">
              <Bot className="w-7 h-7" />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-base sm:text-lg font-bold text-[#16382b]">
                  University Student Assistant
                </h2>

                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#107c53] bg-[#eef6f1] px-2.5 py-0.5 rounded-full border border-[#cbe4d5]">

                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />

                  Online • AI Assistant

                </span>

              </div>

              <p className="text-xs text-[#64748b] mt-0.5">
                Instant university guidance on admissions, programs,
                faculties, scholarships, hostel and student services.
              </p>

            </div>
          </div>

          {/* RESET BUTTON */}
          <div className="flex items-center gap-2 self-start sm:self-center">

            <button
              onClick={handleClearChat}
              disabled={
                messages.length <= 1 ||
                status === 'sending' ||
                status === 'generating'
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d2ded4] text-[#4b5563] hover:text-[#16382b] hover:bg-[#eef3ee] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Chat</span>
            </button>

          </div>
        </div>

        {/* KNOWLEDGE INDICATORS */}
        <div className="mt-3.5 pt-3 border-t border-[#f0f5f1] grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#4b5563]">

          <div className="flex items-center gap-2 bg-[#faf8f5] px-2.5 py-1.5 rounded-lg border border-[#e8ece7]">
            <Building className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
            <span className="truncate">
              Academic Faculties
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#faf8f5] px-2.5 py-1.5 rounded-lg border border-[#e8ece7]">
            <Calendar className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
            <span className="truncate">
              Admissions 2026
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#faf8f5] px-2.5 py-1.5 rounded-lg border border-[#e8ece7]">
            <DollarSign className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
            <span className="truncate">
              Scholarships
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#faf8f5] px-2.5 py-1.5 rounded-lg border border-[#e8ece7]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
            <span className="truncate">
              AI Powered
            </span>
          </div>

        </div>
      </div>

      {/* SUGGESTED QUESTIONS */}
      <div className="mb-4">

        <SuggestedQuestions
          onSelectQuestion={handleSelectSuggestedQuestion}
          disabled={
            status === 'sending' ||
            status === 'generating'
          }
        />

      </div>

      {/* CHAT CONTAINER */}
      <div className="flex-1 flex flex-col bg-white border border-[#e2ede4] rounded-2xl shadow-sm overflow-hidden min-h-[480px]">

        {/* CHAT MESSAGES */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">

          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}

          {/* AI TYPING */}
          {(status === 'sending' ||
            status === 'generating') && (
            <TypingIndicator />
          )}

          {/* ERROR MESSAGE */}
          {status === 'error' &&
            errorMessage && (
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 my-2">

                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />

                <span>{errorMessage}</span>

              </div>
            )}

          <div ref={messagesEndRef} />

        </div>

        {/* CHAT INPUT */}
        <ChatInput
          inputText={inputText}
          setInputText={setInputText}
          onSendMessage={handleSendMessage}
          onClearChat={handleClearChat}
          status={status}
          canClear={messages.length > 1}
        />

      </div>

    </div>
  );
};