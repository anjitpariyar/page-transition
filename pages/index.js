import Head from "next/head";
import Main from "./Home/Main";

export default function Home() {
  return (
    <div
    // className={style.Container}
    >
      <Head>
        <title>Page Transition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  );
}
