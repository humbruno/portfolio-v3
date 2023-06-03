import AnimateOnAppear from "~/components/AnimateOnAppear";
import Layout from "~/components/Layout";
import { siteMetadata } from "~/constants";

function Home() {
  const { title, description } = siteMetadata;

  return (
    <Layout>
      <AnimateOnAppear className="mt-36 max-w-4xl px-4 sm:m-auto">
        <h1 className="h1 title mb-4">{title}</h1>
        <h2 className="h3 subtitle mb-4">{description}</h2>
      </AnimateOnAppear>
    </Layout>
  );
}

export default Home;
