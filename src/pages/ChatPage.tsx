import React from 'react';
import { ChatWindow } from '../components/ChatWindow';

interface ChatPageProps {
  externalQuestion?: string;
  onExternalQuestionHandled?: () => void;
}

export const ChatPage: React.FC<ChatPageProps> = ({
  externalQuestion,
  onExternalQuestionHandled,
}) => {
  return (
    <div className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 flex flex-col w-full">
      <ChatWindow
        externalQuestion={externalQuestion}
        onExternalQuestionHandled={onExternalQuestionHandled}
      />
    </div>
  );
};
