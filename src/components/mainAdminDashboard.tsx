import Image from "next/image";
import searchIcon from "@/assets/icon/material-symbols_search.svg";
import tikTokPng from "@/assets/Tik Tok.png";

export default function MainAdminDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tigh dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-200">
            Kelola permintaan bergabung dari pengguna
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Cari apa saja..."
            aria-label="Pencarian"
            className="w-full h-10 rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
          <svg aria-hidden viewBox="0 0 24 24" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.52 3.5 10.5 3.5S5 6.01 5 9.5 7.48 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM10.5 14C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* jumlah anggota */}
        <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow ">
          <div className=" h-5 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-3">Jumlah Anggota</h2>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-3xl font-bold">1.220</p>
              <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                ▲ +240 orang
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Anggota baru dalam 7 hari terakhir
            </p>
          </div>
        </div>

        {/* aktivitas */}
        <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="h-5 rounded-t-2xl bg-gradient-to-r from-emerald-500 via-lime-500 to-yellow-400" />
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-3">Aktivitas</h2>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-3xl font-bold">1.368</p>
              <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                ▲ +294 Reach
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Post, Reach, dan Penjualan dari HPZ Crew
            </p>
          </div>
        </div>

        {/* instagram */}
        <div className="row-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400" />
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-10 h-10 rounded-md"
                />
                <div className="text-sm text-gray-500">Instagram</div>
              </div>
              <button
                type="button"
                aria-label="Buka menu Instagram"
                className="text-gray-500 hover:text-gray-700 rounded-md px-2 py-1"
              >
                ⋮
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800">Real Time</h3>
              <p className="text-sm text-gray-600">Instagram Engagement Rate</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">9,7%</span>
              <div className="flex items-center gap-1 px-2 py-0.5 text-green-700 bg-green-50 border border-green-200 rounded-full text-xs font-medium">
                ▲ +2,1%
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">dari minggu lalu</p>
            <p className="mt-4 text-sm text-gray-700 font-medium">
              1.027 interaksi
            </p>
          </div>
        </div>

        {/* tiktok */}
        <div className="row-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black via-gray-700 to-pink-600" />
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={tikTokPng}
                  alt="TikTok"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div className="text-sm text-gray-500">TikTok</div>
              </div>
              <button
                type="button"
                aria-label="Buka menu TikTok"
                className="text-gray-500 hover:text-gray-700 rounded-md px-2 py-1"
              >
                ⋮
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800">Real Time</h3>
              <p className="text-sm text-gray-600">TikTok Engagement Rate</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">8,7%</span>
              <div className="flex items-center gap-1 px-2 py-0.5 text-green-700 bg-green-50 border border-green-200 rounded-full text-xs font-medium">
                ▲ +2,1%
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">dari minggu lalu</p>
            <p className="mt-4 text-sm text-gray-700 font-medium">
              1.027 interaksi
            </p>
          </div>
        </div>

        {/* activity breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow col-span-1 sm:col-span-2 p-6 w-full">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Activity Breakdown
            </h3>
            <button
              className="text-gray-400 hover:text-gray-700 rounded-md px-2 py-1"
              aria-label="Buka menu Activity Breakdown"
            >
              ⋮
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {/* Post */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Post</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold">341</p>
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                    ▲ +31
                  </span>
                </div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-indigo-500 w-[70%]" />
              </div>
            </div>

            {/* Reach */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Reach</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold">1.242</p>
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                    ▲ +221
                  </span>
                </div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-emerald-500 w-[70%]" />
              </div>
            </div>

            {/* Sales */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Sales</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold">423</p>
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                    ▲ +42
                  </span>
                </div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-orange-500 w-[70%]" />
              </div>
            </div>
          </div>
        </div>

        {/* engagement rate growth */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow col-span-1 sm:col-span-2 p-6">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Engagement Rate Growth
            </h3>
            <div className="flex items-center gap-2">
              <label htmlFor="growthRange" className="sr-only">
                Rentang Waktu
              </label>
              <select
                id="growthRange"
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Filter rentang waktu"
                defaultValue="Month"
              >
                <option>Month</option>
                <option>Quarter</option>
                <option>Year</option>
              </select>
            </div>
          </div>

          {/* Simple responsive SVG sparkline */}
          <div className="mt-6">
            <div className="w-full h-44">
              <svg
                viewBox="0 0 400 160"
                width="100%"
                height="100%"
                role="img"
                aria-label="Grafik pertumbuhan engagement"
              >
                <defs>
                  <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,120 C40,80 80,100 120,70 C160,40 200,60 240,50 C280,40 320,65 360,45 L400,45 L400,160 L0,160 Z"
                  fill="url(#area)"
                />
                <path
                  d="M0,120 C40,80 80,100 120,70 C160,40 200,60 240,50 C280,40 320,65 360,45"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <a
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              href="#"
            >
              View more →
            </a>
          </div>
        </div>

        {/* leaderboard */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow col-span-1 sm:col-span-2 p-6">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Leaderboard
            </h3>
            <div className="flex items-center gap-2">
              <label htmlFor="leaderboardRange" className="sr-only">
                Rentang Waktu
              </label>
              <select
                id="leaderboardRange"
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Filter waktu"
                defaultValue="Time"
              >
                <option>Time</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>

          {/* Placeholder empty state (improve appearance without adding data) */}
          <div className="mt-6 rounded-xl border border-dashed border-gray-200 p-8 text-center">
            <p className="text-sm text-gray-500">
              Data leaderboard belum tersedia.
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <a
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              href="#"
            >
              View more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
