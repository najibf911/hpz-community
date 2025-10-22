"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getCrewUsers,
  saveCrewUsers,
  DEFAULT_ADMIN,
  type CrewUser,
  getSession,
} from "@/lib/auth";

export default function AdminAccountsPage() {
  const router = useRouter();
  const [crew, setCrew] = useState<CrewUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Guard: only admin can see this page
  useEffect(() => {
    const sess = getSession();
    if (!sess || sess.role !== "admin") {
      router.replace("/admin/login");
      return;
    }
    try {
      setCrew(getCrewUsers());
    } catch {
      setError("Gagal memuat data akun.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const crewCount = crew.length;
  const maskedAdminPass = useMemo(() => DEFAULT_ADMIN.password.replace(/./g, "•"), []);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ admin: DEFAULT_ADMIN, crew }, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hpz-accounts.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const clearCrew = () => {
    if (!confirm("Hapus semua akun crew di browser ini?")) return;
    saveCrewUsers([]);
    setCrew([]);
  };

  if (loading) {
    return (
      <section className="p-6">
        <p>Memuat akun…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-6">
        <p className="text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Akun Admin & Crew</h1>
        <p className="text-gray-600">Data disimpan secara lokal di browser (demo only).</p>
      </div>

      {/* Admin card */}
      <div className="rounded-lg border bg-white shadow-sm mb-6 overflow-hidden">
        <div className="border-b px-4 py-3 font-semibold">Admin</div>
        <div className="p-4 grid gap-2 text-sm">
          <div>
            <span className="text-gray-600">Email: </span>
            <span className="font-medium">{DEFAULT_ADMIN.email}</span>
          </div>
          <div>
            <span className="text-gray-600">Password: </span>
            <span className="font-medium">{maskedAdminPass}</span>
          </div>
        </div>
      </div>

      {/* Crew list */}
      <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="font-semibold">Crew ({crewCount})</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCrew(getCrewUsers())}
              className="rounded border px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={exportJson}
              className="rounded border px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={clearCrew}
              className="rounded border px-3 py-1.5 text-sm text-red-700 border-red-300 hover:bg-red-50"
            >
              Clear Crew
            </button>
          </div>
        </div>

        {crewCount === 0 ? (
          <div className="p-4 text-sm text-gray-600">Belum ada akun crew terdaftar.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">No. HP</th>
                  <th className="px-4 py-2">Domisili</th>
                </tr>
              </thead>
              <tbody>
                {crew.map((u, idx) => (
                  <tr key={`${u.email}-${idx}`} className="border-t">
                    <td className="px-4 py-2">{u.fullName || u.username || "-"}</td>
                    <td className="px-4 py-2 font-mono">{u.email}</td>
                    <td className="px-4 py-2">{u.phoneNumber || "-"}</td>
                    <td className="px-4 py-2">{u.domisili || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
