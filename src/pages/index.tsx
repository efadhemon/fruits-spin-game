import TopBar from "@components/TopBar";
import WheelSpinner from "@components/WheelSpinner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fruits Spin Game</title>
        <meta name="description" content="Fruits Spin Game made by  next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="game_container">
        <div className="game_wrapper">
          <TopBar />
          <WheelSpinner />
        </div>
      </main>
    </>
  );
}
