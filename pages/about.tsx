import React from "react";
import classNames from "classnames/bind";
import styles from "../styles/components/about.module.scss";
import Layout, { siteTitle } from "../components/layout";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <Layout>
      <div className={cx("about")}>
        <h1>About Jeff Mendez</h1>
        <div className={cx("about__description")}>
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
        <div className={cx("about__contribute")}>
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
