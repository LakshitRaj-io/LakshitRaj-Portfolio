export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.liveDemo} target="_blank">🚀 Launch</a>
      <div className="tech-tags">
        {project.tech.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
}