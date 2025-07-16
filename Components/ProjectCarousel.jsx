import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ title, projects }) {
  return (
    <section className="carousel">
      <h2>{title}</h2>
      <div className="scroll-wrapper">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}