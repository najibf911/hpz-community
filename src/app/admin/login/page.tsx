"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loginBg from "@/assets/loginBg.png";
import { DEFAULT_ADMIN, setSession } from "@/lib/auth";

export default function AdminLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    // Simple client-side admin check
    const isValid =
      email.toLowerCase() === DEFAULT_ADMIN.email.toLowerCase() &&
      password === DEFAULT_ADMIN.password;

    if (!isValid) {
      setError("Email atau password salah.");
      setSubmitting(false);
      return;
    }

    setSession({ role: "admin", email });
    router.replace("/admin/dashboard");
  };

  return (
    <>
      {/* background image */}
      <div className="absolute inset-0 -z-10 mb-20">
        <Image
          src={loginBg}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <section className="relative flex flex-col items-center justify-center flex-grow py-10 lg:py-18 overflow-hidden">
        {/* heading */}
        <h1 className="text-3xl font-bold italic mb-2">Admin Login</h1>
        <p className="font-semibold text-white mb-8">
          Masukkan kredensial admin Anda untuk masuk
        </p>

        {/* form card */}
        <div className="bg-[#454545]/90 backdrop-blur p-8 rounded-md shadow-lg w-full max-w-sm">
          <form id="loginForm" className="space-y-5" onSubmit={onSubmit}>
            {/* email */}
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email Admin <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="admin@domain.com"
                required
                autoComplete="username"
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
                  autoComplete="current-password"
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
              {submitting ? "Memproses..." : "Masuk Admin"}
            </button>

            {/* error message */}
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
        {/* footer */}
        <footer className="fixed bottom-0 w-full">
          <div className="bg-[#EC1617] h-10 w-full"></div>
          <div className="bg-[#272727] h-20 w-full"></div>
        </footer>
      </section>
    </>
  );
}
