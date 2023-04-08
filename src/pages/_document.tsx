import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primary bg-phoneVector bg-contain bg-bottom bg-no-repeat sm:bg-deskVector">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
