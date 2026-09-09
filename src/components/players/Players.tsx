import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersType";
import AvailablePlayers from "./AvailablePlayers";

interface PlayerProps {
  playerPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playerPromise, coin, setCoin }: PlayerProps) => {
  const [btnType, setBtnType] = useState<"Available" | "Selected">("Available");
  const players = use(playerPromise);

  const handleBtnType = (type: "Available" | "Selected") => {
    setBtnType(type);
  };

  return (
    <div className="container mx-auto">
      {/* flex container using justify-between for header/buttons positioning */}
      <div className="flex items-center justify-between my-4">
        <h2 className="text-xl font-bold">
          {btnType === "Available" ? "Available Players" : "Selected Players"}
        </h2>

        {/* Buttons aligned to the right */}
        <div>
          <button
            onClick={() => handleBtnType("Available")}
            className={`btn ${btnType === "Available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleBtnType("Selected")}
            className={`btn ${btnType === "Selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      <div>
        {btnType === "Available" ? (
          <AvailablePlayers players={players} coin={coin} setCoin={setCoin} />
        ) : (
          <div>Selected Players Content</div>
        )}
      </div>
    </div>
  );
};

export default Players;
