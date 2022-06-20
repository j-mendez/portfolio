import Head from "next/head";
import Link from "next/link";
import Navigation from "./navigation";
import { Fragment, ReactNode } from "react";

const name = "Jeff Mendez";
export const siteTitle = "Jeff Mendez - Software Engineer";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jeff Mendez | Software Engineer | Orlando, Florida"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navigation />
      <header>
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
            <Link href="/">
              <img
                src="/images/profile.jpg"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Fragment>
  );
}
