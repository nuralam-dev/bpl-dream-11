import { use } from "react";
import type { PlayerType } from "../../types/playersType";

import AvailablePlayers from "./AvailablePlayers";

interface PlayerProps {
  playerPromise: Promise<PlayerType[]>;
}

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
