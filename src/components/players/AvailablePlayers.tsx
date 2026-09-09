import type { PlayerType } from "../../types/playersType";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  players: PlayerType[];
}

export default function AvailablePlayers({ players }: AvailablePlayersProps) {
  return (
    <div className="container mx-auto ">
      {/* AvailablePlayers  */}

      <div className="grid grid-cols-3 gap-2.5 mt-[50px]">
        {players.map((player, ind: number) => {
          return (
            <div key={ind}>
              <PlayerCard player={player}></PlayerCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
