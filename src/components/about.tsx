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
            applications, and UI/UX (all platforms from no OS, web, mobile, and
            desktop applications).
          </p>

          <p>
            I was also the lead developer for the{" "}
            <a
              href={"https://apps.apple.com/us/app/holovista/id1474114304"}
              target="_blank"
            >
              HolaVista
            </a>{" "}
            app that received the{" "}
            <a
              href={"https://developer.apple.com/design/awards/2021/"}
              target="_blank"
            >
              2021 Apple Inclusivity Design Award
            </a>
            . The main focus on the project was binding a second js engine that
            can run and handle immense 3d processing with native sensors.
            Another neat thing was a framework was developed so the team can
            write in HTML, CSS, and JS directly into native functionality with
            the help of react-native.
          </p>

          <p>
            If you are looking for an experienced software engineer to create a
            new application, write new features into an existing application,
            help you make your application better by creating tests or
            refactoring code then we should get in touch!
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
            . I have contributed to various react-native projects including the
            source.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
