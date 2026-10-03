import React from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { ActivePage } from '../types/chat';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#122e23] text-[#d1e0d7] border-t border-[#1d4635] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Brand & Description */}
          <div className="space-y-2.5 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#16382b] border border-[#d4af37]/60 flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#d4af37]" />
              </div>
              <span className="font-bold text-white text-base">AI University Assistant</span>
              <span className="text-[10px] font-semibold text-[#107c53] bg-[#1a4233] px-2 py-0.5 rounded border border-[#235844]">
                Student Assistant
              </span>
            </div>
            <p className="text-xs text-[#a3c2b2] leading-relaxed max-w-xl">
              An intelligent university student assistant designed to provide fast, reliable guidance on admissions, academic programs, tuition fees, scholarships, and campus facilities.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#a3c2b2]">
              <button
                onClick={() => onNavigate('chat')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Chat Assistant
              </button>
              <button
                onClick={() => onNavigate('info')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                University Information
              </button>
              <button
                onClick={() => onNavigate('faq')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                About Assistant
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-[#1b3d30] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7da390]">
          <div>
            © {new Date().getFullYear()} AI University Assistant. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Student Assistant Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
