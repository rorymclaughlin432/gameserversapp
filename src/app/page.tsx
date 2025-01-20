'use client';

import GameServerCard from "@/components/GameServerCard";

const servers = [
  {
    id: 1,
    name: "Survival Paradise",
    game: "Minecraft",
    players: "12/20",
    status: "online", // Explicitly use "online"
    version: "1.20.1",
    type: "Survival",
    region: "North America",
    mods: ["Essentials", "Dynmap", "GriefPrevention"],
  },
  {
    id: 2,
    name: "Creative Builders Hub",
    game: "Minecraft",
    players: "8/50",
    status: "online", // Explicitly use "online"
    version: "1.19",
    type: "Creative",
    region: "Europe",
    mods: ["WorldEdit", "VoxelSniper"],
  },
  {
    id: 3,
    name: "Hardcore Arena",
    game: "Minecraft",
    players: "3/10",
    status: "offline", // Explicitly use "offline"
    version: "1.20",
    type: "Hardcore",
    region: "Asia",
    mods: ["NoCheatPlus", "Anti-Xray"],
  },
  {
    id: 4,
    name: "Pixelmon Adventures",
    game: "Minecraft",
    players: "15/30",
    status: "online", // Explicitly use "online"
    version: "1.16.5",
    type: "Modded",
    region: "South America",
    mods: ["Pixelmon Mod", "JourneyMap"],
  },
  {
    "id": 5,
    "name": "Zombie Survival",
    "game": "Minecraft",
    "players": "24/50",
    "status": "online",
    "version": "1.18",
    "type": "Survival",
    "region": "Europe",
    "mods": ["ZombieApocalypse", "ToughAsNails"]
  },
  {
    "id": 6,
    "name": "Skyblock Legends",
    "game": "Minecraft",
    "players": "18/40",
    "status": "online",
    "version": "1.17",
    "type": "Skyblock",
    "region": "North America",
    "mods": ["SkyblockCore", "IslandManager"]
  },
];

export default function Page() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servers.map((server) => (
        <GameServerCard
          key={server.id}
          name={server.name}
          game={server.game}
          players={server.players}
          status={server.status as "online" | "offline"} // Explicitly cast if needed
          version={server.version}
          type={server.type}
          region={server.region}
          mods={server.mods}
        />
      ))}
    </div>
  );
}
