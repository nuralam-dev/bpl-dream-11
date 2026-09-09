import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/playersType";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  players: PlayerType[];
  coin: number;
    setCoin: Dispatch<SetStateAction<number>>;  
}

export default function AvailablePlayers({ players,  coin, setCoin}: AvailablePlayersProps) {
  return (
    <div className="container mx-auto ">
      {/* AvailablePlayers  */}

      <div className="grid grid-cols-3 gap-2.5 mt-[50px]">
        {players.map((player, ind: number) => {
          return (
            <div key={ind}>
              <PlayerCard player={player} coin={coin} setCoin={setCoin}></PlayerCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
