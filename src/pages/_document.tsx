import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="TheKit is a collection of React components that are designed to be simple, easy to use, and customizable. All components are built with TypeScript, Tailwind and react."
          />
          <meta
            name="keywords"
            content="react, components, javascript, html, css"
          />
          <meta name="author" content="Carlos Costa" />

          {/* open Graph */}

          <meta property="og:title" content="Thekit" />
          <meta
            property="og:type"
            content="Thekit - Some useful react components"
          />
          <meta property="og:url" content="react-thekit.netlify.app" />
          <meta property="og:image" content="/opengraph.png" />
          <meta property="og:type" content="website" />

          {/* twitter */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="react-thekit.netlify.app" />
          <meta property="twitter:url" content="react-thekit.netlify.app" />
          <meta name="twitter:title" content="Thekit" />
          <meta
            name="twitter:description"
            content="Thekit - some useful react components"
          />
          <meta name="twitter:image" content="/opengraph.png" />

          {/* icons */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* app */}

          <meta name="application-name" content="Thekit" />
          <meta name="theme-color" content="#000000" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
