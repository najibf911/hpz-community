"use client";

import { useState } from "react";
import Image from "next/image";
import medal from "@/assets/crown.svg";

type Leader = { rank: number; name: string; handle: string; platform: "ig" | "tt" | "tw"; points: string };
const leaders: Leader[] = [
  { rank: 1, name: "Aditya Pramana", handle: "@adityapramana", platform: "ig", points: "11.002" },
  { rank: 2, name: "Bima Kurniawan", handle: "@bimakrnvwn", platform: "ig", points: "10.231" },
  { rank: 3, name: "Chandra Saputra", handle: "@chandrasptr", platform: "tw", points: "10.221" },
  { rank: 4, name: "Dwi Ardiansyah", handle: "@dwiardyn", platform: "tw", points: "9.024" },
  { rank: 5, name: "Eka Prasetyo", handle: "@ekaprstyo", platform: "tw", points: "8.303" },
  { rank: 6, name: "Farhan Rizky", handle: "@farhanrzk", platform: "ig", points: "7.293" },
];

type History = {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  joined: boolean;
  score?: number;
};

const historyItems: History[] = [
  {
    id: "sep",
    title: "#HPZstyle September",
    dateRange: "1 – 7 September 2025",
    description:
      "Buat konten modifikasi motor paling kreatif. Konten terbaik akan tampil di Weekly Best Content dan dapat hadiah eksklusif HPZ",
    joined: true,
    score: 89,
  },
  {
    id: "aug",
    title: "#HPZstyle Agustus",
    dateRange: "1 – 7 Agustus 2025",
    description:
      "Buat konten modifikasi motor paling kreatif. Konten terbaik akan tampil di Weekly Best Content dan dapat hadiah eksklusif HPZ",
    joined: false,
  },
];

export default function MainCrewDashboard() {
  const [videoLink, setVideoLink] = useState("");

  return (
    <div className="space-y-6 md:space-y-8 ">
      {/* Heading row with optional search */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-[28px] font-bold">Selamat Datang</h1>
          <p className="text-gray-500">Daftar Challenge, kumpulkan poin, dan Menangkan Hadiahnya.</p>
        </div>

        <div className="hidden md:block w-72 ">
          <div className="relative">
            <input
              type="search"
              placeholder="Search everything"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-9 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
            />
            <svg aria-hidden viewBox="0 0 24 24" className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.52 3.5 10.5 3.5S5 6.01 5 9.5 7.48 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM10.5 14C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Top grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#1c1c1c]">
        {/* Running Event */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
            <h2 className="text-base md:text-lg font-semibold">Acara yang sedang Berlangsung</h2>
          </div>

          {/* Event card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Motor Pride of the Week</h3>
                <p className="text-xs text-gray-500">3 - 10 Oktober 2025</p>
              </div>
              
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Buat konten modifikasi motor paling kreatif. Konten terbaik akan tampil di Weekly Best Content dan dapat hadiah eksklusif HPZ
            </p>
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Sedang berjalan
              </span>
            </div>
          </div>

          {/* Submit link */}
          <div className="mt-4">
            <p className="text-sm font-medium">Ikuti Challenge dan Kumpulkan Poin!</p>
            <label htmlFor="videoLink" className="mt-2 block text-sm text-gray-700">
              Masukkan link video kamu<span className="text-red-500">*</span>
            </label>

            <div className="mt-2 flex items-center gap-2">
              <input
                id="videoLink"
                type="url"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="httptiktok.commm"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={() => videoLink && alert(`Terkirim: ${videoLink}`)}
                className="cursor-pointer rounded-lg bg-[#EC1617] px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard mini */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 ">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
              <h2 className="text-base md:text-lg font-semibold">Leaderboard</h2>
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2">Rank</th>
                  <th className="py-2">Nama</th>
                  <th className="py-2">Sosmed</th>
                  <th className="py-2 text-right">Point</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((l) => (
                  <tr key={l.rank} className="border-t border-gray-100">
                    <td className="py-2">{l.rank}</td>
                    <td className="py-2">{l.name}</td>
                    <td className="py-2">
                      <span className="inline-flex items-center gap-2 text-gray-700">
                        <span
                          className={[
                            "inline-block h-3 w-3 rounded-full",
                            l.platform === "ig" ? "bg-pink-500" : l.platform === "tt" ? "bg-black" : "bg-black",
                          ].join(" ")}
                        />
                        {l.handle}
                      </span>
                    </td>
                    <td className="py-2 text-right">{l.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3">
            <button className="cursor-pointer rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#1c1c1c]">
        {/* History */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
            <h2 className="text-base md:text-lg font-semibold">Riwayat Acara</h2>
          </div>

          <div className="space-y-4">
            {historyItems.map((it) => (
              <div key={it.id} className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{it.title}</h3>
                    <p className="text-xs text-gray-500">{it.dateRange}</p>
                  </div>
                  
                </div>
                <p className="mt-2 text-sm text-gray-700">{it.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
                      it.joined
                        ? "border-green-300 bg-green-50 text-green-700"
                        : "border-red-300 bg-red-50 text-red-700",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        it.joined ? "bg-green-500" : "bg-red-500",
                      ].join(" ")}
                    />
                    {it.joined ? "Diikuti" : "Tidak Diikuti"}
                  </span>
                  {typeof it.score === "number" && (
                    <span className="text-sm text-gray-700">
                      <span className="text-gray-500">Nilai Kamu:</span> <strong>{it.score}</strong>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
              <h2 className="text-base md:text-lg font-semibold">Pencapaian</h2>
            </div>
            <button className="cursor-pointer rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">Share</button>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-yellow-200 text-yellow-800 font-bold">@</div>
            <div className="text-sm">
              <div className="font-semibold">@pohoNKertas</div>
              <div className="text-gray-600">Kode Referal : <span className="font-mono">N2nJImf9Ne</span></div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col items-center gap-2 rounded-md border border-gray-200 p-3">
              <Image src={medal} alt="Medal" width={56} height={56} />
              <div className="text-xs text-gray-500">HPZ Legend</div>
              <div className="text-xs text-gray-500">7590 Poin</div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-md border border-gray-200 p-3">
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs text-gray-500">Challenge diikuti</div>
              </div>
              <div className="rounded-md border border-gray-200 p-3">
                <div className="text-2xl font-bold">#11</div>
                <div className="text-xs text-gray-500">di Leaderboard</div>
              </div>
              <div className="col-span-2 rounded-md border border-gray-200 p-3">
                <div className="text-2xl font-bold">x3</div>
                <div className="text-xs text-gray-500">Menang Weekly Challenge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
