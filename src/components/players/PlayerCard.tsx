import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { FaUser, FaGlobe } from "react-icons/fa";
import { GiCricketBat, GiCricket } from "react-icons/gi";
import { Bounce, toast } from "react-toastify";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(isSelected, setIsSelected, "isSelected, setIsSelected");

  console.log(coin, setCoin, "from card");

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchased successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Coin is not enough to purchase");
    }

    // Selected players logic
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="badge badge-primary badge-lg font-semibold shadow-lg">
            {player.playerType}
          </span>
        </div>

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </figure>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaUser />
          </div>

          <div>
            <h2 className="text-xl font-bold">{player.playerName}</h2>
            <p className="flex items-center gap-1 text-sm text-base-content/60">
              <FaGlobe className="text-xs" />
              {player.origin}
            </p>
          </div>
        </div>

        {/* Player Info */}
        <div className="grid grid-cols-2 gap-3">
          {/* Batting */}
          <div className="rounded-xl bg-base-200 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-base-content/60">
              <GiCricketBat className="text-primary" />
              Batting
            </div>

            <p className="font-semibold">{player.battingStyle}</p>
          </div>

          {/* Bowling */}
          <div className="rounded-xl bg-base-200 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-base-content/60">
              <GiCricket className="text-primary" />
              Bowling
            </div>

            <p className="font-semibold">{player.bowlingStyle}</p>
          </div>
        </div>

        <div className="my-5 border-t border-base-300" />

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-base-content/60">Player Price</p>
            <h3 className="text-2xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </h3>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className={`btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105`}
            // disabled={isSelected === true ? true : false}
            // disabled={isSelected  ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;