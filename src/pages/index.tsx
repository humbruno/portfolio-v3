import AnimateOnAppear from "~/utils/AnimateOnAppear";
import Layout from "~/components/Layout";
import { siteMetadata } from "~/constants";

function Home() {
  const { title, description } = siteMetadata;

  return (
    <Layout>
      <AnimateOnAppear className="m-auto max-w-4xl px-4">
        <h1 className="h1 title mb-4">{title}</h1>
        <h2 className="h3 subtitle mb-4">{description}</h2>
      </AnimateOnAppear>
    </Layout>
  );
}

export default Home;
