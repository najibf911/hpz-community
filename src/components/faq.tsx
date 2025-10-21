"use client";
import { useState } from "react";

type FaqItem = { q: string; a: string };

const FAQ_DATA: FaqItem[] = [
  {
    q: "Apakah saya bisa bergabung ke Discord HPZ Crew tanpa isi form dulu?",
    a: "Untuk memastikan komunitas tetap aman dan nyaman, pendaftaran melalui form wajib dilakukan sebelum mendapatkan akses ke Discord HPZ Crew.",
  },
  {
    q: "Apakah harus punya produk TDR untuk bergabung ke HPZ Crew?",
    a: "Tidak wajib. Semua rider dipersilakan bergabung. Namun, pengguna produk TDR akan mendapatkan benefit tambahan di beberapa program.",
  },
  {
    q: "Bagaimana cara mengikuti event atau challenge setelah bergabung di Discord?",
    a: "Cek channel #announcements dan #challenge-info di Discord. Ikuti instruksi yang tertera untuk periode dan mekanisme tiap event.",
  },
  {
    q: "Apakah boleh mengirim lebih dari satu konten untuk satu challenge?",
    a: "Boleh. Namun, hanya konten terbaik yang akan dinilai. Harap ikuti ketentuan format dan hashtag yang ditetapkan.",
  },
  {
    q: "Apakah saya bisa tetap aktif di komunitas meski jarang upload konten?",
    a: "Bisa. Kamu tetap dapat berdiskusi, mengikuti gathering, dan berbagi pengalaman tanpa harus rutin upload konten.",
  },
  {
    q: "Bagaimana cara mendapatkan poin dan naik di leaderboard?",
    a: "Kumpulkan poin dari aktivitas seperti upload konten, ikut event, dan engage di komunitas. Poin diakumulasi setiap periode.",
  },
  {
    q: "Apa yang terjadi jika saya melanggar aturan komunitas?",
    a: "Kami akan memberi peringatan sesuai tingkat pelanggaran. Pelanggaran berat dapat berujung pada suspension atau removal.",
  },
  {
    q: "Apakah HPZ Crew punya aturan khusus dalam membuat dan mengunggah konten?",
    a: "Ya. Konten harus orisinal, tidak mengandung SARA, dan sesuai dengan kaidah keselamatan berkendara. Detail di #community-rules.",
  },
  {
    q: "Apakah HPZ Crew terbuka untuk semua jenis motor dan komunitas?",
    a: "Terbuka untuk semua jenis motor dan latar belakang komunitas, selama mengikuti aturan yang berlaku.",
  },
  {
    q: "Apakah ada event offline atau gathering resmi dari HPZ Crew?",
    a: "Ada. Kami rutin mengadakan meetup/gathering di beberapa kota. Jadwal akan diumumkan di Discord dan sosial media resmi HPZ.",
  },
];

export default function FAQ() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const mid = Math.ceil(FAQ_DATA.length / 2);
  const left = FAQ_DATA.slice(0, mid);
  const right = FAQ_DATA.slice(mid);

  const renderCol = (items: FaqItem[], offset: number) => (
    <div className="flex flex-col divide-y divide-gray-200">
      {items.map((item, i) => {
        const idx = offset + i;
        const isOpen = openSet.has(idx);
        return (
          <div key={idx} className="py-2">
            <button
              className="w-full py-3 cursor-pointer flex items-center justify-between text-left font-medium"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="w-[90%]">{item.q}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"} text-[#EC1617]`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div id={`faq-panel-${idx}`} className="pb-4 text-sm ">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="lg:px-16 p-4 text-center lg:mt-20">
      <h2 className="font-bold italic text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 text-left lg:grid-cols-2 gap-8">
        {renderCol(left, 0)}
        {renderCol(right, left.length)}
      </div>
    </section>
  );
}