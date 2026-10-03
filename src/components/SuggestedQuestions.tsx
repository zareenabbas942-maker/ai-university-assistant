import React, { useState } from 'react';
import { SuggestedQuestionItem, QuestionCategory } from '../types/chat';
import { SUGGESTED_QUESTIONS } from '../data/suggestedQuestions';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  DollarSign, 
  Users2, 
  MousePointerClick
} from 'lucide-react';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
  disabled?: boolean;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  onSelectQuestion,
  disabled = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'All'>('All');

  const categories: { label: QuestionCategory | 'All'; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'All', icon: Sparkles },
    { label: 'Admissions', icon: FileText },
    { label: 'Academics', icon: GraduationCap },
    { label: 'Fees & Scholarships', icon: DollarSign },
    { label: 'Student Services', icon: Users2 },
  ];

  const filteredQuestions: SuggestedQuestionItem[] =
    selectedCategory === 'All'
      ? SUGGESTED_QUESTIONS
      : SUGGESTED_QUESTIONS.filter((q) => q.category === selectedCategory);

  return (
    <div className="w-full bg-white/70 backdrop-blur-xs border border-[#e2ede4] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5">
      {/* Header and Category Filter Chips */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#eef3ee] flex items-center justify-center text-[#107c53]">
            <MousePointerClick className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16382b]">
              Suggested Questions
            </h4>
            <p className="text-[11px] text-[#64748b]">
              Click any inquiry below to instantly ask the AI assistant
            </p>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#16382b] text-white shadow-xs'
                    : 'bg-[#faf8f5] text-[#2b4c3e] hover:bg-[#eef3ee] border border-[#dce8dd]'
                }`}
              >
                <Icon className={`w-3 h-3 ${isSelected ? 'text-[#d4af37]' : 'text-[#107c53]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Suggested Questions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {filteredQuestions.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectQuestion(item.question)}
            disabled={disabled}
            className={`group text-left p-3.5 rounded-xl border border-[#dce8dd] bg-white hover:bg-[#eef3ee] hover:border-[#107c53]/40 transition-all shadow-2xs hover:shadow-xs flex items-start justify-between gap-3 cursor-pointer ${
              disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <div className="space-y-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2 py-0.5 rounded border border-[#d1e8db]">
                {item.category}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#16382b] group-hover:text-[#0d6644] leading-snug">
                {item.question}
              </p>
              {item.description && (
                <p className="text-[11px] text-[#64748b] leading-tight">
                  {item.description}
                </p>
              )}
            </div>

            <div className="w-6 h-6 rounded-md bg-[#faf8f5] group-hover:bg-[#107c53] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-[#a3c2b2] group-hover:text-white transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
