'use client'
export async function generateMetadata() {
  return {
    title: 'CSStats — Compare CS2 Spray Patterns & Stats',
    description: 'Interactive recoil comparison and real‑time CS2 player statistics.',
  }
  }
import { useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const rankDistribution = [
  { rank: "1k", height: 20, color: "bg-white" },
  { rank: "2k", height: 40, color: "bg-slate-300" },
  { rank: "3k", height: 60, color: "bg-slate-400" },
  { rank: "4k", height: 80, color: "bg-sky-300" },
  { rank: "5k", height: 70, color: "bg-sky-400" },
  { rank: "6k", height: 75, color: "bg-sky-500" },
  { rank: "7k", height: 90, color: "bg-sky-600" },
  { rank: "8k", height: 100, color: "bg-sky-700" },
  { rank: "9k", height: 95, color: "bg-blue-500" },
  { rank: "10k", height: 90, color: "bg-blue-600" },
  { rank: "11k", height: 85, color: "bg-blue-700" },
  { rank: "12k", height: 80, color: "bg-blue-800" },
  { rank: "13k", height: 75, color: "bg-indigo-500" },
  { rank: "14k", height: 70, color: "bg-indigo-600" },
  { rank: "15k", height: 65, color: "bg-purple-500" },
  { rank: "16k", height: 60, color: "bg-purple-600" },
  { rank: "17k", height: 55, color: "bg-purple-700" },
  { rank: "18k", height: 50, color: "bg-fuchsia-600" },
  { rank: "19k", height: 45, color: "bg-fuchsia-700" },
  { rank: "20k", height: 40, color: "bg-pink-600" },
  { rank: "21k", height: 35, color: "bg-pink-700" },
  { rank: "22k", height: 30, color: "bg-pink-800" },
  { rank: "23k", height: 25, color: "bg-rose-600" },
  { rank: "24k", height: 20, color: "bg-rose-700" },
  { rank: "25k", height: 15, color: "bg-red-600" },
  { rank: "26k", height: 12, color: "bg-red-700" },
  { rank: "27k", height: 10, color: "bg-red-800" },
  { rank: "28k", height: 8, color: "bg-orange-600" },
  { rank: "29k", height: 7, color: "bg-orange-700" },
  { rank: "30k", height: 6, color: "bg-yellow-600" },
  { rank: "31k", height: 5, color: "bg-yellow-700" },
  { rank: "32k", height: 4, color: "bg-yellow-800" },
  { rank: "33k", height: 3, color: "bg-amber-600" },
  { rank: "34k", height: 2, color: "bg-amber-700" },
  { rank: "35k", height: 1, color: "bg-amber-800" },
  { rank: "36k", height: 1, color: "bg-lime-600" },
  { rank: "37k", height: 1, color: "bg-lime-700" },
]
const bgImageUrl = 'https://static.csstats.gg/images/ranks/cs2/rating.unusual.png'

const players = [
  {
    "id": 1,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 105,
    "currentRank": "36,137",
    "bestRank": "36,585",
    "lastMatch": "match_c94211a5"
  },
  {
    "id": 2,
    "name": "NACHO™NachoGOD",
    "avatar": "https://avatars.steamstatic.com/c7beaca392cb67f459403e4a2b620804faf414e2.jpg",
    "tracked": true,
    "wins": 102,
    "currentRank": "35,091",
    "bestRank": "35,091",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 3,
    "name": "石頭𝕋𝟘𝕞𝕄𝕪",
    "avatar": "https://avatars.steamstatic.com/2df2f126abccba9d75baeefbbffafd3b464b6ccf.jpg",
    "tracked": false,
    "wins": 206,
    "currentRank": "34,889",
    "bestRank": "34,889",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 4,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 123,
    "currentRank": "34,788",
    "bestRank": "34,788",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 5,
    "name": "memesense best cheat",
    "avatar": "https://avatars.steamstatic.com/98f6170f469fdb479f7dadced21c23f4e2a5c328.jpg",
    "tracked": false,
    "wins": 108,
    "currentRank": "34,375",
    "bestRank": "34,375",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 6,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 121,
    "currentRank": "34,327",
    "bestRank": "34,327",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 7,
    "name": "jasu juntti pökö puntti",
    "avatar": "https://avatars.steamstatic.com/08e8cb831c4d491d0370aad4324612ca8cee87e8.jpg",
    "tracked": false,
    "wins": 90,
    "currentRank": "34,175",
    "bestRank": "34,175",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 8,
    "name": "MIDNIGHT BEST SOFTWARE!",
    "avatar": "https://avatars.steamstatic.com/a2ec0b4bdeab04658c8df9cb23a8be2186edc384.jpg",
    "tracked": false,
    "wins": 112,
    "currentRank": "34,015",
    "bestRank": "34,015",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 9,
    "name": "kenny",
    "avatar": "https://avatars.steamstatic.com/0d9db3fc7541d4f204a8abec0757f2fe156905db.jpg",
    "tracked": true,
    "wins": 155,
    "currentRank": "33,563",
    "bestRank": "33,563",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 10,
    "name": "katti",
    "avatar": "https://avatars.steamstatic.com/5076cb4b31180b9fb9b6520693e7906f4c89b8ba.jpg",
    "tracked": true,
    "wins": 54,
    "currentRank": "33,235",
    "bestRank": "33,235",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 11,
    "name": "NACHO™𝙆𝙪𝙢𝙖𝙣𝙤𝙨𝙪",
    "avatar": "https://avatars.steamstatic.com/6b4ab9e02fb0d6f93a4632bd34fdeee459e7dd6d.jpg",
    "tracked": false,
    "wins": 107,
    "currentRank": "33,151",
    "bestRank": "33,151",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 12,
    "name": "Asshshwuduwjduwuduwuud",
    "avatar": "https://avatars.steamstatic.com/f385a801f5a9f7b642947e3dcb320055ec55ae8d.jpg",
    "tracked": false,
    "wins": 84,
    "currentRank": "33,047",
    "bestRank": "33,047",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 13,
    "name": "Gлюк㋡",
    "avatar": "https://avatars.steamstatic.com/797916b959313f888b9d4b6bebbe867de45873cc.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "32,981",
    "bestRank": "32,981",
    "lastMatch": "match_09e0dda1"
  },
  {
    "id": 14,
    "name": "Ackerman",
    "avatar": "https://avatars.steamstatic.com/05092283a376b7f2c3266993c5de67fcaf58b9af.jpg",
    "tracked": false,
    "wins": 88,
    "currentRank": "32,912",
    "bestRank": "32,912",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 15,
    "name": "𝗷𝗶𝗻",
    "avatar": "https://avatars.steamstatic.com/a41b649c0d432b18a6c017bbaa653be49c386d44.jpg",
    "tracked": true,
    "wins": 178,
    "currentRank": "32,879",
    "bestRank": "32,879",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 16,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 78,
    "currentRank": "32,854",
    "bestRank": "32,978",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 17,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 82,
    "currentRank": "32,760",
    "bestRank": "32,760",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 18,
    "name": "cat",
    "avatar": "https://avatars.steamstatic.com/fdb97bdc7500a4a49988c41740bb65d59bcbe16e.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "32,736",
    "bestRank": "32,736",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 19,
    "name": "𝙍𝙚𝙛𝙧𝙖𝙞𝙣",
    "avatar": "https://avatars.steamstatic.com/46ea4a307cfa95f6ca31160591098c3aa5e19a69.jpg",
    "tracked": true,
    "wins": 51,
    "currentRank": "32,717",
    "bestRank": "32,717",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 20,
    "name": "76561198174450018",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "32,655",
    "bestRank": "32,655",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 21,
    "name": "盗我号的没有码",
    "avatar": "https://avatars.steamstatic.com/3619ddaea5e2cedd50c2b72a7947762c15cc34e5.jpg",
    "tracked": false,
    "wins": 62,
    "currentRank": "32,639",
    "bestRank": "32,639",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 22,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 48,
    "currentRank": "32,482",
    "bestRank": "32,482",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 23,
    "name": "não me inveje pfv",
    "avatar": "https://avatars.steamstatic.com/43756040f9422240262100ed22440684081f34fa.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "32,459",
    "bestRank": "32,459",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 24,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 88,
    "currentRank": "32,362",
    "bestRank": "32,362",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 25,
    "name": "Penguin",
    "avatar": "https://avatars.steamstatic.com/9db464b05b5d42d3405de2669558553eb6d48e43.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "32,343",
    "bestRank": "32,343",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 26,
    "name": "Malok",
    "avatar": "https://avatars.steamstatic.com/2ba87e634bf9d94eb8b871818b8e43bdfff45112.jpg",
    "tracked": true,
    "wins": 171,
    "currentRank": "32,338",
    "bestRank": "32,338",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 27,
    "name": "STO.FUSE",
    "avatar": "https://avatars.steamstatic.com/6944cf29af19b8d24d26a893d7d0b1a6231b552e.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "32,303",
    "bestRank": "32,303",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 28,
    "name": "NACHO™Gits",
    "avatar": "https://avatars.steamstatic.com/83fa6ae7967664c2e0a74ff885fe16640206180a.jpg",
    "tracked": false,
    "wins": 92,
    "currentRank": "32,221",
    "bestRank": "32,221",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 29,
    "name": "blacktext",
    "avatar": "https://avatars.steamstatic.com/e643c812feece27c17ad274ee113b3c2efb3d202.jpg",
    "tracked": true,
    "wins": 125,
    "currentRank": "32,203",
    "bestRank": "32,203",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 30,
    "name": "Wow",
    "avatar": "https://avatars.steamstatic.com/c25d7096d6c1e9c38594b42a7bef843fa604739a.jpg",
    "tracked": false,
    "wins": 62,
    "currentRank": "32,166",
    "bestRank": "32,732",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 31,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 55,
    "currentRank": "32,094",
    "bestRank": "32,094",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 32,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 60,
    "currentRank": "32,065",
    "bestRank": "32,065",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 33,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 51,
    "currentRank": "32,056",
    "bestRank": "32,056",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 34,
    "name": "shhhh!!!",
    "avatar": "https://avatars.steamstatic.com/ae0c04afdb322abd043ebaa48c52e60f89ea0b41.jpg",
    "tracked": false,
    "wins": 110,
    "currentRank": "32,008",
    "bestRank": "32,008",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 35,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 58,
    "currentRank": "31,916",
    "bestRank": "31,916",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 36,
    "name": "︻デ 一 ☭ИЗЕКИЛ",
    "avatar": "https://avatars.steamstatic.com/3574c08a0b76bf6deb3aafb81b3c626798b1d36b.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "31,906",
    "bestRank": "31,906",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 37,
    "name": "Kvazimodo",
    "avatar": "https://avatars.steamstatic.com/8712bbc5d260bc86c5f4839811cf73d7a8b85929.jpg",
    "tracked": false,
    "wins": 104,
    "currentRank": "31,896",
    "bestRank": "32,498",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 38,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 67,
    "currentRank": "31,888",
    "bestRank": "31,996",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 39,
    "name": "legitness",
    "avatar": "https://avatars.steamstatic.com/aaf419e1c141160d5e6d86a9f1c3ceece9571d25.jpg",
    "tracked": true,
    "wins": 105,
    "currentRank": "31,883",
    "bestRank": "31,883",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 40,
    "name": "YanHarrington",
    "avatar": "https://avatars.steamstatic.com/95bb1da1068121c2731ccc19f2fa230c2dcf4a01.jpg",
    "tracked": false,
    "wins": 142,
    "currentRank": "31,870",
    "bestRank": "32,303",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 41,
    "name": "𝘺𝘰𝘥𝘪𝘯𝘩𝘢",
    "avatar": "https://avatars.steamstatic.com/e8e53f1ecef21870ea98d98c466319675b569562.jpg",
    "tracked": false,
    "wins": 97,
    "currentRank": "31,842",
    "bestRank": "31,842",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 42,
    "name": "Ryan & Garfield [Diddy is owner]",
    "avatar": "https://avatars.steamstatic.com/be82c07dd0ee5bb0e885d60b6ac88228dab343d4.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "31,810",
    "bestRank": "31,810",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 43,
    "name": "教父",
    "avatar": "https://avatars.steamstatic.com/59305ce329204cff4d0370a0ce4f1bd025758cec.jpg",
    "tracked": false,
    "wins": 102,
    "currentRank": "31,799",
    "bestRank": "31,799",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 44,
    "name": "Kazza",
    "avatar": "https://avatars.steamstatic.com/30f0a06c86929c2c40bbe1cafa7a6a60a4b6c513.jpg",
    "tracked": true,
    "wins": 92,
    "currentRank": "31,731",
    "bestRank": "32,078",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 45,
    "name": "tom'",
    "avatar": "https://avatars.steamstatic.com/9cc553191c4cf5bde0139853f26cca063b81517f.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "31,725",
    "bestRank": "31,725",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 46,
    "name": "Lunæra | Faith of Artemis",
    "avatar": "https://avatars.steamstatic.com/40e18f7c111ebbaa96860dd8b0299e4bb40c28d1.jpg",
    "tracked": false,
    "wins": 111,
    "currentRank": "31,673",
    "bestRank": "31,673",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 47,
    "name": "makol",
    "avatar": "https://avatars.steamstatic.com/ecffd148d0da62c0d8a34c7a392a564389d70809.jpg",
    "tracked": false,
    "wins": 138,
    "currentRank": "31,672",
    "bestRank": "32,782",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 48,
    "name": "ilaychi uchiha",
    "avatar": "https://avatars.steamstatic.com/59180b8ee35de421d44d17d2ea94b02f737c8b11.jpg",
    "tracked": false,
    "wins": 126,
    "currentRank": "31,656",
    "bestRank": "31,656",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 49,
    "name": "donk666",
    "avatar": "https://avatars.steamstatic.com/e9bcd665fef7b24e87e6d47f64b0d9e5de47e07d.jpg",
    "tracked": false,
    "wins": 140,
    "currentRank": "31,649",
    "bestRank": "33,737",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 50,
    "name": "Ses岑、ly",
    "avatar": "https://avatars.steamstatic.com/8896fe2a855fbb58ff1950e505477baefe5744ca.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "31,630",
    "bestRank": "31,630",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 51,
    "name": "hM1t",
    "avatar": "https://avatars.steamstatic.com/79d3fe5839617eb83a9661071ed021dd56ac8a5b.jpg",
    "tracked": false,
    "wins": 59,
    "currentRank": "31,628",
    "bestRank": "31,628",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 52,
    "name": "savage",
    "avatar": "https://avatars.steamstatic.com/e2e00fb09a7cf964b7f534628f6e57542dcf0ca1.jpg",
    "tracked": true,
    "wins": 49,
    "currentRank": "31,614",
    "bestRank": "31,614",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 53,
    "name": "beastcat",
    "avatar": "https://avatars.steamstatic.com/dbc0f110bad9daab1d1bce4eddd82c275e13bac1.jpg",
    "tracked": true,
    "wins": 96,
    "currentRank": "31,613",
    "bestRank": "31,613",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 54,
    "name": "the beast",
    "avatar": "https://avatars.steamstatic.com/fff62dd8e439adebf264395ac4c82fdd1f820830.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "31,607",
    "bestRank": "31,607",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 55,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 75,
    "currentRank": "31,605",
    "bestRank": "31,828",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 56,
    "name": "⛧noChance⛧",
    "avatar": "https://avatars.steamstatic.com/3f33cf8c6b8789b48a8cfc763977e8d7c4231cfe.jpg",
    "tracked": false,
    "wins": 114,
    "currentRank": "31,586",
    "bestRank": "31,586",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 57,
    "name": "𝓢  𝓸 𝓶 𝓷 𝓪 𝓶",
    "avatar": "https://avatars.steamstatic.com/37ed445afc7529ec7e4208ba0912466ec18a935d.jpg",
    "tracked": false,
    "wins": 147,
    "currentRank": "31,582",
    "bestRank": "35,077",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 58,
    "name": "fisken",
    "avatar": "https://avatars.steamstatic.com/66ad4836ea4b03418b72839e9349d3554a7f610f.jpg",
    "tracked": true,
    "wins": 130,
    "currentRank": "31,582",
    "bestRank": "31,582",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 59,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 46,
    "currentRank": "31,561",
    "bestRank": "31,561",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 60,
    "name": "SYBAU",
    "avatar": "https://avatars.steamstatic.com/0185be12145c300f946d9a6d13d984197617a885.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "31,496",
    "bestRank": "31,496",
    "lastMatch": "match_09e0dda1"
  },
  {
    "id": 61,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 108,
    "currentRank": "31,482",
    "bestRank": "31,646",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 62,
    "name": "Алёх",
    "avatar": "https://avatars.steamstatic.com/81ab40d3d2bd02ef8651e6c73b14992112f86504.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "31,480",
    "bestRank": "31,480",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 63,
    "name": "Laddare",
    "avatar": "https://avatars.steamstatic.com/f4f4f33c53d8ee6b4aa101074d278b5f8bc8081c.jpg",
    "tracked": false,
    "wins": 96,
    "currentRank": "31,458",
    "bestRank": "31,458",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 64,
    "name": "Add me Sparkles",
    "avatar": "https://avatars.steamstatic.com/2ef10889cea057476cb4324d705653dbf280bd85.jpg",
    "tracked": false,
    "wins": 110,
    "currentRank": "31,437",
    "bestRank": "37,907",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 65,
    "name": "V1",
    "avatar": "https://avatars.steamstatic.com/fe32d66e30974b376d3f79762f4b6c8d8d2012cb.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "31,436",
    "bestRank": "31,436",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 66,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 131,
    "currentRank": "31,395",
    "bestRank": "31,455",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 67,
    "name": "vmsadzin -69 :(",
    "avatar": "https://avatars.steamstatic.com/12cc7e6e74ecce0c5e319ed6d00e77540bf17c7b.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "31,392",
    "bestRank": "31,392",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 68,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 37,
    "currentRank": "31,384",
    "bestRank": "31,384",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 69,
    "name": "aleks",
    "avatar": "https://avatars.steamstatic.com/5ea3ac3a47916bb545e172e81c247fe3457a9806.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "31,369",
    "bestRank": "32,721",
    "lastMatch": "match_0c146aec"
  },
  {
    "id": 70,
    "name": "ck9ine",
    "avatar": "https://avatars.steamstatic.com/207399d485dabb4aea08f4d62b1e8ce164009b93.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "31,316",
    "bestRank": "31,316",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 71,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 67,
    "currentRank": "31,299",
    "bestRank": "31,873",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 72,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 48,
    "currentRank": "31,293",
    "bestRank": "31,509",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 73,
    "name": "LummyTum M4A4",
    "avatar": "https://avatars.steamstatic.com/3848f14a2295cb814299d161314687911bcf0723.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "31,284",
    "bestRank": "31,284",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 74,
    "name": "Eric Cartman",
    "avatar": "https://avatars.steamstatic.com/9f9910cfb3e7065d0e129ae013aec74b6beb4392.jpg",
    "tracked": true,
    "wins": 45,
    "currentRank": "31,268",
    "bestRank": "31,268",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 75,
    "name": "santins",
    "avatar": "https://avatars.steamstatic.com/adc7169eafbb8d5b9a89e946f36e184ddd222d1b.jpg",
    "tracked": false,
    "wins": 68,
    "currentRank": "31,263",
    "bestRank": "31,263",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 76,
    "name": "SIGMA SIGMA BOI SIGMA BOI",
    "avatar": "https://avatars.steamstatic.com/3c06677aba56497457ad03de72b6dc9c5f940ec1.jpg",
    "tracked": true,
    "wins": 84,
    "currentRank": "31,246",
    "bestRank": "31,246",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 77,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 38,
    "currentRank": "31,244",
    "bestRank": "31,244",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 78,
    "name": "бобр",
    "avatar": "https://avatars.steamstatic.com/3a05acf2e8154db27e91e2d8dc7e15b942108e29.jpg",
    "tracked": true,
    "wins": 60,
    "currentRank": "31,242",
    "bestRank": "31,820",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 79,
    "name": "Nevo",
    "avatar": "https://avatars.steamstatic.com/661f9c67c4543b1940410aadccc16c78d87b32bc.jpg",
    "tracked": false,
    "wins": 105,
    "currentRank": "31,232",
    "bestRank": "31,232",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 80,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 59,
    "currentRank": "31,229",
    "bestRank": "31,229",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 81,
    "name": "nm",
    "avatar": "https://avatars.steamstatic.com/770603e543574361c8b3c73fab840b1f96f9ff77.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "31,227",
    "bestRank": "31,227",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 82,
    "name": "흑공주",
    "avatar": "https://avatars.steamstatic.com/b1c951762b7c4916c3b01b1c5663164278ab5354.jpg",
    "tracked": true,
    "wins": 112,
    "currentRank": "31,222",
    "bestRank": "31,792",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 83,
    "name": "gamesense.pub abuser",
    "avatar": "https://avatars.steamstatic.com/215577149391e4a08eb1f91bd30f06956bc35f8d.jpg",
    "tracked": false,
    "wins": 108,
    "currentRank": "31,221",
    "bestRank": "31,221",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 84,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 54,
    "currentRank": "31,221",
    "bestRank": "32,042",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 85,
    "name": "baldy",
    "avatar": "https://avatars.steamstatic.com/6ddc5980e1dbfc58ebd406820e0bd905e1b4dd1f.jpg",
    "tracked": false,
    "wins": 92,
    "currentRank": "31,209",
    "bestRank": "31,272",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 86,
    "name": "Paul Kellerman",
    "avatar": "https://avatars.steamstatic.com/6970afb6bd88036685f85a4805af775f194a9d2d.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "31,194",
    "bestRank": "31,303",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 87,
    "name": "tv.production/archie",
    "avatar": "https://avatars.steamstatic.com/2403b61f9c46bc4d3a3d06d2fb1622c03cc1bf58.jpg",
    "tracked": false,
    "wins": 134,
    "currentRank": "31,191",
    "bestRank": "31,748",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 88,
    "name": "FARTOV",
    "avatar": "https://avatars.steamstatic.com/d29f281d809ae33c338894ac2a87524f5cc3927b.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "31,190",
    "bestRank": "31,693",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 89,
    "name": "Maximus_od",
    "avatar": "https://avatars.steamstatic.com/41e10b8af08ccdba51773be57b1ceeb209af35bd.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "31,155",
    "bestRank": "31,155",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 90,
    "name": "JebacPedofilii",
    "avatar": "https://avatars.steamstatic.com/854bf1c305a22a336a18f48943895397aaea7c86.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "31,145",
    "bestRank": "31,145",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 91,
    "name": "Kos",
    "avatar": "https://avatars.steamstatic.com/00f693cf5a13711aa534eabdaa97e41fa96f6967.jpg",
    "tracked": true,
    "wins": 115,
    "currentRank": "31,143",
    "bestRank": "31,143",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 92,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 99,
    "currentRank": "31,123",
    "bestRank": "31,241",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 93,
    "name": "agap",
    "avatar": "https://avatars.steamstatic.com/27df600fe353cd5c61dbda3fe6636e0a9e61f075.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "31,116",
    "bestRank": "31,492",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 94,
    "name": "aika",
    "avatar": "https://avatars.steamstatic.com/0ab3df2902f6944077e7a84c5ceff353e1dc7737.jpg",
    "tracked": true,
    "wins": 39,
    "currentRank": "31,097",
    "bestRank": "31,097",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 95,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 117,
    "currentRank": "31,093",
    "bestRank": "32,803",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 96,
    "name": "Cynthethic",
    "avatar": "https://avatars.steamstatic.com/6d61ccc9e681ac6943e7e28248f4e150b3bfb1ca.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "31,086",
    "bestRank": "31,086",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 97,
    "name": "diddydiddy",
    "avatar": "https://avatars.steamstatic.com/7b6696ce671152aca15ae0bdb5c61b09b84c25f3.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "31,081",
    "bestRank": "31,081",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 98,
    "name": "TecoBrabo",
    "avatar": "https://avatars.steamstatic.com/8dfe278c7493b6984540e57ecd57b791df13841e.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "31,080",
    "bestRank": "31,543",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 99,
    "name": "Ryuk",
    "avatar": "https://avatars.steamstatic.com/df33dd60461aacd5ae86032649c370b9bee336c4.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "31,073",
    "bestRank": "31,570",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 100,
    "name": "Cavalo amigável",
    "avatar": "https://avatars.steamstatic.com/033303aefc55b15c3b5ca3aa9b07b7eec5e906bf.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "31,072",
    "bestRank": "31,072",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 101,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 101,
    "currentRank": "31,060",
    "bestRank": "31,812",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 102,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 81,
    "currentRank": "31,052",
    "bestRank": "31,052",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 103,
    "name": "Jake",
    "avatar": "https://avatars.steamstatic.com/929a85c5289702b63b6623a16183b7745848dca1.jpg",
    "tracked": false,
    "wins": 103,
    "currentRank": "31,050",
    "bestRank": "31,539",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 104,
    "name": "roberto",
    "avatar": "https://avatars.steamstatic.com/78091eaad528a9f9ca2bb1c937d98c1412fb491c.jpg",
    "tracked": true,
    "wins": 119,
    "currentRank": "31,049",
    "bestRank": "31,049",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 105,
    "name": "Kyrokkk",
    "avatar": "https://avatars.steamstatic.com/9037e44d056c5866208f211281218924aa774d07.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "31,044",
    "bestRank": "31,044",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 106,
    "name": "MATTERN",
    "avatar": "https://avatars.steamstatic.com/c0a5a4e4de7718265435c96a874a0df7efa81b96.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "31,043",
    "bestRank": "31,043",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 107,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 92,
    "currentRank": "31,042",
    "bestRank": "31,042",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 108,
    "name": "头大",
    "avatar": "https://avatars.steamstatic.com/b6bdef7b7337226ad4e0a5efeb6d6992cfe69211.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "31,032",
    "bestRank": "31,032",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 109,
    "name": "양양양",
    "avatar": "https://avatars.steamstatic.com/00386ab9d9d8ce34b2b0225a6f4b2b80686d90cc.jpg",
    "tracked": false,
    "wins": 98,
    "currentRank": "31,028",
    "bestRank": "31,028",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 110,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 92,
    "currentRank": "31,026",
    "bestRank": "34,579",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 111,
    "name": "Ah",
    "avatar": "https://avatars.steamstatic.com/9783523e4e8e309ed586ce97de76445c9b25e34b.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "31,024",
    "bestRank": "31,024",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 112,
    "name": "anarchy",
    "avatar": "https://avatars.steamstatic.com/7a9eff4ad4e1cf343222530f94240a25bfe2cbb5.jpg",
    "tracked": true,
    "wins": 129,
    "currentRank": "31,018",
    "bestRank": "31,018",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 113,
    "name": "枫",
    "avatar": "https://avatars.steamstatic.com/bfca5d2ec51faa4e8f499a4f2f3b1d6ddc451c5f.jpg",
    "tracked": false,
    "wins": 96,
    "currentRank": "31,017",
    "bestRank": "31,125",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 114,
    "name": "EaS1esT|Top 100 Premier",
    "avatar": "https://avatars.steamstatic.com/a5a13c02a3e28482fd69643cf5d2fc0acd29b159.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "31,007",
    "bestRank": "31,007",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 115,
    "name": "🍥",
    "avatar": "https://avatars.steamstatic.com/8f3883526f955862c1efffa79aa3ef8bbb7f53ce.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "31,006",
    "bestRank": "31,006",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 116,
    "name": "𝕷𝖊𝖌𝖊𝖓𝖉",
    "avatar": "https://avatars.steamstatic.com/a5bd84961b7a09db3e5dca56dc364926be43de13.jpg",
    "tracked": false,
    "wins": 164,
    "currentRank": "31,002",
    "bestRank": "31,002",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 117,
    "name": "laski",
    "avatar": "https://avatars.steamstatic.com/a13a5b4a8b63ce7c6f2dfecfffe59438e2833437.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "30,999",
    "bestRank": "30,999",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 118,
    "name": "zen",
    "avatar": "https://avatars.steamstatic.com/d581534639612dc7470453413aa016705f271a9a.jpg",
    "tracked": false,
    "wins": 84,
    "currentRank": "30,998",
    "bestRank": "31,115",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 119,
    "name": "Luks vida",
    "avatar": "https://avatars.steamstatic.com/bbfa8d6a5e71eecee31199257d7a9f709f1b976e.jpg",
    "tracked": false,
    "wins": 91,
    "currentRank": "30,995",
    "bestRank": "30,995",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 120,
    "name": "steve-",
    "avatar": "https://avatars.steamstatic.com/503911beded1c80cb8684f289000613a6f532e57.jpg",
    "tracked": true,
    "wins": 142,
    "currentRank": "30,993",
    "bestRank": "31,065",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 121,
    "name": "p3x",
    "avatar": "https://avatars.steamstatic.com/a431c82b65f574f8ecb9f66e83b71c3bd9d2f0ab.jpg",
    "tracked": false,
    "wins": 155,
    "currentRank": "30,982",
    "bestRank": "31,020",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 122,
    "name": "SHREK",
    "avatar": "https://avatars.steamstatic.com/d80b4ed1b78f212effd1c8cd6d22436464be4c02.jpg",
    "tracked": false,
    "wins": 68,
    "currentRank": "30,982",
    "bestRank": "30,982",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 123,
    "name": "GABEN",
    "avatar": "https://avatars.steamstatic.com/47d71f901c69689c5c88de0c76c695209000bf59.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,980",
    "bestRank": "31,798",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 124,
    "name": "Du_ArT",
    "avatar": "https://avatars.steamstatic.com/5ffcb49add54757e37abddc487903f878cd9e83f.jpg",
    "tracked": true,
    "wins": 45,
    "currentRank": "30,977",
    "bestRank": "31,332",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 125,
    "name": "16k uid, u?",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,969",
    "bestRank": "30,969",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 126,
    "name": "mari",
    "avatar": "https://avatars.steamstatic.com/f14577434e3f26db0caefc5b43245fb413dd78e8.jpg",
    "tracked": true,
    "wins": 179,
    "currentRank": "30,966",
    "bestRank": "32,044",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 127,
    "name": "<3k",
    "avatar": "https://avatars.steamstatic.com/8ddc668c135f905730d5f5af73359b12020e5d41.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,959",
    "bestRank": "31,336",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 128,
    "name": "pepi",
    "avatar": "https://avatars.steamstatic.com/3cc04b652af134c0e4ad25eee7c416ca44a9b15c.jpg",
    "tracked": true,
    "wins": 55,
    "currentRank": "30,957",
    "bestRank": "31,555",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 129,
    "name": "段煜",
    "avatar": "https://avatars.steamstatic.com/36e01eed6031d59e9bc1e8347c9a237221b3f5d4.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,955",
    "bestRank": "30,955",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 130,
    "name": "Cheoool",
    "avatar": "https://avatars.steamstatic.com/2b1bdc540b9cb1ed5f7a85e85004c5e2ce66f17e.jpg",
    "tracked": false,
    "wins": 130,
    "currentRank": "30,952",
    "bestRank": "31,403",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 131,
    "name": "Varitoo",
    "avatar": "https://avatars.steamstatic.com/ea548dd7c2dad0cf98d538611e7bba0ff5bfa936.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "30,949",
    "bestRank": "30,949",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 132,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 54,
    "currentRank": "30,944",
    "bestRank": "31,549",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 133,
    "name": "DEFINE",
    "avatar": "https://avatars.steamstatic.com/c1061e2608d1c7298ba4d891aa76ada7da8b587c.jpg",
    "tracked": false,
    "wins": 152,
    "currentRank": "30,940",
    "bestRank": "31,238",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 134,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 76,
    "currentRank": "30,936",
    "bestRank": "31,907",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 135,
    "name": "Vladislavovich TRXD",
    "avatar": "https://avatars.steamstatic.com/3f0d366fb1bf6be000a8632c7fc9a2c72030329e.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "30,935",
    "bestRank": "31,472",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 136,
    "name": "Destroyers",
    "avatar": "https://avatars.steamstatic.com/a0e0b35d6728c5cb7f32965e57bfc299c458bd8c.jpg",
    "tracked": false,
    "wins": 86,
    "currentRank": "30,934",
    "bestRank": "30,987",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 137,
    "name": "150k",
    "avatar": "https://avatars.steamstatic.com/eaf019131884fd799eefeaf607d4d6c134d12009.jpg",
    "tracked": true,
    "wins": 192,
    "currentRank": "30,926",
    "bestRank": "30,926",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 138,
    "name": "Ispolnitel",
    "avatar": "https://avatars.steamstatic.com/458335235656f6e5eebdb8adc6eb944e98efb2d6.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "30,926",
    "bestRank": "30,986",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 139,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 84,
    "currentRank": "30,925",
    "bestRank": "30,925",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 140,
    "name": "Klapps ♕ 4AM",
    "avatar": "https://avatars.steamstatic.com/e9c6f4a2ac8f628d745460ada0b47e83834e5207.jpg",
    "tracked": false,
    "wins": 150,
    "currentRank": "30,924",
    "bestRank": "32,007",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 141,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 111,
    "currentRank": "30,920",
    "bestRank": "30,920",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 142,
    "name": "oreosss",
    "avatar": "https://avatars.steamstatic.com/e98c144d962a3a15946f7d7253cee1c3dbde221d.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "30,919",
    "bestRank": "31,101",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 143,
    "name": "cbS",
    "avatar": "https://avatars.steamstatic.com/770960d0bc55d7af792e6c55b801882c12f2f40c.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "30,918",
    "bestRank": "30,918",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 144,
    "name": "donchan",
    "avatar": "https://avatars.steamstatic.com/13cbf2be0c9023cb35bc465eb280ba25e93b537a.jpg",
    "tracked": false,
    "wins": 40,
    "currentRank": "30,917",
    "bestRank": "30,917",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 145,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 48,
    "currentRank": "30,916",
    "bestRank": "31,838",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 146,
    "name": "LEE",
    "avatar": "https://avatars.steamstatic.com/4ab3db0761bdfb0b02c32de00e0924e1270cf81a.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "30,915",
    "bestRank": "31,448",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 147,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 72,
    "currentRank": "30,913",
    "bestRank": "30,913",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 148,
    "name": "tato",
    "avatar": "https://avatars.steamstatic.com/42245f6ffc6aec1b960d814c54425164c9e6c91e.jpg",
    "tracked": false,
    "wins": 126,
    "currentRank": "30,912",
    "bestRank": "30,912",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 149,
    "name": "GEORGE",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c3fd98190e05795452a6c4434a2b9eed8c4ae7f5.jpg",
    "tracked": true,
    "wins": 107,
    "currentRank": "30,912",
    "bestRank": "32,253",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 150,
    "name": "ならく",
    "avatar": "https://avatars.steamstatic.com/555781672b3c902237f1f71c348b0aa9fe0c0582.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "30,905",
    "bestRank": "31,732",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 151,
    "name": "Haki",
    "avatar": "https://avatars.steamstatic.com/b73c661b4c1286030ceec699ecd5d64610fa4c5c.jpg",
    "tracked": true,
    "wins": 63,
    "currentRank": "30,903",
    "bestRank": "31,134",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 152,
    "name": "INFINITY",
    "avatar": "https://avatars.steamstatic.com/fb50374ccf8600833b0378373a86ada2c24d3320.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,901",
    "bestRank": "30,901",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 153,
    "name": "Ethan",
    "avatar": "https://avatars.steamstatic.com/7f0bcc2aa5951a5730a44c8bb787538d586d3750.jpg",
    "tracked": false,
    "wins": 95,
    "currentRank": "30,897",
    "bestRank": "30,936",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 154,
    "name": "eanist",
    "avatar": "https://avatars.steamstatic.com/bd4dd53d7bf1e809e9b92e99ae6f192e75e6e995.jpg",
    "tracked": true,
    "wins": 101,
    "currentRank": "30,893",
    "bestRank": "31,440",
    "lastMatch": "match_329b0526"
  },
  {
    "id": 155,
    "name": "ANTON2001 t(._.t)",
    "avatar": "https://avatars.steamstatic.com/0bbca31ad33083dd7e0d51453097ecaf19018004.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "30,887",
    "bestRank": "30,905",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 156,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 68,
    "currentRank": "30,882",
    "bestRank": "32,328",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 157,
    "name": "demonlike",
    "avatar": "https://avatars.steamstatic.com/f7564b197f2a969f10d3158b11e2a31206422552.jpg",
    "tracked": false,
    "wins": 49,
    "currentRank": "30,872",
    "bestRank": "31,238",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 158,
    "name": "kronos",
    "avatar": "https://avatars.steamstatic.com/0f8e524e9abc4e13e2297654be91e03b02979674.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,872",
    "bestRank": "30,872",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 159,
    "name": "MOE",
    "avatar": "https://avatars.steamstatic.com/374b0dedca7b8f1108e7192b700ff9b3b573a93f.jpg",
    "tracked": false,
    "wins": 187,
    "currentRank": "30,871",
    "bestRank": "30,871",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 160,
    "name": "𝐸𝑁𝐷𝑅𝐽𝑈",
    "avatar": "https://avatars.steamstatic.com/35f844f600bcfef98647ea2bfe42686e4fa58b24.jpg",
    "tracked": false,
    "wins": 155,
    "currentRank": "30,869",
    "bestRank": "30,878",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 161,
    "name": "TEPiiC",
    "avatar": "https://avatars.steamstatic.com/8cd9a2f4bdd26eb9cd63ae95c2b32941ac27902f.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,868",
    "bestRank": "30,868",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 162,
    "name": "OLI SYKES",
    "avatar": "https://avatars.steamstatic.com/33a6e18f575ae2221b18d5ac2f46987d98c7ec77.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "30,856",
    "bestRank": "30,856",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 163,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 58,
    "currentRank": "30,856",
    "bestRank": "31,132",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 164,
    "name": "PLEASE NO",
    "avatar": "https://avatars.steamstatic.com/bc918d4c1bfe789cf766e5fe9a9bad5ee5364a61.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,855",
    "bestRank": "30,977",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 165,
    "name": "Fabian",
    "avatar": "https://avatars.steamstatic.com/0b2d40b160bb98a4f2f9d7bf6a447a089c693d82.jpg",
    "tracked": true,
    "wins": 35,
    "currentRank": "30,855",
    "bestRank": "30,855",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 166,
    "name": "YOUNG TOMI",
    "avatar": "https://avatars.steamstatic.com/61f706163fc2b6f58a24257623964585c93eaf34.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,853",
    "bestRank": "30,853",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 167,
    "name": "999",
    "avatar": "https://avatars.steamstatic.com/2188eb7e5eecc13e3d874c69dac7b72db3f4c792.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,853",
    "bestRank": "30,853",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 168,
    "name": "ZaJeBaKa",
    "avatar": "https://avatars.steamstatic.com/f0f09d09734983ead5e5a1a61b4a208fc2b7958c.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,853",
    "bestRank": "30,853",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 169,
    "name": "L",
    "avatar": "https://avatars.steamstatic.com/9b8adb62e7a67de6fabd454ec1c496bc0b295481.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,851",
    "bestRank": "30,851",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 170,
    "name": "ShinChan",
    "avatar": "https://avatars.steamstatic.com/6948e1c944efc621efacaf1421ab2d46e1bdc1ab.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "30,847",
    "bestRank": "32,232",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 171,
    "name": "usakee",
    "avatar": "https://avatars.steamstatic.com/afee7475f4d399cbcfa63b801b717da116898d56.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "30,845",
    "bestRank": "30,845",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 172,
    "name": "a1",
    "avatar": "https://avatars.steamstatic.com/59250d7c271a6554eb2576c14bf84f33ef2d73c3.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,841",
    "bestRank": "31,380",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 173,
    "name": "Victorique De Blois",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "30,837",
    "bestRank": "31,699",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 174,
    "name": "Seraph",
    "avatar": "https://avatars.steamstatic.com/07cbc928fc52cb397520aaeb1752e5a7c67a953d.jpg",
    "tracked": true,
    "wins": 60,
    "currentRank": "30,834",
    "bestRank": "30,834",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 175,
    "name": "-PtR- †",
    "avatar": "https://avatars.steamstatic.com/5c1a8f69ce9ddb07a21484fceb2f6579c46fbcc2.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,831",
    "bestRank": "31,017",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 176,
    "name": "Bear",
    "avatar": "https://avatars.steamstatic.com/e5e6febd7da8e5b029b541a2aef7a7f711ecf7be.jpg",
    "tracked": false,
    "wins": 40,
    "currentRank": "30,831",
    "bestRank": "30,831",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 177,
    "name": "rose ♡",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2a/2acc0a561cdfaf884d200a5f11ed6cfe998fd84c.jpg",
    "tracked": true,
    "wins": 39,
    "currentRank": "30,828",
    "bestRank": "30,828",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 178,
    "name": "Licale",
    "avatar": "https://avatars.steamstatic.com/24709f852f1f1e2b4e6e67a50f69603bc0cae89a.jpg",
    "tracked": true,
    "wins": 62,
    "currentRank": "30,827",
    "bestRank": "31,161",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 179,
    "name": "DsciSiv_",
    "avatar": "https://avatars.steamstatic.com/44b65fa70c3df3819aa00d7b9cb13a40ac7cc2dc.jpg",
    "tracked": true,
    "wins": 129,
    "currentRank": "30,826",
    "bestRank": "31,096",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 180,
    "name": "吕奉先",
    "avatar": "https://avatars.steamstatic.com/543bb32f9249e6738288c0d3ac6987ee25983c41.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "30,824",
    "bestRank": "31,118",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 181,
    "name": "WALKS",
    "avatar": "https://avatars.steamstatic.com/591cf3af6d59151ef247a53cb9f7ea6a210017b6.jpg",
    "tracked": false,
    "wins": 89,
    "currentRank": "30,822",
    "bestRank": "31,137",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 182,
    "name": "wazak",
    "avatar": "https://avatars.steamstatic.com/f12d31de7a904e63afcb326d8a387c73d9c9e950.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "30,820",
    "bestRank": "31,937",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 183,
    "name": "Shadøw♥",
    "avatar": "https://avatars.steamstatic.com/ace761171fc2326bd00f84b9aa9bc5f7308da83f.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,818",
    "bestRank": "30,989",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 184,
    "name": "Hausmeister",
    "avatar": "https://avatars.steamstatic.com/00254730cdebca669cc47e968cb17623603a2f26.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,817",
    "bestRank": "30,817",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 185,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 58,
    "currentRank": "30,816",
    "bestRank": "31,223",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 186,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,816",
    "bestRank": "31,073",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 187,
    "name": "Ceha",
    "avatar": "https://avatars.steamstatic.com/b33ca7b0e9f33fc7ccc26d377e3344f569d427aa.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,815",
    "bestRank": "30,815",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 188,
    "name": "King Diamond",
    "avatar": "https://avatars.steamstatic.com/c206fb0d13efbe6859f73a6c292b5a6c259a3db4.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "30,812",
    "bestRank": "30,812",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 189,
    "name": "linkup",
    "avatar": "https://avatars.steamstatic.com/e1f4c87de0099001c3c57314d4756cd41528f5e9.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "30,807",
    "bestRank": "30,807",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 190,
    "name": "20yearsofservice",
    "avatar": "https://avatars.steamstatic.com/a8a74b8e437fd19c00183142f4e52710b19dfb77.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,805",
    "bestRank": "30,805",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 191,
    "name": "VPTOP",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4b/4b430268c4c993fe7d0c011ed2829994446c3983.jpg",
    "tracked": true,
    "wins": 70,
    "currentRank": "30,804",
    "bestRank": "31,228",
    "lastMatch": "match_54731ed4"
  },
  {
    "id": 192,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,804",
    "bestRank": "31,055",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 193,
    "name": "fbx",
    "avatar": "https://avatars.steamstatic.com/0bcd1082e192aacfbf5dff17be77f453937f8ca2.jpg",
    "tracked": false,
    "wins": 155,
    "currentRank": "30,803",
    "bestRank": "31,168",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 194,
    "name": "cutedog",
    "avatar": "https://avatars.steamstatic.com/15ceb1c80d467f966f8f060974c36fdccac823ba.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "30,803",
    "bestRank": "30,932",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 195,
    "name": "✪ O SpyKe 86 ッ",
    "avatar": "https://avatars.steamstatic.com/4f99f68c5d23bcf402b4f7055c32cf6a9a7df107.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "30,802",
    "bestRank": "31,242",
    "lastMatch": "match_c94211a5"
  },
  {
    "id": 196,
    "name": "mONGOLz_Oficjalnie",
    "avatar": "https://avatars.steamstatic.com/876b950d83a577ccb4f83c0735d41ca5db00d443.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "30,802",
    "bestRank": "31,023",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 197,
    "name": "Giønnizz",
    "avatar": "https://avatars.steamstatic.com/dd896c06dffa9879d7e6ee1e00eedd8b762eb850.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "30,800",
    "bestRank": "30,913",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 198,
    "name": "川崎",
    "avatar": "https://avatars.steamstatic.com/29b9e219fc0716859ed99066e569e0eab1e2a97a.jpg",
    "tracked": true,
    "wins": 71,
    "currentRank": "30,799",
    "bestRank": "31,142",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 199,
    "name": "zaguvar",
    "avatar": "https://avatars.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "30,799",
    "bestRank": "31,260",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 200,
    "name": "kyrox",
    "avatar": "https://avatars.steamstatic.com/b6bb588cfd3f3a8b6a41052d40a32655c66fe619.jpg",
    "tracked": false,
    "wins": 59,
    "currentRank": "30,797",
    "bestRank": "30,970",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 201,
    "name": "Flinn",
    "avatar": "https://avatars.steamstatic.com/81e6bc5da4edf52a5ca94e83cc86e8c74b6262b1.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "30,796",
    "bestRank": "31,017",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 202,
    "name": "Lobao destructor in the table",
    "avatar": "https://avatars.steamstatic.com/5abd0a96222137d3c5c89de66d96a13dc1ca8482.jpg",
    "tracked": false,
    "wins": 84,
    "currentRank": "30,795",
    "bestRank": "31,048",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 203,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 54,
    "currentRank": "30,795",
    "bestRank": "30,795",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 204,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 77,
    "currentRank": "30,794",
    "bestRank": "31,678",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 205,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 58,
    "currentRank": "30,794",
    "bestRank": "30,794",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 206,
    "name": "KropsoN",
    "avatar": "https://avatars.steamstatic.com/d7b2dc6215d01dfed5a396c9eb85ece16334af74.jpg",
    "tracked": false,
    "wins": 122,
    "currentRank": "30,792",
    "bestRank": "30,792",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 207,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,792",
    "bestRank": "31,027",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 208,
    "name": "kachowski",
    "avatar": "https://avatars.steamstatic.com/aa5185c6d2b7c50607e487869c6db8657585ff6a.jpg",
    "tracked": true,
    "wins": 120,
    "currentRank": "30,784",
    "bestRank": "31,025",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 209,
    "name": "sin",
    "avatar": "https://avatars.steamstatic.com/9fb5a46caafd8efbba2548e644eb12b38ef64add.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,784",
    "bestRank": "30,784",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 210,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 93,
    "currentRank": "30,782",
    "bestRank": "31,367",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 211,
    "name": "Turya",
    "avatar": "https://avatars.steamstatic.com/7097204daaff01d85738c1ac62e0243cc4e138e8.jpg",
    "tracked": false,
    "wins": 86,
    "currentRank": "30,782",
    "bestRank": "30,838",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 212,
    "name": "layean",
    "avatar": "https://avatars.steamstatic.com/fe061af1b228c7505890c17d3d1e974597cb5c7e.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "30,781",
    "bestRank": "31,038",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 213,
    "name": "zectr0n",
    "avatar": "https://avatars.steamstatic.com/2ab989ebbf797098f1c809fa2ecfa44002c6491e.jpg",
    "tracked": false,
    "wins": 117,
    "currentRank": "30,778",
    "bestRank": "31,339",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 214,
    "name": "⚡",
    "avatar": "https://avatars.steamstatic.com/4d6fb9ad98d4a48a5468bf636e8ce1149ab62b1e.jpg",
    "tracked": true,
    "wins": 65,
    "currentRank": "30,777",
    "bestRank": "30,896",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 215,
    "name": "user",
    "avatar": "https://avatars.steamstatic.com/fccb5d968f0ff3da6f549057af4184934281ff28.jpg",
    "tracked": false,
    "wins": 99,
    "currentRank": "30,771",
    "bestRank": "31,459",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 216,
    "name": "°CaspeR°☾★⛟",
    "avatar": "https://avatars.steamstatic.com/b1a21b306da87dbea96fd4eb69a5344cc8a05494.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,771",
    "bestRank": "30,888",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 217,
    "name": "Ggbro",
    "avatar": "https://avatars.steamstatic.com/cafb7e2e29eebc4b82bc6850291d2a38329c3aaa.jpg",
    "tracked": false,
    "wins": 117,
    "currentRank": "30,770",
    "bestRank": "30,770",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 218,
    "name": "Cc",
    "avatar": "https://avatars.steamstatic.com/88861c680ab3d0f0862b6bf8c06093db07d982a3.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,770",
    "bestRank": "30,770",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 219,
    "name": "gamesense user",
    "avatar": "https://avatars.steamstatic.com/97f57b58d639bf7e7f0de30ba44f013c32281139.jpg",
    "tracked": false,
    "wins": 49,
    "currentRank": "30,768",
    "bestRank": "31,252",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 220,
    "name": "𝗠𝗼𝗱𝗶𝗝𝗶",
    "avatar": "https://avatars.steamstatic.com/60c7b73dcbf48aa3be9562aca850069f8fd0764e.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,759",
    "bestRank": "30,759",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 221,
    "name": "Ryder",
    "avatar": "https://avatars.steamstatic.com/aac653187ccec041b387eaa48ec0650a97d787b0.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "30,756",
    "bestRank": "31,350",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 222,
    "name": "Just-iran Team | Config By Pori",
    "avatar": "https://avatars.steamstatic.com/165fa5c759b7e7972ad0631c6b90f2111d6c59c0.jpg",
    "tracked": false,
    "wins": 121,
    "currentRank": "30,746",
    "bestRank": "31,330",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 223,
    "name": "Shacki",
    "avatar": "https://avatars.steamstatic.com/f97d76874834c62689ef82ef5ff949e20c43efe4.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "30,746",
    "bestRank": "30,858",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 224,
    "name": "mentaL",
    "avatar": "https://avatars.steamstatic.com/a493d3ee7f15cf6bbb2ffbd05739507b260aa382.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,743",
    "bestRank": "30,743",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 225,
    "name": "Akane",
    "avatar": "https://avatars.steamstatic.com/721805f6672f2b98a3d15395827d8d240ea42082.jpg",
    "tracked": true,
    "wins": 102,
    "currentRank": "30,738",
    "bestRank": "30,738",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 226,
    "name": "hate",
    "avatar": "https://avatars.steamstatic.com/09a35c90cf84af4157e82d7baea8d2b6d4e577f1.jpg",
    "tracked": true,
    "wins": 63,
    "currentRank": "30,737",
    "bestRank": "30,841",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 227,
    "name": "S.T.A.L.K.E.R.",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/13/13a206d391244bae92877fa5cf5a524248f6be0d.jpg",
    "tracked": true,
    "wins": 111,
    "currentRank": "30,732",
    "bestRank": "31,009",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 228,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 57,
    "currentRank": "30,719",
    "bestRank": "31,243",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 229,
    "name": "xETACK",
    "avatar": "https://avatars.steamstatic.com/75e2e1382b9db0a198f0161992573f34a5692f0d.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "30,717",
    "bestRank": "30,829",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 230,
    "name": "Jenny",
    "avatar": "https://avatars.steamstatic.com/cefde289a0928cc5a8ca0a9b516d7f20a41394f9.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,716",
    "bestRank": "30,716",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 231,
    "name": "Act",
    "avatar": "https://avatars.steamstatic.com/f05078aef280b9317cafb9c8c69accaf68b28da3.jpg",
    "tracked": false,
    "wins": 100,
    "currentRank": "30,712",
    "bestRank": "31,477",
    "lastMatch": "match_c94211a5"
  },
  {
    "id": 232,
    "name": "Rimple",
    "avatar": "https://avatars.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "30,712",
    "bestRank": "32,355",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 233,
    "name": "Nok",
    "avatar": "https://avatars.steamstatic.com/282f77b8eee73cc9a6832d3d744543912ce8174b.jpg",
    "tracked": true,
    "wins": 44,
    "currentRank": "30,712",
    "bestRank": "30,910",
    "lastMatch": "match_189ad3ee"
  },
  {
    "id": 234,
    "name": "J.4.F'Eldar  WoNDeRSeX ♫♡♫",
    "avatar": "https://avatars.steamstatic.com/3d333bac75c9eb2047c897aee8d786e4d456a3c1.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "30,710",
    "bestRank": "30,828",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 235,
    "name": "d33pbl1nd ツ",
    "avatar": "https://avatars.steamstatic.com/29e5d65cf764600ca5b186b46e2a71934b2e3acf.jpg",
    "tracked": true,
    "wins": 74,
    "currentRank": "30,703",
    "bestRank": "30,703",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 236,
    "name": "tiktok king",
    "avatar": "https://avatars.steamstatic.com/73336e67e2ffdf27435dff64f2f4315e956c65fe.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "30,701",
    "bestRank": "30,701",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 237,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,700",
    "bestRank": "30,700",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 238,
    "name": "elegy",
    "avatar": "https://avatars.steamstatic.com/a01e038d3ac29a5fa669f8469d001b0807b52416.jpg",
    "tracked": true,
    "wins": 45,
    "currentRank": "30,699",
    "bestRank": "30,699",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 239,
    "name": "Lobotomy_corporation",
    "avatar": "https://avatars.steamstatic.com/4676daf9271cf62acf47cbc811468bbff83bffe9.jpg",
    "tracked": false,
    "wins": 64,
    "currentRank": "30,696",
    "bestRank": "30,782",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 240,
    "name": "i been on my ktm drip",
    "avatar": "https://avatars.steamstatic.com/e48267fd13c9fb540769dcae1dd5171836909e9a.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "30,695",
    "bestRank": "30,784",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 241,
    "name": "zdX.jarkolsd",
    "avatar": "https://avatars.steamstatic.com/e22302b0ecc4222374168bf9e151ea455762969c.jpg",
    "tracked": false,
    "wins": 94,
    "currentRank": "30,693",
    "bestRank": "30,693",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 242,
    "name": "♥𝓩𝔂𝔀𝓞𝓸",
    "avatar": "https://avatars.steamstatic.com/7434a0e3a9318a730dba27579d3f37edb6e8e82e.jpg",
    "tracked": false,
    "wins": 114,
    "currentRank": "30,688",
    "bestRank": "34,938",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 243,
    "name": "po b'",
    "avatar": "https://avatars.steamstatic.com/c85092dd24f941b66fda21da21391f2d23fde7c9.jpg",
    "tracked": true,
    "wins": 162,
    "currentRank": "30,685",
    "bestRank": "30,685",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 244,
    "name": "shoxieJESUS",
    "avatar": "https://avatars.steamstatic.com/eb85bf270ea6c488f2225baf855cd981d468711a.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "30,685",
    "bestRank": "31,780",
    "lastMatch": "match_09e0dda1"
  },
  {
    "id": 245,
    "name": "Mah1aS",
    "avatar": "https://avatars.steamstatic.com/81b9e1a70d41a97f83f2d3ad9848312f3b0e759f.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "30,685",
    "bestRank": "30,962",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 246,
    "name": "Alvro2k-",
    "avatar": "https://avatars.steamstatic.com/13b320380164fb9d7939d86143fee0309c95296f.jpg",
    "tracked": false,
    "wins": 90,
    "currentRank": "30,684",
    "bestRank": "30,684",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 247,
    "name": "unlucky",
    "avatar": "https://avatars.steamstatic.com/4e66b41b920692d5ba5e4d7d432e3308346b7fb3.jpg",
    "tracked": false,
    "wins": 105,
    "currentRank": "30,680",
    "bestRank": "30,680",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 248,
    "name": "haszaN",
    "avatar": "https://avatars.steamstatic.com/4da39754ab24317881f8aedb4ddccfa94c1869c9.jpg",
    "tracked": true,
    "wins": 45,
    "currentRank": "30,676",
    "bestRank": "30,676",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 249,
    "name": "fbi eevee",
    "avatar": "https://avatars.steamstatic.com/3359b6640d97f826d285744e2c997328c7ee25a6.jpg",
    "tracked": true,
    "wins": 61,
    "currentRank": "30,670",
    "bestRank": "30,670",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 250,
    "name": "Xan",
    "avatar": "https://avatars.steamstatic.com/757a9366997be151fcb5c34deb8edeed32eb8b17.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,669",
    "bestRank": "30,669",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 251,
    "name": "Jim Lahey",
    "avatar": "https://avatars.steamstatic.com/18626ae8f9d4c86c1997cd5e33a5dcf2e5868db8.jpg",
    "tracked": false,
    "wins": 59,
    "currentRank": "30,664",
    "bestRank": "30,787",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 252,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,659",
    "bestRank": "31,107",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 253,
    "name": "Immoral",
    "avatar": "https://avatars.steamstatic.com/64455b3f80e6419b182bf68c483de214f5f56d75.jpg",
    "tracked": false,
    "wins": 103,
    "currentRank": "30,653",
    "bestRank": "30,740",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 254,
    "name": "w0kz",
    "avatar": "https://avatars.steamstatic.com/4ab3db0761bdfb0b02c32de00e0924e1270cf81a.jpg",
    "tracked": false,
    "wins": 77,
    "currentRank": "30,647",
    "bestRank": "30,761",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 255,
    "name": "FEAR",
    "avatar": "https://avatars.steamstatic.com/7a4ff500b4425f8d7025e66e75d76f336ef85c2a.jpg",
    "tracked": false,
    "wins": 118,
    "currentRank": "30,641",
    "bestRank": "30,641",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 256,
    "name": "AZY-",
    "avatar": "https://avatars.steamstatic.com/8b60357e6761032e9dec270044c9c22fd824dd0a.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "30,640",
    "bestRank": "30,877",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 257,
    "name": "polo",
    "avatar": "https://avatars.steamstatic.com/0da212422e9febdfdb3a63b3d08ca5332d74200b.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "30,635",
    "bestRank": "30,844",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 258,
    "name": "ufo362",
    "avatar": "https://avatars.steamstatic.com/5df42cf8e54ef7fcb3b6eb18d210c5463858ec32.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,628",
    "bestRank": "31,277",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 259,
    "name": "Barmaley",
    "avatar": "https://avatars.steamstatic.com/877293f927ed5b43820ca96c7890477617fd1f8b.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "30,627",
    "bestRank": "30,627",
    "lastMatch": "match_975a4df9"
  },
  {
    "id": 260,
    "name": "RICKY LAFLEUR",
    "avatar": "https://avatars.steamstatic.com/851dc9d556e2d7145880bfaa1d4c1da417048d84.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,627",
    "bestRank": "30,627",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 261,
    "name": "Jim Carry",
    "avatar": "https://avatars.steamstatic.com/04e72fb30114b3f802c27497e94745010a06fc36.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "30,627",
    "bestRank": "30,856",
    "lastMatch": "match_61e04391"
  },
  {
    "id": 262,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 175,
    "currentRank": "30,622",
    "bestRank": "32,614",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 263,
    "name": "f!sh. o_O",
    "avatar": "https://avatars.steamstatic.com/dc43b97a7f15c0ea0c2ea8dcc4d6a580fc270595.jpg",
    "tracked": true,
    "wins": 60,
    "currentRank": "30,621",
    "bestRank": "30,707",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 264,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 42,
    "currentRank": "30,612",
    "bestRank": "30,612",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 265,
    "name": "....",
    "avatar": "https://avatars.steamstatic.com/0824b4674850a0111b125985c63e9d7652faece3.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "30,610",
    "bestRank": "30,975",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 266,
    "name": "Forevint",
    "avatar": "https://avatars.steamstatic.com/b51f8d8866ab350466942b90178314c869bb5d95.jpg",
    "tracked": true,
    "wins": 72,
    "currentRank": "30,594",
    "bestRank": "30,594",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 267,
    "name": "tucker",
    "avatar": "https://avatars.steamstatic.com/4ee2adbccc58d77a5a81219f87d6ab3df1d83bb7.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "30,594",
    "bestRank": "31,202",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 268,
    "name": "󠁳 ⁧I WISH",
    "avatar": "https://avatars.steamstatic.com/b20c282d6f56ec887f24324cf53dbc53a83e15f0.jpg",
    "tracked": false,
    "wins": 62,
    "currentRank": "30,593",
    "bestRank": "30,806",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 269,
    "name": "𝙋 𝙧 1 𝙘 𝙠 𝙇 𝙮 𝙮 𝙮 ™",
    "avatar": "https://avatars.steamstatic.com/668751ebbaef95ea7f8ae8257bdaa67f67c9c110.jpg",
    "tracked": true,
    "wins": 67,
    "currentRank": "30,581",
    "bestRank": "31,023",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 270,
    "name": "snizu",
    "avatar": "https://avatars.steamstatic.com/5d52e54f23d17d9351224f91edbbe5704ea04a09.jpg",
    "tracked": true,
    "wins": 57,
    "currentRank": "30,578",
    "bestRank": "30,578",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 271,
    "name": "solo",
    "avatar": "https://avatars.steamstatic.com/e509d0838525e2276941a76b833a00b9b7cfaffd.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "30,576",
    "bestRank": "30,576",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 272,
    "name": "死",
    "avatar": "https://avatars.steamstatic.com/76454ae9739b1c9549a7ad5d1f9e27c97da00dd0.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "30,569",
    "bestRank": "30,569",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 273,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 58,
    "currentRank": "30,567",
    "bestRank": "30,567",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 274,
    "name": "toka",
    "avatar": "https://avatars.steamstatic.com/2c6e4bc48cc281977ae9eaef0099a870e1b45787.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,565",
    "bestRank": "30,565",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 275,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 66,
    "currentRank": "30,551",
    "bestRank": "30,551",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 276,
    "name": "Misa",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "30,545",
    "bestRank": "32,856",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 277,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,544",
    "bestRank": "30,544",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 278,
    "name": "1 TAP",
    "avatar": "https://avatars.steamstatic.com/7a2e8ff7d935c3cdad0869f3af92bb719d3995c2.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,542",
    "bestRank": "30,542",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 279,
    "name": "ronaldwonglo",
    "avatar": "https://avatars.steamstatic.com/c19be1f9da8076571f6e07a40b85b9178ad9a26d.jpg",
    "tracked": true,
    "wins": 170,
    "currentRank": "30,540",
    "bestRank": "30,540",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 280,
    "name": "⸜(｡˃ ᵕ ˂ )⸝",
    "avatar": "https://avatars.steamstatic.com/f91f0e4a3d0a8a88c499bc889639b33c26737bdd.jpg",
    "tracked": false,
    "wins": 40,
    "currentRank": "30,537",
    "bestRank": "30,537",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 281,
    "name": "⍒OMAR ESCOBAR⍒",
    "avatar": "https://avatars.steamstatic.com/cf19489f9b362826fe3efc3ad4ebd834a2b2dbed.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "30,532",
    "bestRank": "32,973",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 282,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 31,
    "currentRank": "30,530",
    "bestRank": "30,530",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 283,
    "name": "jonatan leandoer96",
    "avatar": "https://avatars.steamstatic.com/ec8857d14e4c655971c0d78b0404a7f000caba1d.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "30,527",
    "bestRank": "31,544",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 284,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 128,
    "currentRank": "30,517",
    "bestRank": "34,430",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 285,
    "name": "oNE_peek",
    "avatar": "https://avatars.steamstatic.com/a6c9234094f7f06cad6c930617ff893401539226.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,517",
    "bestRank": "30,517",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 286,
    "name": "BaNg!",
    "avatar": "https://avatars.steamstatic.com/be4672772366f6e3c8de0bacc1b0d874eb9df1d7.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,515",
    "bestRank": "31,645",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 287,
    "name": "Perz",
    "avatar": "https://avatars.steamstatic.com/9f6d0098bccbe76085a38496326b7da0b25b87d1.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,514",
    "bestRank": "30,514",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 288,
    "name": "X™",
    "avatar": "https://avatars.steamstatic.com/87293155df82aa70810b78fc9e79e09ae78242a1.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,510",
    "bestRank": "30,510",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 289,
    "name": "Akira",
    "avatar": "https://avatars.steamstatic.com/4469f49f7ee67d8354fea575273f7fd85fcdfc7c.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "30,509",
    "bestRank": "30,509",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 290,
    "name": "Christoph Ra-Thai-Chik",
    "avatar": "https://avatars.steamstatic.com/cf1f8a9c2bd28f1b6ad5a5eba528ace39b17960f.jpg",
    "tracked": false,
    "wins": 107,
    "currentRank": "30,507",
    "bestRank": "31,031",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 291,
    "name": "9ineT6",
    "avatar": "https://avatars.steamstatic.com/c381e55881cd570a2175292c628c2b38ee87193f.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,505",
    "bestRank": "30,505",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 292,
    "name": "я шляпа",
    "avatar": "https://avatars.steamstatic.com/e7f8fcf9337061f74fc4ad3242730b8b7eb16f53.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "30,503",
    "bestRank": "30,503",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 293,
    "name": "bmw enjoyer",
    "avatar": "https://avatars.steamstatic.com/1a661c2b7de7e94a6e4ddc6e7a20c18939a838dc.jpg",
    "tracked": false,
    "wins": 64,
    "currentRank": "30,502",
    "bestRank": "30,502",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 294,
    "name": "𝐵𝑎𝑒",
    "avatar": "https://avatars.steamstatic.com/8af1ff04b90253b6ea98022acc3cea7099b82e58.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,501",
    "bestRank": "30,501",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 295,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 80,
    "currentRank": "30,500",
    "bestRank": "30,500",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 296,
    "name": "ROJAVA",
    "avatar": "https://avatars.steamstatic.com/3017f64da039e05834f718537fc1fba48efe92e6.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "30,498",
    "bestRank": "31,285",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 297,
    "name": "JIMZ",
    "avatar": "https://avatars.steamstatic.com/5a0db3b3b487ccfbabc35b33c86e1f9d17df2c65.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,496",
    "bestRank": "30,496",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 298,
    "name": "Rauis",
    "avatar": "https://avatars.steamstatic.com/d5ff90ae073ba5e89555debf1f6db98c589e0371.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "30,491",
    "bestRank": "30,491",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 299,
    "name": "shsn2",
    "avatar": "https://avatars.steamstatic.com/6dab2b5b825b58a58d32dff0f60ac9354069ca58.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,490",
    "bestRank": "30,490",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 300,
    "name": "KDMSCAP",
    "avatar": "https://avatars.steamstatic.com/4439b98a78f55628cce9af075d6c253f99781dee.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "30,489",
    "bestRank": "31,489",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 301,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,487",
    "bestRank": "30,487",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 302,
    "name": "Skiannn YT",
    "avatar": "https://avatars.steamstatic.com/c52b1f6e01c21918b94b1ce0318a78e107df1859.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,486",
    "bestRank": "30,486",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 303,
    "name": "PENTA P1nk",
    "avatar": "https://avatars.steamstatic.com/c505418781cc16de8b6fbac628f832d9c2d9786f.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "30,485",
    "bestRank": "30,485",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 304,
    "name": "smurfeNn",
    "avatar": "https://avatars.steamstatic.com/250646d0570b78ff6fda331f8055f69c04af624d.jpg",
    "tracked": true,
    "wins": 47,
    "currentRank": "30,485",
    "bestRank": "30,802",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 305,
    "name": "𝓢𝓸𝓭𝓪𝓑𝓮𝓪𝓻",
    "avatar": "https://avatars.steamstatic.com/a624713e41b8d1f586b42df2fa6a6c3b8dc45882.jpg",
    "tracked": true,
    "wins": 63,
    "currentRank": "30,483",
    "bestRank": "30,483",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 306,
    "name": "perkulezooo",
    "avatar": "https://avatars.steamstatic.com/5136448a9dc6483eb6f0d0ca24588a4385649a21.jpg",
    "tracked": true,
    "wins": 78,
    "currentRank": "30,481",
    "bestRank": "30,481",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 307,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 108,
    "currentRank": "30,479",
    "bestRank": "30,479",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 308,
    "name": "Ryuzin",
    "avatar": "https://avatars.steamstatic.com/9d185ed01b64d38642f7be81d5a3c62b41d1ef15.jpg",
    "tracked": true,
    "wins": 52,
    "currentRank": "30,479",
    "bestRank": "30,479",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 309,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 58,
    "currentRank": "30,478",
    "bestRank": "30,478",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 310,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,474",
    "bestRank": "30,474",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 311,
    "name": "Teletūbijs",
    "avatar": "https://avatars.steamstatic.com/5fadef2c8eb1d5b0b7c9a34108d70bbd5492bae6.jpg",
    "tracked": false,
    "wins": 95,
    "currentRank": "30,470",
    "bestRank": "30,470",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 312,
    "name": "✪ Vencer",
    "avatar": "https://avatars.steamstatic.com/19bbbd833f7a1e5ee1a3c0ca59cac91ef2fc1515.jpg",
    "tracked": false,
    "wins": 100,
    "currentRank": "30,469",
    "bestRank": "30,469",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 313,
    "name": "ash1hara",
    "avatar": "https://avatars.steamstatic.com/19c4a0aa7a4d1dfdc37957c741ea01c73d65aef9.jpg",
    "tracked": true,
    "wins": 166,
    "currentRank": "30,463",
    "bestRank": "31,488",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 314,
    "name": "e1^gtfo-\\10\\-",
    "avatar": "https://avatars.steamstatic.com/9fb2223b35bf5e0cfc093593d930a4c49c52e3f5.jpg",
    "tracked": false,
    "wins": 93,
    "currentRank": "30,460",
    "bestRank": "30,460",
    "lastMatch": "match_61e04391"
  },
  {
    "id": 315,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 64,
    "currentRank": "30,459",
    "bestRank": "30,459",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 316,
    "name": "csgoat",
    "avatar": "https://avatars.steamstatic.com/85f8e01652aa63949be2f1bd7e53eef0a076d412.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "30,458",
    "bestRank": "30,910",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 317,
    "name": "father",
    "avatar": "https://avatars.steamstatic.com/9053ef3aa86719dcc79d93e27fb5b8a63c5509cd.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,458",
    "bestRank": "30,458",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 318,
    "name": "fncz",
    "avatar": "https://avatars.steamstatic.com/686e36ea6150151a74fa461cabcabcc62f832bf9.jpg",
    "tracked": true,
    "wins": 103,
    "currentRank": "30,453",
    "bestRank": "30,453",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 319,
    "name": "x10",
    "avatar": "https://avatars.steamstatic.com/e3a73b2d8dc50092ad046b418b985c1b9b48d4b9.jpg",
    "tracked": false,
    "wins": 89,
    "currentRank": "30,444",
    "bestRank": "30,470",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 320,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 93,
    "currentRank": "30,442",
    "bestRank": "30,904",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 321,
    "name": "MG #BESTSETUP",
    "avatar": "https://avatars.steamstatic.com/f1419f1e25bef1fe3d8781e8d3d9e30069f1698d.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "30,437",
    "bestRank": "30,437",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 322,
    "name": "Яна Алексевна",
    "avatar": "https://avatars.steamstatic.com/078b0a0c2befa701be6778c78b473869393ff19f.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "30,433",
    "bestRank": "30,823",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 323,
    "name": "Clutch",
    "avatar": "https://avatars.steamstatic.com/b4cf1cdd190b344a4cfa833db9822908b4836d6c.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "30,431",
    "bestRank": "30,947",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 324,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 40,
    "currentRank": "30,428",
    "bestRank": "31,062",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 325,
    "name": "Coke",
    "avatar": "https://avatars.steamstatic.com/a627d3c0e9fe310d6ce9538c3594376522acbb00.jpg",
    "tracked": false,
    "wins": 144,
    "currentRank": "30,426",
    "bestRank": "30,426",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 326,
    "name": "-oat",
    "avatar": "https://avatars.steamstatic.com/cd845044c3566421b62010b811c742812086f7ab.jpg",
    "tracked": false,
    "wins": 97,
    "currentRank": "30,424",
    "bestRank": "31,057",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 327,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 61,
    "currentRank": "30,424",
    "bestRank": "30,915",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 328,
    "name": "K0NDZ1U",
    "avatar": "https://avatars.steamstatic.com/cf313e317a0c4e0ca1080f8fae3fd58b16619342.jpg",
    "tracked": true,
    "wins": 138,
    "currentRank": "30,423",
    "bestRank": "30,423",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 329,
    "name": "Percules",
    "avatar": "https://avatars.steamstatic.com/44e0b1904e712873516a6cb17040a9a75edf47a2.jpg",
    "tracked": true,
    "wins": 68,
    "currentRank": "30,415",
    "bestRank": "30,734",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 330,
    "name": "asdfdgfhjkl",
    "avatar": "https://avatars.steamstatic.com/f1867f37b62142daeb0a7b64a5150a5ee781f863.jpg",
    "tracked": true,
    "wins": 57,
    "currentRank": "30,415",
    "bestRank": "30,645",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 331,
    "name": "HerzfehleR",
    "avatar": "https://avatars.steamstatic.com/d8ad1b2d1802754f76419ff3228fcebd1fe2743c.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,410",
    "bestRank": "30,471",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 332,
    "name": "breadmaker85",
    "avatar": "https://avatars.steamstatic.com/7a20450e75bf66be9e6e801876049fc1c1e69041.jpg",
    "tracked": true,
    "wins": 132,
    "currentRank": "30,408",
    "bestRank": "30,645",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 333,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,401",
    "bestRank": "31,174",
    "lastMatch": "match_0c146aec"
  },
  {
    "id": 334,
    "name": "▬        xavez",
    "avatar": "https://avatars.steamstatic.com/3f8461685518e96eb3f9e00b749f377dcfa59571.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "30,401",
    "bestRank": "30,451",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 335,
    "name": "♛Mysticshot♛",
    "avatar": "https://avatars.steamstatic.com/9832ad8bd6d9047eadf8fd736efc58eda93f271d.jpg",
    "tracked": false,
    "wins": 76,
    "currentRank": "30,400",
    "bestRank": "30,400",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 336,
    "name": "Kalinka",
    "avatar": "https://avatars.steamstatic.com/3a98d4737cf3991a9a873d7f63cb497ecb20ec6e.jpg",
    "tracked": false,
    "wins": 142,
    "currentRank": "30,399",
    "bestRank": "30,399",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 337,
    "name": "LaRoLdiNh0",
    "avatar": "https://avatars.steamstatic.com/b14b22c0479effac43ea353790c7877ac312c78c.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "30,389",
    "bestRank": "30,806",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 338,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 100,
    "currentRank": "30,388",
    "bestRank": "30,560",
    "lastMatch": "match_2e43c62f"
  },
  {
    "id": 339,
    "name": "Balgade",
    "avatar": "https://avatars.steamstatic.com/c2da41e9bf2c8c1642febd908be10dc0d9bc3912.jpg",
    "tracked": true,
    "wins": 38,
    "currentRank": "30,384",
    "bestRank": "30,384",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 340,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 104,
    "currentRank": "30,383",
    "bestRank": "32,178",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 341,
    "name": "-",
    "avatar": "https://avatars.steamstatic.com/27ade05e017ee2299733bc77bb87924d36f3dff4.jpg",
    "tracked": true,
    "wins": 97,
    "currentRank": "30,379",
    "bestRank": "30,902",
    "lastMatch": "match_2e43c62f"
  },
  {
    "id": 342,
    "name": "Grzegorz Braun",
    "avatar": "https://avatars.steamstatic.com/e7da2c047f06cbb270b907b55a0b90ec84990b8f.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "30,371",
    "bestRank": "30,802",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 343,
    "name": "SS",
    "avatar": "https://avatars.steamstatic.com/d121c5eb6bd6d15a45b0b3cecd12c744ba324912.jpg",
    "tracked": false,
    "wins": 68,
    "currentRank": "30,369",
    "bestRank": "30,487",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 344,
    "name": "💤 ziollo×",
    "avatar": "https://avatars.steamstatic.com/dd34b361f344ba52f936a75ed26c99b702be3910.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "30,366",
    "bestRank": "30,481",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 345,
    "name": "✬𝕊örminátor✬",
    "avatar": "https://avatars.steamstatic.com/2829c2e7600643a908b5c46b185a5bb8c78a995f.jpg",
    "tracked": false,
    "wins": 95,
    "currentRank": "30,365",
    "bestRank": "30,365",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 346,
    "name": "ritz car sponsored by bugatti",
    "avatar": "https://avatars.steamstatic.com/09904258f81153f381e52f663d11b9741aa7d8a8.jpg",
    "tracked": true,
    "wins": 89,
    "currentRank": "30,365",
    "bestRank": "31,023",
    "lastMatch": "match_caef0c51"
  },
  {
    "id": 347,
    "name": "GHo$T 🌙",
    "avatar": "https://avatars.steamstatic.com/ddd9c5799ae69c250a55d3df93ec1d1cb43fa3af.jpg",
    "tracked": true,
    "wins": 55,
    "currentRank": "30,361",
    "bestRank": "30,361",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 348,
    "name": "ᴀᴘᴏʟʟᴏᴀʟᴘʜᴀ2.0",
    "avatar": "https://avatars.steamstatic.com/a42e8134495a7f2ac62da9e4e60ddd21e8820f2a.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,357",
    "bestRank": "30,357",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 349,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 89,
    "currentRank": "30,354",
    "bestRank": "31,606",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 350,
    "name": "wezas",
    "avatar": "https://avatars.steamstatic.com/bef86ece86f3715d05a0aa6b3fdf611c9f7fd821.jpg",
    "tracked": true,
    "wins": 40,
    "currentRank": "30,354",
    "bestRank": "30,412",
    "lastMatch": "match_61e04391"
  },
  {
    "id": 351,
    "name": "ÖZGÜR",
    "avatar": "https://avatars.steamstatic.com/2db0a954a9bb72003e25d40ef088b097f1197d01.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,353",
    "bestRank": "30,353",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 352,
    "name": "Blue",
    "avatar": "https://avatars.steamstatic.com/343dab39597de5d25d02eab2b2fe48d8dde6ae0e.jpg",
    "tracked": false,
    "wins": 109,
    "currentRank": "30,352",
    "bestRank": "30,352",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 353,
    "name": "Zoker",
    "avatar": "https://avatars.steamstatic.com/0deef14c1824f3dcc14ed4a3ee7b1ca4c0f1586c.jpg",
    "tracked": true,
    "wins": 68,
    "currentRank": "30,352",
    "bestRank": "30,590",
    "lastMatch": "match_98144d49"
  },
  {
    "id": 354,
    "name": "JAMMiN   n2",
    "avatar": "https://avatars.steamstatic.com/b68a46da41fdc8718206d9f79091bb4bf28f2a13.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "30,349",
    "bestRank": "30,349",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 355,
    "name": "🆁🅽🅶",
    "avatar": "https://avatars.steamstatic.com/b8abd274ab68b6589536960fb7cbf7a1f4863966.jpg",
    "tracked": false,
    "wins": 93,
    "currentRank": "30,345",
    "bestRank": "30,737",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 356,
    "name": "BENGI.CSGOSKINS",
    "avatar": "https://avatars.steamstatic.com/01270cf45cba1df08edbdab2486574389058a09d.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "30,345",
    "bestRank": "30,345",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 357,
    "name": "Eniack",
    "avatar": "https://avatars.steamstatic.com/1c0b5c37a442a2d39f32902ec42f2e26ba6a142e.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "30,344",
    "bestRank": "30,344",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 358,
    "name": "Proud",
    "avatar": "https://avatars.steamstatic.com/496375555cf1c815d2e17247f89673dcdc328bc1.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "30,343",
    "bestRank": "30,625",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 359,
    "name": "eine kleine nachtmusik",
    "avatar": "https://avatars.steamstatic.com/9fc5b618da9aaca980c624f2c5f9c150a1930c6e.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,337",
    "bestRank": "30,337",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 360,
    "name": "benny",
    "avatar": "https://avatars.steamstatic.com/68eda73ab2a1c1275048acc824ce3434c1758e49.jpg",
    "tracked": true,
    "wins": 101,
    "currentRank": "30,331",
    "bestRank": "30,740",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 361,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 127,
    "currentRank": "30,328",
    "bestRank": "30,328",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 362,
    "name": "t1quin:)",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3c/3c4ea6c7b2a5e3e9fa965ad25c2a0e0d1a05f2ff.jpg",
    "tracked": true,
    "wins": 51,
    "currentRank": "30,327",
    "bestRank": "30,327",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 363,
    "name": "᲼",
    "avatar": "https://avatars.steamstatic.com/ee3c47a07d283d71fe97006192ecd1661da281e5.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,326",
    "bestRank": "30,326",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 364,
    "name": "vLLd✞",
    "avatar": "https://avatars.steamstatic.com/46749a09d74c4a9ab07c42895cbb6e307ee69c48.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,326",
    "bestRank": "30,532",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 365,
    "name": "Fawen",
    "avatar": "https://avatars.steamstatic.com/331c4e9738d85884c4129a49585d8bcb01b59f5d.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "30,325",
    "bestRank": "30,802",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 366,
    "name": "9oda",
    "avatar": "https://avatars.steamstatic.com/3f5e9daea59216d7fe13df4e031d3537580e5e21.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,322",
    "bestRank": "30,322",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 367,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 39,
    "currentRank": "30,315",
    "bestRank": "30,315",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 368,
    "name": "Kingdome cum",
    "avatar": "https://avatars.steamstatic.com/b4dae1e2c0f0265b99c4ad0b3727cd0601b7a7d6.jpg",
    "tracked": false,
    "wins": 64,
    "currentRank": "30,298",
    "bestRank": "30,474",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 369,
    "name": "kaiseq",
    "avatar": "https://avatars.steamstatic.com/b90f7cd259ce6ef656e609b5d2ededd211e54e2a.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "30,296",
    "bestRank": "30,725",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 370,
    "name": "济南第二团",
    "avatar": "https://avatars.steamstatic.com/4780b5ead4aaa115611b31b3c632e32a72b3fdc4.jpg",
    "tracked": false,
    "wins": 118,
    "currentRank": "30,285",
    "bestRank": "30,531",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 371,
    "name": "Healthya",
    "avatar": "https://avatars.steamstatic.com/c58cea7850136f353e10b8a997c156237eb32e3b.jpg",
    "tracked": true,
    "wins": 51,
    "currentRank": "30,285",
    "bestRank": "30,287",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 372,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,271",
    "bestRank": "30,480",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 373,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,265",
    "bestRank": "30,496",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 374,
    "name": "/(^.^/)",
    "avatar": "https://avatars.steamstatic.com/01f5daf5b1359a6096ba8341f1cdf20f1bcbbd0e.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,264",
    "bestRank": "30,576",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 375,
    "name": "dumdum",
    "avatar": "https://avatars.steamstatic.com/d5bb51096ee6af117d11ca6c7115a1709da60038.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,261",
    "bestRank": "30,269",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 376,
    "name": "zxd980128",
    "avatar": "https://avatars.steamstatic.com/59faaa7b1580c3dff1aead1ab31cbf9298862e40.jpg",
    "tracked": false,
    "wins": 212,
    "currentRank": "30,245",
    "bestRank": "30,245",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 377,
    "name": "Bobby Smith",
    "avatar": "https://avatars.steamstatic.com/833396adec12371c4f6e74761ffdd5af38108863.jpg",
    "tracked": true,
    "wins": 81,
    "currentRank": "30,242",
    "bestRank": "30,785",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 378,
    "name": "Sparkyy",
    "avatar": "https://avatars.steamstatic.com/f2d0603aca31ca57b6d786374fa77bf83678ff05.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "30,241",
    "bestRank": "30,780",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 379,
    "name": "donk",
    "avatar": "https://avatars.steamstatic.com/2f9cf6b6b6d1c8ffc8908544bc3e5e653c7bdcb3.jpg",
    "tracked": false,
    "wins": 82,
    "currentRank": "30,238",
    "bestRank": "30,642",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 380,
    "name": "Tenha Calma Moreno",
    "avatar": "https://avatars.steamstatic.com/f5689b2ed0816c66dd14c3c09fc872633411d045.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "30,238",
    "bestRank": "30,238",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 381,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 84,
    "currentRank": "30,234",
    "bestRank": "30,234",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 382,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 44,
    "currentRank": "30,233",
    "bestRank": "30,886",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 383,
    "name": "✞ P90 PRO SKILL ✞",
    "avatar": "https://avatars.steamstatic.com/747c22011eb06742d5d2b2a662a0404034a8c65c.jpg",
    "tracked": false,
    "wins": 132,
    "currentRank": "30,232",
    "bestRank": "30,232",
    "lastMatch": "match_036269ce"
  },
  {
    "id": 384,
    "name": "femboy :3",
    "avatar": "https://avatars.steamstatic.com/a6fc8aad0abade22872678d67c6a6a311373ee10.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "30,227",
    "bestRank": "30,609",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 385,
    "name": "Castiel",
    "avatar": "https://avatars.steamstatic.com/aac9abb1621b508aa2ea1f85888560e106fc580f.jpg",
    "tracked": false,
    "wins": 40,
    "currentRank": "30,226",
    "bestRank": "30,226",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 386,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 98,
    "currentRank": "30,225",
    "bestRank": "30,225",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 387,
    "name": "Ｉｓｏｔｅｒｉｋｓ™",
    "avatar": "https://avatars.steamstatic.com/0f22a9192e8445796c5ad7c9cf0d1da8d58ef5e5.jpg",
    "tracked": true,
    "wins": 110,
    "currentRank": "30,220",
    "bestRank": "30,708",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 388,
    "name": "►LikeMan◄",
    "avatar": "https://avatars.steamstatic.com/7ddfb5ffa1aaffee7ba4ba5131103627f6d014d0.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,214",
    "bestRank": "30,214",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 389,
    "name": "W0ld",
    "avatar": "https://avatars.steamstatic.com/71d8808042d770063772950d36c314672350639b.jpg",
    "tracked": true,
    "wins": 59,
    "currentRank": "30,204",
    "bestRank": "30,473",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 390,
    "name": "Golden Eagle",
    "avatar": "https://avatars.steamstatic.com/13e568d9fb3720c1de9dba4b43a5874f385e1986.jpg",
    "tracked": false,
    "wins": 177,
    "currentRank": "30,184",
    "bestRank": "30,394",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 391,
    "name": "CMitch",
    "avatar": "https://avatars.steamstatic.com/252bac54659b2ee3faa71d5899388d2498de0a38.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "30,157",
    "bestRank": "30,237",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 392,
    "name": "☆ anaujiram",
    "avatar": "https://avatars.steamstatic.com/f244fa14ff4bcc17eacf027842cacaa0d9d0f985.jpg",
    "tracked": false,
    "wins": 183,
    "currentRank": "30,152",
    "bestRank": "30,571",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 393,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 72,
    "currentRank": "30,152",
    "bestRank": "32,152",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 394,
    "name": "focusbtw",
    "avatar": "https://avatars.steamstatic.com/ebeb4d6df028ff6487cbe622dc9e39bf02e949a0.jpg",
    "tracked": true,
    "wins": 87,
    "currentRank": "30,130",
    "bestRank": "30,130",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 395,
    "name": "Qualidade",
    "avatar": "https://avatars.steamstatic.com/84e80724f1ded1bf767e076977c2569f9fcabe35.jpg",
    "tracked": true,
    "wins": 134,
    "currentRank": "30,126",
    "bestRank": "30,817",
    "lastMatch": "match_7eed795f"
  },
  {
    "id": 396,
    "name": "player",
    "avatar": "https://avatars.steamstatic.com/b568381359c1da92ea24e67776165293c07264a5.jpg",
    "tracked": false,
    "wins": 91,
    "currentRank": "30,124",
    "bestRank": "30,124",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 397,
    "name": "sully",
    "avatar": "https://avatars.steamstatic.com/30ac664d5a7c116662a743854c0ab71c57df2c94.jpg",
    "tracked": false,
    "wins": 73,
    "currentRank": "30,124",
    "bestRank": "31,275",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 398,
    "name": "url0",
    "avatar": "https://avatars.steamstatic.com/544a83e090b916b31fe33b175d2e4b000cdc4723.jpg",
    "tracked": true,
    "wins": 71,
    "currentRank": "30,124",
    "bestRank": "30,220",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 399,
    "name": "schmidt",
    "avatar": "https://avatars.steamstatic.com/ae4c965883db14135808eeff0bcab69ed6ae6869.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "30,124",
    "bestRank": "30,721",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 400,
    "name": "Onyx",
    "avatar": "https://avatars.steamstatic.com/01601a980293112ce169e8e67692f8391a41d706.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,124",
    "bestRank": "30,124",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 401,
    "name": "❈LoAy.s",
    "avatar": "https://avatars.steamstatic.com/94b5ed1597aec45f874af096df7e5ea54bab6c4f.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,124",
    "bestRank": "30,124",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 402,
    "name": "Ryomen",
    "avatar": "https://avatars.steamstatic.com/2ebd08493990e088190501ba3585bffc126c6ec1.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,124",
    "bestRank": "30,124",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 403,
    "name": "McTuTeJIb116",
    "avatar": "https://avatars.steamstatic.com/2967bcadda6272b530bacf78a204eff32a8ef0aa.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,124",
    "bestRank": "30,124",
    "lastMatch": "match_98144d49"
  },
  {
    "id": 404,
    "name": "twitch.tv/ketosaurex",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7e/7ed588a68d7260be82d6ca23b586bf782144b045.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "30,123",
    "bestRank": "30,123",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 405,
    "name": "흑누나",
    "avatar": "https://avatars.steamstatic.com/c894091ab0778dff1ead11e98c0ee05bcee629f8.jpg",
    "tracked": true,
    "wins": 109,
    "currentRank": "30,122",
    "bestRank": "30,451",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 406,
    "name": "Guggen",
    "avatar": "https://avatars.steamstatic.com/26a77c515f0094d6247bfbbc789fbe7c14666c1a.jpg",
    "tracked": true,
    "wins": 48,
    "currentRank": "30,122",
    "bestRank": "30,122",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 407,
    "name": "Park Chung-hee",
    "avatar": "https://avatars.steamstatic.com/da6778de0c5099b777576d3ca9b64b56426aa978.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "30,121",
    "bestRank": "30,121",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 408,
    "name": "Ghitu",
    "avatar": "https://avatars.steamstatic.com/798844a90d90b1adf3db629c9ae48da132e24bc7.jpg",
    "tracked": false,
    "wins": 138,
    "currentRank": "30,120",
    "bestRank": "30,120",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 409,
    "name": "Kosmos ⭕️⃤",
    "avatar": "https://avatars.steamstatic.com/a4b65ef994c16baccc624844bc6306c47a64f3dc.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "30,120",
    "bestRank": "30,447",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 410,
    "name": "꧁༒🅙 🅘 🅝 🅧༒꧂",
    "avatar": "https://avatars.steamstatic.com/716c941b773e997b012afae3045284511461e3f5.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "30,120",
    "bestRank": "30,120",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 411,
    "name": "Todd^",
    "avatar": "https://avatars.steamstatic.com/6af5a30fe698285fbd7f61f29a02b2250cf2221e.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,120",
    "bestRank": "30,120",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 412,
    "name": "refm.",
    "avatar": "https://avatars.steamstatic.com/ce6e0ccb8e72f415c4f77ae1bac2fecc58797f24.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,120",
    "bestRank": "30,120",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 413,
    "name": "velumin",
    "avatar": "https://avatars.steamstatic.com/516537b81bbef0c9690f53ac0022d88a8f719212.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,119",
    "bestRank": "30,119",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 414,
    "name": "DydeK",
    "avatar": "https://avatars.steamstatic.com/1572b8b31f3f75ecce9ac9a0731130444e90b9a5.jpg",
    "tracked": true,
    "wins": 67,
    "currentRank": "30,119",
    "bestRank": "30,119",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 415,
    "name": "DonK",
    "avatar": "https://avatars.steamstatic.com/8e4689c0b885dfe3965060e2e25308b057866897.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "30,119",
    "bestRank": "30,119",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 416,
    "name": "Quirlie",
    "avatar": "https://avatars.steamstatic.com/2e14fbdc3719d68a701c8ff2263200834c125291.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,119",
    "bestRank": "30,119",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 417,
    "name": "tio",
    "avatar": "https://avatars.steamstatic.com/8896fe2a855fbb58ff1950e505477baefe5744ca.jpg",
    "tracked": false,
    "wins": 232,
    "currentRank": "30,118",
    "bestRank": "30,118",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 418,
    "name": "ℒ𝓪𝒢𝒢𝓼𝓱𝓸𝒯",
    "avatar": "https://avatars.steamstatic.com/4d173a28f1f20f782eba420a94f32fee86f0dd02.jpg",
    "tracked": true,
    "wins": 132,
    "currentRank": "30,118",
    "bestRank": "30,875",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 419,
    "name": "s1mple",
    "avatar": "https://avatars.steamstatic.com/ebb4418e771b14d1980610d77d132251d75d1a6d.jpg",
    "tracked": false,
    "wins": 100,
    "currentRank": "30,118",
    "bestRank": "30,118",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 420,
    "name": "Princess69",
    "avatar": "https://avatars.steamstatic.com/36d7397b8cbdfe80f6009afcc4274252d3cea326.jpg",
    "tracked": true,
    "wins": 40,
    "currentRank": "30,118",
    "bestRank": "30,118",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 421,
    "name": "Übermensch",
    "avatar": "https://avatars.steamstatic.com/67dfc85345862665e5bedc4ddbccb3357fbc17b1.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,118",
    "bestRank": "30,118",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 422,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 133,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 423,
    "name": "Memkill",
    "avatar": "https://avatars.steamstatic.com/1191c81a57194f64acfcda94f0fd0cb94e92eff7.jpg",
    "tracked": false,
    "wins": 99,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 424,
    "name": "yatomio",
    "avatar": "https://avatars.steamstatic.com/383a18bfa8791f9b3f55a5fc81fb3aabff523d88.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 425,
    "name": "FaN7a",
    "avatar": "https://avatars.steamstatic.com/4dee1d0ffb3729b81b1473987837fb15b0cbddc7.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 426,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 43,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 427,
    "name": "-EsD",
    "avatar": "https://avatars.steamstatic.com/aed5e1c5bf60753a550f49cfcebf529fbb0a7674.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "30,117",
    "bestRank": "30,117",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 428,
    "name": "illumi",
    "avatar": "https://avatars.steamstatic.com/1b57a280808437c863fcf075cecca9f71c406b00.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "30,116",
    "bestRank": "30,116",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 429,
    "name": "Amer",
    "avatar": "https://avatars.steamstatic.com/e1a8e60982b5e87a43a5dc234290de2980e0a557.jpg",
    "tracked": true,
    "wins": 56,
    "currentRank": "30,116",
    "bestRank": "31,059",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 430,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,116",
    "bestRank": "30,116",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 431,
    "name": "PayPal",
    "avatar": "https://avatars.steamstatic.com/55338ad3aade71c05149ebf76247a072a74baa2d.jpg",
    "tracked": false,
    "wins": 77,
    "currentRank": "30,115",
    "bestRank": "30,115",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 432,
    "name": "MILOS[t]",
    "avatar": "https://avatars.steamstatic.com/d02780a0912c2307fa53b32b10a25c0e1ec3c1d3.jpg",
    "tracked": true,
    "wins": 47,
    "currentRank": "30,115",
    "bestRank": "30,119",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 433,
    "name": "FlexXi",
    "avatar": "https://avatars.steamstatic.com/e7f624df62a674e4d141f90839186cd67ca7bcea.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,115",
    "bestRank": "30,115",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 434,
    "name": "寻樱",
    "avatar": "https://avatars.steamstatic.com/7b693643654d88faa3e392d5f1f861e1692e072b.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,115",
    "bestRank": "30,115",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 435,
    "name": "donfantastickypato",
    "avatar": "https://avatars.steamstatic.com/978d0fe5b460bd11a978c2df768e9470fe151c33.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,115",
    "bestRank": "30,115",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 436,
    "name": "bluek1ng",
    "avatar": "https://avatars.steamstatic.com/f559cbfae9849489610e4952d7187ccba83c5382.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,115",
    "bestRank": "30,115",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 437,
    "name": "MIKE_DAYSON",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a2/a262095c2c36a609471e3dfcad4647deea336a00.jpg",
    "tracked": true,
    "wins": 88,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 438,
    "name": "🅾🅻🅳",
    "avatar": "https://avatars.steamstatic.com/c55d9c91ed05522bea79368a10dffdd0a1ddeebf.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 439,
    "name": "Apze",
    "avatar": "https://avatars.steamstatic.com/28243d7b5b2ed37b71c5c38a4aee2e2d0378fb7c.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 440,
    "name": "dan",
    "avatar": "https://avatars.steamstatic.com/7a9b413987d3ac9abf76c224a1abe691cc3a1dd5.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 441,
    "name": "Peky",
    "avatar": "https://avatars.steamstatic.com/2cd2646b35f9333ac6f45470b9c83ab63e99471b.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 442,
    "name": "Canis Lupus Arctos",
    "avatar": "https://avatars.steamstatic.com/2e43fdfa4103a5eff8ac47a25fa9f6feba3af1ac.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,114",
    "bestRank": "30,114",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 443,
    "name": "clean.",
    "avatar": "https://avatars.steamstatic.com/7575972cb5c84dc126cdc1f4492e2cf7e3da870b.jpg",
    "tracked": true,
    "wins": 130,
    "currentRank": "30,113",
    "bestRank": "30,705",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 444,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,113",
    "bestRank": "30,113",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 445,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 55,
    "currentRank": "30,113",
    "bestRank": "30,879",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 446,
    "name": "Jamto",
    "avatar": "https://avatars.steamstatic.com/a6ba874a0a5a375bc5806e72cc18bd6e4a83a0f7.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,113",
    "bestRank": "30,113",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 447,
    "name": "/duycwon",
    "avatar": "https://avatars.steamstatic.com/f4f2fc58620a769dfcc51defda89ed5cb8fa7d75.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "30,113",
    "bestRank": "30,113",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 448,
    "name": "X2™",
    "avatar": "https://avatars.steamstatic.com/6bfb7f7415d3e3f2194be16ae0a2b02a83e7ded8.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,113",
    "bestRank": "30,113",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 449,
    "name": "St1l666",
    "avatar": "https://avatars.steamstatic.com/0c9a148ffdaa553c06d0ff316839eeb51a47fbb2.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,113",
    "bestRank": "30,113",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 450,
    "name": "𝖕𝖍𝖆𝖓𝖙𝖔𝖒~",
    "avatar": "https://avatars.steamstatic.com/f6caea6baf560ee8f9a7e148811e74c43a58a517.jpg",
    "tracked": false,
    "wins": 109,
    "currentRank": "30,112",
    "bestRank": "30,112",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 451,
    "name": "TweeZ",
    "avatar": "https://avatars.steamstatic.com/0121c1978ea576e9b167843b5e55ba80e01c214b.jpg",
    "tracked": true,
    "wins": 103,
    "currentRank": "30,112",
    "bestRank": "30,895",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 452,
    "name": "Scorpion⁧⁧ ᵇˡˢ",
    "avatar": "https://avatars.steamstatic.com/1371f045abbf437667f64c430e11a10b128d4cab.jpg",
    "tracked": true,
    "wins": 96,
    "currentRank": "30,112",
    "bestRank": "30,112",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 453,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 57,
    "currentRank": "30,112",
    "bestRank": "30,112",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 454,
    "name": "red",
    "avatar": "https://avatars.steamstatic.com/7fdae4cc689c3f2a0fb81cd1c038a162c276c945.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,112",
    "bestRank": "30,317",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 455,
    "name": "vance",
    "avatar": "https://avatars.steamstatic.com/b16d5fca1d994059ce1a476069f3048990007743.jpg",
    "tracked": false,
    "wins": 158,
    "currentRank": "30,111",
    "bestRank": "30,111",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 456,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,111",
    "bestRank": "30,111",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 457,
    "name": "✪  Aloiz1o Chul4p4",
    "avatar": "https://avatars.steamstatic.com/450e1650d08a6b248847911dbf46770da3683f30.jpg",
    "tracked": true,
    "wins": 58,
    "currentRank": "30,111",
    "bestRank": "30,111",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 458,
    "name": "󠀡󠀡󠀡⁧⁧Qumko",
    "avatar": "https://avatars.steamstatic.com/dc9e750610ab2ab8f7479c4e8827b60538c2d750.jpg",
    "tracked": true,
    "wins": 36,
    "currentRank": "30,110",
    "bestRank": "30,115",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 459,
    "name": ":D",
    "avatar": "https://avatars.steamstatic.com/ccc8bffd916ccdfa73199cc50ad3fb8473113f5e.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,110",
    "bestRank": "30,122",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 460,
    "name": "xxx dove healing",
    "avatar": "https://avatars.steamstatic.com/f1553a8032dbbe1921a52f8359cbe6e9b326164e.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "30,110",
    "bestRank": "30,110",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 461,
    "name": "Martin #neuesensitivität#noskil",
    "avatar": "https://avatars.steamstatic.com/aa08b3d2a2417f4506c4159aedb27a51784d6a32.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "30,110",
    "bestRank": "30,110",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 462,
    "name": "Totis aka R8",
    "avatar": "https://avatars.steamstatic.com/3795c9163a6663c021f0b4437ed0c42846dfeb2f.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,110",
    "bestRank": "30,110",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 463,
    "name": "caffeine addict",
    "avatar": "https://avatars.steamstatic.com/526fa9200972ae12ccd09c22abe00dc6d68d9005.jpg",
    "tracked": false,
    "wins": 124,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 464,
    "name": "#freakybob",
    "avatar": "https://avatars.steamstatic.com/69c6195579d4a4d5d6ab228ea650cab2b292ad5a.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 465,
    "name": "اللعنة على الزنوج",
    "avatar": "https://avatars.steamstatic.com/92b00055c7318d91ce9f4fb65c5129a5af6861db.jpg",
    "tracked": true,
    "wins": 64,
    "currentRank": "30,109",
    "bestRank": "30,503",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 466,
    "name": "wwwwwwwwww",
    "avatar": "https://avatars.steamstatic.com/644b88b1d6275f6754a54220a89b258cee3967f5.jpg",
    "tracked": true,
    "wins": 62,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 467,
    "name": "Clark Ez",
    "avatar": "https://avatars.steamstatic.com/5c6ad4c754069ef7e455d535bc0e1f2632445011.jpg",
    "tracked": true,
    "wins": 49,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 468,
    "name": "bugha",
    "avatar": "https://avatars.steamstatic.com/183de6380a58b87cbee1106ec3ce5bb2be318e2c.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 469,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 470,
    "name": "Proterzen",
    "avatar": "https://avatars.steamstatic.com/086c92bf11fbf034c24eaa880354525d9b22630f.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 471,
    "name": "✪ PatriK1nG",
    "avatar": "https://avatars.steamstatic.com/4f570497f69258a4c87a8094f20594402ddda138.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,109",
    "bestRank": "30,109",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 472,
    "name": "@TrevorMurphy",
    "avatar": "https://avatars.steamstatic.com/bd2a5874588011060bb4132805240c45023f9b9a.jpg",
    "tracked": false,
    "wins": 117,
    "currentRank": "30,108",
    "bestRank": "30,108",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 473,
    "name": "AJE",
    "avatar": "https://avatars.steamstatic.com/711fef70d275e7aad248384771bf42c0c69e9e2c.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,108",
    "bestRank": "30,108",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 474,
    "name": "Lumedas",
    "avatar": "https://avatars.steamstatic.com/0d49a80b989fcea59a45bbc440e96d96fd81915b.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "30,107",
    "bestRank": "30,107",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 475,
    "name": "wqeqeweqwewq",
    "avatar": "https://avatars.steamstatic.com/22245078502829217285d326dfd4a902b4511d18.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "30,107",
    "bestRank": "30,107",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 476,
    "name": "󠀡󠀡",
    "avatar": "https://avatars.steamstatic.com/79987d74a97990dd2177a593b01bc6d83e77292e.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,107",
    "bestRank": "30,107",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 477,
    "name": "MardiN",
    "avatar": "https://avatars.steamstatic.com/29887a2c84fc6518d0c26074927635f597320ebe.jpg",
    "tracked": true,
    "wins": 126,
    "currentRank": "30,106",
    "bestRank": "30,106",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 478,
    "name": "[Faze] Racist",
    "avatar": "https://avatars.steamstatic.com/95d8f1c00bbdc43e289e494f3dad027a6f930ac4.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "30,106",
    "bestRank": "30,106",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 479,
    "name": "1111-",
    "avatar": "https://avatars.steamstatic.com/e643c812feece27c17ad274ee113b3c2efb3d202.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "30,106",
    "bestRank": "30,106",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 480,
    "name": "Lethal Tempo",
    "avatar": "https://avatars.steamstatic.com/a944d1b0686775a0d5d0d84a9781b809c0abe85e.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "30,106",
    "bestRank": "30,106",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 481,
    "name": "MADCado",
    "avatar": "https://avatars.steamstatic.com/51e056d587e80c96d447d74103137ffe2a90a84b.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,106",
    "bestRank": "30,106",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 482,
    "name": "Bane- -",
    "avatar": "https://avatars.steamstatic.com/0afe26a9776c8994391de8ffbec97e6737bf65ba.jpg",
    "tracked": true,
    "wins": 120,
    "currentRank": "30,105",
    "bestRank": "30,105",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 483,
    "name": "Uzurpator Mclaud",
    "avatar": "https://avatars.steamstatic.com/acf67207768cdc5be5f09aca6a9f7830bf27d6f7.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "30,105",
    "bestRank": "30,105",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 484,
    "name": "Lexz",
    "avatar": "https://avatars.steamstatic.com/f98448e6719a6a6597a9d22b294249ba093a5298.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "30,105",
    "bestRank": "30,105",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 485,
    "name": "摸鱼王",
    "avatar": "https://avatars.steamstatic.com/c5da13940a3d4a9e6b84a5d7dc8527e57dcfe942.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "30,105",
    "bestRank": "30,105",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 486,
    "name": "Princess69",
    "avatar": "https://avatars.steamstatic.com/85f84bb5eeb87eeac77cc24e1408b551b32b1f83.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "30,105",
    "bestRank": "30,105",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 487,
    "name": "Cry Baby1669",
    "avatar": "https://avatars.steamstatic.com/e056ce7b47c7b0533eb2055d1ead7a7d39777cda.jpg",
    "tracked": false,
    "wins": 90,
    "currentRank": "30,104",
    "bestRank": "30,104",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 488,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 68,
    "currentRank": "30,104",
    "bestRank": "30,104",
    "lastMatch": "match_d6c498f5"
  },
  {
    "id": 489,
    "name": "Вафел",
    "avatar": "https://avatars.steamstatic.com/b8ca8ff24f97e32a5c96496d2926c00917a04b0a.jpg",
    "tracked": true,
    "wins": 40,
    "currentRank": "30,104",
    "bestRank": "30,104",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 490,
    "name": "Kalashmeister",
    "avatar": "https://avatars.steamstatic.com/f1a7c160fcb71c161e6bf2207712e1c504adb282.jpg",
    "tracked": true,
    "wins": 89,
    "currentRank": "30,103",
    "bestRank": "30,103",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 491,
    "name": "OKS",
    "avatar": "https://avatars.steamstatic.com/42cb9096a19c5602b5d11405c4dbf327ce966ff9.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "30,103",
    "bestRank": "30,103",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 492,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 77,
    "currentRank": "30,102",
    "bestRank": "30,102",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 493,
    "name": "j1x",
    "avatar": "https://avatars.steamstatic.com/ee75b250f85622f896a30416864d46e01d95b2ee.jpg",
    "tracked": true,
    "wins": 200,
    "currentRank": "30,101",
    "bestRank": "30,101",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 494,
    "name": "𝐄𝟑𝟎_𝐌𝟑",
    "avatar": "https://avatars.steamstatic.com/69f5da479bf559991874c76858d175113c70fc1e.jpg",
    "tracked": false,
    "wins": 96,
    "currentRank": "30,101",
    "bestRank": "30,101",
    "lastMatch": "match_0dcd3e54"
  },
  {
    "id": 495,
    "name": "Cr4sh",
    "avatar": "https://avatars.steamstatic.com/f3739c9c7be10d92da9a1f603734f284a694c9e4.jpg",
    "tracked": true,
    "wins": 62,
    "currentRank": "30,101",
    "bestRank": "30,101",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 496,
    "name": "梨橙柚爱吃糖",
    "avatar": "https://avatars.steamstatic.com/7988b3a07b1d4de28899a9646b6298c508f396a3.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "30,101",
    "bestRank": "31,030",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 497,
    "name": "Stezy",
    "avatar": "https://avatars.steamstatic.com/ed7691f0e24ab0874829869ddfcf664402a0b346.jpg",
    "tracked": false,
    "wins": 145,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 498,
    "name": "prostix",
    "avatar": "https://avatars.steamstatic.com/bdf893ae03270e9890df5c83f92ff04b527444e2.jpg",
    "tracked": true,
    "wins": 114,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 499,
    "name": "AROX",
    "avatar": "https://avatars.steamstatic.com/ae540d37eef3cfcff194166b7325340a698fe0e0.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 500,
    "name": "eXp1oRmEr",
    "avatar": "https://avatars.steamstatic.com/205d40ba481ef4a69ef0bad0706507d4abc07612.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 501,
    "name": "Kabax",
    "avatar": "https://avatars.steamstatic.com/c364740bc7abb591219bafbef57af528e8e7f1a9.jpg",
    "tracked": true,
    "wins": 48,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 502,
    "name": "1112",
    "avatar": "https://avatars.steamstatic.com/fddf5a14bb2c7fa93284cd2e543fa0b9af6b7cd7.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 503,
    "name": "runi",
    "avatar": "https://avatars.steamstatic.com/d3fd9036a2cad6b49954fe38585cef4b8afba7f9.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 504,
    "name": "kehil",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/76/762d2b59c4366402d522ee34c65afc594ac13aca.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "30,100",
    "bestRank": "30,100",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 505,
    "name": "DeSerT_PunK",
    "avatar": "https://avatars.steamstatic.com/6889e542266ff1eca9c32d7f405a723a0e19f756.jpg",
    "tracked": true,
    "wins": 72,
    "currentRank": "30,068",
    "bestRank": "30,838",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 506,
    "name": "csc",
    "avatar": "https://avatars.steamstatic.com/d99421208fb7d6951d1963cfca8b31076127b127.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "30,066",
    "bestRank": "30,488",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 507,
    "name": "Dr. Gordon Freeman",
    "avatar": "https://avatars.steamstatic.com/aef00ace567ea788029d98c7cf7d91aa5bfccc5c.jpg",
    "tracked": true,
    "wins": 124,
    "currentRank": "30,060",
    "bestRank": "31,450",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 508,
    "name": "DeadPooL ^-^",
    "avatar": "https://avatars.steamstatic.com/0f420c4de9ed84dbee49e200d3a21ececfe314d1.jpg",
    "tracked": false,
    "wins": 82,
    "currentRank": "30,050",
    "bestRank": "30,810",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 509,
    "name": "Penits_Dohn_deenkle",
    "avatar": "https://avatars.steamstatic.com/bf9fcc3115e56bb8d91dfaa319ff4478b066dfb2.jpg",
    "tracked": true,
    "wins": 83,
    "currentRank": "30,044",
    "bestRank": "31,050",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 510,
    "name": "i dont shower",
    "avatar": "https://avatars.steamstatic.com/f47e5567e1cbbd6595a15f2863d2f5cf433874b3.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "30,035",
    "bestRank": "31,010",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 511,
    "name": "Chuck norrie",
    "avatar": "https://avatars.steamstatic.com/940c17222edf600e523ffee392bbd3138c5e18fc.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "30,010",
    "bestRank": "31,119",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 512,
    "name": "1GRMZ",
    "avatar": "https://avatars.steamstatic.com/a10ac10747ea6bdc04fed595f8eb9d28bab2d973.jpg",
    "tracked": true,
    "wins": 122,
    "currentRank": "30,006",
    "bestRank": "30,819",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 513,
    "name": "Vetsku",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 105,
    "currentRank": "30,001",
    "bestRank": "30,571",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 514,
    "name": "sqtf",
    "avatar": "https://avatars.steamstatic.com/9cf0af49ea85abefcbde8e4dea91c1a47bfdd7af.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "30,001",
    "bestRank": "30,108",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 515,
    "name": "我更好了",
    "avatar": "https://avatars.steamstatic.com/6120e5c5788f7e663441935dbb3192e5c90089e0.jpg",
    "tracked": false,
    "wins": 144,
    "currentRank": "30,000",
    "bestRank": "30,233",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 516,
    "name": "deadinside",
    "avatar": "https://avatars.steamstatic.com/3eb2932115bd37060dc419c0b04da250ccea5aed.jpg",
    "tracked": false,
    "wins": 127,
    "currentRank": "30,000",
    "bestRank": "30,899",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 517,
    "name": "Namso41",
    "avatar": "https://avatars.steamstatic.com/543bb32f9249e6738288c0d3ac6987ee25983c41.jpg",
    "tracked": false,
    "wins": 114,
    "currentRank": "30,000",
    "bestRank": "30,551",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 518,
    "name": "Syxaa",
    "avatar": "https://avatars.steamstatic.com/e05587d7d293cd009bf61dac72eb2e5db07ce36d.jpg",
    "tracked": false,
    "wins": 90,
    "currentRank": "30,000",
    "bestRank": "30,476",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 519,
    "name": "rox",
    "avatar": "https://avatars.steamstatic.com/4d9eeb7d60d22c95bfafeb72b5472adc196dbbd0.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "30,000",
    "bestRank": "30,116",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 520,
    "name": "dropa200",
    "avatar": "https://avatars.steamstatic.com/9a72d318319da5bc046f48e339e3f5cf760bd314.jpg",
    "tracked": false,
    "wins": 82,
    "currentRank": "30,000",
    "bestRank": "30,781",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 521,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 81,
    "currentRank": "30,000",
    "bestRank": "30,101",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 522,
    "name": "é O brabro NtC",
    "avatar": "https://avatars.steamstatic.com/543bb32f9249e6738288c0d3ac6987ee25983c41.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "30,000",
    "bestRank": "30,568",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 523,
    "name": "Bubu GaGa",
    "avatar": "https://avatars.steamstatic.com/1e16f53fe33b96bceb9ab7923b9b86056cc3b2f6.jpg",
    "tracked": false,
    "wins": 77,
    "currentRank": "30,000",
    "bestRank": "30,107",
    "lastMatch": "match_7eed795f"
  },
  {
    "id": 524,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 74,
    "currentRank": "30,000",
    "bestRank": "30,109",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 525,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 74,
    "currentRank": "30,000",
    "bestRank": "30,111",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 526,
    "name": "cL0VER日向",
    "avatar": "https://avatars.steamstatic.com/e52f428876dea87c7277411bf89bf03d942cb9f3.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "30,000",
    "bestRank": "30,480",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 527,
    "name": "undercover gynecologist",
    "avatar": "https://avatars.steamstatic.com/837bcb43bdaadad5fcf7bf6c0a5a8afb7eaab3b7.jpg",
    "tracked": true,
    "wins": 74,
    "currentRank": "30,000",
    "bestRank": "30,701",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 528,
    "name": "ezovsky;]]",
    "avatar": "https://avatars.steamstatic.com/922d8205ab8784cbea593586cadad545f1290e84.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "30,000",
    "bestRank": "30,636",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 529,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 68,
    "currentRank": "30,000",
    "bestRank": "30,802",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 530,
    "name": "cheddar",
    "avatar": "https://avatars.steamstatic.com/2bc33b8ca93cd170a9928fc13035dee87f12f8dd.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "30,000",
    "bestRank": "30,986",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 531,
    "name": "nia",
    "avatar": "https://avatars.steamstatic.com/79a6adc6392d76e8265059e41eedd7d1cee07621.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "30,000",
    "bestRank": "30,514",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 532,
    "name": "suplicK",
    "avatar": "https://avatars.steamstatic.com/b3fd61f1481a02570d4d8223125e76b15d5b76cd.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "30,000",
    "bestRank": "30,117",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 533,
    "name": "hanabira",
    "avatar": "https://avatars.steamstatic.com/2268174197b1bff3f91cc7045543adb1b5dfddf4.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,000",
    "bestRank": "30,103",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 534,
    "name": "ЕДЭНИЧКА",
    "avatar": "https://avatars.steamstatic.com/e4c5e2ab869df41657cb2108f0d01723d0ba7ba7.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "30,000",
    "bestRank": "30,119",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 535,
    "name": "𝒫rxmise",
    "avatar": "https://avatars.steamstatic.com/1bbe27b8b3d96ddffa6a6ffb6bf2ebd46d0156cd.jpg",
    "tracked": true,
    "wins": 54,
    "currentRank": "30,000",
    "bestRank": "30,115",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 536,
    "name": "♚♣PUNISHER♣♚",
    "avatar": "https://avatars.steamstatic.com/8c0ebf14e1a3cbf579dbc6ebdf0ccedefe76f23e.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "30,000",
    "bestRank": "30,100",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 537,
    "name": "Neo",
    "avatar": "https://avatars.steamstatic.com/3deb1dca2b89f562037ec120a4e417d3ae5af32b.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "30,000",
    "bestRank": "30,681",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 538,
    "name": "jinbe",
    "avatar": "https://avatars.steamstatic.com/0005ec7f6a5eb52128f9021f00f4591da80df437.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "30,000",
    "bestRank": "30,340",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 539,
    "name": "NIE SIADA Tr0po",
    "avatar": "https://avatars.steamstatic.com/83d689e5d41634e952d40c956d469263e6d5517e.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "30,000",
    "bestRank": "30,010",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 540,
    "name": "WPC",
    "avatar": "https://avatars.steamstatic.com/e4b291d655ae76d8e3cdcb8f27a6d9da0dd16591.jpg",
    "tracked": true,
    "wins": 45,
    "currentRank": "30,000",
    "bestRank": "30,654",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 541,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 45,
    "currentRank": "30,000",
    "bestRank": "30,172",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 542,
    "name": "Mistou",
    "avatar": "https://avatars.steamstatic.com/5913db81e41c1d11b2065e2cc46c2cf9bdc17b58.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "30,000",
    "bestRank": "30,724",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 543,
    "name": "Molla Mücerret",
    "avatar": "https://avatars.steamstatic.com/8dfd6d8d54d24d1deb94f8b6f163198ce104f919.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "30,000",
    "bestRank": "30,284",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 544,
    "name": "zuv",
    "avatar": "https://avatars.steamstatic.com/4312d2a937e33f95c0dae7a683bc633a262f923b.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "30,000",
    "bestRank": "30,118",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 545,
    "name": ".",
    "avatar": "https://avatars.steamstatic.com/be7ef1bd7da4d7c0d214d56027d9e873af486028.jpg",
    "tracked": false,
    "wins": 188,
    "currentRank": "29,999",
    "bestRank": "30,240",
    "lastMatch": "match_036269ce"
  },
  {
    "id": 546,
    "name": "S1mp",
    "avatar": "https://avatars.steamstatic.com/d0e407fbc06a5b4d48099206067cfba680a7aa0c.jpg",
    "tracked": false,
    "wins": 161,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 547,
    "name": "Tallius",
    "avatar": "https://avatars.steamstatic.com/823e3aaf34c08aa9a49ccd561a4acbd8798aec06.jpg",
    "tracked": false,
    "wins": 117,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 548,
    "name": "☜☆☞ AwP ᶠᵘᶜᵏᵧₒ",
    "avatar": "https://avatars.steamstatic.com/34adcd2a2c63e40ce323f872f4781ef5ee322413.jpg",
    "tracked": false,
    "wins": 116,
    "currentRank": "29,999",
    "bestRank": "32,362",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 549,
    "name": "风中残烛",
    "avatar": "https://avatars.steamstatic.com/9babdcd8b0901cf2e6537c9cce65c5483a4223a2.jpg",
    "tracked": false,
    "wins": 112,
    "currentRank": "29,999",
    "bestRank": "30,295",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 550,
    "name": "𝘔𝘪𝘭𝘬𝘺",
    "avatar": "https://avatars.steamstatic.com/4cd353c343fd6117658c39022ba4e9504264ac12.jpg",
    "tracked": true,
    "wins": 107,
    "currentRank": "29,999",
    "bestRank": "31,116",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 551,
    "name": "Al1verCat",
    "avatar": "https://avatars.steamstatic.com/03c4c8c8fe7ae8bc6a7a659b9c271265a83a4154.jpg",
    "tracked": false,
    "wins": 104,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 552,
    "name": "Don't Bark Me",
    "avatar": "https://avatars.steamstatic.com/8ab77eccae2f063845ec3907c271d3ee0a331250.jpg",
    "tracked": false,
    "wins": 102,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 553,
    "name": "itallione;",
    "avatar": "https://avatars.steamstatic.com/f46813a4da362bce24777f2f62099c1c6e30a7a5.jpg",
    "tracked": true,
    "wins": 102,
    "currentRank": "29,999",
    "bestRank": "30,103",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 554,
    "name": "bogaa?",
    "avatar": "https://avatars.steamstatic.com/30208d3177a1074956ac4d8337f034c913d13b24.jpg",
    "tracked": false,
    "wins": 89,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 555,
    "name": "乇Lyw0www",
    "avatar": "https://avatars.steamstatic.com/14fa45d90d1774068441651602af9b2de61890b4.jpg",
    "tracked": true,
    "wins": 88,
    "currentRank": "29,999",
    "bestRank": "31,278",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 556,
    "name": "是阿豪呀",
    "avatar": "https://avatars.steamstatic.com/3f5e9daea59216d7fe13df4e031d3537580e5e21.jpg",
    "tracked": false,
    "wins": 84,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 557,
    "name": "演员新之助",
    "avatar": "https://avatars.steamstatic.com/2d8458d4c3ee7ca750a632cc39dc92757846ec87.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 558,
    "name": "vvv",
    "avatar": "https://avatars.steamstatic.com/b73c661b4c1286030ceec699ecd5d64610fa4c5c.jpg",
    "tracked": false,
    "wins": 83,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 559,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 82,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 560,
    "name": "Кирияна",
    "avatar": "https://avatars.steamstatic.com/edea68afd57a75255af47916521ba7b4bd0174c1.jpg",
    "tracked": false,
    "wins": 81,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 561,
    "name": "✪ ℬ𝑒𝓁𝓁𝒶 ✪",
    "avatar": "https://avatars.steamstatic.com/3b4be8729a1147cf221f9a6eb04679b0d61c7029.jpg",
    "tracked": false,
    "wins": 80,
    "currentRank": "29,999",
    "bestRank": "31,892",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 562,
    "name": "Macklemore",
    "avatar": "https://avatars.steamstatic.com/84880a906d8033e36bd0a5ba1ab47aacd8a542bd.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "29,999",
    "bestRank": "30,218",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 563,
    "name": "ℭ𝔶𝔯𝔲𝔰Fastshot",
    "avatar": "https://avatars.steamstatic.com/aa6b209b9988f9a681b0872a4af06a0d4076d602.jpg",
    "tracked": false,
    "wins": 76,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 564,
    "name": "factiszce",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a4/a47ac2fb792ba5027da400c4ab6e25754637ceb2.jpg",
    "tracked": true,
    "wins": 76,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 565,
    "name": "ʟᴜᴢᴀᴋₓₓₓ",
    "avatar": "https://avatars.steamstatic.com/28354e391cafaf711fb123eaf1a4ef5c2689b4da.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 566,
    "name": "..",
    "avatar": "https://avatars.steamstatic.com/ed2fa7fabf8b0692027787e523001039cfc6ac5f.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 567,
    "name": "$tanley",
    "avatar": "https://avatars.steamstatic.com/cb845f3cfec7b3b4348755068a2c729600b84dc4.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "29,999",
    "bestRank": "32,023",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 568,
    "name": "UeU",
    "avatar": "https://avatars.steamstatic.com/e733296e920585d42325e7d67450d0921d6912a0.jpg",
    "tracked": false,
    "wins": 73,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 569,
    "name": "STOGI",
    "avatar": "https://avatars.steamstatic.com/1ae3c944e6747f83cf258711586a135c4f5c489a.jpg",
    "tracked": false,
    "wins": 73,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 570,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 72,
    "currentRank": "29,999",
    "bestRank": "31,165",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 571,
    "name": "WAWI-498Hz",
    "avatar": "https://avatars.steamstatic.com/4903f580b21e385a35b1f4b61ce5771ab9ec0bb5.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_329b0526"
  },
  {
    "id": 572,
    "name": "L1k4y",
    "avatar": "https://avatars.steamstatic.com/33b5568ff512415a49c355716a4353e51d8ee2b3.jpg",
    "tracked": true,
    "wins": 69,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 573,
    "name": "དགོངས་དག",
    "avatar": "https://avatars.steamstatic.com/d2b9166863669824501503a0ef1b83b328c5af26.jpg",
    "tracked": true,
    "wins": 67,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 574,
    "name": "SerbianGambinoTV",
    "avatar": "https://avatars.steamstatic.com/b3f0a720e49d7f8b983a97840258b7023d8b4e3c.jpg",
    "tracked": true,
    "wins": 65,
    "currentRank": "29,999",
    "bestRank": "30,457",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 575,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 63,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 576,
    "name": "adventurer",
    "avatar": "https://avatars.steamstatic.com/fab332b7c80c8572ee5ca57daeca26e06e591267.jpg",
    "tracked": false,
    "wins": 61,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 577,
    "name": "Sevenz",
    "avatar": "https://avatars.steamstatic.com/cf76307f62d529bca21346d674fdeec953b9a301.jpg",
    "tracked": false,
    "wins": 61,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 578,
    "name": "✪ SaShO ✪",
    "avatar": "https://avatars.steamstatic.com/5dda3b57926dbbfa91e39ca7c167e47e0997ea3b.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,999",
    "bestRank": "30,121",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 579,
    "name": "✪ kylianmbappe ⚡",
    "avatar": "https://avatars.steamstatic.com/df5c3c5bf71da1dc64da44eb872ad7cb0ff82957.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "29,999",
    "bestRank": "30,119",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 580,
    "name": "WZX",
    "avatar": "https://avatars.steamstatic.com/50ee8676c81c7f3ea73a2580bb0b22686c4d2d3c.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 581,
    "name": "PEUGEOT 106 GTI",
    "avatar": "https://avatars.steamstatic.com/6e0daf6525b93dc8ab4b52f8d5216082e09fef68.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 582,
    "name": "BryanN",
    "avatar": "https://avatars.steamstatic.com/90853e252617eb5ef6126e1468d1972d9563a033.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 583,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 52,
    "currentRank": "29,999",
    "bestRank": "30,914",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 584,
    "name": "ComradeCat",
    "avatar": "https://avatars.steamstatic.com/704ded32b07d08ed9e92cccafef92124cc05bad7.jpg",
    "tracked": false,
    "wins": 49,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 585,
    "name": "Kunohx",
    "avatar": "https://avatars.steamstatic.com/8bc3e81eb09cb7272a0c010028636b83995d809f.jpg",
    "tracked": false,
    "wins": 49,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 586,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 48,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 587,
    "name": "BECKERRRRRRRRRRRRRRRRRR",
    "avatar": "https://avatars.steamstatic.com/a51e3229f5d32b1423322d2c17355803d028afc0.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 588,
    "name": "xkarqxkarq",
    "avatar": "https://avatars.steamstatic.com/09e4ad232cf198dc374194080fbca4c3e2079cdf.jpg",
    "tracked": true,
    "wins": 44,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 589,
    "name": "•ᴮᴬᴰʙᴏʏツ",
    "avatar": "https://avatars.steamstatic.com/3ee699e03a4fdbc90a16718a36ba5e24a3f64d59.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,999",
    "bestRank": "30,114",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 590,
    "name": "™Sørensen ッ",
    "avatar": "https://avatars.steamstatic.com/3f240a153f63d1cc5bb67f2e9374cc1457a594a8.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 591,
    "name": "CoolBee",
    "avatar": "https://avatars.steamstatic.com/3e93c20994be802afff8235cad7c7b59595f3f71.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,999",
    "bestRank": "31,216",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 592,
    "name": "chewie",
    "avatar": "https://avatars.steamstatic.com/9611d339c622ac3ddbf94c7eb537e28794da4bc2.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,999",
    "bestRank": "30,449",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 593,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 42,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 594,
    "name": "insiide",
    "avatar": "https://avatars.steamstatic.com/6541249c69a156f440cb93be66c80c127742e7d8.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 595,
    "name": "prex",
    "avatar": "https://avatars.steamstatic.com/756200fb6045830b1dd838d9d74322927d5caea2.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 596,
    "name": "Spell",
    "avatar": "https://avatars.steamstatic.com/ea548dd7c2dad0cf98d538611e7bba0ff5bfa936.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 597,
    "name": "ben whittaker",
    "avatar": "https://avatars.steamstatic.com/3262b66b044dfe5a42b9667ae85cb37a6b98fb63.jpg",
    "tracked": true,
    "wins": 36,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 598,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 599,
    "name": "lux in tenebris",
    "avatar": "https://avatars.steamstatic.com/0a3230de441dbb5f5af6c4f2a8c095bb774f615b.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 600,
    "name": "Tinkoff2010",
    "avatar": "https://avatars.steamstatic.com/1e4b9829dc4c9749cda756d37b7f66833d206076.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 601,
    "name": "Drive Easy",
    "avatar": "https://avatars.steamstatic.com/826ba17685ff82d19545e113468ff27ebcce95df.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 602,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 33,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 603,
    "name": "klab",
    "avatar": "https://avatars.steamstatic.com/a6215e2628beb825dbdce9f4579b593b9c478ce0.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 604,
    "name": "potato",
    "avatar": "https://avatars.steamstatic.com/cbdec81603bf8cb534c1bb0a77a0269bd7404c53.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 605,
    "name": "NBKI",
    "avatar": "https://avatars.steamstatic.com/0847dc21a480e5d58bd4ff284b4de31b19fdc906.jpg",
    "tracked": true,
    "wins": 32,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 606,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,999",
    "bestRank": "29,999",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 607,
    "name": "法塔利提",
    "avatar": "https://avatars.steamstatic.com/14b8e936460554cc5caa2043369f7a83eca789db.jpg",
    "tracked": true,
    "wins": 114,
    "currentRank": "29,995",
    "bestRank": "30,678",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 608,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 101,
    "currentRank": "29,994",
    "bestRank": "30,545",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 609,
    "name": "苦寻富婆无果~",
    "avatar": "https://avatars.steamstatic.com/fdda437222643dd51f68876575ab312573c685b8.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "29,993",
    "bestRank": "29,993",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 610,
    "name": "Dury",
    "avatar": "https://avatars.steamstatic.com/50767cea96889a121066ed45c098873cb258f8f3.jpg",
    "tracked": true,
    "wins": 76,
    "currentRank": "29,991",
    "bestRank": "31,686",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 611,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,988",
    "bestRank": "30,986",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 612,
    "name": "taulantk7.",
    "avatar": "https://avatars.steamstatic.com/1d246637f4d1e6c186c54df012b27ef8497e7b51.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,982",
    "bestRank": "29,982",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 613,
    "name": "Ermalovich",
    "avatar": "https://avatars.steamstatic.com/4ece1796fe35c4d3bcc09e73c24e46605647511b.jpg",
    "tracked": false,
    "wins": 164,
    "currentRank": "29,980",
    "bestRank": "29,980",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 614,
    "name": "LOCK",
    "avatar": "https://avatars.steamstatic.com/62367275cf14a6806d47b50c53de9b4b4c72391e.jpg",
    "tracked": false,
    "wins": 91,
    "currentRank": "29,969",
    "bestRank": "29,969",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 615,
    "name": "Cubensis",
    "avatar": "https://avatars.steamstatic.com/456601e7e4ae7b578ef5204a49aeb214db44af6f.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "29,964",
    "bestRank": "29,964",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 616,
    "name": "重生之我是老蒯的阴茎",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,961",
    "bestRank": "29,961",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 617,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 41,
    "currentRank": "29,959",
    "bestRank": "29,959",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 618,
    "name": "Roche",
    "avatar": "https://avatars.steamstatic.com/96740adfc230bdaf2008f954ea8d943b1f3fc37a.jpg",
    "tracked": true,
    "wins": 59,
    "currentRank": "29,957",
    "bestRank": "30,855",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 619,
    "name": "hexa.watch",
    "avatar": "https://avatars.steamstatic.com/398617296f44c4e6fdb7ea2945c3ea40c493441f.jpg",
    "tracked": true,
    "wins": 50,
    "currentRank": "29,945",
    "bestRank": "29,945",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 620,
    "name": "小帅哥",
    "avatar": "https://avatars.steamstatic.com/1ac02d9cf89a6950a5aafe97dac8bc1c2c71977d.jpg",
    "tracked": false,
    "wins": 49,
    "currentRank": "29,945",
    "bestRank": "29,945",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 621,
    "name": "John Wick",
    "avatar": "https://avatars.steamstatic.com/562827d75e110e418515ec747468aa6eb7fb7376.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,943",
    "bestRank": "29,943",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 622,
    "name": "成宮はるあ",
    "avatar": "https://avatars.steamstatic.com/b351e6b77a6d189694f6c4fd9bc5a2614598a7c9.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,941",
    "bestRank": "29,941",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 623,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 105,
    "currentRank": "29,940",
    "bestRank": "32,367",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 624,
    "name": "узбег.",
    "avatar": "https://avatars.steamstatic.com/0f6ea84d2b49910c575e57a36581ef705523173d.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "29,940",
    "bestRank": "30,468",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 625,
    "name": "MK",
    "avatar": "https://avatars.steamstatic.com/484d6e8217037e5f4538ef8d8d6e00fd98c0b054.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,937",
    "bestRank": "29,999",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 626,
    "name": "Ylyas·PAC✨",
    "avatar": "https://avatars.steamstatic.com/ffcbdd1273642a9891a1d5f193efa8c7fc7aa1e4.jpg",
    "tracked": false,
    "wins": 30,
    "currentRank": "29,934",
    "bestRank": "29,934",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 627,
    "name": "MM6",
    "avatar": "https://avatars.steamstatic.com/0aeb679810dcade5153e9208a5cc511ab7402041.jpg",
    "tracked": true,
    "wins": 66,
    "currentRank": "29,921",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 628,
    "name": "Hasbulla Magomedov",
    "avatar": "https://avatars.steamstatic.com/8f2c081191cc6983a2cc8987a4610dc9dc3a3624.jpg",
    "tracked": false,
    "wins": 101,
    "currentRank": "29,917",
    "bestRank": "29,999",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 629,
    "name": "lucky Peter",
    "avatar": "https://avatars.steamstatic.com/50767cea96889a121066ed45c098873cb258f8f3.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "29,915",
    "bestRank": "30,110",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 630,
    "name": "S@T@N@",
    "avatar": "https://avatars.steamstatic.com/e354a7d3edf1b991170457421e4a466164a54ae0.jpg",
    "tracked": false,
    "wins": 87,
    "currentRank": "29,909",
    "bestRank": "30,111",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 631,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 65,
    "currentRank": "29,905",
    "bestRank": "29,905",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 632,
    "name": "hard autism",
    "avatar": "https://avatars.steamstatic.com/e2db5548d2b11e6ca094a31d63bc2c335735814c.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,905",
    "bestRank": "29,905",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 633,
    "name": "DETER",
    "avatar": "https://avatars.steamstatic.com/48da534282167ec4c2cdf2a5eb14714a97b0bfe4.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "29,905",
    "bestRank": "29,905",
    "lastMatch": "match_98144d49"
  },
  {
    "id": 634,
    "name": "free haircuts",
    "avatar": "https://avatars.steamstatic.com/b2affed94658bca63c048dc2d70ff3f8099a045f.jpg",
    "tracked": false,
    "wins": 103,
    "currentRank": "29,898",
    "bestRank": "32,291",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 635,
    "name": "ANTI CCP",
    "avatar": "https://avatars.steamstatic.com/e9f6b600ea35f7758355a6bb735680a72651cb44.jpg",
    "tracked": false,
    "wins": 68,
    "currentRank": "29,897",
    "bestRank": "29,897",
    "lastMatch": "match_09e0dda1"
  },
  {
    "id": 636,
    "name": "Mitsubishi Lancer EVO VIII",
    "avatar": "https://avatars.steamstatic.com/2634d737187750f91922a12e9a4895aaae3ebd16.jpg",
    "tracked": true,
    "wins": 58,
    "currentRank": "29,897",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 637,
    "name": "Viso",
    "avatar": "https://avatars.steamstatic.com/21ec31fd4a6df1c46fcee1a183c478a06b37088d.jpg",
    "tracked": false,
    "wins": 130,
    "currentRank": "29,895",
    "bestRank": "30,769",
    "lastMatch": "match_61e04391"
  },
  {
    "id": 638,
    "name": "bright",
    "avatar": "https://avatars.steamstatic.com/72619791d3f6f96f78a688c314ecaa4f207a434e.jpg",
    "tracked": false,
    "wins": 30,
    "currentRank": "29,895",
    "bestRank": "29,895",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 639,
    "name": "PromoDex",
    "avatar": "https://avatars.steamstatic.com/e09463bb3a27f8e75b3e1ccbb46a961863fd015e.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,895",
    "bestRank": "29,895",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 640,
    "name": "ttttttttttec",
    "avatar": "https://avatars.steamstatic.com/77e0f7eae01b0c645ef23ce80e9bcdebb42a86ff.jpg",
    "tracked": false,
    "wins": 112,
    "currentRank": "29,893",
    "bestRank": "30,108",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 641,
    "name": "DONBA$$",
    "avatar": "https://avatars.steamstatic.com/408fa5f4aa2011080a86aef18f69395a3b2a661d.jpg",
    "tracked": false,
    "wins": 70,
    "currentRank": "29,893",
    "bestRank": "30,112",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 642,
    "name": "SniperKing",
    "avatar": "https://avatars.steamstatic.com/5c9682ebdab16ba15671e04f14db4c30f4997ece.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,892",
    "bestRank": "30,790",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 643,
    "name": "shark-potatoes",
    "avatar": "https://avatars.steamstatic.com/b010a94e69a091c9f75b86495054619f30c54d29.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "29,891",
    "bestRank": "29,891",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 644,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 65,
    "currentRank": "29,889",
    "bestRank": "30,176",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 645,
    "name": "Sens",
    "avatar": "https://avatars.steamstatic.com/dbc6bd7694e6d20444db5b32cc93078a585e7f9c.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,889",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 646,
    "name": "wwwwwwwwww",
    "avatar": "https://avatars.steamstatic.com/688613171c0a160556ab1a8dc7e4a369b0db55ee.jpg",
    "tracked": true,
    "wins": 67,
    "currentRank": "29,886",
    "bestRank": "30,502",
    "lastMatch": "match_036269ce"
  },
  {
    "id": 647,
    "name": "drush",
    "avatar": "https://avatars.steamstatic.com/a1cca265702006812db6c7edf57750ec9cf95980.jpg",
    "tracked": true,
    "wins": 167,
    "currentRank": "29,885",
    "bestRank": "29,885",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 648,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 156,
    "currentRank": "29,884",
    "bestRank": "30,560",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 649,
    "name": "☾.⁧⁧Zubumafu",
    "avatar": "https://avatars.steamstatic.com/7014b5c4c11e9c0d56737bdfb35aaf41efd3d350.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "29,884",
    "bestRank": "31,687",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 650,
    "name": "45天",
    "avatar": "https://avatars.steamstatic.com/0f0b4bd0a5d59240414222277e33a4e28b3a5a38.jpg",
    "tracked": false,
    "wins": 89,
    "currentRank": "29,883",
    "bestRank": "29,999",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 651,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 92,
    "currentRank": "29,879",
    "bestRank": "30,115",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 652,
    "name": "SonSamuray",
    "avatar": "https://avatars.steamstatic.com/ec95ddfdbe9b9085977e959acaa3644bf8110cf9.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "29,879",
    "bestRank": "30,380",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 653,
    "name": "Vaske",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,877",
    "bestRank": "30,538",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 654,
    "name": "4STRIKERSONLY",
    "avatar": "https://avatars.steamstatic.com/726ebf37fa190a6bdcd2c58f8ca61233d9a5ee0a.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,877",
    "bestRank": "29,999",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 655,
    "name": "Hossinator",
    "avatar": "https://avatars.steamstatic.com/c393ae61f931ecafc03120317839f054271aad0f.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "29,876",
    "bestRank": "29,999",
    "lastMatch": "match_50f644a8"
  },
  {
    "id": 656,
    "name": "gнσѕтχ",
    "avatar": "https://avatars.steamstatic.com/51611fdeefead95ffd65c4c4504d1ed7f2fa4ad1.jpg",
    "tracked": false,
    "wins": 141,
    "currentRank": "29,875",
    "bestRank": "30,116",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 657,
    "name": "lvl♿ m1tzw",
    "avatar": "https://avatars.steamstatic.com/18274157609a8fc645b3a74380a8e0bbc28e0a13.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,872",
    "bestRank": "29,999",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 658,
    "name": "~^_^~ 自分自身",
    "avatar": "https://avatars.steamstatic.com/77510a1e61b850a2ae95276bb77dfbcc9b775892.jpg",
    "tracked": true,
    "wins": 47,
    "currentRank": "29,872",
    "bestRank": "30,872",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 659,
    "name": "Ottoman",
    "avatar": "https://avatars.steamstatic.com/070e8d249f61a031280229828c0e03944a202390.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,858",
    "bestRank": "29,885",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 660,
    "name": "luly",
    "avatar": "https://avatars.steamstatic.com/4ba3b643c920173d922bddca0799614969f33f32.jpg",
    "tracked": true,
    "wins": 39,
    "currentRank": "29,856",
    "bestRank": "29,856",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 661,
    "name": ".exe",
    "avatar": "https://avatars.steamstatic.com/29b54a7388dec5e192139cb870a81292e5077dec.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,849",
    "bestRank": "29,849",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 662,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 105,
    "currentRank": "29,847",
    "bestRank": "29,847",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 663,
    "name": "gagao",
    "avatar": "https://avatars.steamstatic.com/ab2a0571ffb31af43e9e688ff39d630d82338d75.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,844",
    "bestRank": "29,844",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 664,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 56,
    "currentRank": "29,842",
    "bestRank": "29,999",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 665,
    "name": "Boobs ur mom enjoyer",
    "avatar": "https://avatars.steamstatic.com/f06752b73c503f4c5df77178a1d8f41269dc7f90.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "29,838",
    "bestRank": "29,838",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 666,
    "name": "Juice",
    "avatar": "https://avatars.steamstatic.com/edea68afd57a75255af47916521ba7b4bd0174c1.jpg",
    "tracked": false,
    "wins": 107,
    "currentRank": "29,835",
    "bestRank": "29,835",
    "lastMatch": "match_c94211a5"
  },
  {
    "id": 667,
    "name": "38.8w的小仙女不吃香菜",
    "avatar": "https://avatars.steamstatic.com/2b7ae07393fb1d49bc3ff09bfcb99173f400be82.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "29,833",
    "bestRank": "29,833",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 668,
    "name": "Kuben",
    "avatar": "https://avatars.steamstatic.com/b2edbc430cffa963966ebafc9e7844414a9c51c1.jpg",
    "tracked": false,
    "wins": 113,
    "currentRank": "29,832",
    "bestRank": "29,956",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 669,
    "name": "salvatore",
    "avatar": "https://avatars.steamstatic.com/a2a204d0738a62c8f4825b407e8bdf8b8fadf6b1.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,826",
    "bestRank": "29,897",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 670,
    "name": "Serval971",
    "avatar": "https://avatars.steamstatic.com/6064f7c9a2190b8b36cf37160c866a37984f9868.jpg",
    "tracked": false,
    "wins": 94,
    "currentRank": "29,825",
    "bestRank": "29,825",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 671,
    "name": "YourGod",
    "avatar": "https://avatars.steamstatic.com/148ff422f2245ab66abfeabf3f7506861d6b703b.jpg",
    "tracked": false,
    "wins": 171,
    "currentRank": "29,823",
    "bestRank": "29,823",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 672,
    "name": "god bless the trap",
    "avatar": "https://avatars.steamstatic.com/9a5d34c2515f0e9fafd48d6895b20f7fb7dd5fbe.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "29,822",
    "bestRank": "29,822",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 673,
    "name": "🅰",
    "avatar": "https://avatars.steamstatic.com/083368e511ea85e24e2300239775ff525053fe83.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,821",
    "bestRank": "29,821",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 674,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,819",
    "bestRank": "29,819",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 675,
    "name": "Paco53",
    "avatar": "https://avatars.steamstatic.com/c184eb9a3976a3b42b8c36021bd218945d067512.jpg",
    "tracked": true,
    "wins": 62,
    "currentRank": "29,817",
    "bestRank": "29,999",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 676,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 86,
    "currentRank": "29,812",
    "bestRank": "29,951",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 677,
    "name": "speed-deemon",
    "avatar": "https://avatars.steamstatic.com/9dadcdca438c26df3d044ab254550d100465660e.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "29,809",
    "bestRank": "29,999",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 678,
    "name": "tom--",
    "avatar": "https://avatars.steamstatic.com/7fd775320e57d593ff23a7cdca2e95fee83d27dd.jpg",
    "tracked": true,
    "wins": 57,
    "currentRank": "29,808",
    "bestRank": "29,999",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 679,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 79,
    "currentRank": "29,805",
    "bestRank": "31,065",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 680,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 103,
    "currentRank": "29,803",
    "bestRank": "31,867",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 681,
    "name": "s1",
    "avatar": "https://avatars.steamstatic.com/42d006347f583d1fc40b8e61e42402c6898c1453.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,803",
    "bestRank": "29,803",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 682,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 48,
    "currentRank": "29,802",
    "bestRank": "30,387",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 683,
    "name": "lunatic",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/16/1601c6d123562780f854d74ed69301f397522f2d.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "29,801",
    "bestRank": "29,801",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 684,
    "name": "Jepe",
    "avatar": "https://avatars.steamstatic.com/7c72fbf36fde3be955cf4fb96250b2e42f3ea344.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,796",
    "bestRank": "29,999",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 685,
    "name": "miles",
    "avatar": "https://avatars.steamstatic.com/29b5c66abe5ec2a88ba3dbbc9adb4b95cf5bcafd.jpg",
    "tracked": true,
    "wins": 125,
    "currentRank": "29,795",
    "bestRank": "31,356",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 686,
    "name": "ch",
    "avatar": "https://avatars.steamstatic.com/5921e96e7e52320f8f3808cbea7fb472f5c6d9dc.jpg",
    "tracked": false,
    "wins": 110,
    "currentRank": "29,795",
    "bestRank": "30,395",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 687,
    "name": "мага",
    "avatar": "https://avatars.steamstatic.com/21412aa427068ad51dfdfedbef78dcc2f3be1f70.jpg",
    "tracked": false,
    "wins": 82,
    "currentRank": "29,793",
    "bestRank": "29,793",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 688,
    "name": "Eun-Kyung",
    "avatar": "https://avatars.steamstatic.com/5f98e61672c4f7951b2d5e3fe027c091eba59652.jpg",
    "tracked": false,
    "wins": 125,
    "currentRank": "29,791",
    "bestRank": "31,410",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 689,
    "name": "verti",
    "avatar": "https://avatars.steamstatic.com/39d05b13f5e2bc9a2d7abdd7d003004325d88e09.jpg",
    "tracked": true,
    "wins": 58,
    "currentRank": "29,791",
    "bestRank": "30,463",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 690,
    "name": "xainy",
    "avatar": "https://avatars.steamstatic.com/68fca8b93c4524ad094a6d500e0e538604c1dfa2.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,791",
    "bestRank": "30,796",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 691,
    "name": "argency",
    "avatar": "https://avatars.steamstatic.com/61dc731cbf023adb6887be604fd2760b0214d90d.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,786",
    "bestRank": "29,786",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 692,
    "name": "yoooqa",
    "avatar": "https://avatars.steamstatic.com/fdca4104419cf24c983c28317a0ba88dcc3a972e.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "29,785",
    "bestRank": "30,103",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 693,
    "name": "Andreee-",
    "avatar": "https://avatars.steamstatic.com/6fde8d168c63a1e58ef22100daed532c7180125c.jpg",
    "tracked": true,
    "wins": 28,
    "currentRank": "29,785",
    "bestRank": "29,785",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 694,
    "name": "Ra1ndr3am",
    "avatar": "https://avatars.steamstatic.com/06d3e71696f0b750b4ecb1a0326df96bba5b763c.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "29,784",
    "bestRank": "29,784",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 695,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 80,
    "currentRank": "29,783",
    "bestRank": "29,783",
    "lastMatch": "match_54731ed4"
  },
  {
    "id": 696,
    "name": "gn",
    "avatar": "https://avatars.steamstatic.com/19c6fa0ba96030c8cc25130dca324362ee965212.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "29,782",
    "bestRank": "29,877",
    "lastMatch": "match_7eed795f"
  },
  {
    "id": 697,
    "name": "✪ h1dd3n",
    "avatar": "https://avatars.steamstatic.com/25f9c9b3a2c958528f04d3a28079bb92e98d47b5.jpg",
    "tracked": true,
    "wins": 54,
    "currentRank": "29,781",
    "bestRank": "29,999",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 698,
    "name": "HILL",
    "avatar": "https://avatars.steamstatic.com/b065052744c2fee95b33ca27ba0885336c4bd8e6.jpg",
    "tracked": false,
    "wins": 129,
    "currentRank": "29,777",
    "bestRank": "31,030",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 699,
    "name": "Barne",
    "avatar": "https://avatars.steamstatic.com/b3551b8c7cb79a4f05712825423862c5bf39c04c.jpg",
    "tracked": true,
    "wins": 41,
    "currentRank": "29,776",
    "bestRank": "30,845",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 700,
    "name": "Zic",
    "avatar": "https://avatars.steamstatic.com/f1006253ac199b494af79405e4ff6cefb9329d4b.jpg",
    "tracked": false,
    "wins": 92,
    "currentRank": "29,775",
    "bestRank": "30,111",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 701,
    "name": "grogu",
    "avatar": "https://avatars.steamstatic.com/09a35f6a3ddfe97360a8ba7f002073b922b72222.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,773",
    "bestRank": "29,999",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 702,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,772",
    "bestRank": "29,999",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 703,
    "name": "1111",
    "avatar": "https://avatars.steamstatic.com/3e83db861679d63962362b0a8a5ef2d89e3f476d.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "29,771",
    "bestRank": "29,771",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 704,
    "name": "⚡️phonk",
    "avatar": "https://avatars.steamstatic.com/dccd00fa2bc073895a905f5bc627502c9c321bdc.jpg",
    "tracked": false,
    "wins": 41,
    "currentRank": "29,770",
    "bestRank": "29,770",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 705,
    "name": "xLegendary | ZムV",
    "avatar": "https://avatars.steamstatic.com/dfe3273b2451792618dc28f3f383eabb57625e4a.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,760",
    "bestRank": "29,760",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 706,
    "name": "САНЕЧЕК КУВАЛДА",
    "avatar": "https://avatars.steamstatic.com/8d9e7823f328c0965100a9275743ff9656961f7d.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "29,756",
    "bestRank": "29,756",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 707,
    "name": "yuurih",
    "avatar": "https://avatars.steamstatic.com/64455b3f80e6419b182bf68c483de214f5f56d75.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,755",
    "bestRank": "29,755",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 708,
    "name": "Leetify",
    "avatar": "https://avatars.steamstatic.com/291d0dd28ba881af552fcb9185f50ddd2c54b069.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,754",
    "bestRank": "29,863",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 709,
    "name": "Knaps",
    "avatar": "https://avatars.steamstatic.com/fca2d4404a466bcf45b54736bb0e4bf0f7d1a107.jpg",
    "tracked": true,
    "wins": 54,
    "currentRank": "29,751",
    "bestRank": "29,779",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 710,
    "name": "Jimmy",
    "avatar": "https://avatars.steamstatic.com/4924850f85c981a64cae52bc3ca83d4986aa006b.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,751",
    "bestRank": "29,751",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 711,
    "name": "𝘈 𝘳 𝘰 𝘶 𝘯 𝘥",
    "avatar": "https://avatars.steamstatic.com/7177c1d9b06dc0b176a99fa9d3ad845d994cc3ce.jpg",
    "tracked": false,
    "wins": 113,
    "currentRank": "29,745",
    "bestRank": "30,320",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 712,
    "name": "Donda",
    "avatar": "https://avatars.steamstatic.com/8f0b97d6224aff6fefb2fc5ed61da9823fb7e08b.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,745",
    "bestRank": "29,999",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 713,
    "name": "Al3x",
    "avatar": "https://avatars.steamstatic.com/f52ee53b37618ad1074ac1eea2062bed865a637c.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "29,742",
    "bestRank": "29,999",
    "lastMatch": "match_09e0dda1"
  },
  {
    "id": 714,
    "name": "mika",
    "avatar": "https://avatars.steamstatic.com/ae7aa7804a7d6705426a847aff93fd92b71f1d1d.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,740",
    "bestRank": "29,780",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 715,
    "name": "vaaallya",
    "avatar": "https://avatars.steamstatic.com/aebbb040b43ba8fa64531a26b875c75d45c6deb8.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,737",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 716,
    "name": "1TaP bOoOiii",
    "avatar": "https://avatars.steamstatic.com/68154ad72fe4439bd2536c9478b179ed4aec4966.jpg",
    "tracked": false,
    "wins": 99,
    "currentRank": "29,736",
    "bestRank": "29,736",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 717,
    "name": "𝙑𝙄𝙇𝙇𝘼𝙊",
    "avatar": "https://avatars.steamstatic.com/0f2348c36d10eb44e1796d62516879c201c4051e.jpg",
    "tracked": false,
    "wins": 86,
    "currentRank": "29,734",
    "bestRank": "29,734",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 718,
    "name": "lynn",
    "avatar": "https://avatars.steamstatic.com/3927f6d4e49c1de8a0ba6051b311e157669a61f2.jpg",
    "tracked": true,
    "wins": 27,
    "currentRank": "29,734",
    "bestRank": "29,734",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 719,
    "name": "B̴l̴a̴c̴k̴^C̴a̴l̴l̴",
    "avatar": "https://avatars.steamstatic.com/fc0d1095c3b8dfedc1215344ee2073e9bfb754be.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,733",
    "bestRank": "29,733",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 720,
    "name": "sOriN",
    "avatar": "https://avatars.steamstatic.com/6f061707f59f5c92be69ca9fc02173362debd136.jpg",
    "tracked": true,
    "wins": 63,
    "currentRank": "29,729",
    "bestRank": "29,729",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 721,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 86,
    "currentRank": "29,725",
    "bestRank": "31,033",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 722,
    "name": "Prs",
    "avatar": "https://avatars.steamstatic.com/25a05b5b030e37f45c5db440b35354875df94220.jpg",
    "tracked": false,
    "wins": 97,
    "currentRank": "29,724",
    "bestRank": "30,888",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 723,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 87,
    "currentRank": "29,723",
    "bestRank": "29,823",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 724,
    "name": "🌸Nagini🌸",
    "avatar": "https://avatars.steamstatic.com/4ae7ab3b9db2598787a569b2ef871c8aab8908b5.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,722",
    "bestRank": "29,722",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 725,
    "name": "JEiDi",
    "avatar": "https://avatars.steamstatic.com/a8091fa7e1c73cf1289ef49f74e105e0c0f5562f.jpg",
    "tracked": false,
    "wins": 118,
    "currentRank": "29,719",
    "bestRank": "29,719",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 726,
    "name": "Maher",
    "avatar": "https://avatars.steamstatic.com/ff734a19f2a776386fd0d6aae11a5145cb8af663.jpg",
    "tracked": false,
    "wins": 140,
    "currentRank": "29,716",
    "bestRank": "29,716",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 727,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,713",
    "bestRank": "29,745",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 728,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 115,
    "currentRank": "29,712",
    "bestRank": "31,430",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 729,
    "name": "ex1tor",
    "avatar": "https://avatars.steamstatic.com/fa58f3818d08cc7e4b6803d86940a068f7b20a01.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "29,712",
    "bestRank": "29,712",
    "lastMatch": "match_329b0526"
  },
  {
    "id": 730,
    "name": "Erna",
    "avatar": "https://avatars.steamstatic.com/c215870453fbf0d3908c6d5c0b77a74e8ee77468.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "29,706",
    "bestRank": "30,102",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 731,
    "name": "ОБМЕН КЕЙСОВ НА $",
    "avatar": "https://avatars.steamstatic.com/2c400c0fe46c32ad959f9886b8044d5d1af3cd40.jpg",
    "tracked": true,
    "wins": 52,
    "currentRank": "29,703",
    "bestRank": "29,703",
    "lastMatch": "match_d2919aaf"
  },
  {
    "id": 732,
    "name": "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "avatar": "https://avatars.steamstatic.com/d5ef21c1926becfc7c400d9d3d78c24bc1c7f807.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "29,701",
    "bestRank": "29,701",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 733,
    "name": "davlet",
    "avatar": "https://avatars.steamstatic.com/4ab3db0761bdfb0b02c32de00e0924e1270cf81a.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "29,700",
    "bestRank": "29,928",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 734,
    "name": "jan",
    "avatar": "https://avatars.steamstatic.com/a6175ca1262308c03281ba6fd07aef25f295f9f4.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "29,700",
    "bestRank": "29,700",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 735,
    "name": "m0ser (hans)",
    "avatar": "https://avatars.steamstatic.com/09535005f0cf6a686bce3a10395f263537b80380.jpg",
    "tracked": false,
    "wins": 58,
    "currentRank": "29,697",
    "bestRank": "29,874",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 736,
    "name": "angry",
    "avatar": "https://avatars.steamstatic.com/114bca1669a367b340a537bb4f5431c30d09f76f.jpg",
    "tracked": false,
    "wins": 73,
    "currentRank": "29,695",
    "bestRank": "29,917",
    "lastMatch": "match_189ad3ee"
  },
  {
    "id": 737,
    "name": "DENK",
    "avatar": "https://avatars.steamstatic.com/1fba3afb25c8ffb1c1a5ebe27d3d0672a809842f.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,691",
    "bestRank": "29,691",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 738,
    "name": "๋ ᠌",
    "avatar": "https://avatars.steamstatic.com/c645f975be0cd74ecf899231657ce3520e7fdd62.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,688",
    "bestRank": "31,049",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 739,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,688",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 740,
    "name": "ziter",
    "avatar": "https://avatars.steamstatic.com/03a8e5f00e7b95824ff0fbb60aebbc3be55ba4c3.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,687",
    "bestRank": "29,696",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 741,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 84,
    "currentRank": "29,685",
    "bestRank": "29,786",
    "lastMatch": "match_7eed795f"
  },
  {
    "id": 742,
    "name": "work",
    "avatar": "https://avatars.steamstatic.com/252f1f26fd0f33b5f0f6ab5f3191c4622b786b12.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "29,680",
    "bestRank": "29,999",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 743,
    "name": "dans brr",
    "avatar": "https://avatars.steamstatic.com/93418c1fc15156dc522f30d87376e1a427c30554.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "29,679",
    "bestRank": "29,679",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 744,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 59,
    "currentRank": "29,676",
    "bestRank": "29,676",
    "lastMatch": "match_7eed795f"
  },
  {
    "id": 745,
    "name": "SPTL",
    "avatar": "https://avatars.steamstatic.com/0907fe341a3099685b79ed6e361b7a634383c3df.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,674",
    "bestRank": "29,809",
    "lastMatch": "match_da0a9517"
  },
  {
    "id": 746,
    "name": "ilaychi uchiha",
    "avatar": "https://avatars.steamstatic.com/9fbdad417ab5664a813dc704a27df9d12214ba00.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,672",
    "bestRank": "29,672",
    "lastMatch": "match_d30dc6b1"
  },
  {
    "id": 747,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,672",
    "bestRank": "31,177",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 748,
    "name": "pajjk",
    "avatar": "https://avatars.steamstatic.com/007f6d1528630a3c5da4990be214e6ef112a1433.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,672",
    "bestRank": "29,712",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 749,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,672",
    "bestRank": "29,672",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 750,
    "name": "nosok",
    "avatar": "https://avatars.steamstatic.com/0ce0060c8c87637693a6b4908fa2c92000b2065f.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "29,670",
    "bestRank": "30,952",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 751,
    "name": "cru$hiez",
    "avatar": "https://avatars.steamstatic.com/b255b53f5bd7e14d396e654e9db98d711dfd82b7.jpg",
    "tracked": false,
    "wins": 104,
    "currentRank": "29,669",
    "bestRank": "29,982",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 752,
    "name": "s",
    "avatar": "https://avatars.steamstatic.com/edd484fa957b0c3108f6aa09387395927d5b2f34.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,669",
    "bestRank": "30,851",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 753,
    "name": "buDaLii",
    "avatar": "https://avatars.steamstatic.com/7ac7d442b0a140e82f693a142f8493412e40f453.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "29,668",
    "bestRank": "30,892",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 754,
    "name": "普京",
    "avatar": "https://avatars.steamstatic.com/4353c6f57497dbca88a63d1aa88afe1d5e225a1e.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,666",
    "bestRank": "29,666",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 755,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 30,
    "currentRank": "29,666",
    "bestRank": "29,666",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 756,
    "name": "naturalGAINZ",
    "avatar": "https://avatars.steamstatic.com/d7ef880b6da2511cb888b01f1336016e57543b0c.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,665",
    "bestRank": "29,999",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 757,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 95,
    "currentRank": "29,664",
    "bestRank": "30,756",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 758,
    "name": "ZXCERBER",
    "avatar": "https://avatars.steamstatic.com/b768acca2b409b3694142e8c690a12088fb82f33.jpg",
    "tracked": false,
    "wins": 106,
    "currentRank": "29,662",
    "bestRank": "30,449",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 759,
    "name": "Lyanarcy",
    "avatar": "https://avatars.steamstatic.com/9014517f5df46c8a4874420004045c7a24b769fa.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,660",
    "bestRank": "30,462",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 760,
    "name": "roblox",
    "avatar": "https://avatars.steamstatic.com/e0a66688302b117f770bcef726b69f67e21835e1.jpg",
    "tracked": false,
    "wins": 40,
    "currentRank": "29,653",
    "bestRank": "29,653",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 761,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 138,
    "currentRank": "29,652",
    "bestRank": "29,652",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 762,
    "name": "UHUHUHUHUHUHUH",
    "avatar": "https://avatars.steamstatic.com/f18fb888ca5b461e0d3293c545601c8b6e88eea9.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,650",
    "bestRank": "29,844",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 763,
    "name": "Bonifacy` 372",
    "avatar": "https://avatars.steamstatic.com/5db1b3652f438e7ceac891c30ae0ce310a415c42.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,647",
    "bestRank": "29,647",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 764,
    "name": "WoO",
    "avatar": "https://avatars.steamstatic.com/53c5047805cd7299a6306372f742261612b34fa4.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,644",
    "bestRank": "30,720",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 765,
    "name": "BAD NEWS",
    "avatar": "https://avatars.steamstatic.com/2dcdd71a1b5461aefd63f42b45d5429ca2110cd9.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "29,643",
    "bestRank": "30,217",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 766,
    "name": "Doggo Apollo Dev (PASTER)",
    "avatar": "https://avatars.steamstatic.com/540affaf157bafbc2a3912fe3d5cc823fe231a63.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,642",
    "bestRank": "30,983",
    "lastMatch": "match_87aeae44"
  },
  {
    "id": 767,
    "name": "chevette",
    "avatar": "https://avatars.steamstatic.com/10b2a4c7e292879cfe5aa2e7aab100263ea9f779.jpg",
    "tracked": false,
    "wins": 45,
    "currentRank": "29,641",
    "bestRank": "29,999",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 768,
    "name": "vqv",
    "avatar": "https://avatars.steamstatic.com/6bf1d079b4399768194f1e62fd9c0cad731cc7b2.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,635",
    "bestRank": "29,635",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 769,
    "name": "너라는퍼피",
    "avatar": "https://avatars.steamstatic.com/e0345d95a99a0280d31aaec05676eaad7a125d2c.jpg",
    "tracked": false,
    "wins": 27,
    "currentRank": "29,630",
    "bestRank": "29,630",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 770,
    "name": "brux40_",
    "avatar": "https://avatars.steamstatic.com/da09c36b9252acd704e35b9b6163cb5b33891dae.jpg",
    "tracked": true,
    "wins": 77,
    "currentRank": "29,626",
    "bestRank": "30,110",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 771,
    "name": "gDP",
    "avatar": "https://avatars.steamstatic.com/417ed4da9142b1130751cfef9a3cd47f6d034f08.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,625",
    "bestRank": "29,625",
    "lastMatch": "match_8bf72205"
  },
  {
    "id": 772,
    "name": "ŁÍŁ ǺŘÍ€$",
    "avatar": "https://avatars.steamstatic.com/4311b0c45fe5b5fb540cdfa434e434488b38a12e.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "29,624",
    "bestRank": "29,889",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 773,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,622",
    "bestRank": "32,618",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 774,
    "name": "pesadelo",
    "avatar": "https://avatars.steamstatic.com/d614b5eff0e228e4691df6eba424eee06f480746.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "29,619",
    "bestRank": "29,619",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 775,
    "name": "raulcasian@DauFinPreaDivin ✔",
    "avatar": "https://avatars.steamstatic.com/8dfe278c7493b6984540e57ecd57b791df13841e.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,619",
    "bestRank": "29,619",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 776,
    "name": "爽文小说男主",
    "avatar": "https://avatars.steamstatic.com/b40f6a8a50f28aa8cd140a78e843b5cb808f2675.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,616",
    "bestRank": "30,110",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 777,
    "name": "lilpop$™",
    "avatar": "https://avatars.steamstatic.com/b16a132074f70d51743c51a27be65c147e3e5b69.jpg",
    "tracked": true,
    "wins": 49,
    "currentRank": "29,608",
    "bestRank": "29,608",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 778,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,608",
    "bestRank": "29,754",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 779,
    "name": "Dawg",
    "avatar": "https://avatars.steamstatic.com/87b683a9af648eb8a84275a788e795dc5778fc24.jpg",
    "tracked": false,
    "wins": 113,
    "currentRank": "29,607",
    "bestRank": "29,664",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 780,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 87,
    "currentRank": "29,604",
    "bestRank": "29,604",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 781,
    "name": "Akimolee",
    "avatar": "https://avatars.steamstatic.com/64455b3f80e6419b182bf68c483de214f5f56d75.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,603",
    "bestRank": "30,472",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 782,
    "name": "AGGRESSION",
    "avatar": "https://avatars.steamstatic.com/c9ba4d52f11f586f7ba50cf11c098f74ab09b5b0.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,602",
    "bestRank": "29,999",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 783,
    "name": "القناص",
    "avatar": "https://avatars.steamstatic.com/54edfc00848258094cf190ebc783d45b52323160.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "29,599",
    "bestRank": "30,474",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 784,
    "name": "Dima_assist",
    "avatar": "https://avatars.steamstatic.com/5b8825b34c5d77b00c3a18897f2f1175fa0e0e57.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "29,598",
    "bestRank": "30,983",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 785,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 72,
    "currentRank": "29,597",
    "bestRank": "29,597",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 786,
    "name": "equalizer",
    "avatar": "https://avatars.steamstatic.com/b91b352040c66d06d676bbeeda4af82b199afa9c.jpg",
    "tracked": false,
    "wins": 65,
    "currentRank": "29,596",
    "bestRank": "30,493",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 787,
    "name": "Ulbren",
    "avatar": "https://avatars.steamstatic.com/49eec77217f13e17f545c1049c3e7868ae8dee6d.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,595",
    "bestRank": "29,595",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 788,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 57,
    "currentRank": "29,592",
    "bestRank": "30,114",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 789,
    "name": "balenciagas on my feet",
    "avatar": "https://avatars.steamstatic.com/53ab4e049f2e75c46cec5ba6fe4248ccd731cece.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,589",
    "bestRank": "29,589",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 790,
    "name": "sacramithnilux",
    "avatar": "https://avatars.steamstatic.com/c3943952a706a84f284c039bab838bab9b3e6699.jpg",
    "tracked": false,
    "wins": 101,
    "currentRank": "29,587",
    "bestRank": "30,828",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 791,
    "name": "Whooper likes winning",
    "avatar": "https://avatars.steamstatic.com/6660aff433781142e02c7e8306aca6434a701a23.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,585",
    "bestRank": "29,585",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 792,
    "name": "BAGAGWA",
    "avatar": "https://avatars.steamstatic.com/377cb3555c03430265eae53b1a136654fde37fae.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "29,584",
    "bestRank": "29,999",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 793,
    "name": "mlodziutk1",
    "avatar": "https://avatars.steamstatic.com/548afde3d515fb0b091852785c846bf216bfe5cc.jpg",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,584",
    "bestRank": "29,999",
    "lastMatch": "match_e5e67ef1"
  },
  {
    "id": 794,
    "name": "PAVAND",
    "avatar": "https://avatars.steamstatic.com/739a83b6b5b6e9bcdc8273e79ee42640962b69f3.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,582",
    "bestRank": "29,582",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 795,
    "name": "smiley",
    "avatar": "https://avatars.steamstatic.com/af47710093933b9839450b0ea0a264620932031c.jpg",
    "tracked": false,
    "wins": 59,
    "currentRank": "29,579",
    "bestRank": "30,440",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 796,
    "name": "LM9 SO BALA NA CARA",
    "avatar": "https://avatars.steamstatic.com/9844cda259389faccc7cd90f8d8148562a7dea14.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,578",
    "bestRank": "31,608",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 797,
    "name": "hyd Blinky Bill",
    "avatar": "https://avatars.steamstatic.com/4240512fe7ea081ec683dac6a8d17aa62cda54cd.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,577",
    "bestRank": "29,996",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 798,
    "name": "RockFeller",
    "avatar": "https://avatars.steamstatic.com/32717fe48596c0c1254f63ef551083305ccebd5f.jpg",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,572",
    "bestRank": "29,572",
    "lastMatch": "match_54731ed4"
  },
  {
    "id": 799,
    "name": "T0X1T4D0",
    "avatar": "https://avatars.steamstatic.com/4ca7c22693601958cb6c49da1550c6004e107294.jpg",
    "tracked": false,
    "wins": 28,
    "currentRank": "29,571",
    "bestRank": "29,571",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 800,
    "name": "秋",
    "avatar": "https://avatars.steamstatic.com/ac48562b55eca1bc53fb8325357a1c649ba894da.jpg",
    "tracked": false,
    "wins": 129,
    "currentRank": "29,568",
    "bestRank": "29,568",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 801,
    "name": "Massei *",
    "avatar": "https://avatars.steamstatic.com/cf5bc13aa75dee20e29affee460062b1aee2c945.jpg",
    "tracked": true,
    "wins": 61,
    "currentRank": "29,568",
    "bestRank": "30,100",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 802,
    "name": "ja mam stulejka",
    "avatar": "https://avatars.steamstatic.com/274f55360cc124e261dc4a41cc4cd67de912b65f.jpg",
    "tracked": false,
    "wins": 62,
    "currentRank": "29,565",
    "bestRank": "29,565",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 803,
    "name": "haha",
    "avatar": "https://avatars.steamstatic.com/4c76064be169987500e4c7e228aabe3e33e1df47.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,563",
    "bestRank": "29,563",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 804,
    "name": "creampie",
    "avatar": "https://avatars.steamstatic.com/dd22f3614efbc8d83868e774073df0c746b14a8a.jpg",
    "tracked": false,
    "wins": 69,
    "currentRank": "29,560",
    "bestRank": "29,560",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 805,
    "name": "bmw enjoyer",
    "avatar": "https://avatars.steamstatic.com/e944e6fc56f7b856556021bab308a0ea35dfaca6.jpg",
    "tracked": false,
    "wins": 138,
    "currentRank": "29,559",
    "bestRank": "29,582",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 806,
    "name": "Felix",
    "avatar": "https://avatars.steamstatic.com/e3c2c03651d18a312909ec101a905cb0a13d80a7.jpg",
    "tracked": false,
    "wins": 66,
    "currentRank": "29,559",
    "bestRank": "30,120",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 807,
    "name": "lil Sese jr",
    "avatar": "https://avatars.steamstatic.com/2f659be5b4ab1fa32b1c2a9702b633e8b2dae032.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,558",
    "bestRank": "30,505",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 808,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 41,
    "currentRank": "29,557",
    "bestRank": "29,844",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 809,
    "name": "Rushante ★彡",
    "avatar": "https://avatars.steamstatic.com/d5888094088f15b88cc64eb719eb46559b26de88.jpg",
    "tracked": true,
    "wins": 78,
    "currentRank": "29,553",
    "bestRank": "29,725",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 810,
    "name": "Sem1k",
    "avatar": "https://avatars.steamstatic.com/7dbeddc28a2398d35bbf1d70a797fd152ff5198d.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,553",
    "bestRank": "29,999",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 811,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,550",
    "bestRank": "31,080",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 812,
    "name": "RalleR ツ",
    "avatar": "https://avatars.steamstatic.com/5b053634ea132e84c7ebb50a75a78c13f050a158.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,550",
    "bestRank": "29,550",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 813,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 28,
    "currentRank": "29,550",
    "bestRank": "29,550",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 814,
    "name": "Packo",
    "avatar": "https://avatars.steamstatic.com/cfa11c2fff4747abca8a589e8911673929000b0d.jpg",
    "tracked": true,
    "wins": 128,
    "currentRank": "29,547",
    "bestRank": "30,115",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 815,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,546",
    "bestRank": "29,581",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 816,
    "name": "章若楠",
    "avatar": "https://avatars.steamstatic.com/cf93510f541f72e8ded58c91896aaf3e48760e4b.jpg",
    "tracked": false,
    "wins": 61,
    "currentRank": "29,545",
    "bestRank": "29,545",
    "lastMatch": "match_fb36534c"
  },
  {
    "id": 817,
    "name": "gwanwoo",
    "avatar": "https://avatars.steamstatic.com/5f9b81b912af2248ebeae1d495d1f835ea64c904.jpg",
    "tracked": true,
    "wins": 98,
    "currentRank": "29,542",
    "bestRank": "29,999",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 818,
    "name": "★",
    "avatar": "https://avatars.steamstatic.com/b547de9ea6913f0d2a9cd50c78f2e7b08f16a5e5.jpg",
    "tracked": true,
    "wins": 91,
    "currentRank": "29,537",
    "bestRank": "29,999",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 819,
    "name": "СЕНКА",
    "avatar": "https://avatars.steamstatic.com/fcefd9eb0b9fcc55a999229d1d7fd60bc19f2a45.jpg",
    "tracked": true,
    "wins": 66,
    "currentRank": "29,537",
    "bestRank": "29,537",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 820,
    "name": "rona",
    "avatar": "https://avatars.steamstatic.com/773342c38f7a32202e2e5da57b3323dafc26db25.jpg",
    "tracked": true,
    "wins": 64,
    "currentRank": "29,537",
    "bestRank": "30,473",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 821,
    "name": "LóIN",
    "avatar": "https://avatars.steamstatic.com/b8a6f62b8b7bd48279016ddb5616f9a555b0cf5d.jpg",
    "tracked": false,
    "wins": 131,
    "currentRank": "29,536",
    "bestRank": "30,376",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 822,
    "name": "李达康g",
    "avatar": "https://avatars.steamstatic.com/7c0c0f41f443e90c976deaf23dca14ec39544089.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,534",
    "bestRank": "29,534",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 823,
    "name": "K2J Sn0WE",
    "avatar": "https://avatars.steamstatic.com/cae7b60b3f97ff6db420cb66c6198ee2dd78bce0.jpg",
    "tracked": false,
    "wins": 78,
    "currentRank": "29,533",
    "bestRank": "29,812",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 824,
    "name": "mahone",
    "avatar": "https://avatars.steamstatic.com/ead2579239c338aba9e8ef71ae9eb9290e6df1f7.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,532",
    "bestRank": "29,902",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 825,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,530",
    "bestRank": "30,123",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 826,
    "name": "For",
    "avatar": "https://avatars.steamstatic.com/3f5e9daea59216d7fe13df4e031d3537580e5e21.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,526",
    "bestRank": "29,526",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 827,
    "name": "feel`in",
    "avatar": "https://avatars.steamstatic.com/abb1610076799df6c3cdd120cfc32a9855cd828a.jpg",
    "tracked": false,
    "wins": 73,
    "currentRank": "29,525",
    "bestRank": "29,811",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 828,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 31,
    "currentRank": "29,524",
    "bestRank": "29,971",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 829,
    "name": "7 Duc",
    "avatar": "https://avatars.steamstatic.com/57acbcf2c097b616e48a5a63f7706fc1fcc648d1.jpg",
    "tracked": true,
    "wins": 77,
    "currentRank": "29,523",
    "bestRank": "30,673",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 830,
    "name": "Duxxci",
    "avatar": "https://avatars.steamstatic.com/2d5f51c0d78befce0c3ce5c95ce39cd9ecbd9bf2.jpg",
    "tracked": true,
    "wins": 48,
    "currentRank": "29,523",
    "bestRank": "29,523",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 831,
    "name": "𝓪𝓵𝓵 𝓮𝔂𝓮𝓼",
    "avatar": "https://avatars.steamstatic.com/ec0098c408727e1bef26ac16329bed1e23e13c12.jpg",
    "tracked": false,
    "wins": 209,
    "currentRank": "29,522",
    "bestRank": "29,876",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 832,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,522",
    "bestRank": "29,522",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 833,
    "name": "ZaJeBaKa",
    "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,520",
    "bestRank": "29,786",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 834,
    "name": "Defect",
    "avatar": "https://avatars.steamstatic.com/2a2d42a143d27c572650ca037cd17471875d4b57.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,519",
    "bestRank": "31,050",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 835,
    "name": "火水 富士山",
    "avatar": "https://avatars.steamstatic.com/e4457261f5fb73bd671235cb83941fd561701286.jpg",
    "tracked": false,
    "wins": 71,
    "currentRank": "29,518",
    "bestRank": "29,803",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 836,
    "name": "oiarcd",
    "avatar": "https://avatars.steamstatic.com/83b62f5d98421ea75cbf0e186b04bc936665cc24.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,517",
    "bestRank": "30,110",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 837,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,515",
    "bestRank": "29,515",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 838,
    "name": "Tensziak",
    "avatar": "https://avatars.steamstatic.com/a8091fa7e1c73cf1289ef49f74e105e0c0f5562f.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "29,514",
    "bestRank": "30,116",
    "lastMatch": "match_5c5ba944"
  },
  {
    "id": 839,
    "name": "bigblackdoggydog0000238947421379",
    "avatar": "https://avatars.steamstatic.com/6838f5e35ce8a83ed92ac9e7808b8a1aacd2c7a9.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "29,514",
    "bestRank": "29,999",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 840,
    "name": "κααη",
    "avatar": "https://avatars.steamstatic.com/b3e25141cbd78327b17ed187f553aaf86b7c2583.jpg",
    "tracked": false,
    "wins": 117,
    "currentRank": "29,513",
    "bestRank": "29,983",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 841,
    "name": "L0Rd",
    "avatar": "https://avatars.steamstatic.com/3b71f58edf9055532b60cb1322c16d4a3560cbde.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,513",
    "bestRank": "29,513",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 842,
    "name": "metaxa",
    "avatar": "https://avatars.steamstatic.com/c01ceeed0358df7e362547c24409958bc864d619.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,512",
    "bestRank": "29,999",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 843,
    "name": "-nahoj",
    "avatar": "https://avatars.steamstatic.com/565548c99966e0a4f977d2c15c7f4ef678f5d95e.jpg",
    "tracked": false,
    "wins": 139,
    "currentRank": "29,508",
    "bestRank": "30,195",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 844,
    "name": "Yeico1669",
    "avatar": "https://avatars.steamstatic.com/f02a9634e070e6c1db6aedaef63adaecc4c7f7f8.jpg",
    "tracked": false,
    "wins": 74,
    "currentRank": "29,507",
    "bestRank": "29,571",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 845,
    "name": "not.",
    "avatar": "https://avatars.steamstatic.com/2924835c2357eeefd2d8cf26cf6e8efa2d1472cf.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,506",
    "bestRank": "29,506",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 846,
    "name": "reazona",
    "avatar": "https://avatars.steamstatic.com/eeaf650854f6b5adeb7e40360b40d4171bff6105.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,501",
    "bestRank": "29,501",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 847,
    "name": "HaoardE",
    "avatar": "https://avatars.steamstatic.com/f1230810dc81cc09f75b4c8f6f630065527ebcf1.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "29,500",
    "bestRank": "29,897",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 848,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 42,
    "currentRank": "29,500",
    "bestRank": "29,500",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 849,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 41,
    "currentRank": "29,499",
    "bestRank": "29,751",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 850,
    "name": "ebanutiybebini",
    "avatar": "https://avatars.steamstatic.com/bec4d158809ed3ee3c163bd8a947ee64031767aa.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,497",
    "bestRank": "30,000",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 851,
    "name": "Marci",
    "avatar": "https://avatars.steamstatic.com/b69e420f144f4a7b0c26bc2923413abd036e3ee5.jpg",
    "tracked": true,
    "wins": 34,
    "currentRank": "29,497",
    "bestRank": "29,497",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 852,
    "name": "MrPepper",
    "avatar": "https://avatars.steamstatic.com/a17bdcc3d0e65bbf8b6e4a71f87df89c388c58ef.jpg",
    "tracked": true,
    "wins": 99,
    "currentRank": "29,495",
    "bestRank": "31,269",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 853,
    "name": "MEZZOBIS",
    "avatar": "https://avatars.steamstatic.com/99e4af2b9750ab32f57fabc3470c4b07145d4349.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,494",
    "bestRank": "29,494",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 854,
    "name": "riot",
    "avatar": "https://avatars.steamstatic.com/ea16c525451c2dd528b53173298eff1e3967ff59.jpg",
    "tracked": false,
    "wins": 139,
    "currentRank": "29,479",
    "bestRank": "29,581",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 855,
    "name": "arias",
    "avatar": "https://avatars.steamstatic.com/ab59330c3d4d4d35424974f17e82f18e93fb88f0.jpg",
    "tracked": false,
    "wins": 63,
    "currentRank": "29,477",
    "bestRank": "29,999",
    "lastMatch": "match_61e04391"
  },
  {
    "id": 856,
    "name": "Emre_35",
    "avatar": "https://avatars.steamstatic.com/31f15e523566684377e9abb7c98e4f949f523126.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,477",
    "bestRank": "29,477",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 857,
    "name": "NoRulezZ",
    "avatar": "https://avatars.steamstatic.com/bd46355e8214df89aa02d53c4ffb68727575c895.jpg",
    "tracked": true,
    "wins": 50,
    "currentRank": "29,476",
    "bestRank": "29,476",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 858,
    "name": "D0ntW0rr1",
    "avatar": "https://avatars.steamstatic.com/790403a3cbd2a2126f6e9bd88d2d75ed214c71f9.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "29,472",
    "bestRank": "29,887",
    "lastMatch": "match_2e43c62f"
  },
  {
    "id": 859,
    "name": "Shr1mple 🦐",
    "avatar": "https://avatars.steamstatic.com/219ff8778a13e54b465e5245a6dcd5ba5b2521dc.jpg",
    "tracked": true,
    "wins": 50,
    "currentRank": "29,464",
    "bestRank": "29,465",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 860,
    "name": "god bless kastiware ✞ ᵖʳᵉ",
    "avatar": "https://avatars.steamstatic.com/52327d8d6cbde7ca6d036525d8efafbffa22e666.jpg",
    "tracked": false,
    "wins": 59,
    "currentRank": "29,461",
    "bestRank": "29,461",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 861,
    "name": "Rojo ⛴",
    "avatar": "https://avatars.steamstatic.com/eb4b10178c84780fe3e23703e2ded788394efb02.jpg",
    "tracked": false,
    "wins": 67,
    "currentRank": "29,460",
    "bestRank": "29,743",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 862,
    "name": "shrek on fent",
    "avatar": "https://avatars.steamstatic.com/6abdbbf06cc969f3f0bba0d8e41451a5e871cb41.jpg",
    "tracked": false,
    "wins": 75,
    "currentRank": "29,458",
    "bestRank": "30,214",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 863,
    "name": "NoFear_Fuzzen",
    "avatar": "https://avatars.steamstatic.com/9243ad50093e97d012c6c7d415037f44ec21be23.jpg",
    "tracked": true,
    "wins": 37,
    "currentRank": "29,458",
    "bestRank": "30,109",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 864,
    "name": "Gokushin",
    "avatar": "https://avatars.steamstatic.com/913d755fc71f4d6213807f4d81694ce179aac95e.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,457",
    "bestRank": "29,560",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 865,
    "name": "Ke0",
    "avatar": "https://avatars.steamstatic.com/f9731ec195b57e9efde82cdb730e70561cc631ad.jpg",
    "tracked": true,
    "wins": 42,
    "currentRank": "29,456",
    "bestRank": "30,121",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 866,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 71,
    "currentRank": "29,455",
    "bestRank": "29,455",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 867,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,455",
    "bestRank": "29,455",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 868,
    "name": "max",
    "avatar": "https://avatars.steamstatic.com/42461c2ac6918bc9747f480726032bdd24dbd775.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,454",
    "bestRank": "30,106",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 869,
    "name": "BCCC",
    "avatar": "https://avatars.steamstatic.com/4a2479ea20f983dc277b6bc32455ea08fc9775d1.jpg",
    "tracked": true,
    "wins": 29,
    "currentRank": "29,452",
    "bestRank": "29,452",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 870,
    "name": "w4r",
    "avatar": "https://avatars.steamstatic.com/444bcc16e6ac31d67c4d4cb658b2748b3bb9b6ff.jpg",
    "tracked": true,
    "wins": 44,
    "currentRank": "29,450",
    "bestRank": "30,211",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 871,
    "name": "MiruD",
    "avatar": "https://avatars.steamstatic.com/acf67207768cdc5be5f09aca6a9f7830bf27d6f7.jpg",
    "tracked": false,
    "wins": 35,
    "currentRank": "29,449",
    "bestRank": "29,449",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 872,
    "name": "-Pkay-",
    "avatar": "https://avatars.steamstatic.com/7f9ca6f49e6c5c332328ed404b8e6ad821753b2b.jpg",
    "tracked": false,
    "wins": 120,
    "currentRank": "29,448",
    "bestRank": "30,571",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 873,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,448",
    "bestRank": "29,448",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 874,
    "name": "-jRs冷",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/dc/dc804765675f9e10fea77dfe35dce6ec53b5a286.jpg",
    "tracked": true,
    "wins": 102,
    "currentRank": "29,445",
    "bestRank": "30,364",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 875,
    "name": "COR3",
    "avatar": "https://avatars.steamstatic.com/6f22567f7cf2aa780437e7641dfaed5769b2039f.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,445",
    "bestRank": "29,445",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 876,
    "name": "pxl",
    "avatar": "https://avatars.steamstatic.com/0db1e560c7cbdd04b13fc2fe28e8ad6d61d8c8e7.jpg",
    "tracked": true,
    "wins": 43,
    "currentRank": "29,444",
    "bestRank": "30,485",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 877,
    "name": "typedef void (*Callback)(int)",
    "avatar": "https://avatars.steamstatic.com/1d0f32886f8e47cb1a3b24831d81d327a0ce318c.jpg",
    "tracked": false,
    "wins": 27,
    "currentRank": "29,443",
    "bestRank": "29,443",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 878,
    "name": "Mantequilla",
    "avatar": "https://avatars.steamstatic.com/37c70bb9379f37001b9f9e477885d1ac0d4ca44c.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,442",
    "bestRank": "29,686",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 879,
    "name": "p$ycho",
    "avatar": "https://avatars.steamstatic.com/69541c3796fb3c8a84d09fb540f1b740cc852e1c.jpg",
    "tracked": false,
    "wins": 84,
    "currentRank": "29,441",
    "bestRank": "30,341",
    "lastMatch": "match_ac77d566"
  },
  {
    "id": 880,
    "name": "GlyN",
    "avatar": "https://avatars.steamstatic.com/cf27743fe6fcf00d810ad77ed10328e04032e3b9.jpg",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,440",
    "bestRank": "29,440",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 881,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 27,
    "currentRank": "29,438",
    "bestRank": "29,438",
    "lastMatch": "match_8c1353f6"
  },
  {
    "id": 882,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,438",
    "bestRank": "29,438",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 883,
    "name": "Lonely",
    "avatar": "https://avatars.steamstatic.com/034edb3912dd2616e65bbb8cab454cefa4e61958.jpg",
    "tracked": false,
    "wins": 93,
    "currentRank": "29,437",
    "bestRank": "29,437",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 884,
    "name": "StormX",
    "avatar": "https://avatars.steamstatic.com/36b9ceedb7af119cc6db95c9d8de6e3f294bf523.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,434",
    "bestRank": "29,822",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 885,
    "name": "Ignat6162",
    "avatar": "https://avatars.steamstatic.com/48b7dd4a46bb7fa11ad9f35fcb9a6e9a581b387b.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,434",
    "bestRank": "29,824",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 886,
    "name": "TYPEK",
    "avatar": "https://avatars.steamstatic.com/7d70da5135c5bc2e72e79cd2f664ebf35d877f0f.jpg",
    "tracked": false,
    "wins": 92,
    "currentRank": "29,433",
    "bestRank": "29,433",
    "lastMatch": "match_aeacecc5"
  },
  {
    "id": 887,
    "name": "martinis:-)",
    "avatar": "https://avatars.steamstatic.com/57d980178a76318089321f075ac7b1a015a49f26.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,433",
    "bestRank": "29,433",
    "lastMatch": "match_d6e86647"
  },
  {
    "id": 888,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 50,
    "currentRank": "29,432",
    "bestRank": "29,432",
    "lastMatch": "match_a3b6218b"
  },
  {
    "id": 889,
    "name": "AraujoTJ",
    "avatar": "https://avatars.steamstatic.com/b3bf5f7ef2e6c8d5f66f89e0fdb8e0d70bb601ca.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,432",
    "bestRank": "29,664",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 890,
    "name": "hamiku",
    "avatar": "https://avatars.steamstatic.com/cf7f0a4086d57b9ab29d41d613346042e6410fb3.jpg",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,430",
    "bestRank": "29,430",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 891,
    "name": "hELLO",
    "avatar": "https://avatars.steamstatic.com/b0a77b0bb2ef504eda2a1bce3ad0bc5745a22279.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,429",
    "bestRank": "29,429",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 892,
    "name": "heinekern",
    "avatar": "https://avatars.steamstatic.com/1d3241ca5051f9084f74bc788f190967f096978c.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,429",
    "bestRank": "29,429",
    "lastMatch": "match_91ee04bb"
  },
  {
    "id": 893,
    "name": "MON",
    "avatar": "https://avatars.steamstatic.com/a9cbd94471e90ba3a3b34b539ccbdd25cb2afbeb.jpg",
    "tracked": false,
    "wins": 62,
    "currentRank": "29,427",
    "bestRank": "29,823",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 894,
    "name": "I LOVE RUSSIAN FISHING 4",
    "avatar": "https://avatars.steamstatic.com/2e549b2ad2ea2bd55b00127a0d44876cd345877a.jpg",
    "tracked": false,
    "wins": 34,
    "currentRank": "29,427",
    "bestRank": "29,427",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 895,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 76,
    "currentRank": "29,426",
    "bestRank": "29,426",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 896,
    "name": "✭ Hõbe",
    "avatar": "https://avatars.steamstatic.com/28e7723024fe3f4ad3e68253b60c8ac316c90f1c.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,426",
    "bestRank": "29,426",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 897,
    "name": "萝莉威信桐城扫码月抛",
    "avatar": "https://avatars.steamstatic.com/871d630fdf8e61384bd3f9c39853086abe62da4a.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "29,425",
    "bestRank": "29,425",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 898,
    "name": "Luis",
    "avatar": "https://avatars.steamstatic.com/5358343971e3a2e6c54d1765c25f9bc84e1630ee.jpg",
    "tracked": true,
    "wins": 51,
    "currentRank": "29,425",
    "bestRank": "29,480",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 899,
    "name": "Ballard",
    "avatar": "https://avatars.steamstatic.com/899677d8b3e93c8f74dece06d4602a837757ac8e.jpg",
    "tracked": false,
    "wins": 47,
    "currentRank": "29,425",
    "bestRank": "29,425",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 900,
    "name": "Alonso",
    "avatar": "https://avatars.steamstatic.com/23721a34a8210c524308498c9faad0e2acffce71.jpg",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,424",
    "bestRank": "29,424",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 901,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,423",
    "bestRank": "29,423",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 902,
    "name": "apEX",
    "avatar": "https://avatars.steamstatic.com/eedb7755d97d1877c09c265867c7da2513df2f09.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,422",
    "bestRank": "30,421",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 903,
    "name": "Joffrey",
    "avatar": "https://avatars.steamstatic.com/01119eb9c233954e0518e5c568ab511841bd3540.jpg",
    "tracked": true,
    "wins": 91,
    "currentRank": "29,420",
    "bestRank": "29,420",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 904,
    "name": "Get_R!ght",
    "avatar": "https://avatars.steamstatic.com/9f17295fdd7fae58374cec33fc05165ab1182d07.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,420",
    "bestRank": "30,116",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 905,
    "name": "グリッチ",
    "avatar": "https://avatars.steamstatic.com/fd49ed3fd96ed555fd0dfe6b0c28e494232c1084.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,417",
    "bestRank": "29,553",
    "lastMatch": "match_8cb3ecf8"
  },
  {
    "id": 906,
    "name": "Falęcki",
    "avatar": "https://avatars.steamstatic.com/543bb32f9249e6738288c0d3ac6987ee25983c41.jpg",
    "tracked": false,
    "wins": 119,
    "currentRank": "29,416",
    "bestRank": "31,032",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 907,
    "name": "Ausar^",
    "avatar": "https://avatars.steamstatic.com/cf9c73d5dc0ec60c4328713269abce525cf01cac.jpg",
    "tracked": false,
    "wins": 51,
    "currentRank": "29,414",
    "bestRank": "29,999",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 908,
    "name": "ZŁOTE DZIECKO JANUSZEK",
    "avatar": "https://avatars.steamstatic.com/2cba821051451b9273f044f72beec13f5114934e.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,413",
    "bestRank": "29,413",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 909,
    "name": "afgan",
    "avatar": "https://avatars.steamstatic.com/d01b48b3f7b30447a4f4f04943adeaff7dc83f55.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,413",
    "bestRank": "29,889",
    "lastMatch": "match_1a7a928b"
  },
  {
    "id": 910,
    "name": "drn",
    "avatar": "https://avatars.steamstatic.com/5c2838a4c7a42a4a60aa888e5bc965ec1d8f83a0.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,413",
    "bestRank": "29,413",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 911,
    "name": "pls no dust mirage",
    "avatar": "https://avatars.steamstatic.com/63794a0507c448247b3675940e23c043a7662f9c.jpg",
    "tracked": true,
    "wins": 29,
    "currentRank": "29,410",
    "bestRank": "29,468",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 912,
    "name": "..",
    "avatar": "https://avatars.steamstatic.com/b4653ea127327eaf2c7b03664f0ac3f42c4c0e5f.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "29,409",
    "bestRank": "30,409",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 913,
    "name": "henxu",
    "avatar": "https://avatars.steamstatic.com/b2773e348f38c559861aeda9814f67aa9815d8ee.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,406",
    "bestRank": "29,406",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 914,
    "name": "Cactus",
    "avatar": "https://avatars.steamstatic.com/4547fc16d9ae58e0fa540212b06f67a75f56c2ef.jpg",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,403",
    "bestRank": "30,325",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 915,
    "name": "大青蛙哈哈哈哈哈",
    "avatar": "https://avatars.steamstatic.com/edb873bf37bc0271f88c173eb2545c1dfb9c7533.jpg",
    "tracked": false,
    "wins": 36,
    "currentRank": "29,399",
    "bestRank": "29,399",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 916,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 70,
    "currentRank": "29,398",
    "bestRank": "30,329",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 917,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,398",
    "bestRank": "29,708",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 918,
    "name": "STICKY",
    "avatar": "https://avatars.steamstatic.com/ee0e6adb9c075b0b40cbedba2f8699d1c040ca6c.jpg",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,395",
    "bestRank": "29,395",
    "lastMatch": "match_9cc70947"
  },
  {
    "id": 919,
    "name": "Luddish",
    "avatar": "https://avatars.steamstatic.com/f66eef5eef861de2df5b3a8c631e82f6140921ee.jpg",
    "tracked": false,
    "wins": 119,
    "currentRank": "29,393",
    "bestRank": "29,518",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 920,
    "name": "Koi eSport| Majin Vegeta♫",
    "avatar": "https://avatars.steamstatic.com/2d460ff3777a5903dcbada2ee4241066f98a4a91.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,392",
    "bestRank": "29,392",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 921,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 46,
    "currentRank": "29,386",
    "bestRank": "30,108",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 922,
    "name": "attentioNN ' -",
    "avatar": "https://avatars.steamstatic.com/bf523fe9a8db26aa728b2d090849727c3b6a974e.jpg",
    "tracked": true,
    "wins": 53,
    "currentRank": "29,382",
    "bestRank": "32,874",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 923,
    "name": "Anxnymxus",
    "avatar": "https://avatars.steamstatic.com/b1152b0beabef9bd560d63d06f03167a8e971b23.jpg",
    "tracked": true,
    "wins": 48,
    "currentRank": "29,382",
    "bestRank": "29,641",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 924,
    "name": "slutty waist",
    "avatar": "https://avatars.steamstatic.com/72a36b4cfad9d8ee96c94e19b531d15433721f44.jpg",
    "tracked": true,
    "wins": 109,
    "currentRank": "29,379",
    "bestRank": "29,379",
    "lastMatch": "match_7ae3fb01"
  },
  {
    "id": 925,
    "name": "ThOmAs SheLbY",
    "avatar": "https://avatars.steamstatic.com/2c2c1a3399dc8a6a717a106d5aa179b3376d6e13.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,379",
    "bestRank": "29,999",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 926,
    "name": "Jesper",
    "avatar": "https://avatars.steamstatic.com/791a2d6c599de593eeab65c912e35bb2fc656752.jpg",
    "tracked": false,
    "wins": 38,
    "currentRank": "29,379",
    "bestRank": "29,379",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 927,
    "name": "asd",
    "avatar": "https://avatars.steamstatic.com/6c0fe2b5cc8471a949425115f995a22188e8a80b.jpg",
    "tracked": false,
    "wins": 57,
    "currentRank": "29,378",
    "bestRank": "29,639",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 928,
    "name": "raphael.",
    "avatar": "https://avatars.steamstatic.com/f688fea11d6eba9a4ccf958ad0fb05dd35e58c87.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,378",
    "bestRank": "29,378",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 929,
    "name": "Sergiz",
    "avatar": "https://avatars.steamstatic.com/f7da56118cb71523bf0f66089552b93bd03e3fcc.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,377",
    "bestRank": "29,377",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 930,
    "name": "alfonzz",
    "avatar": "https://avatars.steamstatic.com/0b2febdead253dbeed26c68930af541034d003d8.jpg",
    "tracked": false,
    "wins": 32,
    "currentRank": "29,376",
    "bestRank": "29,853",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 931,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 52,
    "currentRank": "29,375",
    "bestRank": "29,375",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 932,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 51,
    "currentRank": "29,372",
    "bestRank": "29,372",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 933,
    "name": "无敌黑土大王",
    "avatar": "https://avatars.steamstatic.com/a122edab948424a45f6ae1a320c1389dd5da38e4.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "29,370",
    "bestRank": "29,370",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 934,
    "name": "Go Follow MazuBazu on Tiktok",
    "avatar": "https://avatars.steamstatic.com/f523fc4878fe815f5207855a40017998dbb20a88.jpg",
    "tracked": false,
    "wins": 105,
    "currentRank": "29,368",
    "bestRank": "29,368",
    "lastMatch": "match_baf64265"
  },
  {
    "id": 935,
    "name": "I̶Z̶O̶ЛЕНТА🅾",
    "avatar": "https://avatars.steamstatic.com/79089b271d3e31e5a5e36f436d68b8ecd975dc96.jpg",
    "tracked": true,
    "wins": 26,
    "currentRank": "29,366",
    "bestRank": "29,366",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 936,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 125,
    "currentRank": "29,364",
    "bestRank": "30,956",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 937,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 65,
    "currentRank": "29,364",
    "bestRank": "29,887",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 938,
    "name": "PR1MO",
    "avatar": "https://avatars.steamstatic.com/06eea76b82a16304478c6f972d8cd40b5904a35f.jpg",
    "tracked": false,
    "wins": 54,
    "currentRank": "29,362",
    "bestRank": "29,999",
    "lastMatch": "match_b2f091fe"
  },
  {
    "id": 939,
    "name": "Rittox",
    "avatar": "https://avatars.steamstatic.com/5e95b59285a3479baff1dcc922627ed48ef5d683.jpg",
    "tracked": false,
    "wins": 93,
    "currentRank": "29,361",
    "bestRank": "29,587",
    "lastMatch": "match_98144d49"
  },
  {
    "id": 940,
    "name": "肥肥的鱼2549",
    "avatar": "https://avatars.steamstatic.com/db852c24736655938549e247757070e7615a1f07.jpg",
    "tracked": false,
    "wins": 48,
    "currentRank": "29,353",
    "bestRank": "29,707",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 941,
    "name": ".....",
    "avatar": "https://avatars.steamstatic.com/b45496c4e87b8cb5ba12c24dcf75f54b3279b1d7.jpg",
    "tracked": true,
    "wins": 41,
    "currentRank": "29,352",
    "bestRank": "30,988",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 942,
    "name": "GSTAR",
    "avatar": "https://avatars.steamstatic.com/c84904f605e0b16573ede7ccdc9f8d95a70d1528.jpg",
    "tracked": true,
    "wins": 36,
    "currentRank": "29,351",
    "bestRank": "29,351",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 943,
    "name": "glerupsen",
    "avatar": "https://avatars.steamstatic.com/668578ada8caceae4b2fe007ed6b01e741909674.jpg",
    "tracked": false,
    "wins": 112,
    "currentRank": "29,349",
    "bestRank": "29,572",
    "lastMatch": "match_71e5e7df"
  },
  {
    "id": 944,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 106,
    "currentRank": "29,349",
    "bestRank": "29,999",
    "lastMatch": "match_83b5819d"
  },
  {
    "id": 945,
    "name": "frenkie",
    "avatar": "https://avatars.steamstatic.com/c9b426065e33ba2347240e925d149bf4cbbad7b7.jpg",
    "tracked": false,
    "wins": 64,
    "currentRank": "29,343",
    "bestRank": "29,595",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 946,
    "name": "Sn4ke_Eyes",
    "avatar": "https://avatars.steamstatic.com/154dbc745ebbfb6e5253350e6bf479fdaea3818f.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,340",
    "bestRank": "29,340",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 947,
    "name": "Lyneth",
    "avatar": "https://avatars.steamstatic.com/c62b905bb73f8b71f29a93217014922fc355e08e.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,339",
    "bestRank": "29,339",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 948,
    "name": "Yo Lfut - DonBandaj",
    "avatar": "https://avatars.steamstatic.com/83db1c4b4033be9e80bb2f8be57697285acde174.jpg",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,338",
    "bestRank": "29,338",
    "lastMatch": "match_ca3d8895"
  },
  {
    "id": 949,
    "name": "追光科技",
    "avatar": "https://avatars.steamstatic.com/7f810a664c41819616a6cb4d92f192633482af2b.jpg",
    "tracked": false,
    "wins": 68,
    "currentRank": "29,335",
    "bestRank": "29,335",
    "lastMatch": "match_a9e15811"
  },
  {
    "id": 950,
    "name": "Puteli",
    "avatar": "https://avatars.steamstatic.com/09bb249e73ed826d30e4edba4dea2a1ce23c3f1c.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,335",
    "bestRank": "29,335",
    "lastMatch": "match_ad3440af"
  },
  {
    "id": 951,
    "name": "Yakovlev Yak-3",
    "avatar": "https://avatars.steamstatic.com/e107038f8334cdfea1c83d81441e6775ea67fbf7.jpg",
    "tracked": true,
    "wins": 27,
    "currentRank": "29,334",
    "bestRank": "29,334",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 952,
    "name": "sketchy guy",
    "avatar": "https://avatars.steamstatic.com/ea978cd9c52cef376b59ded765b73cf17e719bb0.jpg",
    "tracked": false,
    "wins": 53,
    "currentRank": "29,333",
    "bestRank": "29,333",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 953,
    "name": "qqqqqqqqqqqqqq",
    "avatar": "https://avatars.steamstatic.com/211ad162b8ca1e1b935bd82ca780148fd416fdb5.jpg",
    "tracked": false,
    "wins": 85,
    "currentRank": "29,332",
    "bestRank": "30,121",
    "lastMatch": "match_14e7eeb5"
  },
  {
    "id": 954,
    "name": "I hate ZhaBbI4",
    "avatar": "https://avatars.steamstatic.com/543bb32f9249e6738288c0d3ac6987ee25983c41.jpg",
    "tracked": false,
    "wins": 25,
    "currentRank": "29,331",
    "bestRank": "29,331",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 955,
    "name": "CraZzzY",
    "avatar": "https://avatars.steamstatic.com/b6ad88e14579b5bff218a430b9fa5540f2fb05e6.jpg",
    "tracked": false,
    "wins": 33,
    "currentRank": "29,326",
    "bestRank": "30,848",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 956,
    "name": "pnd",
    "avatar": "https://avatars.steamstatic.com/5a048fb597b49e64fa5ab8d9d409e90042a0d9b5.jpg",
    "tracked": true,
    "wins": 29,
    "currentRank": "29,325",
    "bestRank": "29,325",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 957,
    "name": "hewi",
    "avatar": "https://avatars.steamstatic.com/7192e5443b4546ceea05325e3d44e480a6a19b36.jpg",
    "tracked": true,
    "wins": 25,
    "currentRank": "29,324",
    "bestRank": "29,324",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 958,
    "name": "",
    "avatar": "",
    "tracked": true,
    "wins": 37,
    "currentRank": "29,322",
    "bestRank": "30,114",
    "lastMatch": "match_782cfdc0"
  },
  {
    "id": 959,
    "name": "E 30",
    "avatar": "https://avatars.steamstatic.com/b3ab0d5dfda824eb15f8d9fd44f286e57846e4a9.jpg",
    "tracked": false,
    "wins": 29,
    "currentRank": "29,321",
    "bestRank": "29,404",
    "lastMatch": "match_719eb5b7"
  },
  {
    "id": 960,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 27,
    "currentRank": "29,321",
    "bestRank": "29,384",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 961,
    "name": "VAD1M",
    "avatar": "https://avatars.steamstatic.com/a9ab20784d1be8918f6441142f68a9ccd1f2e6c7.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,321",
    "bestRank": "29,321",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 962,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 128,
    "currentRank": "29,320",
    "bestRank": "29,320",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 963,
    "name": "henky",
    "avatar": "https://avatars.steamstatic.com/d40a604e88e970c0f56fb284df1ac8c8773aade8.jpg",
    "tracked": true,
    "wins": 33,
    "currentRank": "29,320",
    "bestRank": "29,999",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 964,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 55,
    "currentRank": "29,319",
    "bestRank": "30,997",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 965,
    "name": "neok enjoyer",
    "avatar": "https://avatars.steamstatic.com/4f8a463772d6345bb551c84bbc44befeace00ef4.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,319",
    "bestRank": "29,739",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 966,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": true,
    "wins": 76,
    "currentRank": "29,318",
    "bestRank": "29,318",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 967,
    "name": "martini_132",
    "avatar": "https://avatars.steamstatic.com/b1409a4276eb1ec9ad446053fd3e7f4d95fbcb0b.jpg",
    "tracked": false,
    "wins": 64,
    "currentRank": "29,317",
    "bestRank": "29,592",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 968,
    "name": "Спика Нас Предал",
    "avatar": "https://avatars.steamstatic.com/e4e10804e3272181891303d378140ce492a835e4.jpg",
    "tracked": false,
    "wins": 60,
    "currentRank": "29,315",
    "bestRank": "29,315",
    "lastMatch": "match_79ed9f08"
  },
  {
    "id": 969,
    "name": "blijhoofdtje",
    "avatar": "https://avatars.steamstatic.com/d72167438be67089ea0270bba56b6f6af48b81d2.jpg",
    "tracked": false,
    "wins": 23,
    "currentRank": "29,315",
    "bestRank": "29,315",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 970,
    "name": "cypr000",
    "avatar": "https://avatars.steamstatic.com/f428f0a3721c9483122ffcd318ba474f52b7622e.jpg",
    "tracked": true,
    "wins": 57,
    "currentRank": "29,312",
    "bestRank": "31,037",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 971,
    "name": "penzo arabaci",
    "avatar": "https://avatars.steamstatic.com/a7980d497429240dbd55380bf07507f6177b94f3.jpg",
    "tracked": true,
    "wins": 47,
    "currentRank": "29,312",
    "bestRank": "29,312",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 972,
    "name": "dytram",
    "avatar": "https://avatars.steamstatic.com/5117b4185912b05011e4be6bc90e4b589246999f.jpg",
    "tracked": false,
    "wins": 43,
    "currentRank": "29,311",
    "bestRank": "29,864",
    "lastMatch": "match_729852a9"
  },
  {
    "id": 973,
    "name": "i miss her",
    "avatar": "https://avatars.steamstatic.com/265cb212b50a3c90511d64330214637c3b98d821.jpg",
    "tracked": false,
    "wins": 72,
    "currentRank": "29,309",
    "bestRank": "29,309",
    "lastMatch": "match_e9c2a33e"
  },
  {
    "id": 974,
    "name": "jellybeans",
    "avatar": "https://avatars.steamstatic.com/cbf2d78f0ecfc613e4d232075707c259b73ae045.jpg",
    "tracked": false,
    "wins": 46,
    "currentRank": "29,308",
    "bestRank": "29,308",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 975,
    "name": "Crisblu",
    "avatar": "https://avatars.steamstatic.com/c3224f4cf53fb4b5702c1502bab72fdfa307a1fb.jpg",
    "tracked": true,
    "wins": 35,
    "currentRank": "29,307",
    "bestRank": "29,318",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 976,
    "name": "seilliG",
    "avatar": "https://avatars.steamstatic.com/838bb3f582aba85b7021c4e93fe89ec449208c63.jpg",
    "tracked": true,
    "wins": 81,
    "currentRank": "29,306",
    "bestRank": "29,542",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 977,
    "name": "Ben",
    "avatar": "https://avatars.steamstatic.com/5f40153dd47204332c7e983a687a5f5ffe8106e0.jpg",
    "tracked": true,
    "wins": 27,
    "currentRank": "29,305",
    "bestRank": "29,344",
    "lastMatch": "match_073cc300"
  },
  {
    "id": 978,
    "name": "Paper Clip",
    "avatar": "https://avatars.steamstatic.com/74a131dd412caca9dc0d6bdc69cf1e4311267390.jpg",
    "tracked": false,
    "wins": 122,
    "currentRank": "29,303",
    "bestRank": "29,303",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 979,
    "name": "MAGIC DEN4iK",
    "avatar": "https://avatars.steamstatic.com/5364a10a7cfe467d63c891b56b23ae1869e285f5.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "29,303",
    "bestRank": "29,303",
    "lastMatch": "match_bbf69e5b"
  },
  {
    "id": 980,
    "name": "JgrnT '×͜ ×",
    "avatar": "https://avatars.steamstatic.com/5d6fa9ad6bca026e3f8abf7cacc4fcb363df8e7e.jpg",
    "tracked": false,
    "wins": 79,
    "currentRank": "29,302",
    "bestRank": "29,302",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 981,
    "name": "inno",
    "avatar": "https://avatars.steamstatic.com/53017f21bd0f6b055f5f57d8feb2a339567fdf24.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,302",
    "bestRank": "29,302",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 982,
    "name": "Col1mator",
    "avatar": "https://avatars.steamstatic.com/714b7af8477ebb645531f4270d3a4f7fe5536414.jpg",
    "tracked": false,
    "wins": 26,
    "currentRank": "29,302",
    "bestRank": "29,306",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 983,
    "name": "BBC Ernandosa",
    "avatar": "https://avatars.steamstatic.com/400b0d11d6aa27f62872a7ccf98e56ee40b47fa4.jpg",
    "tracked": false,
    "wins": 91,
    "currentRank": "29,301",
    "bestRank": "29,301",
    "lastMatch": "match_bc7e9691"
  },
  {
    "id": 984,
    "name": "♡ Kat -J-",
    "avatar": "https://avatars.steamstatic.com/407caaae284d3a3cf998a92bbc92257c24958bbe.jpg",
    "tracked": true,
    "wins": 62,
    "currentRank": "29,300",
    "bestRank": "29,300",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 985,
    "name": "",
    "avatar": "",
    "tracked": false,
    "wins": 50,
    "currentRank": "29,300",
    "bestRank": "29,300",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 986,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 44,
    "currentRank": "29,299",
    "bestRank": "29,299",
    "lastMatch": "match_5a0f42b8"
  },
  {
    "id": 987,
    "name": "Blazera",
    "avatar": "https://avatars.steamstatic.com/9af2725645342c4bf4caffabaca10a5033ca4a22.jpg",
    "tracked": false,
    "wins": 39,
    "currentRank": "29,296",
    "bestRank": "29,296",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 988,
    "name": "^ｈＮｅ",
    "avatar": "https://avatars.steamstatic.com/dbe2a5b3ac4287d807b4c49966a4df645cb86a10.jpg",
    "tracked": true,
    "wins": 28,
    "currentRank": "29,296",
    "bestRank": "29,296",
    "lastMatch": "match_0b842544"
  },
  {
    "id": 989,
    "name": "hello team",
    "avatar": "https://avatars.steamstatic.com/03e4126efd5e21aa5d33f648b9c13ed15592a1c8.jpg",
    "tracked": false,
    "wins": 55,
    "currentRank": "29,295",
    "bestRank": "29,295",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 990,
    "name": "DcM-",
    "avatar": "https://avatars.steamstatic.com/b26a8871fdfabe8be71cee21be98baf38d9ce194.jpg",
    "tracked": false,
    "wins": 56,
    "currentRank": "29,294",
    "bestRank": "29,336",
    "lastMatch": "match_52f8a196"
  },
  {
    "id": 991,
    "name": "you",
    "avatar": "https://avatars.steamstatic.com/bb6da85244366a6d3a5526cc0ed4bf33db739cba.jpg",
    "tracked": true,
    "wins": 26,
    "currentRank": "29,291",
    "bestRank": "29,295",
    "lastMatch": "match_b6285779"
  },
  {
    "id": 992,
    "name": "Smaxie",
    "avatar": "https://avatars.steamstatic.com/583cd0ad54ced4bfa8589e4a810f93a2fc710433.jpg",
    "tracked": false,
    "wins": 37,
    "currentRank": "29,287",
    "bestRank": "29,287",
    "lastMatch": "match_928dc6f0"
  },
  {
    "id": 993,
    "name": "noway",
    "avatar": "https://avatars.steamstatic.com/e643c812feece27c17ad274ee113b3c2efb3d202.jpg",
    "tracked": true,
    "wins": 30,
    "currentRank": "29,287",
    "bestRank": "29,594",
    "lastMatch": "match_c07adf52"
  },
  {
    "id": 994,
    "name": "BingBong",
    "avatar": "https://avatars.steamstatic.com/4bf6ff8bb0e8afd5f19e5e4cd2fd5507fa669bbe.jpg",
    "tracked": true,
    "wins": 25,
    "currentRank": "29,284",
    "bestRank": "29,284",
    "lastMatch": "match_54731ed4"
  },
  {
    "id": 995,
    "name": "**FD**",
    "avatar": "https://avatars.steamstatic.com/27f0e83e3df839e747a7b466a8d3a0888c0c7736.jpg",
    "tracked": false,
    "wins": 27,
    "currentRank": "29,283",
    "bestRank": "29,439",
    "lastMatch": "match_ee7a1289"
  },
  {
    "id": 996,
    "name": "icy",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/af/af7f2592e54c38b8cd46f61dad10f25cad4a43a2.jpg",
    "tracked": true,
    "wins": 77,
    "currentRank": "29,282",
    "bestRank": "29,469",
    "lastMatch": "match_8cd0681c"
  },
  {
    "id": 997,
    "name": "Игрок",
    "avatar": "https://static.csstats.gg/images/qm.png",
    "tracked": false,
    "wins": 62,
    "currentRank": "29,282",
    "bestRank": "29,282",
    "lastMatch": "match_c3c6f67e"
  },
  {
    "id": 998,
    "name": "buhhhh",
    "avatar": "https://avatars.steamstatic.com/f097e084eb25152d2fa0b593c9dca9bd060d125f.jpg",
    "tracked": false,
    "wins": 31,
    "currentRank": "29,282",
    "bestRank": "29,342",
    "lastMatch": "match_69e7b6bc"
  },
  {
    "id": 999,
    "name": "DJ",
    "avatar": "https://avatars.steamstatic.com/ac5ec46d507f142e4ba1a56bd51075d8af911d5f.jpg",
    "tracked": true,
    "wins": 181,
    "currentRank": "29,280",
    "bestRank": "29,302",
    "lastMatch": "match_8cd0681c"
  }
]

const RankItem = ({ curRank }: { curRank: string }) => {
  return (
    <div
      className="relative flex items-center justify-center w-22 h-7 "
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="absolute text-yellow-400 font-bold text-lg ml-3"
      style={{ transform: 'skewX(-15deg)' }}
      >{curRank}</span>
    </div>
  )
}

const RankItemm = ({ curRankk }: { curRankk: string }) => {
  return (
    <div
      className="relative flex items-center justify-center w-22 h-7 "
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="absolute text-yellow-400 font-bold text-lg ml-3"
      style={{ transform: 'skewX(-15deg)' }}
      >{curRankk}</span>
    </div>
  )
}

export default function LeaderboardsPage() {
  const t = useTranslations('Leaderboards')
  

  useEffect(() => {
  const container = document.getElementById('container') as HTMLElement | null
  const elements = container?.querySelectorAll('.rating-range')

  elements?.forEach((el: Element) => {
    // Пример — можно что-то сделать с каждым элементом
    el.classList.add('js-initialized')
  })
  }, [])

  return (
  <div id="container" className="p-6 md:p-10 text-white max-w-7xl mx-auto">

      {/* Leaderboard Title */}
      <div className="mb-6">
    <h1 className="text-2xl font-bold">CS2 Leaderboard</h1>
    <p className="text-gray-400">Up to date CS2 premier leaderboards for Season 2</p>
    </div>

    {/* Stats Summary */}
    <div className="flex justify-end mb-6 space-x-8">
    <div>
      <h2 className="text-2xl font-bold">4.87M</h2>
      <p className="text-gray-400 text-sm">Last 30 day players</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold">2.09M</h2>
      <p className="text-gray-400 text-sm">Unranked players</p>
    </div>
    </div>

    {/* Rank Distribution Chart */}
    <div className="mb-8 h-48 flex items-end space-x-1">
    {rankDistribution.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
      <div className={`w-7 ${item.color}`} style={{ height: `${item.height * 2}px` }}></div>
      <span className="text-xs text-gray-400 mt-1">{item.rank}</span>
      </div>
    ))}
    </div>

    {/* Статистика игроков */}
    <div className="overflow-x-auto rounded-xl shadow-lg">
    <table className="min-w-full bg-[#1D202F] text-sm md:text-base">
      <thead>
      <tr className="bg-[#282C3D] text-left uppercase text-gray-400 text-xs md:text-sm">
        <th className="py-3 px-4 text-center">#</th>
        <th className="py-3 px-4">{t('player')}</th>
        <th className="py-3 px-4 text-center">{t('tracked')}</th>
        <th className="py-3 px-4 text-center">{t('wins')}</th>
        <th className="py-3 px-4 text-center">{t('currentRank')}</th>
        <th className="py-3 px-4 text-center">{t('bestRank')}</th>
        <th className="py-3 px-4 text-center">{t('lastMatch1')}</th>
      </tr>
      </thead>
      <tbody>
      {players.map((player, index) => (
        <tr
        key={player.id}
        className="hover:bg-[#141621] transition-colors duration-200"
        >
        <td className="py-3 px-4 font-bold text-center">{index + 1}</td>

        {/* Player column (avatar + name) */}
        <td className="py-3 px-4 flex items-center gap-3">
          {player.avatar ? (
          <Image
            src={player.avatar}
            alt={player.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          ) : (
          <div className="w-8 h-8 rounded-full bg-gray-700" />
          )}
          <span className="font-medium">{player.name}</span>
        </td>

        {/* Tracked (✅ или пусто) */}
        <td className="py-3 px-4 text-center">
          {player.tracked ? ' ✔' : ''}
        </td>

        {/* Wins */}
        <td className="py-3 px-4 text-center">{player.wins}</td>

        {/* Current Rank */}
        <td className='py-3 px-4 text-center'>
                    <RankItem curRank={player.currentRank} />
                  </td>

        {/* Best Rank */}
        <td className='py-3 px-4 text-center'>
                    <RankItemm curRankk={player.bestRank} />
                  </td>

        {/* Last Match */}
        <td className="py-3 px-4 text-center">{String(t(`lastMatch.${player.lastMatch}`, { defaultValue: player.lastMatch }))} </td> 
        </tr>
      ))}
      </tbody>
    </table>
    </div>
  </div>
  )
}