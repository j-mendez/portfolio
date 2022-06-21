import React from "react";

const About = () => {
  return (
    <>
      <div>
        <h1>About myself and personal life, sorta</h1>
        <div>
          <p>
            Florida based software engineer that loves everything about building
            things. I specialize in security, devops, data intensive
            applications, and software engineering. If you are looking for an
            experienced software engineer to create a new application, write new
            features into an existing application, help you make your
            application better by creating tests or refactoring code then we
            should get in touch!
          </p>
        </div>
        <div>
          Contact me at
          <address>
            <a href={"mailto:jeff@a11ywatch.com"}>jeff@a11ywatch.com</a>
          </address>
          <p>
            My github is{" "}
            <a
              href={"https://github.com/j-mendez"}
              title={"Jeff Mendez's Github"}
            >
              j-mendez
            </a>
            . I have contributed to varios react-native projects including the
            source.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
