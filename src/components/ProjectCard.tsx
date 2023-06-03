import { type Project } from "~/types";
import { ExternalLinkIcon, GithubIcon } from "~/components/Icons";
import AnimateOnAppear from "~/components/AnimateOnAppear";

export function ProjectCard({
  title,
  excerpt,
  tags,
  demoUrl,
  srcUrl,
}: Project) {
  return (
    <article>
      <div className="flex items-center">
        <h3 className="title h4 mb-1 flex">{title}</h3>

        {srcUrl && (
          <a
            href={srcUrl}
            className="m-1 ml-3"
            target="_blank"
            rel="noreferrer"
            title="Source Code"
          >
            <GithubIcon />
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            className="m-1"
            target="_blank"
            rel="noreferrer"
            title="Live Page"
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      <p className="mb-4">{excerpt}</p>
      <p className="text-pink-400">
        <TagList tags={tags} />
      </p>
    </article>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="my-6 md:my-12">
      {projects.map((project, i) => (
        <li key={project.title}>
          <AnimateOnAppear>{i > 0 && <hr className="my-6" />}</AnimateOnAppear>
          <AnimateOnAppear>
            <ProjectCard {...project} />
          </AnimateOnAppear>
        </li>
      ))}
    </ul>
  );
}

interface TagProps {
  tags: string[];
}

const TagList = ({ tags }: TagProps) => (
  <code className="text-sm">
    {tags.map((tag, i) => `${i > 0 ? " " : ""} #${tag}`)}
  </code>
);
