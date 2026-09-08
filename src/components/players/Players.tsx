import { use } from "react";
import type { PlayerType } from "../../types/playersType";

interface PlayerProps {
  playerPromise: Promise<PlayerType[]>;
}

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise);
  console.log(players);
  return <div>
    
  </div>;
};

export default Players;
