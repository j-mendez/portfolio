import React from "react";

const Home = () => {
  return (
    <>
      <section>
        <p>
          Hi, my name is Jeff Mendez and I am software engineer and Founder of
          A11yWatch a web accessibility improvement suite.
        </p>
        <p>
          Checkout{" "}
          <a href="https://a11ywatch.com" target="_blank" rel="external">
            A11yWatch
          </a>{" "}
          to improve your web inclusion.
        </p>
        <p>
          Use the{" "}
          <a
            href="https://a11ywatch.com/website-accessibility-checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            website accessibility checker
          </a>{" "}
          for free to evaluate your page.
        </p>
        <a
          href="https://github.com/j-mendez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
      </section>
    </>
  );
};

export default Home;
