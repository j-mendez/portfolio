import React from "react";

const siteTitle = "Jeff Mendez - Software Engineer";
const name = "Jeff Mendez Portfolio";

export default function Layout({ children, home, title, description }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || siteTitle}</title>
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="description"
          content={
            description || "Jeff Mendez | Software Engineer | Orlando, Florida"
          }
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title || siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title || siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <style>{`.container { padding: 1.5rem; } a { display: inline-block; } a:hover { color: rgb(2 132 199); } li + li { margin-top: 10px; }`}</style>
      <body>
        <main className="container">
          {home ? <h1>{name}</h1> : null}
          {children}
        </main>
      </body>
    </html>
  );
}
