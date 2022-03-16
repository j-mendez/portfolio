import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, my name is Jeff Mendez and I am software engineer and Founder of
          A11yWatch a web accessibility improvement suite.
        </p>
        <p>
          Checkout{" "}
          <a
            href="https://a11ywatch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            A11yWatch
          </a>{" "}
          to improve your web inclusion.
        </p>
        <p>
          Use the websites accessibility checker{" "}
          <a
            href="https://a11ywatch.com/website-accessibility-checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Accessibility Check
          </a>{" "}
          for free.
        </p>
      </section>
    </Layout>
  );
}
