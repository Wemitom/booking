import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway, Inter } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] });
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className + ' ' + inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
