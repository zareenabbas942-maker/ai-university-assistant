import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActivePage, AcademicProgram, UniversityDepartment, StudentService, CampusFacility } from '../types/chat';
import { 
  UNIVERSITY_OVERVIEW,
  UNIVERSITY_DEPARTMENTS,
  ACADEMIC_PROGRAMS,
  STUDENT_SERVICES,
  CAMPUS_FACILITIES,
  UNIVERSITY_CONTACT_INFO
} from '../data/mockKnowledge';
import { 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Users2, 
  Layers, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Award,
  Calendar,
  DollarSign
} from 'lucide-react';

interface UniversityInfoPageProps {
  onNavigate: (page: ActivePage) => void;
  onAskQuestion: (question: string) => void;
}

type SectionKey = 'about' | 'departments' | 'programs' | 'services' | 'facilities' | 'contact';

export const UniversityInfoPage: React.FC<UniversityInfoPageProps> = ({
  onNavigate,
  onAskQuestion,
}) => {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Undergraduate' | 'Postgraduate' | 'Doctoral'>('All');

  const navigationSections: { id: SectionKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'about', label: 'About University', icon: Building2 },
    { id: 'departments', label: 'Departments', icon: BookOpen },
    { id: 'programs', label: 'Academic Programs', icon: GraduationCap },
    { id: 'services', label: 'Student Services', icon: Users2 },
    { id: 'facilities', label: 'Campus Facilities', icon: Layers },
    { id: 'contact', label: 'Contact Information', icon: Mail },
  ];

  const handleAskAssistant = (query: string) => {
    onAskQuestion(query);
    onNavigate('chat');
  };

  const filteredPrograms = ACADEMIC_PROGRAMS.filter((prog) => {
    const matchesLevel = levelFilter === 'All' || prog.level === levelFilter;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col w-full">
      <PageHeader
        title="University Information Directory"
        subtitle="Explore official academic faculties, degree curricula, campus student services, research facilities, and admissions contact points."
        icon={BookOpen}
        tag="Campus Knowledge Center"
        onBackToChat={() => onNavigate('chat')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#d8e6db] no-scrollbar">
          {navigationSections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#16382b] text-white shadow-xs ring-1 ring-[#107c53]/40'
                    : 'bg-white text-[#2b4c3e] hover:bg-[#eef3ee] border border-[#dce8dd]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-[#107c53]'}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. ABOUT UNIVERSITY SECTION */}
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#e2ede4] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2.5 py-1 rounded-md border border-[#cbe4d5]">
                  Sample University Profile
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#16382b]">
                  {UNIVERSITY_OVERVIEW.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#d4af37] font-serif italic">
                  &ldquo;{UNIVERSITY_OVERVIEW.motto}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed pt-2">
                  {UNIVERSITY_OVERVIEW.summary}
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-1">
                  <span className="text-[11px] text-[#64748b]">Academic Heritage</span>
                  <div className="text-sm font-bold text-[#16382b]">Est. 1974</div>
                  <span className="text-[10px] text-[#107c53]">5 Decades of Excellence</span>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-1">
                  <span className="text-[11px] text-[#64748b]">Student Community</span>
                  <div className="text-sm font-bold text-[#16382b]">{UNIVERSITY_OVERVIEW.studentsEnrolled}</div>
                  <span className="text-[10px] text-[#107c53]">Diverse Global Scholars</span>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-1">
                  <span className="text-[11px] text-[#64748b]">Faculty & Research</span>
                  <div className="text-sm font-bold text-[#16382b]">{UNIVERSITY_OVERVIEW.facultyCount}</div>
                  <span className="text-[10px] text-[#107c53]">14:1 Student-Faculty Ratio</span>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-1">
                  <span className="text-[11px] text-[#64748b]">Institutional Accreditation</span>
                  <div className="text-xs font-bold text-[#16382b]">Higher Education Council</div>
                  <span className="text-[10px] text-[#107c53]">Fully Recognized & Certified</span>
                </div>
              </div>

              {/* Quick Prompt to Chat */}
              <div className="pt-4 border-t border-[#f0f5f1] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#64748b]">
                  Have questions regarding admissions eligibility, application cycles, or housing?
                </p>
                <button
                  onClick={() => handleAskAssistant('What programs and admission requirements does the university offer?')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#107c53] text-white text-xs font-semibold hover:bg-[#0d6644] transition-all cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Ask Assistant About University</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. DEPARTMENTS SECTION */}
        {activeSection === 'departments' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UNIVERSITY_DEPARTMENTS.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-white border border-[#e2ede4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2 py-0.5 rounded border border-[#cbe4d5]">
                      {dept.faculty}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-[#16382b]">
                      {dept.name}
                    </h3>

                    <p className="text-xs text-[#4b5563] leading-relaxed">
                      {dept.description}
                    </p>

                    <div className="space-y-1 text-xs pt-2">
                      <div className="flex items-center gap-2 text-[#2b4c3e]">
                        <MapPin className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                        <span>{dept.officeLocation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#2b4c3e]">
                        <Mail className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                        <span className="font-mono text-[11px]">{dept.contactEmail}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#f0f5f1]">
                      <span className="text-[11px] font-bold text-[#16382b] block mb-1">
                        Academic Programs:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dept.programsOffered.map((p, pi) => (
                          <span
                            key={pi}
                            className="text-[10px] bg-[#faf8f5] text-[#16382b] border border-[#e2ede4] px-2 py-0.5 rounded font-medium"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#edf2ee] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#64748b]">
                      Department Chair: <strong className="text-[#16382b]">{dept.head}</strong>
                    </span>
                    <button
                      onClick={() => handleAskAssistant(`What departments are available and what does ${dept.name} offer?`)}
                      className="inline-flex items-center gap-1 text-[#107c53] hover:text-[#0d6644] font-semibold cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. ACADEMIC PROGRAMS SECTION */}
        {activeSection === 'programs' && (
          <div className="space-y-5">
            {/* Filter and Search Bar */}
            <div className="bg-white p-4 rounded-xl border border-[#e2ede4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#94a3b8] absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search programs by name or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:outline-none focus:border-[#107c53] focus:ring-1 focus:ring-[#107c53]"
                />
              </div>

              {/* Level Filter Chips */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                {(['All', 'Undergraduate', 'Postgraduate', 'Doctoral'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      levelFilter === lvl
                        ? 'bg-[#107c53] text-white'
                        : 'bg-[#faf8f5] text-[#4b5563] hover:bg-[#eef3ee] border border-[#dce8dd]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white border border-[#e2ede4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2 py-0.5 rounded border border-[#cbe4d5]">
                        {prog.level} • {prog.code}
                      </span>
                      <span className="text-xs font-semibold text-[#16382b] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#e5ece6]">
                        {prog.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#16382b]">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-[#107c53] font-medium">
                      {prog.faculty}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="pt-2 border-t border-[#f0f5f1] space-y-1">
                      <span className="text-[11px] font-bold text-[#16382b] uppercase tracking-wide block">
                        Curriculum Highlights:
                      </span>
                      <ul className="space-y-1 text-xs text-[#52525b]">
                        {prog.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#107c53] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#edf2ee] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#64748b] block">Sample Tuition</span>
                      <span className="font-bold text-[#16382b]">{prog.tuitionPerYear}</span>
                    </div>

                    <button
                      onClick={() => handleAskAssistant(`What are the curriculum details and prerequisites for ${prog.title}?`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eef3ee] hover:bg-[#107c53] text-[#16382b] hover:text-white text-xs font-semibold transition-colors cursor-pointer group"
                    >
                      <span>Ask Assistant</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#107c53] group-hover:text-white transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. STUDENT SERVICES SECTION */}
        {activeSection === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STUDENT_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="bg-white border border-[#e2ede4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-[#107c53]" />
                    <h3 className="font-bold text-base text-[#16382b]">{serv.name}</h3>
                  </div>

                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {serv.description}
                  </p>

                  <div className="space-y-1 text-xs text-[#2b4c3e]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                      <span>{serv.office}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                      <span>{serv.hours}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f0f5f1]">
                    <span className="text-[11px] font-bold text-[#16382b] block mb-1">
                      Assistance Provided:
                    </span>
                    <ul className="space-y-1 text-xs text-[#52525b]">
                      {serv.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#107c53] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#edf2ee] flex justify-end">
                  <button
                    onClick={() => handleAskAssistant(`How can I contact student affairs and get help with ${serv.name}?`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#107c53] hover:text-[#0d6644] cursor-pointer"
                  >
                    <span>Ask Assistant about this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. CAMPUS FACILITIES SECTION */}
        {activeSection === 'facilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CAMPUS_FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-white border border-[#e2ede4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#107c53]" />
                    <h3 className="font-bold text-base text-[#16382b]">{fac.name}</h3>
                  </div>

                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="space-y-1 text-xs text-[#2b4c3e]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                      <span>{fac.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#107c53] shrink-0" />
                      <span>{fac.hours}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f0f5f1]">
                    <span className="text-[11px] font-bold text-[#16382b] block mb-1">
                      Key Amenities:
                    </span>
                    <ul className="space-y-1 text-xs text-[#52525b]">
                      {fac.amenities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#107c53] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#edf2ee] flex justify-end">
                  <button
                    onClick={() => handleAskAssistant(`What facilities are available for students at ${fac.name}?`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#107c53] hover:text-[#0d6644] cursor-pointer"
                  >
                    <span>Check access hours with Assistant</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 6. CONTACT INFORMATION SECTION */}
        {activeSection === 'contact' && (
          <div className="bg-white border border-[#e2ede4] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#107c53] bg-[#eef6f1] px-2.5 py-1 rounded-md border border-[#cbe4d5]">
                Campus Directory
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#16382b] mt-1.5">
                Official University Contact Points
              </h2>
              <p className="text-xs sm:text-sm text-[#4b5563] mt-1 leading-relaxed">
                Connect directly with departmental administrative desks, financial aid advisors, or the admissions center.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-2">
                <span className="text-xs font-bold text-[#16382b] uppercase tracking-wide block">
                  Office of Admissions & Recruitment
                </span>
                <p className="text-xs text-[#4b5563]">For prospectus requests, secondary school transcript evaluation, and application status.</p>
                <div className="text-xs font-mono text-[#107c53]">{UNIVERSITY_CONTACT_INFO.admissionsOffice}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-2">
                <span className="text-xs font-bold text-[#16382b] uppercase tracking-wide block">
                  Office of the Registrar
                </span>
                <p className="text-xs text-[#4b5563]">For enrollment verification letters, transcript issuance, and course registration changes.</p>
                <div className="text-xs font-mono text-[#107c53]">{UNIVERSITY_CONTACT_INFO.registrarOffice}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-2">
                <span className="text-xs font-bold text-[#16382b] uppercase tracking-wide block">
                  Financial Aid & Bursar Office
                </span>
                <p className="text-xs text-[#4b5563]">For tuition payments, 3-installment interest-free plans, and merit scholarship renewals.</p>
                <div className="text-xs font-mono text-[#107c53]">{UNIVERSITY_CONTACT_INFO.financialAid}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5ece6] space-y-2">
                <span className="text-xs font-bold text-[#16382b] uppercase tracking-wide block">
                  Office of Student Affairs & Wellbeing
                </span>
                <p className="text-xs text-[#4b5563]">For housing assignments, student clubs, accessibility accommodations, and medical clinic.</p>
                <div className="text-xs font-mono text-[#107c53]">{UNIVERSITY_CONTACT_INFO.studentAffairs}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#eef3ee] border border-[#d8e6db] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-[#16382b]">Campus Administrative Address:</div>
                <div className="text-[#4b5563]">{UNIVERSITY_CONTACT_INFO.address}</div>
              </div>
              <div className="font-semibold text-[#107c53]">
                Helpline: {UNIVERSITY_CONTACT_INFO.phone}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
