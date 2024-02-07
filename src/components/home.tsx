import React from "react";

const links = [
  {
    href: "https://github.com/j-mendez",
    name: "Github",
  },
  {
    href: "https://a11ywatch.com",
    name: "A11yWatch",
  },
  {
    href: "https://spiderwebai.xyz",
    name: "Spider",
  },
  {
    href: "https://www.zeemee.com/",
    name: "ZeeMee",
  },
  {
    href: "https://appadvice.com/app/arcus-load-management/1331606155",
    name: "Arcus Load Managment",
  },
  {
    href: "https://www.youtube.com/watch?app=desktop&v=pJyjsg588zs",
    name: "HoloVista",
  },
  {
    href: "https://joinknack.com",
    name: "Knack",
  },
  {
    href: "https://player.vimeo.com/video/373720284?title=0&byline=0&portrait=0&muted=1&autoplay=0&autopause=0&controls=1&loop=1",
    name: "Carsight",
  },
];

const Home = () => {
  return (
    <section>
      <ul>
        {links.map((ele) => (
          <li key={ele.name}>
            <a href={ele.href} target="_blank" rel="noopener">
              {ele.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
