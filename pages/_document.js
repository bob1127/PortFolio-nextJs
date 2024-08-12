import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // If you need to use getInitialProps, uncomment this section
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
     
          {/* Add custom head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
