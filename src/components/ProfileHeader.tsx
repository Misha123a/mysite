import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Settings } from "lucide-react";

interface ProfileHeaderProps {
  nickname: string;
  avatarUrl: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  nickname,
  avatarUrl,
  activeTab,
  onTabChange,
}) => {
  const [gameMode] = useState("CS2");
  const [matchType] = useState("5v5");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const tabs = ["STATS", "GRAPHS", "WEAPONS", "MAPS", "MATCHES", "SKIN+SKILL"];

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
  };

  return (
    <div className="w-full bg-[#1a1d29] text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-16 px-4 py-3">
        {/* Left side - Avatar and Nickname */}
        <div className="flex items-center gap-4">
          <div className="relative border-2 border-pink-500 rounded-md overflow-hidden">
            <Image
              src={avatarUrl}
              alt={nickname}
              width={92}
              height={92}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-medium">{nickname}</h1>
            <div className="flex items-center gap-2 mt-1">
              <button
                className="bg-[#12151f] rounded p-1"
                onClick={() =>
                  window.open(`https://steamcommunity.com/profiles/undefined`, "_blank")
                }
              >
                <Image
                  src="https://i.ibb.co/G3nJmkhS/Steam-Logo.png"
                  alt="Steam"
                  width={34}
                  height={34}
                />
              </button>
              <button
                className="bg-[#12151f] rounded p-1"
                onClick={() => window.open(`https://www.faceit.com/ru/notfound`, "_blank")}
              >
                <Image
                  src="https://i.ibb.co/hF825wCX/unnamed.png"
                  alt="Faceit"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-start">
          <div className="flex items-center  gap-2 mt-4 md:mt-0">
            <div className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer">
              <span className="font-medium text-sm">{gameMode}</span>
              <ChevronDown size={14} className="ml-1" />
            </div>

            <div className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer">
              <span className="font-medium text-sm">{matchType}</span>
              <ChevronDown size={14} className="ml-1" />
            </div>

            <div
              className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <span className="font-medium text-sm mr-1">Filters</span>
              <Settings size={14} />
            </div>
          </div>
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`px-4 py-3 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
