import React from "react";

const Hire = () => {
  return (
    <div>
      <h1>Software Engineer Jeff Mendez</h1>
      <p>
        Florida based software engineer with a strong overall grasp of tech.
      </p>
      <p>
        I can take your idea and build it from the ground up. This includes
        everything from devops to clientside and server side languages.
      </p>
      <p>I am available for short-term and long-term contract projects.</p>
      <p>
        To quickly get in touch with me, email me at{" "}
        <address>
          <a
            href="mailto:jeff@a11ywatch.com"
            style={{ color: "rgb(30, 64, 175)" }}
          >
            jeff@a11ywatch.com
          </a>
        </address>
        .
      </p>
      <h2>React and React-Native</h2>
      <p>
        Currently I am using react on a day to day basis to leverage web and
        native development. I actually have been using react-native since
        initial launch.
      </p>
      <h3>PHP / Python / MySQL / Node / Backend Development</h3>
      <p>
        I have extensive experience with PHP, Node and Python. I am familiar
        with multiple frameworks with my go-to being Hack/HHVM with Symfony or
        custom built solutions.
      </p>
      <p>
        Here is a list of my projects that I have contributed to{" "}
        <a
          href="https://github.com/j-mendez?tab=repositories"
          rel="noopener noreferrer" 
          target="_blank"
          style={{ color: "rgb(30, 64, 175)" }}
        >
          free, open source projects
        </a>{" "}
        and have contributed to many more. I do not do open-source much anymore
        since my time is very limited now a days with the family.
      </p>
      <h4 id="puppet-%2F-server-management-%2F-devops">
        Debugging / Server Management / Security / Devops / Docker
      </h4>
      <p>I can deploy servers using anything, AWS, Heroku, Now, etc.</p>
      <p>
        While bringing the product between all of its stages in a fast and
        continous pipeline to keep downtime across updates minimal.
      </p>
      <p>Build Lifecycle / Continuous Delivery / Continuous Integration</p>
      <p>
        I have deep experience setting up and managing build servers including
        <a href="https://www.docker.com/" rel="noopener noreferrer" target="_blank"> Docker </a>,
        <a href="https://www.vagrant.com/" rel="noopener noreferrer" target="_blank"> Vagrant </a>, and
        <a href="https://www.chef.io/" rel="noopener noreferrer" target="_blank"> Chef Environments</a>.
      </p>
      <p>
        I can create a complete lifecycle that takes developer code and
        automates everything from running unit/behavioral tests, checking code
        quality, setting up dependencies, backing up current deployment and
        deploying new and stable release.
      </p>
      <h5 id="html5-%2F-css-%2F-javascript">HTML / CSS / Javascript</h5>
      <p>
        I have created usable interfaces to display complex data and can create
        the Javascript to help power those interfaces. I have even bridged
        complex systems that interact with a universal api for native to html
        access. I also specialize in accessibility to make a product ada
        compliant and usable for the majority.
      </p>
      <p id="call-me%2C-maybe%3F">Contact me?</p>
      <p>
        If you are interested in hiring me, you can contact me by one of the
        following methods:
      </p>
      <ul>
        <li>
          Email -{" "}
          <address>
          <a
            href="mailto:jeff@a11ywatch.com"
            style={{ color: "rgb(30, 64, 175)" }}
          >
            jeff@a11ywatch.com
          </a>
          </address>
        </li>
      </ul>
      <p>I will answer almost immediately!</p>
    </div>
  );
};

export default Hire;
