import { Suspense } from "react";
import Banner from "./components/Banner";
import { Nav } from "./components/Nav";
import Players from "./components/players/Players";
import type { PlayerType } from "./types/playersType";

const playerPromise = async ():Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const playerPromise = playerFetch();
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Nav></Nav>
        <Banner></Banner>
        <Players playerPromise={playerPromise()}></Players>
      </Suspense>
    </>
  );
}

export default App;
