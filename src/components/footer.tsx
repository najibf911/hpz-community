import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#272727] text-white flex flex-col gap-4 lg:flex-row lg:justify-between px-6 py-10 lg:p-10"
    >
      {/* logo footer */}
      <div className="flex flex-col items-start gap-4">
        <Image className="h-10 lg:h-16" src={logo} alt="HPZ Crew Logo" />
        <p className="text-gray-200">
          PT. Terra International © 2025 <br />
          High Performance Zone. <br />
          All rights reserved.
        </p>
      </div>
      {/* menu footer */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-end lg:gap-16"
      >
        <div className="flex flex-col gap-2">
          <div className="font-bold text-white text-xl border-b-1 lg:min-w-52 border-white">
            Kontak Kami
            <span className="inline-flex items-center ml-3" aria-label="WhatsApp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-green-500"
                fill="currentColor"
                role="img"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.148-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.672-1.612-.922-2.206-.242-.581-.487-.503-.672-.513l-.573-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.99 7.615h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.253c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.5 0 11.815 11.815 0 00.685 11.815c0 2.082.541 4.114 1.586 5.915L0 24l6.356-1.67a11.81 11.81 0 005.813 1.488h.005c6.513 0 11.814-5.301 11.816-11.814A11.77 11.77 0 0020.895 3.7z"/>
              </svg>
            </span>
          </div>
          <Link className="text-gray-400" href="">Jakarta</Link>
          <Link className="text-gray-400" href="">Surabaya</Link>
          <Link className="text-gray-400" href="">Bali</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-white text-xl border-b-1 border-white">
            Ikuti Kami
          </div>
          <Link className="text-gray-400" href="">Instagram</Link>
          <Link className="text-gray-400" href="">Tiktok</Link>
          <Link className="text-gray-400" href="">Facebook</Link>
          <Link className="text-gray-400" href="">Youtube</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-white text-xl border-b-1 border-white">
            Website Info
          </div>
          <Link className="text-gray-400" href="">Cookies</Link>
          <Link className="text-gray-400" href="">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}