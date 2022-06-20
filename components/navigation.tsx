import React from "react";
import Link from "next/link";

const Navigation = () => {
  const links = [
    { href: "/", name: "Jeff Mendez" },
    { href: "/about", name: "About" },
    { href: "/tags", name: "Projects" },
  ];

  return (
    <nav role="navigation" style={{ borderBottom: "1px solid #ccc" }}>
      <ol>
        {links.map(({ href, name }: { href: string; name: string }) => {
          return (
            <li style={{ marginRight: 6, display: "inline-block" }} key={href}>
              <Link href={href} key={name}>
                <a style={{ padding: "0.2em" }}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navigation;
