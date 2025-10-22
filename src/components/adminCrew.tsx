"use client";

type RequestRow = {
  name: string;
  age: number;
  city: string;
  phone: string;
  email: string;
  username: string;
  social: string; // handle shown with @
  reason: string;
};

const joinRequests: RequestRow[] = [
  { name: "Galih Ramadhan", age: 21, city: "Surabaya", phone: "082********2", email: "example@gmail.com", username: "@adityapramana", social: "@adityapramana", reason: "Mendapat diskon khusus untuk produk TDR" },
  { name: "Rangga Mahendra", age: 23, city: "Jakarta", phone: "082********1", email: "example@gmail.com", username: "@rangga.mhd..", social: "@rangga.mhd..", reason: "Bisa ikut event eksklusif komunitas motor" },
  { name: "Tama Wicaksono", age: 21, city: "Jakarta", phone: "082********1", email: "example@gmail.com", username: "@tamawcskn", social: "@tamawcskn", reason: "Dapat hadiah & reward bulanan untuk anggota aktif" },
  { name: "Hendra Wijaya", age: 22, city: "Surabaya", phone: "082********5", email: "example@gmail.com", username: "@hendrawjy", social: "@hendrawjy", reason: "Punya akses ke konten premium (tutorial, tips, review)" },
  { name: "Irfan Maulana", age: 24, city: "Jakarta", phone: "082********1", email: "example@gmail.com", username: "@irfanmln_", social: "@irfanmln_", reason: "Bergabung dengan komunitas rider eksklusif di Indonesia" },
  { name: "Joko Santoso", age: 25, city: "Surabaya", phone: "082********7", email: "example@gmail.com", username: "@jokosntso", social: "@jokosntso", reason: "Kesempatan jadi brand ambassador HPZ." },
];

type MemberRow = {
  name: string;
  age: number;
  city: string;
  phone: string;
  email: string;
  username: string;
  social: string;
};

const activeMembers: MemberRow[] = [
  { name: "Galih Ramadhan", age: 21, city: "Surabaya", phone: "082********2", email: "example@gmail.com", username: "@adityapramana", social: "adityapra.." },
  { name: "Rangga Mahendra", age: 22, city: "Jakarta", phone: "082********2", email: "example@gmail.com", username: "@rangga.mhd..", social: "rangga" },
  { name: "Tama Wicaksono", age: 21, city: "Surabaya", phone: "082********2", email: "example@gmail.com", username: "@tamawcskn", social: "tamawcskn" },
  { name: "Hendra Wijaya", age: 21, city: "Jakarta", phone: "082********2", email: "example@gmail.com", username: "@hendrawjy", social: "hendrawjy" },
  { name: "Irfan Maulana", age: 21, city: "Surabaya", phone: "082********2", email: "example@gmail.com", username: "@irfanmln_", social: "irfanmln_" },
  { name: "Joko Santoso", age: 23, city: "Surabaya", phone: "082********2", email: "example@gmail.com", username: "@jokosntso", social: "jokosntso" },
  { name: "Dwi Ardiansyah", age: 21, city: "Jakarta", phone: "082********2", email: "example@gmail.com", username: "@dwiardyn", social: "dwiardyn" },
];

export default function AdminCrew() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-[28px] font-bold">Pengguna</h1>
          <p className="text-gray-500">Manage user&aposs join request</p>
        </div>
        <div className="hidden md:block w-72 text-black">
          <div className="relative">
            <input
              type="search"
              placeholder="Search everything"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-9 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
            />
            <svg aria-hidden viewBox="0 0 24 24" className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.52 3.5 10.5 3.5S5 6.01 5 9.5 7.48 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM10.5 14C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>
          </div>
        </div>
      </div>

      {/* Join Requests */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden text-black">
        <div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
            <h2 className="text-base md:text-lg font-semibold">Permintaan Bergabung</h2>
          </div>
          <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
            Filter <span aria-hidden>▾</span>
          </button>
        </div>
        <div className="px-4 md:px-6 pb-4">
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-2 pl-3">Nama Lengkap</th>
                  <th className="py-2">Usia</th>
                  <th className="py-2">Kota</th>
                  <th className="py-2">No. Telp</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Sosmed</th>
                  <th className="py-2">Alasan Bergabung</th>
                  <th className="py-2 pr-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {joinRequests.map((r, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="py-2 pl-3">{r.name}</td>
                    <td className="py-2">{r.age}</td>
                    <td className="py-2">{r.city}</td>
                    <td className="py-2">{r.phone}</td>
                    <td className="py-2">{r.email}</td>
                    <td className="py-2">{r.username}</td>
                    <td className="py-2">{r.social}</td>
                    <td className="py-2 max-w-[320px] truncate" title={r.reason}>{r.reason}</td>
                    <td className="py-2 pr-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-green-600 hover:bg-green-50" aria-label="Approve">✓</button>
                        <button className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-red-600 hover:bg-red-50" aria-label="Reject">✕</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Stats + Active Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-black">
        {/* Stats column */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
                <h3 className="font-semibold">Jumlah Anggota</h3>
              </div>
              <button className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100" aria-label="More">⋯</button>
            </div>
            <div className="text-3xl font-bold">1220</div>
            <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-2 py-0.5 text-xs text-green-700">+240</div>
            <p className="mt-1 text-xs text-gray-500">Anggota baru dalam 7 hari terakhir</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
                <h3 className="font-semibold">Average Joined/month</h3>
              </div>
              <button className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100" aria-label="More">⋯</button>
            </div>
            <div className="text-3xl font-bold">24</div>
            <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-2 py-0.5 text-xs text-green-700">+8</div>
            <p className="mt-1 text-xs text-gray-500">Anggota baru setiap bulan</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
                <h3 className="font-semibold">Active Creator</h3>
              </div>
              <button className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100" aria-label="More">⋯</button>
            </div>
            <div className="text-3xl font-bold">211</div>
            <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-2 py-0.5 text-xs text-red-700">-40</div>
            <p className="mt-1 text-xs text-gray-500">anggota aktif dalam membuat konten</p>
          </div>
        </div>

        {/* Active members table */}
        <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
              <h2 className="text-base md:text-lg font-semibold">Daftar Anggota Aktif</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
                Filter <span aria-hidden>▾</span>
              </button>
            </div>
          </div>
          <div className="px-4 md:px-6 pb-4">
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="py-2 pl-3">Nama Lengkap</th>
                    <th className="py-2">Usia</th>
                    <th className="py-2">Kota</th>
                    <th className="py-2">No. Telp</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Sosmed</th>
                    <th className="py-2 pr-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {activeMembers.map((m, idx) => (
                    <tr key={idx} className="border-t border-gray-100">
                      <td className="py-2 pl-3">{m.name}</td>
                      <td className="py-2">{m.age}</td>
                      <td className="py-2">{m.city}</td>
                      <td className="py-2">{m.phone}</td>
                      <td className="py-2">{m.email}</td>
                      <td className="py-2">{m.username}</td>
                      <td className="py-2">{m.social}</td>
                      <td className="py-2 pr-3 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-blue-600 hover:bg-blue-50" aria-label="Edit">✎</button>
                          <button className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-red-600 hover:bg-red-50" aria-label="Delete">🗑</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2">
              <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
                Download CSV
              </button>
              <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
                View all <span aria-hidden>▸</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
