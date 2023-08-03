import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>

      <main className="h-screen">
        <div className="flex h-full items-center justify-center gap-3 text-2xl font-extrabold text-white sm:text-4xl">
          <h1>404</h1>
          <div className="h-8 w-1 bg-white" />
          <h1>Страница не найдена</h1>
        </div>
      </main>
    </>
  );
}
