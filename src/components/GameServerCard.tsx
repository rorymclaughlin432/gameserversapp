'use client';

import { useState } from "react";

interface GameServerCardProps {
  name: string;
  game: string;
  players: string;
  status: "online" | "offline";
  version: string;
  type: string;
  region: string;
  mods: string[];
}

function GameServerCard({
    name,
    game,
    players,
    status,
    version,
    type,
    region,
    mods
  }: GameServerCardProps) {
  const [serverStatus, setServerStatus] = useState<"online" | "offline">(status);
  const [showDetails, setShowDetails] = useState(false);

  const toggleServerStatus = () => {
    setServerStatus((prev) => (prev === "online" ? "offline" : "online"));
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Game: {game}</p>
      <p className="text-gray-600">Players: {players}</p>
      <div className="flex items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            serverStatus === "online" ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        <p className="text-sm font-medium text-gray-800">
          {serverStatus.charAt(0).toUpperCase() + serverStatus.slice(1)}
        </p>
      </div>
      <button
        onClick={toggleServerStatus}
        className="px-6 py-3 border border-gray-300 rounded-lg w-full hover:bg-gray-100"
      >
        {serverStatus === "online" ? "Stop Server" : "Start Server"}
      </button>
      <button
        onClick={toggleDetails}
        className="px-4 py-2 text-blue-600 border border-blue-300 rounded-lg w-full hover:bg-blue-100"
      >
        {showDetails ? "Hide Info" : "More Info"}
      </button>
      {showDetails && (
        <div className="mt-4 space-y-2 text-gray-600">
          <p>Version: {version}</p>
          <p>Type: {type}</p>
          <p>Region: {region}</p>
          <div>
            <p>Mods:</p>
            <ul className="list-disc list-inside">
              {mods.map((mod, index) => (
                <li key={index}>{mod}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameServerCard;
