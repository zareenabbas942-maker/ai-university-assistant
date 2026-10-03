import React from 'react';
import { Sparkles, Bot } from 'lucide-react';

interface TypingIndicatorProps {
  label?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  label = 'AI Assistant is thinking & retrieving documents...',
}) => {
  return (
    <div className="flex items-start gap-3 my-3">
      {/* AI Assistant Avatar with pulsing ring */}
      <div className="relative w-9 h-9 rounded-xl bg-[#16382b] border border-[#d4af37]/60 flex items-center justify-center shrink-0 shadow-xs">
        <Bot className="w-5 h-5 text-[#d4af37]" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
      </div>

      {/* Typing Bubble */}
      <div className="bg-[#eef3ee] border border-[#dce8dd] rounded-2xl rounded-tl-sm px-4 py-3 max-w-md shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#107c53] animate-spin" />
          <span className="text-xs font-semibold text-[#16382b]">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-1.5 pl-1 py-1">
          <span className="w-2 h-2 rounded-full bg-[#107c53] animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-[#107c53] animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-[#107c53] animate-bounce" />
          <span className="text-[11px] text-[#4b5563] ml-2 font-medium">Generating response...</span>
        </div>
      </div>
    </div>
  );
};
