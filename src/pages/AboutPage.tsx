import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActivePage } from '../types/chat';
import { 
  Info, 
  Cpu, 
  Database, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Brain,
  MessageSquare,
  Search,
  BookOpen
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col w-full">
      <PageHeader
        title="About AI University Assistant"
        subtitle="Learn how this intelligent university student assistant operates and how it will leverage Artificial Intelligence, NLP, and RAG to support students."
        icon={Info}
        tag="Student Project Guide"
        onBackToChat={() => onNavigate('chat')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* 1. What is AI University Assistant? */}
        <section className="bg-white border border-[#e2ede4] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2.5 py-1 rounded-md border border-[#cbe4d5]">
              Core Purpose
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#16382b]">
              What is the AI University Assistant?
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              The <strong>AI University Assistant</strong> is a modern, student-centered digital advisor designed to simplify how students, prospective applicants, and faculty discover campus information. Instead of searching through long PDF handbooks, dense academic catalogs, and fragmented department portals, users can ask questions in natural everyday language and receive immediate, clear answers.
            </p>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Whether you need to know how to apply for admission, what the minimum GPA requirements are, what scholarships are available, or where to find the academic calendar, the assistant is built to provide trustworthy guidance anytime, anywhere.
            </p>
          </div>
        </section>

        {/* 2. Core Pillars of Future Intelligence */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2.5 py-1 rounded-md border border-[#cbe4d5]">
              Future System Capabilities
            </span>
            <h2 className="text-2xl font-bold text-[#16382b]">
              Technologies Powering the Future System
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563]">
              The future production version will be powered by a dedicated Python / FastAPI backend using four key pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Technology 1: AI */}
            <div className="bg-white border border-[#e2ede4] rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#eef3ee] text-[#107c53] flex items-center justify-center font-bold">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#16382b]">
                  Artificial Intelligence (AI)
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Reasoning models understand the intent behind diverse student questions and formulate polite, helpful, and synthesized answers.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0f5f1] flex items-center gap-1.5 text-[11px] text-[#107c53] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Intelligent Reasoning</span>
              </div>
            </div>

            {/* Technology 2: NLP */}
            <div className="bg-white border border-[#e2ede4] rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#eef3ee] text-[#107c53] flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#16382b]">
                  Natural Language Processing (NLP)
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Enables students to ask questions freely in everyday human language without needing to memorize specific keywords or rigid portal menus.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0f5f1] flex items-center gap-1.5 text-[11px] text-[#107c53] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Natural Human Dialogue</span>
              </div>
            </div>

            {/* Technology 3: RAG */}
            <div className="bg-white border border-[#e2ede4] rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#eef3ee] text-[#107c53] flex items-center justify-center font-bold">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#16382b]">
                  Retrieval-Augmented Generation (RAG)
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Before answering, the assistant searches official university handbooks to retrieve relevant excerpts, preventing hallucinations and ensuring factual accuracy.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0f5f1] flex items-center gap-1.5 text-[11px] text-[#107c53] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Document Grounding</span>
              </div>
            </div>

            {/* Technology 4: University Knowledge Base */}
            <div className="bg-white border border-[#e2ede4] rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#eef3ee] text-[#107c53] flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#16382b]">
                  University Knowledge Base
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  The verified digital source of truth containing official policies on admissions, degrees, fee installments, scholarships, and campus facilities.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0f5f1] flex items-center gap-1.5 text-[11px] text-[#107c53] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Source Documents</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Future Backend Integration Roadmap */}
        <section className="bg-white border border-[#e2ede4] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#107c53]" />
            <h2 className="text-xl font-bold text-[#16382b]">
              Future Backend Integration Plan (VS Code + Python + FastAPI)
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-[#4b5563] leading-relaxed space-y-2">
            <p>
              This frontend has been engineered following clean separation of concerns. The API communication is isolated in <code className="bg-[#eef3ee] text-[#107c53] font-mono px-1.5 py-0.5 rounded">src/services/api.ts</code>.
            </p>
            <p>
              When developing the backend in VS Code, simply implement a FastAPI route:
            </p>
          </div>

          <div className="bg-[#16382b] text-[#d1e0d7] p-4 rounded-xl text-xs font-mono overflow-x-auto space-y-2">
            <div className="text-[#d4af37] font-semibold">// Expected FastAPI Route</div>
            <div>POST /api/chat</div>
            <div>Payload: {'{ "question": "What are the admission requirements?" }'}</div>
            <div>Returns: {'{ "answer": "...", "sources": [{ "title": "..." }] }'}</div>
          </div>
        </section>

        {/* 4. Student-Friendly Notice */}
        <section className="bg-[#fcf8f0] border border-[#ecd9b5] rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-[#9a6712]">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-sm sm:text-base">
              Student Project Demo Notice
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6f5322] leading-relaxed">
            This web application is currently functioning in interactive demo mode using realistic sample data. No real university or external AI credentials are connected at this phase. The current frontend is ready to seamlessly bind to your Python / FastAPI RAG pipeline.
          </p>
        </section>

        {/* CTA to return to chat */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('chat')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#107c53] hover:bg-[#0d6644] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer hover:shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <span>Launch Chatbot Assistant</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
