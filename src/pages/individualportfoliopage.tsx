import { useMemo, useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../data/works.json";
import SectionHeader from "../ui/sectionHeader";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import Contact from "../components/contact";
import ShortsAndPosts from "../components/portfolio-posts";
import Portfolio from "../components/PortfolioWebsite";
import { ProjectCard } from "../components/worksSection";

interface Short {
  type: "video";
  src: string;
  thumbnail?: string;
}

interface Post {
  type: "image";
  src: string;
}

interface PortfolioProject {
  id: number;
  title: string;
  year: string;
  image: string;
  tags: string[];
  client?: string;
  heading?: string;
  description1?: string;
  description2?: string;
  services?: string[];
  video?: string;
  website: string;
  position: "up" | "down";
  shorts?: Short[];
  posts?: Post[];
}

interface Project {
  id: number;
  title: string;
  year?: string;
  image?: string;
  tags?: string[];
  client?: string;
  heading?: string;
  description1?: string;
  description2?: string;
  services?: string[];
  video?: string;
  website?: string;
  position?: "up" | "down";
  shorts?: Short[];
  posts?: Post[];
}

const typedProjectData = projectData as { projects: PortfolioProject[] };

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// Enhanced Progress Navigation Component
const ProgressNavigation = ({ sections, activeSection }: { sections: string[], activeSection: string }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Adjust for any fixed headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 lg:w-24 z-40 hidden md:block">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white shadow-lg border-r border-gray-200"></div>
      
      {/* Navigation content */}
      <div className="relative h-full flex flex-col justify-center px-4 lg:px-6">
        <div className="flex flex-col space-y-6">
          {sections.map((section, index) => {
            const isActive = activeSection === section.toLowerCase();
            const isCompleted = sections.slice(0, index).some(s => s.toLowerCase() !== activeSection);
            
            return (
              <div key={section} className="relative flex flex-col items-center group">
                {/* Progress line above (except for first item) */}
                {index > 0 && (
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 transition-colors duration-300 ${
                    sections.slice(0, index).findIndex(s => s.toLowerCase() === activeSection) !== -1 || isCompleted
                      ? 'bg-orange-500' 
                      : 'bg-gray-300'
                  }`} />
                )}
                
                {/* Main navigation button */}
                <button
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`relative w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    isActive 
                      ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-200' 
                      : 'bg-white border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0.5 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
                
                {/* Section label */}
                <div className={`absolute left-8 lg:left-10 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  <div className={`px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap text-sm font-medium ${
                    isActive 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}>
                    {section}
                    {/* Arrow pointing to button */}
                    <div className={`absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-transparent ${
                      isActive ? 'border-r-4 border-r-orange-500' : 'border-r-4 border-r-white'
                    }`}></div>
                  </div>
                </div>
                
                {/* Progress number */}
                <div className={`mt-2 text-xs font-bold transition-colors duration-300 ${
                  isActive ? 'text-orange-600' : 'text-gray-400'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress percentage at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="text-center">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              activeSection ? 'text-orange-600' : 'text-gray-400'
            }`}>
              {Math.round((sections.findIndex(s => s.toLowerCase() === activeSection) + 1) / sections.length * 100)}%
            </div>
            <div className="text-xs text-gray-500 font-medium">COMPLETE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IndividualPortfolioPage() {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Find the project by ID from works.json
  const project = typedProjectData.projects.find(p => p.id === Number(id));
  
  // If project not found, show error
  if (!project) {
    return (
      <section className="px-6 md:px-10 lg:px-16 pt-26 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-[var(--color-dark)] mb-4">
            Project Not Found
          </h1>
          <p className="text-[var(--color-soft-gray)] mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link 
            to="/portfolio" 
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  // Dynamically determine available sections based on project data
  const availableSections = useMemo(() => {
    const sections = ['OVERVIEW'];
    
    if (project.website) sections.push('WEBSITE');
    if (project.shorts && project.shorts.length > 0) sections.push('SHORTS');
    if (project.posts && project.posts.length > 0) sections.push('POSTS');
    
    return sections;
  }, [project]);

  const recommendations: Project[] = useMemo(
    () =>
      shuffleArray(
        typedProjectData.projects.filter((p) => p.id !== Number(project.id))
      ).slice(0, 2),
    [project.id]
  );

  // Scroll spy functionality with improved detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better detection
      
      // Find the section that's currently in view
      let currentSection = availableSections[0].toLowerCase();
      
      for (let i = availableSections.length - 1; i >= 0; i--) {
        const section = availableSections[i];
        const element = document.getElementById(section.toLowerCase());
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.toLowerCase();
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [availableSections]);

  return (
    <>
      {/* Enhanced Progress Navigation */}
      <ProgressNavigation sections={availableSections} activeSection={activeSection} />
      
      <section className="px-6 md:px-10 lg:px-16 md:pl-24 lg:pl-32 pt-26 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex items-center font-medium space-x-2 font-text leading-light text-gray-400">
          <Link to="/" className="hover">Home</Link>
          <span>/</span>
          <Link to="/portfolio" className="hover">Portfolio</Link>
          <span>/</span>
          <span className="font-medium font-text text-[var(--color-gray)]">
            {project.title}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 text-medium font-display text-[var(--color-dark)]">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm border rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-medium text-[var(--color-dark)] mb-5">
          <span className="font-[InstrumentSerifItalic] italic text-[var(--color-soft-gray)] mr-1">
            the
          </span>
          <span className="text-[var(--color-dark)] font-display font-text">
            {project.title}
          </span>
        </h1>

        {/* Video or Image */}
        <FadeInWhenVisible delay={0.5}>
          {project.video ? (
            <div className="w-full mb-5 flex justify-center">
              <div className="relative w-full max-w-4xl" style={{ aspectRatio: '16/9' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-72 lg:h-96 shadow-md bg-gray-50 mb-5"
            />
          )}
        </FadeInWhenVisible>

        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <FadeInWhenVisible delay={0.5}>
            <SectionHeader title="OVERVIEW" />
            <div className="w-full md:items-start md:space-x-8">
              {project.heading && (
                <h2 className="text-2xl font-text text-[var(--color-dark)] mb-4 md:w-1/2">
                  {project.heading}
                </h2>
              )}

              {project.description1 && (
                <p className="mb-5 text-display font-display text-[var(--color-soft-gray)] md:w-2/3 md:ml-[30%]">
                  {project.description1}
                </p>
              )}

              {project.description2 && (
                <p className="mb-5 text-display font-display text-[var(--color-soft-gray)] md:w-2/3 md:ml-[30%]">
                  {project.description2}
                </p>
              )}

              {project.client && (
                <div className="mb-5 md:w-2/3 md:ml-[30%]">
                  <h3 className="font-text text-[var(--color-dark)] text-xl">Client</h3>
                  <p className="text-display font-display text-[var(--color-soft-gray)]">
                    {project.client}
                  </p>
                </div>
              )}

              {project.services && project.services.length > 0 && (
                <div className="mb-5 md:w-2/3 md:ml-[30%]">
                  <h3 className="font-text text-[var(--color-dark)] text-xl">Services</h3>
                  <div className="text-display font-display text-[var(--color-soft-gray)]">
                    {project.services.map((service, index) => (
                      <span key={index} className="mr-2">{service}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Website Section */}
        {project.website && (
          <section id="website" className="scroll-mt-20">
            <FadeInWhenVisible delay={0.5}>
              <Portfolio title={project.title} website={project.website} />
            </FadeInWhenVisible>
          </section>
        )}

        {/* Shorts Section */}
        {project.shorts && project.shorts.length > 0 && (
          <section id="shorts" className="scroll-mt-20">
            <FadeInWhenVisible delay={0.5}>
              <SectionHeader title="SHORTS" />
              <ShortsAndPosts shorts={project.shorts} posts={[]} />
            </FadeInWhenVisible>
          </section>
        )}

        {/* Posts Section */}
        {project.posts && project.posts.length > 0 && (
          <section id="posts" className="scroll-mt-20">
            <FadeInWhenVisible delay={0.5}>
              <SectionHeader title="POSTS" />
              <ShortsAndPosts shorts={[]} posts={project.posts} />
            </FadeInWhenVisible>
          </section>
        )}

        {/* More Cases */}
        <FadeInWhenVisible delay={0.5}>
          <SectionHeader title="More Cases" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {recommendations.map((recProject) => (
              <ProjectCard
                key={recProject.id}
                project={{
                  ...recProject,
                  year: recProject.year ?? "",
                  image: recProject.image ?? "",
                  tags: recProject.tags ?? [],
                  position: recProject.position ?? "up"
                }}
              />
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Contact */}
        <FadeInWhenVisible>
          <Contact />
        </FadeInWhenVisible>
      </section>
    </>
  );
}