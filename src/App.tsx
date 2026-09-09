import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import { Nav } from "./components/Nav";
import Players from "./components/players/Players";
import type { PlayerType } from "./types/playersType";

// Fetch function
const playerPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [coin, setCoin] = useState(1500);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav coin={coin} />
        <Banner />
        <Players
          playerPromise={playerPromise()}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
