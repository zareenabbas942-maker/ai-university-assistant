import React, { useRef, useEffect } from 'react';
import { Send, Trash2, Sparkles, CornerDownLeft, Loader2 } from 'lucide-react';
import { ChatStatus } from '../types/chat';

interface ChatInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
  status: ChatStatus;
  canClear: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  inputText,
  setInputText,
  onSendMessage,
  onClearChat,
  status,
  canClear,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isBusy = status === 'sending' || status === 'generating';

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isBusy) return;
    onSendMessage(inputText.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 130)}px`;
    }
  }, [inputText]);

  return (
    <div className="w-full bg-white border-t border-[#e2ede4] p-3 sm:p-4 rounded-b-2xl shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="relative flex items-end gap-2 bg-[#faf8f5] border border-[#d2ded4] focus-within:border-[#107c53] focus-within:ring-2 focus-within:ring-[#107c53]/20 rounded-xl p-2.5 transition-all">
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isBusy}
            placeholder="Type your question about admissions, programs, fees, or student services..."
            className="w-full resize-none bg-transparent text-sm text-[#222625] placeholder-[#64748b] focus:outline-none px-2 py-1 max-h-32 leading-relaxed"
          />

          <div className="flex items-center gap-1.5 shrink-0 mb-0.5">
            {/* Clear Chat Button */}
            {canClear && (
              <button
                type="button"
                onClick={onClearChat}
                disabled={isBusy}
                title="Clear conversation history"
                className="p-2 text-[#64748b] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer disabled:opacity-40"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputText.trim() || isBusy}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all cursor-pointer shadow-xs ${
                inputText.trim() && !isBusy
                  ? 'bg-[#107c53] hover:bg-[#0d6644] active:scale-95'
                  : 'bg-[#94a3b8] cursor-not-allowed opacity-60'
              }`}
            >
              {isBusy ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Input Footer: Shortcuts & status indicator */}
        <div className="flex items-center justify-between px-1 text-[11px] text-[#64748b]">
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline">Press</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#eef3ee] text-[#16382b] font-mono text-[10px] border border-[#d2ded4]">
              Enter
            </kbd>
            <span className="hidden sm:inline">to send,</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#eef3ee] text-[#16382b] font-mono text-[10px] border border-[#d2ded4]">
              Shift+Enter
            </kbd>
            <span className="hidden sm:inline">for newline</span>
          </div>

          <div className="flex items-center gap-1 text-[#107c53] font-medium">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>FastAPI POST /api/chat Ready</span>
          </div>
        </div>
      </form>
    </div>
  );
};
