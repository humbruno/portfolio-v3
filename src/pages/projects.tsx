import { type InferGetServerSidePropsType } from "next";
import { type ReactNode } from "react";
import { ProjectList } from "../components/ProjectCard";
import { type Project } from "~/types";
import projects from "~/constants/projects";
import Layout from "../components/Layout";
import AnimateOnAppear from "~/components/AnimateOnAppear";

function Projects({
  professionalProjects,
  personalProjects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout backgroundIndex={8}>
      <div className="mx-auto w-full max-w-4xl p-4">
        <AnimateOnAppear direction="top">
          <section className="my-12 md:my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">
              Some of my work.
            </h1>
            <p className="h3 subtitle mb-4">
              {`I love to build stuff, seriously. I like both
              shipping a PoC or writing clean code for the frontend, be it either web, mobile, automating, testing... Currently, I'm excited about Kotlin and backend related topics.`}
            </p>
          </section>
        </AnimateOnAppear>

        <Section title="professional">
          <ProjectList projects={professionalProjects} />
        </Section>

        <Section title="personal">
          <ProjectList projects={personalProjects} />
        </Section>
      </div>
    </Layout>
  );
}

export default Projects;

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="my-12 md:my-24">
    <AnimateOnAppear>
      <h2 className="md:h3 mb-4 text-xl text-gray-50">
        <CodeTitle category={title} />
      </h2>
    </AnimateOnAppear>

    {children}
  </section>
);

const CodeTitle = ({ category }: { category: string }) => (
  <pre className="flex flex-wrap">
    <code className="mr-2 text-violet-400 md:mr-4">{"->"}</code>
    projects
    <code className="text-gray-50">(</code>
    <code className="text-violet-400">{`'${category}'`}</code>
    <code className="text-gray-50">)</code>
  </pre>
);

// Filter projects at the build time
export const getServerSideProps = () => {
  const personalProjects: Project[] = [];
  const professionalProjects: Project[] = [];

  // Filter projects into categories
  for (const project of projects) {
    if (project.personal) {
      personalProjects.push(project);
    } else {
      professionalProjects.push(project);
    }
  }

  const props = {
    personalProjects,
    professionalProjects,
  };

  return { props };
};
