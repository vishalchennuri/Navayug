
import { Link } from "react-router-dom";
import projectData from "../data/works.json";
import ConnectButton from "../ui/connectButton";
import SectionHeader from "../ui/sectionHeader";

interface Project {
  id: number;
  title: string;
  year: string;
  image: string;
  tags: string[];
  position: "up" | "down";
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const positionClass =
    project.position === "up" ? "lg:-translate-y-8" : "lg:translate-y-8";

  return (
    <>
     <Link to={`/project/${project.id}`}>
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
    </>
  );
};

export default function Component() {
  const projects: Project[] = projectData.projects.map((project: any) => ({
    ...project,
    position: project.position === "up" ? "up" : "down",
  }));

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div>
          <SectionHeader title="WORKS" />
          <h2 className="text-3xl lg:text-4xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            From Concept To Conversion
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            See how we solve real challenges.
          </p>
        </div>
        <ConnectButton label="KNOW MORE" to="/services" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
