import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/images/bgDesk.svg"
          as="image"
          media="(min-width: 640px)"
        />
        <link
          rel="preload"
          href="/images/bgPhone.svg"
          as="image"
          media="(max-width: 639px)"
        />
      </Head>
      <body className="bg-primary bg-phoneVector bg-contain bg-bottom bg-no-repeat sm:bg-deskVector">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
