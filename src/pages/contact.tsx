import AnimateOnAppear from "~/components/AnimateOnAppear";
import Layout from "../components/Layout";
import { siteMetadata, socialMenu } from "~/constants";
import { type InferGetServerSidePropsType } from "next";

function Contact({
  siteMetadata,
  socialMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout pageTitle="Say hello to Julien">
      <AnimateOnAppear className="m-auto mx-auto max-w-4xl p-4">
        <h1 className="title h1 mb-4">
          <span className="inline-block pb-3">🍺</span>
          <br />
          Say hello ―
        </h1>
        <h2 className="subtitle h3 mb-4">
          Tell me about React, TypeScript, Kotlin or cooking!
        </h2>
        <ul className="h3">
          <li className="mb-3">
            <a href={`mailto:${siteMetadata.mail}`}>{siteMetadata.mail}</a>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link} className="mb-3">
              <a href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </AnimateOnAppear>
    </Layout>
  );
}

export const getServerSideProps = () => {
  return { props: { socialMenu, siteMetadata } };
};

export default Contact;
