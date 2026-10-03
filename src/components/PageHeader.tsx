import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ActivePage } from '../types';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
  onBackToChat?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  tag,
  onBackToChat,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#eef3ee] to-[#faf8f5] border-b border-[#e2ede4] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#16382b] text-[#d4af37] flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                {tag && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#107c53] bg-[#d8e8dc] px-2 py-0.5 rounded-full inline-block mb-0.5">
                    {tag}
                  </span>
                )}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#16382b] tracking-tight">
                  {title}
                </h1>
              </div>
            </div>
            <p className="text-sm text-[#4b5563] max-w-2xl leading-relaxed pl-0 sm:pl-12">
              {subtitle}
            </p>
          </div>

          {onBackToChat && (
            <div className="self-start sm:self-center shrink-0">
              <button
                onClick={onBackToChat}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#cbd5e1] text-xs font-semibold text-[#16382b] hover:bg-[#eef3ee] hover:border-[#107c53] shadow-sm transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#107c53]" />
                <span>Return to Assistant Chat</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
