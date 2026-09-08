import { FaFlag, FaUser } from "react-icons/fa";
import type { PlayerType } from "../../types/playersType";

const PlayerCard = ({ player }: { player: PlayerType }) => {
  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      {/* Player Image */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-[370px] w-full object-cover"
        />
      </div>

      {/* Player Name */}
      <div className="mt-8 flex items-center gap-5">
        <FaUser className="text-4xl text-gray-700" />

        <h2 className="text-3xl font-bold text-gray-900">
          {player.playerName}
        </h2>
      </div>

      {/* Country & Player Type */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <FaFlag className="text-3xl text-gray-500" />

          <p className="text-2xl text-gray-500">{player.origin}</p>
        </div>

        <span className="rounded-xl bg-gray-100 px-6 py-4 text-xl text-gray-800">
          {player.playerType}
        </span>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200"></div>

      {/* Rating */}
      <h3 className="text-2xl font-bold text-gray-900">Rating</h3>

      {/* Playing Style */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-900">
          {player.bowlingStyle}
        </p>

        <p className="text-xl text-gray-500">{player.battingStyle}</p>
      </div>

      {/* Price & Button */}
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Price: ${player.price}
        </h3>

        <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-lg font-medium text-gray-900 transition hover:bg-gray-50">
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
