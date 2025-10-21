
import instagram from "@/assets/Instagram.png";
import tiktok from "@/assets/Tik Tok.png";
import Image from "next/image";

type Row = { rank: number; name: string; handle: string; platform: "ig" | "tt"; points: string };
const rows: Row[] = [
  { rank: 1, name: "Aditya Pramana", handle: "adityapramana", platform: "ig", points: "11.002" },
  { rank: 2, name: "Bima Kurniawan", handle: "bimakrnvwn", platform: "ig", points: "10.231" },
  { rank: 3, name: "Chandra Saputra", handle: "chandrspr", platform: "tt", points: "10.221" },
  { rank: 4, name: "Dwi Ardiansyah", handle: "dwiardyn", platform: "tt", points: "9.024" },
  { rank: 5, name: "Eka Prasetyo", handle: "ekaprstyo", platform: "tt", points: "8.303" },
  { rank: 6, name: "Farhan Rizky", handle: "farhanrzk", platform: "ig", points: "7.293" },
  { rank: 7, name: "Galih Ramadhan", handle: "galih.rmdhn", platform: "ig", points: "7.115" },
  { rank: 8, name: "Hendra Wijaya", handle: "hendrawjy", platform: "tt", points: "7.111" },
  { rank: 9, name: "Irfan Maulana", handle: "irfanmln", platform: "tt", points: "7.101" },
  { rank: 10, name: "Joko Santoso", handle: "jokosntso", platform: "ig", points: "7.009" },
  { rank: 11, name: "Kevin Pradipta", handle: "kevinprdpta", platform: "ig", points: "7.002" },
  { rank: 12, name: "Luthfi Ananda", handle: "luthfiand", platform: "ig", points: "7.001" },
  { rank: 13, name: "Mahesa Putra", handle: "mahesaptra", platform: "ig", points: "7.000" },
  { rank: 14, name: "Nanda Prakoso", handle: "nandaprks", platform: "ig", points: "6.989" },
  { rank: 15, name: "Oka Wiratama", handle: "okawrtm", platform: "ig", points: "6.967" },
  { rank: 16, name: "Prasetya Nugraha", handle: "prastyn", platform: "ig", points: "6.498" },
  { rank: 17, name: "Rangga Mahendra", handle: "rangga.mhdra", platform: "ig", points: "4.655" },
  { rank: 18, name: "Surya Adi Nugroho", handle: "suryadngrh", platform: "ig", points: "3.878" },
  { rank: 19, name: "Tama Wicaksono", handle: "tamawcskn", platform: "ig", points: "3.233" },
  { rank: 20, name: "Yoga Firmansyah", handle: "ygfrmns", platform: "ig", points: "2.464" },
];

export default function CrewLeaderboard() {
  return (
    <div className="space-y-6 md:space-y-8 ">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-[28px] font-bold ">Leaderboard</h1>
          <p className="text-gray-500">Raih peringkat tertinggi dan dapatkan hadiah menarik</p>
        </div>
        <div className="hidden md:block w-72 ">
            <div className="relative">
            <input
              type="search"
              placeholder="Search everything"
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-9 text-sm text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <svg aria-hidden viewBox="0 0 24 24" className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.52 3.5 10.5 3.5S5 6.01 5 9.5 7.48 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM10.5 14C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
            </svg>
            </div>
        </div>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-0 md:p-0 overflow-hidden text-black">
        {/* Title row */}
        <div className="px-4 md:px-6 pt-4 md:pt-5 pb-2 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
          <h2 className="text-base md:text-lg font-semibold">Leaderboard</h2>
        </div>

        <div className="px-4 md:px-6 pb-4">
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="py-2 pl-3">Rank</th>
                  <th className="py-2">Nama</th>
                  <th className="py-2">Sosmed</th>
                  <th className="py-2 pr-3 text-right">Point</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.rank}
                    className={[
                      "border-t border-gray-100",
                      r.rank === 11 ? "bg-green-50" : "",
                    ].join(" ")}
                  >
                    <td className="py-2 pl-3">{r.rank}</td>
                    <td className="py-2">{r.name}</td>
                    <td className="py-2">
                      <span className="inline-flex items-center gap-2 text-gray-700">
                        <Image src={r.platform === "ig" ? instagram : tiktok} alt={r.platform === "ig" ? "Instagram" : "TikTok"} width={12} height={12} />
                        @{r.handle}
                      </span>
                    </td>
                    <td className="py-2 pr-3 text-right">{r.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
              Share
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.246 3.246 0 0 0 0-1.39l7.02-4.11A2.99 2.99 0 0 0 18 6c1.66 0 3 1.34 3 3s-1.34 3-3 3zM6 9c1.66 0 3-1.34 3-3S7.66 3 6 3 3 4.34 3 6s1.34 3 3 3zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
