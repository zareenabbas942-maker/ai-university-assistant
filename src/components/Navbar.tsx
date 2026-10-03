import React, { useState } from 'react';
import { ActivePage } from '../types/chat';
import { 
  Bot, 
  MessageSquare, 
  BookOpen, 
  HelpCircle, 
  Info, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ActivePage; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'info', label: 'University Information', icon: BookOpen },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#16382b] text-white shadow-md border-b border-[#214f3e]">
      {/* Top micro-bar for student status */}
      <div className="bg-[#10291f] text-xs px-4 py-1.5 text-center text-[#d1e0d7] flex items-center justify-between border-b border-[#1b3d30]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-medium text-[#e4efe8]">
              Campus Student Information Assistant • Fall 2024 / Spring 2025
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[#a3c2b2]">
            <span className="text-[#d4af37] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              Student Support Portal
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Application Name */}
          <button 
            onClick={() => handleNavClick('chat')} 
            className="flex items-center gap-3 text-left focus:outline-none group text-white cursor-pointer"
          >
            {/* AI Assistant Avatar / Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e4d3a] to-[#0f271d] border border-[#d4af37]/60 flex items-center justify-center shadow-inner group-hover:border-[#d4af37] transition-colors">
              <Bot className="w-6 h-6 text-[#d4af37]" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#e4efe8] transition-colors">
                  AI University Assistant
                </span>
              </div>
              <span className="text-xs text-[#a3c2b2] font-medium tracking-wide">
                Campus Student Support
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#107c53] text-white shadow-xs ring-1 ring-[#2da779]/40'
                      : 'text-[#d1e0d7] hover:bg-[#1f4a39] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-[#8fb8a2]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#d1e0d7] hover:bg-[#1f4a39] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#122e23] border-t border-[#1e4d3a] px-4 pt-2 pb-4 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#107c53] text-white'
                    : 'text-[#d1e0d7] hover:bg-[#1f4a39]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-[#8fb8a2]'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="text-[11px] text-[#d4af37] font-bold bg-[#10291f] px-2 py-0.5 rounded">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
