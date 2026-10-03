import { ChatResponse } from '../types/chat';

/**
 * Realistic mock responses for university student inquiries.
 * Note: These provide clear sample/demo university guidance designed for demonstration
 * and will seamlessly be served by the Python/FastAPI RAG backend upon integration.
 */
export const MOCK_RESPONSES: Record<string, ChatResponse> = {
  // 1. Admission Application
  apply: {
    answer: `### Application Procedure for Admission (Demo Information)

To apply for admission to the university, prospective students can follow these four steps via the online student portal:

1. **Submit Online Application:** Visit the admissions portal at \`apply.university-demo.edu\` and create an applicant account.
2. **Submit Academic Credentials:**
   * Certified official high school transcripts (or undergraduate degree transcript for Master's/Ph.D. applicants).
   * Graduation certificate or diploma certificate.
3. **Upload Supporting Documents:**
   * Statement of Purpose (500–750 words) outlining your academic goals and interests.
   * Two letters of recommendation from former teachers or academic supervisors.
   * Proof of language proficiency (e.g., IELTS minimum 6.5 or TOEFL iBT 80+, if applicable).
4. **Pay Application Fee:** A standard non-refundable processing fee of $50 (application fee waivers can be requested for eligible applicants).

*(Note: This is simulated demo information. When connected to the future RAG backend, official university handbook excerpts will be retrieved.)*`,
    sources: [
      { title: 'Admissions & Enrollment Prospectus', section: 'Undergraduate Application Steps', page: 'Section 2.1' },
      { title: 'Office of the Registrar General Guide', section: 'International Applicant Guidelines', page: 'Section 4.3' },
    ],
  },

  // 2. Admission Requirements
  requirements: {
    answer: `### General Admission Requirements (Demo Information)

The sample eligibility criteria across university program levels include:

* **Undergraduate Programs (B.Sc. / B.A. / BBA):**
  * Secondary school completion certificate with a minimum cumulative GPA of **3.0 / 4.0** (or 75% equivalent).
  * For Engineering and Computer Science majors: Pre-calculus and Physics background with minimum grade B.
  * Standardized tests (SAT/ACT) are optional for the current academic session.
* **Postgraduate Programs (Master's / MBA):**
  * Recognized Bachelor's degree in a relevant discipline with minimum CGPA of **3.0 / 4.0**.
  * Updated Curriculum Vitae (CV) and professional/academic references.
* **Doctoral Programs (Ph.D.):**
  * Master's degree in a relevant field with demonstrable research potential and a preliminary research proposal.

*(Note: Admission criteria are provided as sample data for development and demonstration.)*`,
    sources: [
      { title: 'University Academic Regulations Handbook', section: 'Minimum Entry Requirements', page: 'Section 3.2' },
      { title: 'Faculty of Computing & Technology Admission Criteria', section: 'STEM Prerequisites', page: 'Section 1.4' },
    ],
  },

  // 3. Programs Offered
  programs: {
    answer: `### Academic Programs Offered (Demo Information)

The university offers a diverse curriculum across Undergraduate, Master's, and Doctoral levels:

**Undergraduate Degrees (4 Years / 8 Semesters):**
* **B.Sc. in Computer Science:** Artificial intelligence, software systems, cybersecurity, and algorithms.
* **B.Sc. in Software Engineering:** Modern software lifecycle, DevOps, agile development, and enterprise systems.
* **B.Sc. in Electrical & Computer Engineering:** Embedded systems, robotics, signal processing, and microelectronics.
* **Bachelor of Business Administration (BBA):** Finance, digital marketing, strategic management, and analytics.

**Postgraduate Degrees (1.5 – 2 Years):**
* **M.Sc. in Artificial Intelligence & Data Science:** Deep learning, neural networks, machine learning, and big data systems.
* **Master of Business Administration (MBA):** Executive leadership, corporate finance, and business innovation.

**Doctoral Degrees (3 – 5 Years):**
* **Ph.D. in Computer Science:** Advanced research fellowship with teaching assistantships.

*(Explore the full curriculum roadmaps in our **University Information** tab.)*`,
    sources: [
      { title: 'University Academic Catalog', section: 'Faculty Programs & Degree Roadmaps', page: 'Section 5' },
    ],
  },

  // 4. Departments Available
  departments: {
    answer: `### University Academic Departments (Demo Information)

The university is structured into five core academic departments:

1. **Department of Computer Science & Software Engineering:**
   * *Faculty:* Faculty of Computing & Information Technology
   * *Location:* Turing Technology Complex, Hall A
   * *Focus:* Software systems, cloud computing, intelligent systems, and cyber defense.
2. **Department of Management & Marketing:**
   * *Faculty:* School of Business & Economics
   * *Location:* Hamilton Business Tower, 4th Floor
   * *Focus:* International trade, corporate finance, organizational strategy, and venture incubation.
3. **Department of Electrical & Computer Engineering:**
   * *Faculty:* Faculty of Engineering
   * *Location:* Maxwell Engineering Center, Wing C
   * *Focus:* Telecommunications, robotics automation, smart grids, and IoT devices.
4. **Department of Humanities & Social Sciences:**
   * *Faculty:* Faculty of Arts & Sciences
   * *Location:* Athenaeum Hall, 2nd Floor
   * *Focus:* Public policy, media communication, ethics in digital society, and literature.
5. **Department of Health & Biomedical Sciences:**
   * *Faculty:* Faculty of Health Sciences
   * *Location:* Pasteur Health Sciences Pavilion
   * *Focus:* Biomedical informatics, clinical diagnostic sciences, and healthcare management.

*(Office hours for all department advisory desks: Monday through Friday, 9:00 AM – 4:30 PM.)*`,
    sources: [
      { title: 'Campus Department Directory', section: 'Academic Units & Locations', page: 'Section 1' },
    ],
  },

  // 5. Academic Calendar
  calendar: {
    answer: `### Academic Calendar & Milestones (Demo Information)

Here is a summary of sample semester dates for the academic year:

* **Fall Semester 2024:**
  * **Course Registration Period:** August 12 – August 23, 2024
  * **New Student Orientation:** August 26 – August 30, 2024
  * **First Day of Classes:** September 2, 2024
  * **Course Add / Drop Deadline:** September 13, 2024
  * **Midterm Examination Week:** October 21 – October 26, 2024
  * **Final Examinations:** December 16 – December 22, 2024
  * **Grade Publication:** December 28, 2024

* **Spring Semester 2025:**
  * **Classes Commence:** January 20, 2025
  * **Spring Break:** March 17 – March 23, 2025
  * **Final Examinations:** May 12 – May 18, 2025
  * **Annual Commencement Ceremony:** June 7, 2025

*(Consult the **University Information > Academic Calendar** tab for expanded dates.)*`,
    sources: [
      { title: 'Office of the Registrar Official Calendar', section: 'Academic Year Schedule', page: 'Section 2' },
    ],
  },

  // 6. Tuition Fees
  fees: {
    answer: `### Tuition Fees & Payment Options (Demo Information)

Sample tuition fees are categorized by discipline and degree level:

* **Undergraduate Computing & Software Engineering:** $7,800 per academic year ($3,900 / semester).
* **Undergraduate Business Administration (BBA):** $7,200 per academic year ($3,600 / semester).
* **Undergraduate Engineering (ECE):** $8,200 per academic year ($4,100 / semester).
* **Postgraduate Programs (M.Sc. / MBA):** $9,400 to $10,200 per academic year.
* **Ph.D. Programs:** Fully funded with tuition waiver and research assistantship stipend.

**Installment Payment Plan:**
Students can opt for a **3-phase installment plan** per semester with **0% interest**:
* 40% due upon semester course registration
* 30% due after midterm examination week
* 30% due prior to final examinations

*(Note: Sample figures for illustration. Official fee statements are issued through the Bursar's Office.)*`,
    sources: [
      { title: 'Bursar & Finance Office Fee Schedule', section: 'Tuition Policies & Payment Plans', page: 'Section 3.1' },
    ],
  },

  // 7. Scholarships
  scholarships: {
    answer: `### Scholarships & Financial Aid (Demo Information)

The university offers several sample scholarship programs for eligible students:

1. **Chancellor's Presidential Merit Scholarship:**
   * **Award:** 100% full tuition waiver + $800 annual textbook allowance.
   * **Eligibility:** Incoming students with high school GPA ≥ 3.85 / 4.0 or top standardized test percentiles. Renewable with university GPA ≥ 3.50.
2. **Dean's Academic Excellence Grant:**
   * **Award:** 50% tuition reduction per semester.
   * **Eligibility:** Automatically evaluated for applicants with high school GPA ≥ 3.60.
3. **STEM & Women in Technology Fellowship:**
   * **Award:** 75% tuition assistance + faculty research mentorship.
   * **Eligibility:** Admitted students in Computer Science, Software Engineering, or ECE.
4. **Need-Based Opportunity Aid:**
   * **Award:** 25% to 80% tuition discount based on family financial assessment.

*Applicants are automatically evaluated for merit scholarships upon submission of their primary admission application.*`,
    sources: [
      { title: 'Financial Aid & Scholarship Directive', section: 'Institutional Awards', page: 'Section 4' },
    ],
  },

  // 8. Contact Student Affairs
  studentAffairs: {
    answer: `### Student Affairs & Support Services (Demo Information)

The **Office of Student Affairs** provides comprehensive support for personal, academic, and campus wellbeing:

* **Main Office Location:** Student Life Pavilion, Suite 201
* **Service Hours:** Monday – Friday, 8:30 AM – 5:00 PM
* **General Inquiries:** \`studentaffairs@university-demo.edu\`
* **Helpline:** +1 (800) 555-0199 (Ext. 201)

**Key Services Provided:**
* Academic advising and departmental transfer requests
* Student visa and immigration advising for international students
* Student clubs, sports societies, and campus engagement
* Student grievances, conflict mediation, and housing assistance
* On-campus health, mental health counseling, and accessibility accommodations`,
    sources: [
      { title: 'Student Affairs Services Guidebook', section: 'Student Support Services', page: 'Section 1.2' },
    ],
  },

  // 9. Facilities
  facilities: {
    answer: `### Campus Facilities for Students (Demo Information)

Students enjoy access to modern academic and recreational facilities across campus:

* **Central University Library:**
  * Hours: Monday – Friday: 7:30 AM – 11:00 PM (open 24/7 during final exam weeks).
  * Features: 250,000+ print volumes, online academic journals (IEEE, ACM, JSTOR), 42 group study rooms, and quiet zones.
* **Advanced Computing & AI Clusters:**
  * Turing Technology Complex (3rd Floor), accessible 24/7 with student RFID card. Equipped with high-performance workstations and GPU clusters.
* **Sports & Recreation Complex:**
  * Gymnasium, Olympic-sized swimming pool, indoor basketball courts, and outdoor athletics track.
* **Student Wellness & Health Clinic:**
  * Outpatient medical consultation, psychological counseling, and primary emergency triage.
* **Student Cafeteria & Dining Commons:**
  * Multiple campus dining options offering nutritious meals, coffee bars, and dietary options.`,
    sources: [
      { title: 'Student Campus Life & Facilities Manual', section: 'Campus Amenities', page: 'Section 6' },
    ],
  },
};

/**
 * Helper to match user question with mock responses using keyword similarity.
 */
export function getMockResponseForQuestion(question: string): ChatResponse {
  const q = question.toLowerCase().trim();

  if (q.includes('apply') || q.includes('how to apply') || q.includes('application')) {
    return MOCK_RESPONSES.apply;
  }
  if (q.includes('requirement') || q.includes('eligibility') || q.includes('minimum gpa') || q.includes('criteria')) {
    return MOCK_RESPONSES.requirements;
  }
  if (q.includes('program') || q.includes('degree') || q.includes('major') || q.includes('course')) {
    return MOCK_RESPONSES.programs;
  }
  if (q.includes('department') || q.includes('facult') || q.includes('dean') || q.includes('chair')) {
    return MOCK_RESPONSES.departments;
  }
  if (q.includes('calendar') || q.includes('semester') || q.includes('dates') || q.includes('exam date') || q.includes('holiday')) {
    return MOCK_RESPONSES.calendar;
  }
  if (q.includes('fee') || q.includes('tuition') || q.includes('cost') || q.includes('installment') || q.includes('payment')) {
    return MOCK_RESPONSES.fees;
  }
  if (q.includes('scholarship') || q.includes('financial aid') || q.includes('grant') || q.includes('stipend')) {
    return MOCK_RESPONSES.scholarships;
  }
  if (q.includes('student affair') || q.includes('contact student') || q.includes('student service') || q.includes('helpdesk')) {
    return MOCK_RESPONSES.studentAffairs;
  }
  if (q.includes('facilit') || q.includes('library') || q.includes('gym') || q.includes('lab') || q.includes('campus')) {
    return MOCK_RESPONSES.facilities;
  }

  // Fallback response
  return {
    answer: `Thank you for your question regarding **"${question}"**.

*(Demo Response)*
As the AI University Assistant, I can provide information based on our sample university documents:
* For **admissions questions**, ask about application procedures, requirements, or deadlines.
* For **academics**, ask about degree programs, departments, or the academic calendar.
* For **financial inquiries**, ask about tuition fees, payment installments, or scholarships.
* For **campus life**, ask about student affairs, central library access, and student facilities.

You can also browse detailed categories under the **University Information** or **FAQ** pages in the top navigation.`,
    sources: [
      { title: 'University General Student Information Manual', section: 'General Inquiries', page: 'Section 1' },
    ],
  };
}
