import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Jeff Mendez and personal enjoyments</title>
        <meta
          name="description"
          content={
            "A section about myself day to day and as a software engineer."
          }
        />
      </Head>
      <div>
        <h1>About Jeff Mendez</h1>
        <div>
          <p>
            I am a Florida-based software engineer that loves everything about
            building things. I specialize in security, devops, data intensive
            applications, and software engineering. If you are looking for an
            experienced software engineer to create a new application, write new
            features into an existing application, or help you make your
            application better by creating tests or refactoring code then we
            should get in touch!
          </p>
        </div>
        <div>
          <p>Contact me at jeff@a11ywatch.com</p>
          <p>
            My github is{" "}
            <a
              href={"https://github.com/j-mendez"}
              title={"Jeff Mendez Github"}
            >
              j-mendez
            </a>
            . I have contributed to varius react-native projects including the
            source.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
