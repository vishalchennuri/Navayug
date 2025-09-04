Navayug is a Digital Marketing Agency! 

TechStack 

Forms are connected to whatsaapp!

SEO is not yet done ! 

https://www.figma.com/design/V2lhKhGzZ1IBfv8R5SzZEW/NAVYUG?node-id=0-1&p=f&t=tvb6VS4vGMfBt9B1-0

https://github.com/vishalchennuri/Navayug


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

// Modern Dynamic Sticky Progress Navigation Component
const StickyProgressNavigation = ({ 
  sections, 
  activeSection, 
  scrollProgress 
}: { 
  sections: string[], 
  activeSection: string,
  scrollProgress: number 
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState(50); // Start at 50% from top (CENTER)
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate half page point
      const halfPageHeight = documentHeight / 2;
      const stickyPoint = windowHeight * 0.3;
      
      setIsSticky(scrollY > stickyPoint);
      
      // Dynamic positioning for first half of the page
      if (scrollY < halfPageHeight) {
        // Map scroll progress to position change
        // Start at 50% (CENTER), move towards 75% (DOWN) as we scroll
        const progressRatio = scrollY / halfPageHeight;
        const newPosition = 50 + (progressRatio * 25); // 50% to 75%
        setDynamicPosition(Math.min(75, newPosition));
      } else {
        // Fixed at 75% after half page (BOTTOM)
        setDynamicPosition(75);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex(s => s.toLowerCase() === activeSection);

  return (
    <div 
      ref={navRef}
      className={`fixed left-8 z-50 hidden lg:block transition-all duration-700 ease-out`}
      style={{
        top: `${dynamicPosition}%`,
        transform: 'translateY(-50%)',
      }}
    >
      {/* Container with proper spacing to avoid overlaps */}
      <div className="relative">
        {/* Main progress bar track - Thicker but not too thick */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full opacity-30"></div>
        
        {/* Animated progress fill */}
        <div 
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out shadow-lg"
          style={{
            height: `${Math.max(6, scrollProgress)}%`,
            boxShadow: '0 0 12px rgba(249, 115, 22, 0.4)',
            filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.3))'
          }}
        ></div>

        {/* Navigation items with proper spacing */}
        <div className="relative flex flex-col space-y-10">
          {sections.map((section, index) => {
            const isActive = activeSection === section.toLowerCase();
            const isPassed = index < activeIndex;
            
            return (
              <div key={section} className="relative group">
                {/* Navigation dot */}
                <button
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 transform hover:scale-110 focus:outline-none ${
                    isActive 
                      ? 'bg-orange-500 border-orange-500 shadow-lg scale-110' 
                      : isPassed 
                        ? 'bg-orange-300 border-orange-300 hover:bg-orange-400 hover:border-orange-400'
                        : 'bg-white/90 border-gray-300 hover:border-orange-400 hover:bg-orange-50 backdrop-blur-sm'
                  }`}
                  style={{
                    backdropFilter: 'blur(8px)',
                    boxShadow: isActive ? '0 0 15px rgba(249, 115, 22, 0.5)' : undefined
                  }}
                >
                  {/* Active pulse animation */}
                  {isActive && (
                    <div className="absolute -inset-1 rounded-full bg-orange-500 animate-ping opacity-20"></div>
                  )}
                  
                  {/* Inner dot for active state */}
                  {isActive && (
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                  )}
                </button>

                {/* Dynamic label with better positioning */}
                <div className={`absolute left-9 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
                  isActive || section === 'OVERVIEW'
                    ? 'opacity-100 translate-x-0 pointer-events-auto' 
                    : 'opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  <div className={`px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium backdrop-blur-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-orange-500/95 text-white shadow-orange-500/30' 
                      : 'bg-white/95 text-gray-700 border border-white/20 shadow-gray-200/50'
                  }`}>
                    <span className="relative z-10">{section}</span>
                    
                    {/* Animated arrow */}
                    <div className={`absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-transparent transition-all duration-300 ${
                      isActive 
                        ? 'border-r-[8px] border-r-orange-500/95' 
                        : 'border-r-[8px] border-r-white/95'
                    }`}></div>
                  </div>
                </div>

                {/* Section number with better positioning */}
                <div className="absolute -left-9 top-1/2 -translate-y-1/2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-105' 
                      : isPassed
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator with better positioning */}
        <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 transition-all duration-300 ${
          scrollProgress > 10 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
        }`}>
          <div className="text-center bg-white/95 backdrop-blur-lg rounded-xl px-4 py-3 shadow-lg border border-white/20">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {Math.round(scrollProgress)}%
            </div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Progress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IndividualPortfolioPage() {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  
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

  // Enhanced scroll spy with progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate overall scroll progress
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min((scrollY / maxScroll) * 100, 100);
      setScrollProgress(progress);
      
      // Section detection with improved accuracy
      const scrollPosition = scrollY + windowHeight * 0.3;
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

    // Optimized scroll handler
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

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [availableSections]);

  return (
    <>
      {/* Modern Dynamic Sticky Progress Navigation */}
      <StickyProgressNavigation 
        sections={availableSections} 
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />
      
      <section className="px-6 md:px-10 lg:px-16 pt-26 py-12">
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