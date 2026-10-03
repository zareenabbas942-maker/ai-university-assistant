export interface ChatSource {
  title: string;
  section?: string;
  page?: string;
  linkText?: string;
}

export type MessageSender = 'user' | 'assistant';

export interface ChatMessageItem {
  id: string;
  sender: MessageSender;
  text: string;
  timestamp: string;
  sources?: ChatSource[];
  isError?: boolean;
}

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
  sources?: ChatSource[];
}

export type QuestionCategory =
  | 'Admissions'
  | 'Academics'
  | 'Fees & Scholarships'
  | 'Student Services'
  | 'General';

export interface SuggestedQuestionItem {
  id: string;
  question: string;
  category: QuestionCategory;
  description?: string;
}

export type ChatStatus = 'idle' | 'typing' | 'sending' | 'generating' | 'error' | 'completed';

export interface AcademicProgram {
  id: string;
  title: string;
  code: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  faculty: string;
  department: string;
  duration: string;
  tuitionPerYear: string;
  description: string;
  highlights: string[];
}

export interface UniversityDepartment {
  id: string;
  name: string;
  faculty: string;
  head: string;
  officeLocation: string;
  contactEmail: string;
  description: string;
  programsOffered: string[];
}

export interface StudentService {
  id: string;
  name: string;
  office: string;
  hours: string;
  description: string;
  services: string[];
}

export interface CampusFacility {
  id: string;
  name: string;
  location: string;
  hours: string;
  description: string;
  amenities: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Fees' | 'Scholarships' | 'Student Services';
  tags?: string[];
}

export type ActivePage = 'chat' | 'info' | 'faq' | 'about';
