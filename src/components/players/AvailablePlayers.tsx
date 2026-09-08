import type { PlayerType } from "../../types/playersType";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  players: PlayerType[];
}

export default function AvailablePlayers({ players }: AvailablePlayersProps) {
  return (
    <div className="container mx-auto ">
      {/* AvailablePlayers  */}
      <div className="flex justify-between gap-4 mb-2 ">
        <h2 className="font-bold text-xl">Available Players</h2>
        <div>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-success">Success</button>
        </div>
      </div>

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
