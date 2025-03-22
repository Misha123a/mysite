"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type Weapon = {
  id: string;
  name: string;
  image: string;
  cs2Spray: string;
  csgoSpray: string;
  recoilHeight: number;
  recoilWidth: number;
  totalRecoil: number;
  recoilHeightDiff: number;
  recoilWidthDiff: number;
  totalRecoilDiff: number;
};

const weapons: Weapon[] = [{
  id: "ak47",
  name: "AK47",
  image: "https://i.ibb.co/Cxctp06/ak47-light.png",
  cs2Spray: "https://s1.webmshare.com/yq6eW.webm",
  csgoSpray: "https://files.catbox.moe/pk9gl8.webm",
  recoilHeight: 11.06,
  recoilWidth: 7.14,
  totalRecoil: 78.93,
  recoilHeightDiff: -0.69,
  recoilWidthDiff: -0.24,
  totalRecoilDiff: -7.74
},
{
  id: "m4a4",
  name: "M4A4",
  image: "https://i.ibb.co/G34G8yZP/m4a1-light.png",
  cs2Spray: "https://files.catbox.moe/5qmcqq.webm",
  csgoSpray: "https://files.catbox.moe/8vf73z.webm",
  recoilHeight: 9.06,
  recoilWidth: 6.98,
  totalRecoil: 70.12,
  recoilHeightDiff: -0.38,
  recoilWidthDiff: -0.22,
  totalRecoilDiff: -6.50
},
{
  id: "m4a4-s",
  name: "M4A1-S",
  image: "https://i.ibb.co/6R521KF9/m4a1-silencer-light.png",
  cs2Spray: "https://files.catbox.moe/9j2ztv.webm",
  csgoSpray: "https://files.catbox.moe/juqkjw.webm",
  recoilHeight: 5.93,
  recoilWidth: 4.62,
  totalRecoil: 27.42,
  recoilHeightDiff: -0.38,
  recoilWidthDiff: -0.13,
  totalRecoilDiff: -2.57
},
{
  id: "sg556",
  name: "SG556",
  image: "https://i.ibb.co/6JVxnFTk/sg556-light.png",
  cs2Spray: "https://files.catbox.moe/phrpf0.webm",
  csgoSpray: "https://files.catbox.moe/meo9a2.webm",
  recoilHeight: 8.59,
  recoilWidth: 9.7,
  totalRecoil: 83.34,
  recoilHeightDiff: -0.6,
  recoilWidthDiff: -0.42,
  totalRecoilDiff: -9.7
},
{
    id: "aug",
  name: "Aug",
  image: "https://i.ibb.co/Ld6PZ5ND/aug-light.png",
  cs2Spray: "https://files.catbox.moe/mgozrk.webm",
  csgoSpray: "https://files.catbox.moe/kagjpa.webm",
  recoilHeight: 7.84,
  recoilWidth: 5.67,
  totalRecoil: 44.48,
  recoilHeightDiff: -0.41,
  recoilWidthDiff: -0.26,
  totalRecoilDiff: -4.5
},
{
id: "galil",
name: "Galil",
image: "https://i.ibb.co/VWwSqxSN/galilar-light.png",
cs2Spray: "https://files.catbox.moe/4doho7.webm",
csgoSpray: "https://files.catbox.moe/jt1gm2.webm",
recoilHeight: 7.31,
recoilWidth: 7.06,
totalRecoil: 51.61,
recoilHeightDiff: -0.5,
recoilWidthDiff: -0.32,
totalRecoilDiff: -6.01
},
{
id: "famas",
name: "Famas",
image: "https://i.ibb.co/LXCmvfRP/famas-light.png",
cs2Spray: "https://files.catbox.moe/vt0w7k.webm",
csgoSpray: "https://files.catbox.moe/aalw8g.webm",
recoilHeight: 6.96,
recoilWidth: 4.89,
totalRecoil: 32.04,
recoilHeightDiff: -0.47,
recoilWidthDiff: -0.17,
totalRecoilDiff: -3.61
},
{
id: "ump",
name: "Ump",
image: "https://i.ibb.co/gbTs7gKK/ump45-light.png",
cs2Spray: "https://files.catbox.moe/8iyhmz.webm",
csgoSpray: "https://files.catbox.moe/rjnerv.webm",
recoilHeight: 8.95,
recoilWidth: 3.56,
totalRecoil: 31.86,
recoilHeightDiff: -0.68,
recoilWidthDiff: -0.07,
totalRecoilDiff: -3.04
},
{
id: "mp7",
name: "MP7",
image: "https://i.ibb.co/b4q60DD/mp7-light.png",
cs2Spray: "https://files.catbox.moe/m6hkss.webm",
csgoSpray: "https://files.catbox.moe/fvhi4z.webm",
recoilHeight: 6.27,
recoilWidth: 3.39,
totalRecoil: 21.23,
recoilHeightDiff: -0.3,
recoilWidthDiff: -0.17,
totalRecoilDiff: -2.14
},
{
id: "mp9",
name: "MP9",
image: "https://i.ibb.co/vvQXV75V/mp9-light.png",
cs2Spray: "https://files.catbox.moe/cmxv01.webm",
csgoSpray: "https://files.catbox.moe/uunir8.webm",
recoilHeight: 9.13,
recoilWidth: 7.2,
totalRecoil: 65.75,
recoilHeightDiff: -0.68,
recoilWidthDiff: -0.24,
totalRecoilDiff: -7.23
},
{
id: "p90",
name: "P90",
image: "https://i.ibb.co/FSWhGQ9/p90-light.png",
cs2Spray: "https://files.catbox.moe/crqh9c.webm",
csgoSpray: "https://files.catbox.moe/a2bfw3.webm",
recoilHeight: 7.47,
recoilWidth: 6.15,
totalRecoil: 45.96,
recoilHeightDiff: -0.41,
recoilWidthDiff: -0.16,
totalRecoilDiff: -3.79
},
{
id: "mp5",
name: "MP5",
image: "https://i.ibb.co/Hf0dc03r/mp5-light.png",
cs2Spray: "https://files.catbox.moe/ft8pq3.webm",
csgoSpray: "https://files.catbox.moe/klloqq.webm",
recoilHeight: 6.27,
recoilWidth: 3.39,
totalRecoil: 21.23,
recoilHeightDiff: -0.3,
recoilWidthDiff: -0.17,
totalRecoilDiff: -2.14
}];

export default function SprayPatternsPage() {
  const t = useTranslations("Spray");
  const [playing, setPlaying] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement>>({});

  const playVideos = (id: string) => {
    setPlaying(id);
    const cs2Video = document.getElementById(`${id}-cs2`) as HTMLVideoElement | null;
    const csgoVideo = document.getElementById(`${id}-csgo`) as HTMLVideoElement | null;

    if (cs2Video && csgoVideo) {
      cs2Video.currentTime = 0;
      csgoVideo.currentTime = 0;
      cs2Video.play();
      csgoVideo.play();

      setTimeout(() => {
        cs2Video.pause();
        csgoVideo.pause();
        setPlaying(null);
      }, 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 text-white">
      <div className="flex space-x-4 overflow-x-auto border-b border-blue-500 pb-2 mb-8">
        {weapons.map((weapon) => (
          <button
            key={weapon.id}
            onClick={() => refs.current[weapon.id]?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-semibold px-3 py-1 border-b-2 border-transparent hover:border-blue-500 text-gray-400 hover:text-white"
          >
            {weapon.name}
          </button>
        ))}
      </div>

      {weapons.map((weapon) => (
        <div
          key={weapon.id}
          ref={(el) => {
            if (el) refs.current[weapon.id] = el;
          }}
          className="mb-20 border-b border-blue-800 pb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
            <div className="md:w-1/2 space-y-4 mb-6 md:mb-0">
              <div className="flex items-center space-x-4">
                <Image src={weapon.image} alt={weapon.name} width={60} height={60} />
                <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block pb-1">{weapon.name}</h2>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="text-sm text-gray-400">Recoil Height</p>
                  <p className="text-xl font-bold">{weapon.recoilHeight.toFixed(2)}°</p>
                  <p className="text-sm text-green-400">
                    {weapon.recoilHeightDiff}° ({((weapon.recoilHeightDiff / weapon.recoilHeight) * 100).toFixed(2)}%) less than CS:GO
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Recoil Width</p>
                  <p className="text-xl font-bold">{weapon.recoilWidth.toFixed(2)}°</p>
                  <p className="text-sm text-green-400">
                    {weapon.recoilWidthDiff}° ({((weapon.recoilWidthDiff / weapon.recoilWidth) * 100).toFixed(2)}%) less than CS:GO
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Recoil Area</p>
                  <p className="text-xl font-bold">{weapon.totalRecoil.toFixed(2)}°</p>
                  <p className="text-sm text-green-400">
                    {weapon.totalRecoilDiff}° ({((weapon.totalRecoilDiff / weapon.totalRecoil) * 100).toFixed(2)}%) less than CS:GO
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
              <video
                id={`${weapon.id}-cs2`}
                src={weapon.cs2Spray}
                muted
                loop
                playsInline
                className="w-full rounded-lg border border-gray-700"
                style={{ aspectRatio: "3 / 4" }}
              />
              <video
                id={`${weapon.id}-csgo`}
                src={weapon.csgoSpray}
                muted
                loop
                playsInline
                className="w-full rounded-lg border border-gray-700"
                style={{ aspectRatio: "3 / 4" }}
              />
              {playing !== weapon.id && (
                <button
                  onClick={() => playVideos(weapon.id)}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold z-10"
                >
                  ▶ Play
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
