import Image from "next/image";
import benefit1 from "@/assets/benefit/aaa.png";
import benefit2 from "@/assets/benefit/bbb.png";
import benefit3 from "@/assets/benefit/ccc.png";
import benefit4 from "@/assets/benefit/ddd.png";

export default function Benefit() {
  return (
    <section className="lg:ml-20 p-4 lg:px-16 lg:pt-40" id="benefit">
      {/* <!-- text --> */}
      <div className="text-center flex flex-col gap-4 mb-6 lg:mb-20 items-center">
        <h1 className="font-bold text-2xl lg:text-3xl italic">
          Benefit Eksklusif untuk Anggota
        </h1>
        <p className="max-w-3xl">
          Setiap anggota HPZ Crew berhak menikmati berbagai keuntungan spesial
          yang tidak bisa kamu dapatkan di tempat lain.
        </p>
      </div>
      {/* <!-- list benefit --> */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 dark:text-black">
        {[
          { image: benefit1, title: "Diskon khusus produk TDR" },
          { image: benefit2, title: "Voucher event komunitas" },
          { image: benefit3, title: "Konten eksklusif" },
          { image: benefit4, title: "Support prioritas" },
        ].map((b, idx) => (
          <div
            key={idx}
            className="bg-[#D9D9D9] rounded-lg shadow-xl flex flex-col items-center text-center"
          >
            <div className="bg-red-600 rounded-t-lg h-4 w-full" />
            <Image width={250} height={250} src={b.image.src} className="p-2" alt={b.title} />
            <h2 className="font-bold m-2">{b.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
