import content1 from "@/assets/content1.jpg";
import content2 from "@/assets/content2.jpg";
import content3 from "@/assets/content3.jpg";
import Image from "next/image";
import crown from "@/assets/crown.svg";
import instagram from "@/assets/Instagram.svg";
import no2 from "@/assets/no2.svg";
import no3 from "@/assets/no3.svg";
import tiktok from "@/assets/Tik Tok.svg";

export default function BestContent() {
  return (
    <section className="lg:px-16 lg:pt-40 p-4" id="bestContent">
      {/* <!-- text --> */}
      <div className="flex flex-col  items-center lg:gap-4 mb-2">
        <p>Periode 1-7 Oktober 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl">Weekly Best Content</h1>

        <p>Lihat karya terbaik dari HPZ Crew minggu ini!</p>
      </div>

      {/* <!-- content item --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 lg:ml-20 lg:items-end lg:px-10 lg:pt-10">
        {/* <!-- item 1 (juara 1) --> */}
        <div className="rounded-lg flex items-center lg:order-2 flex-col">
          {/* <!-- number --> */}
          <div className="mx-auto mb-4">
            <Image src={crown} alt="Ranking 1" />
          </div>

          {/* <!-- content --> */}
          <div className="relative rounded-2xl h-[60vh] w-full max-w-sm hover:scale-105 transition duration-300 overflow-hidden">
            <Image
              src={content1}
              alt="Weekly best content 1"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
            {/* <!-- description --> */}
            <div className="absolute inset-x-0 bottom-0 bg-[#00000080] shadow-xl backdrop-blur-[2.5px] text-gray-200 p-4">
              <div className="flex gap-2 items-center mb-2">
                <Image src={instagram.src} alt="Instagram" className="w-5 h-5" />
                <p>@fitrahrider</p>
              </div>
              <p className="mb-2">
                Daily Ride ke Kampus dengan Matic Racing Look
              </p>
              <div className="text-sm">25 Oktober 2025</div>
            </div>
          </div>
        </div>

        {/* <!-- item 2 --> */}
        <div className="rounded-lg lg:order-1 flex items-center flex-col">
          <div className="mx-auto mb-4">
            <Image src={no2} alt="Ranking 2" />
          </div>
          <div className="relative rounded-2xl h-[50vh] w-full max-w-sm hover:scale-105 transition duration-300 overflow-hidden">
            <Image
              src={content2}
              alt="Weekly best content 2"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#00000080] shadow-xl backdrop-blur-[2.5px] text-gray-200 p-4">
              <div className="flex gap-2 items-center mb-2">
                <Image src={instagram.src} alt="Instagram" className="w-5 h-5" />
                <p>@fitrahrider</p>
              </div>
              <p className="mb-2">
                Daily Ride ke Kampus dengan Matic Racing Look
              </p>
              <div className="text-sm">25 Oktober 2025</div>
            </div>
          </div>
        </div>

        {/* <!-- item 3 --> */}
        <div className="rounded-lg lg:order-3 flex items-center flex-col">
          <div className="mx-auto mb-4">
            <Image src={no3.src} alt="Ranking 3" />
          </div>
          <div className="relative rounded-2xl h-[50vh] w-full max-w-sm hover:scale-105 transition duration-300 overflow-hidden">
            <Image
              src={content3}
              alt="Weekly best content 3"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#00000080] shadow-xl backdrop-blur-[2.5px] text-gray-200 p-4">
              <div className="flex gap-2 items-center mb-2">
                <Image src={tiktok.src} alt="TikTok" className="w-5 h-5" />
                <p>@fitrahrider</p>
              </div>
              <p className="mb-2">
                Daily Ride ke Kampus dengan Matic Racing Look
              </p>
              <div className="text-sm">25 Oktober 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
