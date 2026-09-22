import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { TechMarquee } from './components/TechMarquee';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { WhyWorkWithMeSection } from './sections/WhyWorkWithMeSection';
import { EducationCertificationsSection } from './sections/EducationCertificationsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

import { ProjectItem } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-content-body selection:bg-accent-blue selection:text-white relative">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 2. Horizontal Tech Marquee */}
        <TechMarquee />

        {/* 3. Featured Real-World Client Project (ClearEarth Safety Consultancy) */}
        <FeaturedProjectSection onSelectProject={setSelectedProject} />

        {/* 4. Current & Previous Professional Experience */}
        <ExperienceSection />

        {/* 5. AI & Machine Learning Core Projects */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* 6. Categorized Technical Skills */}
        <SkillsSection />

        {/* 7. About Me & Core Capabilities */}
        <AboutSection />

        {/* 8. Why Work With Me (What I Bring) */}
        <WhyWorkWithMeSection />

        {/* 9. Education & Certifications */}
        <EducationCertificationsSection />

        {/* 10. Complete Resume Overview */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Action Widgets */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
