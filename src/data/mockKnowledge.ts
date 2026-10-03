import {
  AcademicProgram,
  UniversityDepartment,
  StudentService,
  CampusFacility,
  FAQItem,
} from '../types/chat';

export const UNIVERSITY_OVERVIEW = {
  name: 'Metropolitan University of Technology & Sciences (Sample)',
  motto: 'Excellence in Discovery, Innovation & Leadership',
  established: '1974 (Sample Campus)',
  chancellor: 'Dr. Arthur Sterling, Ph.D.',
  accreditation: 'Accredited by the Higher Education Quality Assurance Council',
  studentsEnrolled: '14,500+ Students (Undergraduate, Graduate & Doctoral)',
  facultyCount: '650+ Full-Time Faculty & Researchers',
  summary: 'A leading comprehensive institution dedicated to student-centered education, pioneering STEM and business research, and fostering global societal impact.',
};

export const UNIVERSITY_DEPARTMENTS: UniversityDepartment[] = [
  {
    id: 'dept-cs',
    name: 'Department of Computer Science & Software Engineering',
    faculty: 'Faculty of Computing & Information Technology',
    head: 'Prof. Dr. Elizabeth Sterling, Ph.D.',
    officeLocation: 'Turing Technology Complex, Hall A',
    contactEmail: 'cs.department@university-demo.edu',
    description: 'Spearheading cutting-edge instruction in artificial intelligence, software engineering, cyber defense, and cloud computing.',
    programsOffered: [
      'B.Sc. in Computer Science',
      'B.Sc. in Software Engineering',
      'M.Sc. in Artificial Intelligence & Data Science',
      'Ph.D. in Computer Science',
    ],
  },
  {
    id: 'dept-biz',
    name: 'Department of Management & Marketing',
    faculty: 'School of Business & Economics',
    head: 'Prof. Marcus Vance, D.B.A.',
    officeLocation: 'Hamilton Business Tower, 4th Floor',
    contactEmail: 'business.office@university-demo.edu',
    description: 'Providing experiential business education, venture incubation, data-driven marketing, and corporate financial strategy.',
    programsOffered: [
      'Bachelor of Business Administration (BBA)',
      'B.Sc. in Business Analytics',
      'Master of Business Administration (MBA)',
    ],
  },
  {
    id: 'dept-ee',
    name: 'Department of Electrical & Computer Engineering',
    faculty: 'Faculty of Engineering',
    head: 'Dr. Raymond Chen, Ph.D., IEEE Fellow',
    officeLocation: 'Maxwell Engineering Center, Wing C',
    contactEmail: 'engineering@university-demo.edu',
    description: 'Equipped with 14 modern engineering laboratories for telecommunications, robotics, embedded chips, and smart grid systems.',
    programsOffered: [
      'B.Sc. in Electrical Engineering',
      'B.Sc. in Computer Systems Engineering',
      'M.Sc. in Robotics & Autonomous Systems',
    ],
  },
  {
    id: 'dept-humanities',
    name: 'Department of Humanities & Social Sciences',
    faculty: 'Faculty of Arts & Sciences',
    head: 'Dr. Clara Beauchamp, Ph.D.',
    officeLocation: 'Athenaeum Hall, 2nd Floor',
    contactEmail: 'humanities@university-demo.edu',
    description: 'Fosters critical thinking, media communications, technology governance, and public policy formulation.',
    programsOffered: [
      'B.A. in International Relations & Public Policy',
      'B.A. in Media & Digital Communications',
    ],
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-cs',
    title: 'B.Sc. in Computer Science',
    code: 'CS-UG-101',
    level: 'Undergraduate',
    faculty: 'Faculty of Computing & Information Technology',
    department: 'Department of Computer Science',
    duration: '4 Years (8 Semesters)',
    tuitionPerYear: '$7,800 / academic year (Sample)',
    description: 'A comprehensive curriculum covering software engineering, algorithms, AI & machine learning, database systems, cybersecurity, and cloud distributed computing.',
    highlights: [
      'Accredited curriculum aligned with international standards',
      'Senior capstone design project sponsored by tech industry partners',
      'Specializations: AI/ML, Cloud Architecture, Cyber Defense',
    ],
  },
  {
    id: 'prog-se',
    title: 'B.Sc. in Software Engineering',
    code: 'SE-UG-102',
    level: 'Undergraduate',
    faculty: 'Faculty of Computing & Information Technology',
    department: 'Department of Computer Science',
    duration: '4 Years (8 Semesters)',
    tuitionPerYear: '$7,800 / academic year (Sample)',
    description: 'Focused on enterprise software engineering, CI/CD automated testing, cloud architectures, and agile product development.',
    highlights: [
      'Mandatory 6-month industry internship in Year 3',
      'Dedicated software architecture and testing laboratories',
      'High graduate employment rate within 6 months of graduation',
    ],
  },
  {
    id: 'prog-bba',
    title: 'Bachelor of Business Administration (BBA)',
    code: 'BBA-UG-201',
    level: 'Undergraduate',
    faculty: 'School of Business & Economics',
    department: 'Department of Management & Marketing',
    duration: '4 Years (8 Semesters)',
    tuitionPerYear: '$7,200 / academic year (Sample)',
    description: 'Prepares future global leaders in corporate finance, brand strategy, managerial economics, and data-driven marketing.',
    highlights: [
      'Student venture incubation fund for startup ideas',
      'International exchange opportunities with partner institutions',
      'Case study methodology based on Harvard and global business cases',
    ],
  },
  {
    id: 'prog-ms-ai',
    title: 'M.Sc. in Artificial Intelligence & Data Science',
    code: 'AI-PG-501',
    level: 'Postgraduate',
    faculty: 'Faculty of Computing & Information Technology',
    department: 'Department of Computer Science',
    duration: '2 Years (4 Semesters)',
    tuitionPerYear: '$9,400 / academic year (Sample)',
    description: 'Postgraduate research and applied coursework in deep learning, large language models, computer vision, and responsible AI.',
    highlights: [
      'Access to university high-performance GPU computing clusters',
      'Graduate research assistantships with tuition assistance',
      'Thesis collaboration with leading tech organizations',
    ],
  },
  {
    id: 'prog-mba',
    title: 'Master of Business Administration (MBA)',
    code: 'MBA-PG-601',
    level: 'Postgraduate',
    faculty: 'School of Business & Economics',
    department: 'Department of Management & Marketing',
    duration: '1.5 - 2 Years',
    tuitionPerYear: '$10,200 / academic year (Sample)',
    description: 'Designed for emerging executives to develop strategic decision making, organizational transformation, and global negotiations.',
    highlights: [
      'Flexible evening and weekend tracks for working professionals',
      'Executive coaching and active alumni mentoring network',
      'Applied management consulting projects with local enterprises',
    ],
  },
  {
    id: 'prog-phd-cs',
    title: 'Ph.D. in Computer Science',
    code: 'PHD-CS-901',
    level: 'Doctoral',
    faculty: 'Faculty of Computing & Information Technology',
    department: 'Department of Computer Science',
    duration: '3 - 5 Years',
    tuitionPerYear: 'Fully Funded (Fellowship + Tuition Waiver)',
    description: 'Doctoral research fellowship targeting contributions in machine learning, distributed systems, and quantum algorithmic computing.',
    highlights: [
      'Competitive monthly living stipend ($2,400/month sample)',
      'Annual conference travel grant for leading global research conferences',
      'Interdisciplinary research opportunities with biomedical science teams',
    ],
  },
];

export const STUDENT_SERVICES: StudentService[] = [
  {
    id: 'serv-academic-advising',
    name: 'Academic Advising & Registrar Desk',
    office: 'Administration Complex, Wing B, Room 104',
    hours: 'Monday – Friday: 8:30 AM – 5:00 PM',
    description: 'Assisting students with degree planning, course registration overrides, credit transfers, and official transcript requests.',
    services: [
      'Semester course registration support',
      'Degree progress audits and graduation clearance',
      'Official academic transcripts and enrollment letters',
      'Change of major and minor declaration requests',
    ],
  },
  {
    id: 'serv-financial-aid',
    name: 'Financial Aid & Scholarship Office',
    office: 'Student Life Pavilion, Suite 102',
    hours: 'Monday – Friday: 9:00 AM – 4:30 PM',
    description: 'Guiding students through merit scholarship criteria, need-based fee waivers, and interest-free installment plans.',
    services: [
      'Institutional merit scholarship evaluation',
      'Need-based emergency tuition assistance',
      'Installment payment plan authorization',
      'Work-study and on-campus employment placement',
    ],
  },
  {
    id: 'serv-career-hub',
    name: 'Career Advancement & Internship Hub',
    office: 'Campus Center, 2nd Floor',
    hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
    description: 'Connecting students with internships, resume optimization, portfolio reviews, and corporate recruitment drives.',
    services: [
      '1-on-1 resume & LinkedIn profile reviews',
      'Technical and behavioral mock interview sessions',
      'Annual campus career fairs with 100+ hiring organizations',
      'Co-op and semester internship placement coordination',
    ],
  },
  {
    id: 'serv-wellness',
    name: 'Student Health & Psychological Counseling',
    office: 'Student Life Pavilion, Suite 110',
    hours: 'Monday – Friday: 8:00 AM – 5:00 PM (Emergency nurse on-call 24/7)',
    description: 'Dedicated to supporting students’ physical and mental wellbeing through confidential medical and counseling care.',
    services: [
      'Primary outpatient medical checkups and prescriptions',
      'Confidential individual and group psychological counseling',
      'Mindfulness and stress-management workshops during exam periods',
      'Accessibility accommodations for students with disabilities',
    ],
  },
  {
    id: 'serv-international',
    name: 'International Student & Scholar Services',
    office: 'International House, Ground Floor',
    hours: 'Monday – Friday: 9:00 AM – 4:30 PM',
    description: 'Providing immigration advising, visa document renewal, cultural transition support, and international student orientation.',
    services: [
      'Student visa compliance (F-1/J-1 equivalent advice)',
      'Cross-cultural transition and mentorship programs',
      'Airport arrival reception and local orientation tours',
      'Tax workshop guidance and work authorization letters',
    ],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'fac-library',
    name: 'Central University Library & Learning Commons',
    location: 'Campus Quadrangle, Building 3',
    hours: 'Mon – Fri: 7:30 AM – 11:00 PM | Weekends: 9:00 AM – 8:00 PM (24/7 during Finals)',
    description: 'A contemporary learning sanctuary offering collaborative study suites, silent research zones, and extensive electronic subscriptions.',
    amenities: [
      'Over 250,000 print volumes and digital access to IEEE, ACM, JSTOR, Elsevier',
      '42 bookable group collaboration suites with 4K monitors',
      '3D printing and digital fabrication laboratory on the ground floor',
      'Quiet silent study floors overlooking the campus botanical gardens',
    ],
  },
  {
    id: 'fac-ai-labs',
    name: 'Advanced Computing & AI Research Clusters',
    location: 'Turing Technology Complex, 3rd Floor',
    hours: 'Available 24/7 via student RFID security card',
    description: 'High-performance computing laboratory designed for machine learning research, simulation modeling, and senior capstone projects.',
    amenities: [
      'High-throughput GPU nodes for neural network and LLM training',
      'Dual-monitor Linux and Windows development workstations',
      'Agile team sprint pods with interactive digital whiteboards',
      'Dedicated high-speed gigabit fiber connectivity',
    ],
  },
  {
    id: 'fac-sports',
    name: 'University Sports & Recreation Center',
    location: 'West Campus Athletic Zone',
    hours: 'Daily: 6:00 AM – 10:00 PM',
    description: 'Promoting athletic fitness and recreation with comprehensive indoor and outdoor athletic spaces.',
    amenities: [
      'Olympic-standard 50m indoor heated swimming pool',
      'State-of-the-art strength training and cardio fitness center',
      'Indoor basketball, badminton, and volleyball courts',
      '400-meter outdoor synthetic running track and soccer turf',
    ],
  },
  {
    id: 'fac-commons',
    name: 'Campus Dining Commons & Student Union',
    location: 'Student Union Plaza',
    hours: 'Daily: 7:00 AM – 10:00 PM',
    description: 'The social hub of campus offering diverse culinary choices, artisan coffee lounges, and meeting zones for student societies.',
    amenities: [
      'Multiple dining stations featuring halal, vegan, and gluten-free cuisines',
      'Artisan coffee bar and grab-and-go convenience market',
      'Student club meeting rooms and performance amphitheater',
      'Outdoor shaded patio seating with charging stations',
    ],
  },
];

export const UNIVERSITY_CONTACT_INFO = {
  generalInquiries: 'info@university-demo.edu',
  admissionsOffice: 'admissions@university-demo.edu',
  registrarOffice: 'registrar@university-demo.edu',
  financialAid: 'finaid@university-demo.edu',
  studentAffairs: 'studentaffairs@university-demo.edu',
  phone: '+1 (800) 555-0199',
  address: '100 University Avenue, Academic Quadrangle, Innovation City, IC 54321',
  visitingHours: 'Monday to Friday: 8:30 AM – 5:00 PM',
};

export const UNIVERSITY_FAQS: FAQItem[] = [
  // Admissions
  {
    id: 'faq-adm-1',
    category: 'Admissions',
    question: 'How do I apply for undergraduate admission?',
    answer: 'Undergraduate applications are submitted online through the University Admissions Portal (apply.university-demo.edu). You must create an applicant account, upload certified official high school transcripts, two letters of recommendation, a Statement of Purpose (500 words), and pay the standard $50 processing fee (waivers available upon request for eligible candidates).',
    tags: ['apply', 'portal', 'transcripts', 'deadline'],
  },
  {
    id: 'faq-adm-2',
    category: 'Admissions',
    question: 'What are the minimum admission requirements for Computing & Engineering?',
    answer: 'Applicants to the Faculty of Computing and Engineering require a minimum secondary school GPA of 3.2 on a 4.0 scale (or 80% equivalent). Strong foundational preparation in Mathematics (Pre-Calculus/Calculus) and Physics is mandatory. Standardized testing (SAT/ACT) is optional, but competitive scores can strengthen merit scholarship candidacy.',
    tags: ['requirements', 'gpa', 'engineering', 'cs'],
  },
  {
    id: 'faq-adm-3',
    category: 'Admissions',
    question: 'What are the application deadlines for the upcoming semester?',
    answer: 'For the Fall semester: the Priority Application Deadline is July 15, and the Final Deadline is August 10. For the Spring semester: the application deadline is December 1. International students are encouraged to apply by the priority deadline to allow adequate time for visa processing.',
    tags: ['deadline', 'fall', 'spring', 'dates'],
  },

  // Academics
  {
    id: 'faq-acad-1',
    category: 'Academics',
    question: 'What degree programs does the university offer?',
    answer: 'The university offers accredited Undergraduate, Master’s, and Doctoral programs across five academic faculties. Key majors include Computer Science, Software Engineering, Business Administration (BBA), Electrical Engineering, M.Sc. in Artificial Intelligence & Data Science, MBA, and Ph.D. in Computer Science.',
    tags: ['programs', 'degrees', 'majors', 'academics'],
  },
  {
    id: 'faq-acad-2',
    category: 'Academics',
    question: 'Where can I access the official academic calendar?',
    answer: 'The official academic calendar is published by the Office of the Registrar and can be viewed under the University Information page or requested directly from this assistant. Key dates include semester start dates, add/drop periods, midterm examinations, and graduation ceremonies.',
    tags: ['calendar', 'dates', 'holidays', 'exams'],
  },
  {
    id: 'faq-acad-3',
    category: 'Academics',
    question: 'What is the minimum GPA required to maintain good academic standing?',
    answer: 'All enrolled undergraduate students must maintain a cumulative Grade Point Average (CGPA) of at least 2.00 on a 4.00 scale. If a student’s CGPA drops below 2.00, they are placed on Academic Probation for one semester and receive specialized faculty tutoring and academic advising support.',
    tags: ['gpa', 'probation', 'grades', 'policy'],
  },

  // Fees
  {
    id: 'faq-fee-1',
    category: 'Fees',
    question: 'What are the annual tuition fees for undergraduate programs?',
    answer: 'Standard sample tuition is approximately $7,800 per academic year for Computing and Software Engineering ($3,900 per semester), $7,200 for Business Administration (BBA), and $8,200 for Engineering. Fees cover tuition, laboratory access, and campus digital library privileges.',
    tags: ['tuition', 'cost', 'undergraduate', 'expenses'],
  },
  {
    id: 'faq-fee-2',
    category: 'Fees',
    question: 'Is there a tuition installment payment plan available?',
    answer: 'Yes! The university offers an interest-free 3-installment payment plan per semester: 40% is due upon course enrollment, 30% after midterm examinations, and 30% prior to final examination week. Students can enroll in the payment plan via the student portal.',
    tags: ['installments', 'payment', 'bursar', 'plan'],
  },

  // Scholarships
  {
    id: 'faq-sch-1',
    category: 'Scholarships',
    question: 'What scholarships are available for incoming students?',
    answer: 'The university awards several competitive scholarships: the Chancellor’s Presidential Merit Scholarship (100% tuition waiver + $800 book allowance for GPA ≥ 3.85), the Dean’s Academic Excellence Grant (50% tuition reduction for GPA ≥ 3.60), and the STEM & Women in Technology Fellowship (75% tuition assistance + lab mentorship).',
    tags: ['scholarships', 'merit', 'financial aid', 'grant'],
  },
  {
    id: 'faq-sch-2',
    category: 'Scholarships',
    question: 'Do international students qualify for university scholarships?',
    answer: 'Yes, international students are eligible for both the Chancellor’s Presidential Merit Scholarship and the Global Academic Excellence Grant. Merit awards are evaluated automatically upon submission of your standard admission application prior to priority deadlines.',
    tags: ['international', 'scholarships', 'eligibility'],
  },

  // Student Services
  {
    id: 'faq-serv-1',
    category: 'Student Services',
    question: 'How do I contact the Office of Student Affairs?',
    answer: 'The Office of Student Affairs is located in the Student Life Pavilion, Suite 201. You can visit in person Monday through Friday from 8:30 AM to 5:00 PM, email studentaffairs@university-demo.edu, or call +1 (800) 555-0199 (Ext. 201).',
    tags: ['student affairs', 'contact', 'office', 'help'],
  },
  {
    id: 'faq-serv-2',
    category: 'Student Services',
    question: 'What student mental health and counseling services are available?',
    answer: 'The University Health & Psychological Counseling Center offers free, confidential counseling sessions, mindfulness stress-management workshops, and crisis support. Appointments can be scheduled through the student portal or by visiting Suite 110 of the Student Life Pavilion.',
    tags: ['wellness', 'counseling', 'health', 'mental health'],
  },
  {
    id: 'faq-serv-3',
    category: 'Student Services',
    question: 'What are the operating hours of the Central University Library?',
    answer: 'The Central University Library is open Monday to Friday from 7:30 AM to 11:00 PM, and on weekends from 9:00 AM to 8:00 PM. During midterm and final examination weeks, the library operates 24/7 with round-the-clock student RFID badge access.',
    tags: ['library', 'hours', 'study', 'amenities'],
  },
];
