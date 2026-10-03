import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActivePage, FAQItem } from '../types/chat';
import { UNIVERSITY_FAQS } from '../data/mockKnowledge';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  FileText,
  GraduationCap,
  DollarSign,
  Award,
  Users2
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: ActivePage) => void;
  onAskQuestion: (question: string) => void;
}

type FAQCategory = 'All' | 'Admissions' | 'Academics' | 'Fees' | 'Scholarships' | 'Student Services';

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onAskQuestion }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-adm-1');

  const categories: { label: FAQCategory; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'All', icon: Sparkles },
    { label: 'Admissions', icon: FileText },
    { label: 'Academics', icon: GraduationCap },
    { label: 'Fees', icon: DollarSign },
    { label: 'Scholarships', icon: Award },
    { label: 'Student Services', icon: Users2 },
  ];

  const filteredFaqs = UNIVERSITY_FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleAskAssistant = (question: string) => {
    onAskQuestion(question);
    onNavigate('chat');
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Quick, official answers to the most common questions regarding university admissions, courses, fee installments, scholarships, and campus facilities."
        icon={HelpCircle}
        tag="Help & Knowledge Center"
        onBackToChat={() => onNavigate('chat')}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 w-full">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e2ede4] shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by keyword (e.g., GPA, deadline, scholarship, transcript)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#cbd5e1] focus:outline-none focus:border-[#107c53] focus:ring-1 focus:ring-[#107c53]"
            />
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#16382b] text-white shadow-xs'
                      : 'bg-[#faf8f5] text-[#2b4c3e] hover:bg-[#eef3ee] border border-[#dce8dd]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : 'text-[#107c53]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#e2ede4] rounded-2xl shadow-xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#faf8f5]/60 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2 py-0.5 rounded border border-[#cbe4d5]">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#16382b] pt-1">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-full text-[#107c53] shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#107c53]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#64748b]" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#f0f5f1] space-y-4">
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {faq.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-1">
                        {faq.tags && faq.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] bg-[#faf8f5] text-[#64748b] border border-[#e8ece7] px-2 py-0.5 rounded font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleAskAssistant(faq.question)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eef3ee] hover:bg-[#107c53] text-[#16382b] hover:text-white text-xs font-semibold transition-colors cursor-pointer group"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#107c53] group-hover:text-[#d4af37]" />
                        <span>Ask AI Assistant for More Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#e2ede4] space-y-3">
              <HelpCircle className="w-8 h-8 text-[#94a3b8] mx-auto" />
              <p className="font-semibold text-sm text-[#16382b]">No matching FAQs found</p>
              <p className="text-xs text-[#64748b]">
                You can ask the AI Assistant directly to search the full handbook.
              </p>
              <button
                onClick={() => {
                  onAskQuestion(searchQuery);
                  onNavigate('chat');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#107c53] text-white text-xs font-semibold hover:bg-[#0d6644] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask Assistant: &quot;{searchQuery}&quot;</span>
              </button>
            </div>
          )}
        </div>

        {/* Personalized Guidance Banner */}
        <div className="bg-gradient-to-r from-[#16382b] to-[#1e4d3a] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#10291f] px-2.5 py-0.5 rounded border border-[#d4af37]/30">
              Need Personalized Guidance?
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Can’t find what you are looking for?
            </h3>
            <p className="text-xs sm:text-sm text-[#d1e0d7] max-w-lg">
              Our AI Assistant is available 24/7 to provide instant clarifications on course syllabi, fee waivers, campus housing, and degree requirements.
            </p>
          </div>

          <button
            onClick={() => onNavigate('chat')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#d4af37] text-[#16382b] font-bold text-xs sm:text-sm hover:bg-[#e2c15c] transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Assistant Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
