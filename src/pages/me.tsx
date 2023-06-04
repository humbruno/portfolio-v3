import Layout from "~/components/Layout";
import AnimateOnAppear from "~/components/AnimateOnAppear";
import { skills } from "~/constants";
import { type InferGetServerSidePropsType } from "next";

function Home({
  skills,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-4xl p-4">
        <AnimateOnAppear>
          <section className="mb-10 mt-24">
            <h1 className="title text-glow h1 mb-6 tracking-tight">
              Some words about me
            </h1>
            <p className="h3 subtitle mb-4">
              {`Hello! My name is Bruno, currently based in Lisbon, Portugal. I enjoy writing web applications since Myspace was a thing. My main skill is frontend development using React & TypeScript.`}
            </p>
            <p className="h3 subtitle mb-4 leading-10">
              {`Currently, I'm dipping my toes in backend development and learning Kotlin 🐍.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`Besides programming, I'm interested in culinary and enjoy exercising via rock climbing or calisthenics.`}
            </p>
          </section>
          <section className="">
            <h1 className="title text-glow h5 mb-6 tracking-tight">
              Here are some other technologies I work with:
            </h1>
            <code className="text-sm text-pink-400">
              {skills.map((tag, i) => `${i > 0 ? " " : ""} #${tag}`)}
            </code>
          </section>
        </AnimateOnAppear>
      </div>
    </Layout>
  );
}

export const getServerSideProps = () => {
  return { props: { skills } };
};

export default Home;
