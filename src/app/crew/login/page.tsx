"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import phoneIcon from "@/assets/icon/phone.png";
import loginBg from "@/assets/loginBg.png";
import { findCrewUser, setSession } from "@/lib/auth";

export default function CrewLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={loginBg}
          alt="Background"
          fill
          priority
          sizes="100vh"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <section className="relative flex flex-col items-center justify-center flex-grow py-10 lg:py-18 overflow-hidden">
        {/* heading */}
        <h1 className="text-3xl font-bold italic mb-2">
          Selamat Datang Kembali!
        </h1>
        <p className="font-semibold text-white mb-3">
          Masukan data kamu untuk login
        </p>

        {/* form card */}
        <div className="bg-[#454545]/90 backdrop-blur p-8 rounded-md shadow-lg w-full max-w-sm">
          <form
            id="loginForm"
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setError("");
              setSubmitting(true);
              const form = new FormData(e.currentTarget);
              const email = String(form.get("email") || "").trim();
              const password = String(form.get("password") || "");
              const user = findCrewUser(email, password);
              if (!user) {
                setError("Email atau password salah.");
                setSubmitting(false);
                return;
              }
              setSession({ role: "crew", email });
              router.replace("/crew/dashboard");
            }}
          >
            {/* email */}
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex: name@gmail.com"
                required
                className="w-full px-3 py-2 rounded-md bg-[#1d1d1d] text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* password */}
            <div>
              <label htmlFor="password" className="block text-white mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="*********"
                  required
                  className="w-full px-3 py-2 rounded-md bg-[#1d1d1d] text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {/* toggle visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4.03 3.97a.75.75 0 011.06 0l10.94 10.94a.75.75 0 11-1.06 1.06l-1.72-1.72c-1.4.75-3.03 1.25-4.75 1.25C4 15.5 1.46 12.94.46 10.94a1.91 1.91 0 010-1.88C1.68 7.06 3.7 4.5 9.5 4.5c1.1 0 2.14.15 3.08.42L4.03 3.97zm5.47 5.47a2 2 0 102.83 2.83l-2.83-2.83z" />
                      <path d="M12.09 6.41A7.98 7.98 0 019.5 6C3.7 6 1.68 8.56.46 10.06a.41.41 0 000 .38C1.46 12.44 4 15 9.5 15c1.44 0 2.77-.25 3.95-.7l-1.36-1.36a3.5 3.5 0 11-4.95-4.95l1.95-1.95z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 4.5c5.8 0 7.82 2.56 9.04 4.06.27.33.27.79 0 1.12C17.82 11.18 15.8 13.75 10 13.75S2.18 11.18.96 9.68a.91.91 0 010-1.12C2.18 7.06 4.2 4.5 10 4.5zm0 2C6.5 6.5 4.5 8.5 4.5 10S6.5 13.5 10 13.5 15.5 11.5 15.5 10 13.5 6.5 10 6.5zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* login button */}
            <button
              type="submit"
              disabled={submitting}
              className="cursor-pointer w-full bg-[#EC1617] text-white py-2 rounded-md hover:bg-red-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Memproses..." : "Login"}
            </button>

            {/* back button */}
            <button
              type="button"
              onClick={() => router.back()}
              className="cursor-pointer group w-full flex items-center justify-center gap-2 rounded-md border border-red-600 bg-black/20 px-3 py-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Kembali"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
              >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4A1 1 0 118.707 6.293L6.414 8.586H17a1 1 0 110 2H6.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
              </svg>
              <span className="font-medium">Kembali</span>
            </button>

            {/* separator */}
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex-grow border-t border-gray-400"></div>
              <span>Atau</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* whatsapp button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-600 rounded-md py-2 bg-[#01531c] text-white hover:bg-[#2a2a2a] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l1.87-1.87a1 1 0 011.01-.24c1.11.37 2.3.57 3.52.57a1 1 0 011 1v3.25a1 1 0 01-1 1C11.3 21.1 2.9 12.7 2.9 2.9a1 1 0 011-1h3.25a1 1 0 011 1c0 1.22.2 2.41.57 3.52a1 1 0 01-.24 1.01l-1.86 1.86z" />
              </svg>
              Login dengan Nomor Telepon
            </button>

            {/* error message placeholder */}
            {error ? (
              <p
                id="errorMessage"
                className="text-red-500 text-sm mt-2"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="absolute bottom-0 w-full">
        <div className="bg-[#EC1617] h-10 w-full"></div>
        <div className="bg-[#272727] h-20 w-full"></div>
      </footer>
    </>
  );
}
