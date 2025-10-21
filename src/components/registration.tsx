"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { addCrewUser } from "@/lib/auth";
import formImage from "@/assets/formImage.jpg";

export default function Registration() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      fullName: HTMLInputElement;
      phoneNumber: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    try {
      addCrewUser({
        fullName: form.fullName.value,
        phoneNumber: form.phoneNumber.value,
        email: form.email.value,
        password: form.password.value,
      });
      router.push("/crew/login");
    } catch (err: any) {
      alert(err?.message ?? "Pendaftaran gagal");
    }
  };
  return (
    <section className="bg-gray-100 py-10 px-4 mt-10 lg:mt-24 lg:px-20" id="joinUs">
      {/* heading */}
      <div className="mb-10 text-center flex flex-col gap-5 items-center">
        <h1 className="font-extrabold italic text-3xl lg:text-4xl text-gray-900">
          Ayo Gabung <span className="text-[#EC1617]">HPZ Crew!</span>
        </h1>
        <p className="text-gray-600">
          Isi data berikut untuk menjadi bagian dari komunitas rider premium
          HPZ.
        </p>
      </div>

      {/* form section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:content-start items-center">
        {/* form container */}
        <div>
          <div className="bg-[#525252] shadow-md rounded-2xl p-6 lg:p-10">
            <h2 className="text-xl text-white font-semibold mb-8">
              Masukkan data diri kamu
            </h2>
            <form id="registrationForm" className="text-black" onSubmit={onSubmit}>
              <label className="text-white text-lg">Nama Lengkap</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nama Lengkap"
                required
                className="w-full p-3 mb-3 border bg-white  rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="text-white text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="text-white text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              {/* <label className="text-white text-lg">Domisili</label>
              <input
                type="text"
                id="domisili"
                name="domisili"
                placeholder="Kota Domisili"
                required
                className="w-full p-3 mb-8 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              /> */}

              <label className="text-white text-lg">No. Telepon</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="No. Telepon"
                required
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="text-white text-lg">Akun Tiktok</label>
              <input
                type="text"
                id="akunTiktok"
                name="akunTiktok"
                placeholder="Akun Tiktok"
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="text-white text-lg">Akun Instagram</label>
              <input
                type="text"
                id="akunInstagram"
                name="akunInstagram"
                placeholder="Akun Instagram"
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="text-white text-lg">Kode Referral</label>
              <input
                type="text"
                id="referralCode"
                name="referralCode"
                placeholder="Kode Referral"
                className="w-full p-3 mb-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                type="submit"
                className="w-full bg-[#EC1617] text-white py-3 rounded-xl font-semibold hover:bg-red-900 transition duration-200 hover:scale-105"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>

        {/* image */}
        <div className="flex flex-col rounded-2xl overflow-hidden shadow-md">
          <div className="bg-[#525252] h-14"></div>
          <div className="bg-[#EC1617] h-6"></div>

          <div className="relative w-full h-[70vh] flex flex-col justify-center p-6 overflow-hidden">
            <Image
              src={formImage}
              alt="HPZ Crew Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative z-20">
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                Ride with Pride
              </h2>
              <p className="text-gray-200">HPZ Crew</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
