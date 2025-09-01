
import { useMemo } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/portfoliopage.json"; 
import SectionHeader from "../ui/sectionHeader";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import Contact from "../components/contact";
import projectData from "../data/works.json";
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

const typedProjectData = projectData as { projects: Project[] };
const typedPortfolioData = portfolioData as { portfolio: PortfolioProject[] };

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function PortfolioPage() {
  const project = typedPortfolioData.portfolio[0];
const recommendations: Project[] = useMemo(
  () =>
    shuffleArray(
      typedProjectData.projects.filter((p) => p.id !== Number(project.id))
    ).slice(0, 2),
  [project.id]
);


  return (
    <section className="px-6 md:px-10 lg:px-16 py-12">
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
          <div className="w-full h-56 md:h-72 lg:h-96 shadow-md bg-gray-50 mb-5">
            <iframe
              className="w-full h-full rounded-lg"
              src={project.video}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 md:h-72 lg:h-96 shadow-md bg-gray-50 mb-5"
          />
        )}
      </FadeInWhenVisible>

      {/* Overview */}
      <FadeInWhenVisible delay={0.5}>
        <SectionHeader title="OVERVIEW" />
        <div className="w-full md:items-start md:space-x-8">
          <h2 className="text-2xl font-text text-[var(--color-dark)] mb-4 md:w-1/2">
            {project.heading}
          </h2>

          <p className="mb-5 text-display font-display text-[var(--color-soft-gray)] md:w-2/3 md:ml-[30%]">
            {project.description1}
          </p>

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

          {project.services && (
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

      {/* Portfolio Website */}
      <FadeInWhenVisible delay={0.5}>
        <Portfolio title={project.title} website={project.website} />
      </FadeInWhenVisible>

      {/* Shorts & Posts */}
      <FadeInWhenVisible delay={0.5}>
        <SectionHeader title="Shorts and Posts" />
        <ShortsAndPosts shorts={project.shorts ?? []} posts={project.posts ?? []} />
      </FadeInWhenVisible>

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
  );
}
