import Layout from "~/components/Layout";
import AnimateOnAppear from "~/components/AnimateOnAppear";

function Home() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-4xl p-4">
        <AnimateOnAppear>
          <section className="my-24">
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
        </AnimateOnAppear>
      </div>
    </Layout>
  );
}

export default Home;
