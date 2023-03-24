import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + DatoCMS + GraphQL Blog</title>
        <meta name="description" content="Next.js + DatoCMS + GraphQL Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>Cooking Recipes</h1>
        <section>
          <h2>Recipes will go below</h2>
        </section>
      </main>
    </>
  );
}
