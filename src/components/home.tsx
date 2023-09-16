import React from "react";

const Home = () => {
  return (
    <section>
    <p>
      Hi, my name is Jeff Mendez and I am software engineer residing in
      Florida.
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
    <h2>Blog posts</h2>
    <p>
      You can view some of my blog content at{" "}
      <a
        href="https://a11ywatch.blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        A11yWatch Blog
      </a>
      .
    </p>
    <h3>Open Source Work</h3>
    <p>
      One of the main projects I contribute to the OSS community is{" "}
      <a
        href="https://github.com/spider-rs/spider"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spider
      </a>{" "}
      which is the fastest web crawler to gather data. It is a huge
      foundation block for A11yWatch allowing audits to be done at
      impressive speeds concurrently.
    </p>

    <a
      href="https://github.com/j-mendez"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>

  </section>
  );
};

export default Home;
