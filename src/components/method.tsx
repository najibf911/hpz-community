import step1 from "@/assets/method/eee.png";
import step2 from "@/assets/method/ppp.png";
import step3 from "@/assets/method/qqq.png";
import step4 from "@/assets/method/uuu.png";
import Image from "next/image";

export default function Method() {
  return (
    <section className="lg:ml-20 lg:px-16 lg:pt-40 p-4" id="method">
        {/* <!-- title --> */}
        <div className="mb-10 flex flex-col gap-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold italic">
            Cara Bergabung Sangat Mudah
          </h2>
          <p className="">
            Ikuti langkah sederhana ini dan mulai perjalananmu bersama HPZ Crew.
          </p>
        </div>

        {/* <!-- steps --> */}
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {[
            { img: step1, title: "Isi Form Pendaftaran", desc: "Lengkapi data dirimu untuk bergabung dengan HPZ Crew." },
            { img: step2, title: "Gabung ke Server Discord HPZ TV", desc: "Masuk ke server resmi HPZ TV." },
            { img: step3, title: "Mulai Riding dan Posting Konten", desc: "Tunjukkan semangat riding-mu lewat konten terbaik!" },
            { img: step4, title: "Dapatkan Reward dan Benefit", desc: "Raih berbagai hadiah eksklusif, diskon, dan kesempatan kolaborasi." },
          ].map((step, index) => (
            <div key={index} className="bg-[#F9F9F9] rounded-2xl shadow-md flex flex-col dark:text-black">
              <Image src={step.img} alt={step.title}  className="object-cover mb-5 rounded-t-2xl" />
              <h3 className="font-semibold px-4 text-red-600">Step {index + 1}</h3>
              <h3 className="font-semibold px-4">{step.title}</h3>
              <p className="px-4 mb-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
  );
}