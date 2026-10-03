import React, { useState } from 'react';
import { ChatMessageItem } from '../types/chat';

import {
  Bot,
  User,
  Copy,
  Check,
  BookOpen,
  Sparkles,
  AlertCircle,
  Clock,
} from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageItem;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const isUser = message.sender === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={index}
            className="font-bold text-[#16382b]"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 rounded bg-[#e8efe9] text-[#107c53] text-xs font-mono font-medium border border-[#d5e2d7]"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      return part;
    });
  };

  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');

    return (
      <div className="space-y-2 text-sm text-[#222625] leading-relaxed">
        {lines.map((line, idx) => {
          const trimmed = line.trim();

          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          if (trimmed.startsWith('### ')) {
            return (
              <h4
                key={idx}
                className="font-bold text-sm sm:text-base text-[#16382b] pt-1"
              >
                {trimmed.substring(4)}
              </h4>
            );
          }

          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            const content = trimmed.substring(2);

            return (
              <div
                key={idx}
                className="flex items-start gap-2 pl-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#107c53] mt-2 shrink-0" />

                <span className="flex-1">
                  {renderInlineFormatting(content)}
                </span>
              </div>
            );
          }

          const matchNum = trimmed.match(/^(\d+)\.\s+(.*)/);

          if (matchNum) {
            return (
              <div
                key={idx}
                className="flex items-start gap-2 pl-1.5"
              >
                <span className="font-bold text-[#16382b] text-[11px] mt-0.5 shrink-0 bg-[#e4ede5] px-1.5 py-0.5 rounded font-mono">
                  {matchNum[1]}
                </span>

                <span className="flex-1">
                  {renderInlineFormatting(matchNum[2])}
                </span>
              </div>
            );
          }

          return (
            <p key={idx}>
              {renderInlineFormatting(line)}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`flex items-start gap-3 my-3.5 w-full ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar */}

      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
          isUser
            ? 'bg-[#107c53] text-white'
            : 'bg-[#16382b] text-[#d4af37] border border-[#d4af37]/60'
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-[#d4af37]" />
        )}
      </div>

      {/* Message Bubble */}

      <div
        className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 shadow-xs ${
          isUser
            ? 'bg-[#e2ede5] border border-[#cfdfd2] rounded-tr-sm text-[#16382b]'
            : 'bg-white border border-[#e5ece6] rounded-tl-sm'
        } ${
          message.isError
            ? 'border-red-300 bg-red-50/80'
            : ''
        }`}
      >
        {/* Assistant Header */}

        {!isUser && (
          <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-[#f0f4f1]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-[#16382b]">
                AI University Assistant
              </span>

              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#107c53] bg-[#eef6f1] px-2 py-0.5 rounded border border-[#d1e8db]">
                <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                Demo Knowledge Base
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="text-[#6b7280] hover:text-[#16382b] transition-colors p-1 rounded hover:bg-[#f0f4f1] cursor-pointer"
              title="Copy response to clipboard"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-[10px] text-[#107c53] font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        )}

        {/* User Header */}

        {isUser && (
          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-[#d4e4d7]">
            <span className="text-xs font-bold text-[#16382b]">
              You
            </span>

            <div className="flex items-center gap-1 text-[10px] text-[#4b5563]">
              <Clock className="w-2.5 h-2.5" />
              <span>{message.timestamp}</span>
            </div>
          </div>
        )}

        {/* Error */}

        {message.isError && (
          <div className="flex items-center gap-2 text-xs font-semibold text-red-700 mb-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>Assistant Notification</span>
          </div>
        )}

        {/* Message Text */}

        {isUser ? (
          <p className="text-sm text-[#1e293b] leading-relaxed whitespace-pre-wrap font-medium">
            {message.text}
          </p>
        ) : (
          renderFormattedText(message.text)
        )}

        {/* Sources */}

        {!isUser &&
          Array.isArray(message.sources) &&
          message.sources.length > 0 && (
            <div className="mt-5 pt-4 border-t-2 border-[#d8e6db]">
              {/* Sources Heading */}

              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-[#107c53]" />

                <span className="text-xs font-bold text-[#16382b] uppercase tracking-wider">
                  Sources
                </span>
              </div>

              {/* Source Cards */}

              <div className="space-y-2">
                {message.sources.map((source, index) => (
                  <div
                    key={`${source.title}-${index}`}
                    className="w-full rounded-lg bg-[#f5f8f5] border-2 border-[#d8e6db] p-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-md bg-[#e4ede5] flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-[#107c53]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#16382b]">
                          {source.title}
                        </p>

                        {source.section && (
                          <p className="text-xs text-[#64748b] mt-1">
                            Section: {source.section}
                          </p>
                        )}

                        {source.page && (
                          <p className="text-xs text-[#64748b]">
                            Page: {source.page}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Assistant Timestamp */}

        {!isUser && (
          <div className="mt-3 text-right flex items-center justify-end gap-1 text-[10px] text-[#9ca3af]">
            <Clock className="w-2.5 h-2.5" />
            <span>{message.timestamp}</span>
          </div>
        )}
      </div>
    </div>
  );
};