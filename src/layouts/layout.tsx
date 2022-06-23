import React from "react";
import Navigation from "../components/navigation.tsx";

const siteTitle = "Jeff Mendez - Software Engineer";
const name = "Jeff Mendez";

export default function Layout({ children, home, title, description }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title || siteTitle}</title>
        <meta
          name="description"
          content={
            description || "Jeff Mendez | Software Engineer | Orlando, Florida"
          }
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title || siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title || siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Navigation />
        <header style={{ paddingTop: 5 }}>
          {home ? (
            <>
              <div style={{ paddingTop: 5 }}>
                <img
                  src="/images/profile.jpg"
                  height={144}
                  width={144}
                  alt={name}
                />
              </div>
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <a href="/">
                <img
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
              {name ? (
                <h2>
                  <a href="/">{name}</a>
                </h2>
              ) : null}
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div>
            <a href="/">← Back to home</a>
          </div>
        )}
      </body>
    </html>
  );
}
