import React from "react";

const Navigation = () => {
  const links = [
    { href: "/", name: "Jeff Mendez" },
    { href: "/about", name: "About" },
    { href: "/tags", name: "Projects" },
  ];

  return (
    <nav role="navigation" style={{ borderBottom: "1px solid #ccc" }}>
      <ol>
        {links.map(({ href, name }) => {
          return (
            <li style={{ marginRight: 6, display: "inline-block" }} key={href}>
              <a href={href} key={name} style={{ padding: "0.2em" }}>
                {name}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navigation;
