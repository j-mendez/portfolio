import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Main />
        <NextScript />
        {/* <script src="https://cdn.a11ywatch.com/scripts/jeffmendez.com/jeffmendez-com-ada-fix-1.min.js"></script> */}
      </Html>
    );
  }
}

export default MyDocument;
