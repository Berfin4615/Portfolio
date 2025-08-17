import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="grid gap-8 p-8 md:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
