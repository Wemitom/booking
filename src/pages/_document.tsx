import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primary bg-phoneVector sm:bg-deskVector bg-contain bg-bottom bg-no-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
