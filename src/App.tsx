import React, { useState } from 'react';
import { ActivePage } from './types/chat';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chat } from './pages/Chat';
import { UniversityInfo } from './pages/UniversityInfo';
import { FAQ } from './pages/FAQ';
import { About } from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('chat');
  const [pendingQuestion, setPendingQuestion] = useState<string | undefined>(undefined);

  const handleAskQuestionFromOtherPage = (question: string) => {
    setPendingQuestion(question);
    setActivePage('chat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalQuestionHandled = () => {
    setPendingQuestion(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#222625] selection:bg-[#107c53]/20 selection:text-[#16382b]">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Dynamic Page Content */}
      <main className="flex-1 flex flex-col">
        {activePage === 'chat' && (
          <Chat
            externalQuestion={pendingQuestion}
            onExternalQuestionHandled={handleExternalQuestionHandled}
          />
        )}

        {activePage === 'info' && (
          <UniversityInfo
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAskQuestion={handleAskQuestionFromOtherPage}
          />
        )}

        {activePage === 'faq' && (
          <FAQ
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAskQuestion={handleAskQuestionFromOtherPage}
          />
        )}

        {activePage === 'about' && (
          <About
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Student Assistant Footer */}
      <Footer
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
