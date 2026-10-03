import { SuggestedQuestionItem } from '../types/chat';

export const SUGGESTED_QUESTIONS: SuggestedQuestionItem[] = [
  // Admissions
  {
    id: 'adm-1',
    question: 'How can I apply for admission?',
    category: 'Admissions',
    description: 'Online application procedure and document submission',
  },
  {
    id: 'adm-2',
    question: 'What are the admission requirements?',
    category: 'Admissions',
    description: 'Minimum GPA, prerequisite subjects, and deadlines',
  },

  // Academics
  {
    id: 'acad-1',
    question: 'What programs are offered?',
    category: 'Academics',
    description: 'Degree listings across Undergraduate, Master, and PhD levels',
  },
  {
    id: 'acad-2',
    question: 'What departments are available?',
    category: 'Academics',
    description: 'Academic departments, faculty leaders, and research centers',
  },
  {
    id: 'acad-3',
    question: 'Where can I find the academic calendar?',
    category: 'Academics',
    description: 'Semester key dates, exam weeks, and holidays',
  },

  // Fees & Scholarships
  {
    id: 'fee-1',
    question: 'What are the tuition fees?',
    category: 'Fees & Scholarships',
    description: 'Sample program fees, per-credit cost, and payment plans',
  },
  {
    id: 'fee-2',
    question: 'What scholarships are available?',
    category: 'Fees & Scholarships',
    description: 'Merit awards, need-based assistance, and STEM grants',
  },

  // Student Services
  {
    id: 'serv-1',
    question: 'How can I contact student affairs?',
    category: 'Student Services',
    description: 'Office hours, advising desks, and inquiry channels',
  },
  {
    id: 'serv-2',
    question: 'What facilities are available for students?',
    category: 'Student Services',
    description: 'Libraries, computer labs, sports complex, and dining',
  },
];
