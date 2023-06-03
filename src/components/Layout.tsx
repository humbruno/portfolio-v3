import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import { navMenu, siteMetadata, socialMenu } from "~/constants";
import AnimateOnAppear from "~/utils/AnimateOnAppear";

interface LayoutProps {
  pageTitle?: string;
  backgroundIndex?: number;
  children: ReactNode;
}

function Layout({ children, pageTitle, backgroundIndex }: LayoutProps) {
  const router = useRouter();
  const seo = {
    title: pageTitle || "Bruno Santos - Frontend Developer",
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    image: "",
    url: `${siteMetadata.siteUrl}${router.pathname}`,
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" key={seo.url} href={seo.url} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content={seo.siteName} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
      </Head>

      <div className={`Layout page-bg-${backgroundIndex || 4}`}>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

function Header() {
  return (
    <AnimateOnAppear>
      <header className="mx-auto flex w-full max-w-7xl justify-between px-4 py-6 font-mono">
        <Link href="/">
          <span className="sm:react-effect text-glow">Home</span>
        </Link>
        <nav>
          <ul className="flex">
            {navMenu.map(({ label, path }) => (
              <li key={path}>
                <Link href={path}>
                  <span className="code-effect text-glow px-1 text-sm sm:px-2 sm:text-base">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </AnimateOnAppear>
  );
}

function Footer() {
  return (
    <AnimateOnAppear direction="bottom">
      <footer className="mx-auto w-full max-w-7xl px-4 py-6">
        <nav>
          <ul className="flex justify-end">
            {socialMenu.map(({ label, link }) => (
              <li key={link} className="uppercase">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 font-mono"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </AnimateOnAppear>
  );
}
