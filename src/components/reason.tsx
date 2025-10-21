import Image from "next/image";
import alasan1 from "@/assets/reason/aframe.png";
import alasan2 from "@/assets/reason/framee.png";
import alasan3 from "@/assets/reason/bframe.png";
import alasan4 from "@/assets/reason/cframe.png";

export default function Reason() {
  return (
    <section className="gap-4 lg:gap-16  p-4 lg:px-16 lg:pt-40" id="reasons">
      {/* <!-- left/1st content --> */}
      <div className="lg:ml-20 flex flex-col items-center text-center gap-7 mb-10">
        <h1 className="font-bold text-xl mb-2 lg:text-3xl italic">
          Kenapa harus gabung HPZ Crew?
        </h1>
        <p className="max-w-4xl">
          HPZ Crew adalah komunitas resmi TDR untuk para rider yang ingin lebih
          dari sekadar berkendara. Bergabunglah untuk jadi bagian dari gerakan
          riding premium, penuh inspirasi, dan penuh solidaritas.
        </p>
      </div>
      {/* <!-- right/2nd content --> */}
      <div className="">
        {[
          {
            title: "Komunitas Eksklusif",
            desc: "Bangun relasi, berbagi pengalaman, dan jadi bagian dari lingkaran rider premium yang solid, aktif, dan saling mendukung.",
            img: alasan1,
          },
          {
            title: "Konten Premium",
            desc: "Nikmati tips, tutorial, dan review langsung dari para ahli TDR untuk meningkatkan performa dan gaya berkendaramu.",
            img: alasan2,
          },
          {
            title: "100% Produk Asli",
            desc: "Dapatkan produk TDR original dengan kualitas terbaik dan perlindungan penuh dari risiko barang palsu.",
            img: alasan3,
          },
          {
            title: "Kesempatan Tumbuh dan Kolaborasi",
            desc: "Ikut terlibat dalam event, campaign, dan kolaborasi eksklusif bersama TDR serta komunitas rider lainnya.",
            img: alasan4,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center gap-4 p-2 rounded-lg "
          >
            {idx % 2 === 0 ? (
              <>
                <div className="flex flex-col gap-5 max-w-2xl">
                  <h1 className="font-bold lg:text-2xl ">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex-shrink-0">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 max-w-2xl">
                  <h1 className="font-bold lg:text-2xl ">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
