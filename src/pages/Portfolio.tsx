import { Link } from "react-router-dom";
import projectData from "../data/works.json"; // Using works.json as your data source
import SectionHeader from "../ui/sectionHeader";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import Contact from "../components/contact";

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

const typedProjectData = projectData as { projects: PortfolioProject[] };

// Portfolio Card Component
export const PortfolioCard = ({ project }: { project: PortfolioProject }) => {
  const positionClass =
    project.position === "up" ? "lg:-translate-y-8" : "lg:translate-y-8";

  return (
    <Link to={`/portfolio/${project.id}`}>
      {/* Mobile Design */}
      <div className="md:hidden mb-10">
        <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-lg font-medium text-[var(--color-dark)] mb-2 tracking-tight">
          <span className="font-[InstrumentSerifItalic] italic text-[var(--color-soft-gray)] mr-1">
            the
          </span>
          {project.title}{" "}
          <span className="text-orange-500 font-normal">
            <span className="text-xs">&copy;</span>
            {project.year}
          </span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Design */}
      <div
        className={`hidden md:block transform transition-all duration-300 hover:scale-[1.02] mb-16 ${positionClass}`}
      >
        <div className="overflow-hidden transition-shadow duration-300 p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] mb-10">
            <img
              src="/rect.png"
              alt="Background"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] h-auto"
            />
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[80%] h-auto object-contain z-10"
            />
          </div>

          {/* Text content */}
          <div className="relative z-20">
            <h3 className="text-xl md:text-2xl font-light text-[var(--color-dark)] mb-4 tracking-wide">
              <span className="font-[InstrumentSerifItalic] italic text-[var(--color-soft-gray)] mr-1">
                the
              </span>
              {project.title}{" "}
              <span className="text-orange-500 font-normal">
                <span className="text-xs">&copy;</span>
                {project.year}
              </span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function PortfolioListingPage() {
  const projects: PortfolioProject[] = typedProjectData.projects;

  return (
    <section className="px-6 md:px-10 lg:px-16 pt-26 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex items-center font-medium space-x-2 font-text leading-light text-gray-400">
        <Link to="/" className="hover">Home</Link>
        <span>/</span>
        <span className="font-medium font-text text-[var(--color-gray)]">
          Portfolio
        </span>
      </div>

      {/* Header */}
      <FadeInWhenVisible>
        <div className="mb-12">
          <SectionHeader title="PORTFOLIO" />
          <h2 className="text-3xl lg:text-4xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Our Complete Portfolio
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            Explore all our projects and case studies.
          </p>
        </div>
      </FadeInWhenVisible>

      {/* Portfolio Grid */}
      <FadeInWhenVisible delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
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