
import { useParams, Link } from "react-router-dom";
import projectData from "../data/works.json";
import SectionHeader from "../ui/sectionHeader";
import Portfolio from "../pages/Portfolio";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import { ProjectCard } from "./worksSection";
import  Contact from '../components/contact';


interface Project {
  id: number;
  title: string;
  year: string;
  image: string;
  tags: string[];
  position: "up" | "down";
}

export default function WorkPortfolio() {
  const { id } = useParams<{ id: string }>();
  const project = projectData.projects.find((p) => p.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const recommendations = projectData.projects
  .filter((p) => p.id !== Number(id)) // exclude current project
  .slice(0, 2); // pick two others

  return (
    <section className="px-6 md:px-10 lg:px-16 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex items-center font-medium space-x-2 font-text leading-light text-gray-400">
        <Link to="/" className="hover">Home</Link>
        <span>/</span>
        <Link to="/" className=" hover">Projects</Link>
        <span>/</span>
        <span className=" font-medium font-text  text-[var(--color-gray)]">{project.title}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 text-medium font-display text-[var(--color-dark)]">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm border  rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-medium text-[var(--color-dark)] mb-5 ">
        <span className="font-[InstrumentSerifItalic] italic text-[var(--color-soft-gray)] mr-1">
          the
        </span>
        <span className="text-[var(--color-dark)] font-display font-text">
          {project.title}

        </span>

      </h1>

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

<FadeInWhenVisible delay={0.5}>
  
      <SectionHeader title="OVERVIEW" />

      <div className="w-full md:items-start md:space-x-8">
        {/* Heading */}
        <h2 className="text-2xl font-text text-[var(--color-dark)] mb-4 md:w-1/2">
          {project.heading}
        </h2>

        {/* Description */}
        <p className="mb-5 text-display font-display text-[var(--color-soft-gray)] md:w-2/3 md:ml-[30%]   text-medium lg:text-base leading-snug font-normal tracking-tight">
          {project.description1}
        </p>

        <p className="mb-5 text-display  font-display text-[var(--color-soft-gray)] md:w-2/3 md:ml-[30%] text-medium lg:text-base leading-snug font-normal tracking-tight">
          {project.description2}
        </p>

        <p className="mb-5 text-display md:w-2/3 md:ml-[30%] font-display text-[var(--color-soft-gray)] text-medium lg:text-base leading-snug font-normal tracking-tight">
          <h3 className="font-text text-[var(--color-dark)] text-xl">Client</h3>

          {project.client}</p>

        <p className="mb-5 text-display md:w-2/3 md:ml-[30%] font-display text-[var(--color-soft-gray)] text-medium lg:text-base leading-snug font-normal tracking-tight">
          <h3 className="font-text text-[var(--color-dark)] text-xl">Services</h3>
          {project.services?.map((services, index) => (
            <span
              key={index}
              className=" mr-2">
            
              {services}
            </span>
          ))}
        </p>
      </div>
</FadeInWhenVisible>

<FadeInWhenVisible delay={0.5}>

           <Portfolio title={project.title} website={project.website} />
</FadeInWhenVisible>

<FadeInWhenVisible delay={0.5}>
      <SectionHeader title="Shorts and Posts" />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 mt-5">
  {project.shorts?.map((short, index) => (
    <div key={index} className="relative w-full h-72">
      {short.type === "video" && (
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src={short.src.replace("shorts", "embed")}
          title={`Short ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  ))}
</div>
</FadeInWhenVisible>

<FadeInWhenVisible delay={0.5}>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
  {project.posts?.map((post, index) => (
    <div key={index}>
      {post.type === "image" && (
        <img
          src={post.src}
          alt={`Post ${index + 1}`}
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
      )}
    </div>
  ))}
</div>
</FadeInWhenVisible>

<FadeInWhenVisible delay={0.5}>
  <SectionHeader title="More Cases" />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
    {recommendations.map((recProject) => (
      <ProjectCard key={recProject.id} project={recProject as Project} />
    ))}
  </div>
</FadeInWhenVisible>

        <FadeInWhenVisible><Contact /></FadeInWhenVisible>




    </section>
  );
}
