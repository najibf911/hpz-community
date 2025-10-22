"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import instagram from "@/assets/Instagram.png";
import tiktok from "@/assets/Tik Tok.png";

type InsightRow = { rank: number; username: string; platform: "ig" | "tt"; engagement: string; score: number };
const insights: InsightRow[] = [
	{ rank: 1, username: "@adityapramana", platform: "ig", engagement: "9.7%", score: 50 },
	{ rank: 2, username: "@adityaprama", platform: "ig", engagement: "8.4%", score: 50 },
	{ rank: 3, username: "@adityaprama", platform: "tt", engagement: "8.9%", score: 49 },
];

type PastRow = { name: string; period: string; participants: number; contents: number; status: "Completed" | "Canceled" };
const pastEvents: PastRow[] = [
	{ name: "Ride with Pride Challenge", period: "1 Agustus - 2 september 2025", participants: 145, contents: 145, status: "Completed" },
	{ name: "HPZ Modifikasi Mingguan", period: "10 Juli – 31 Juli 2025", participants: 364, contents: 364, status: "Canceled" },
	{ name: "Touring Seru Bareng HPZ", period: "1 Juni – 30 Juni 2025", participants: 244, contents: 243, status: "Completed" },
	{ name: "Creative Reels Contest", period: "15 Mei – 15 Juni 2025", participants: 254, contents: 254, status: "Completed" },
	{ name: "#MyRideMyStyle Challenge", period: "1 April – 30 April 2025", participants: 352, contents: 352, status: "Canceled" },
	{ name: "HPZ Short Video Contest", period: "1 Maret – 31 Maret 2025", participants: 334, contents: 333, status: "Completed" },
];

export default function AdminEvent() {
	const [showCreate, setShowCreate] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const firstFieldRef = useRef<HTMLInputElement | null>(null);
	const editFirstFieldRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		if (showCreate) {
			// focus first field when modal opens
			setTimeout(() => firstFieldRef.current?.focus(), 0);
		}
		if (showEdit) {
			setTimeout(() => editFirstFieldRef.current?.focus(), 0);
		}
	}, [showCreate, showEdit]);
	return (
		<div className="space-y-6 md:space-y-8 ">
			{/* Header */}
			<div className="flex items-start justify-between gap-4">
				<div>
					<h1 className="text-2xl md:text-[28px] font-bold">Event</h1>
					<p className="text-gray-500">Manage user&aposs join request</p>
				</div>
				<div className="hidden md:block w-72">
					<div className="relative">
						<input
							type="search"
							placeholder="Search everything"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-9 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
						/>
						<svg aria-hidden viewBox="0 0 24 24" className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.52 3.5 10.5 3.5S5 6.01 5 9.5 7.48 15.5 10.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM10.5 14C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>
					</div>
				</div>
			</div>

			{/* Top: Ongoing + Insight */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
				{/* Ongoing Events */}
				<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
					<div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
							<h2 className="text-base md:text-lg font-semibold">Ongoing Events</h2>
						</div>
												<button
													type="button"
													onClick={() => setShowCreate(true)}
													className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
													aria-label="Add"
												>
													+
												</button>
							</div>

							{/* Create Event Modal */}
							{showCreate && (
								<div
									className="fixed inset-0 z-50 flex items-center justify-center p-4"
									role="dialog"
									aria-modal="true"
								>
									<div className="absolute inset-0 bg-black/50" onClick={() => setShowCreate(false)} aria-hidden />
									<div className="relative z-10 w-full max-w-xl rounded-2xl bg-white text-black shadow-xl">
										<form
											className="p-6 md:p-8 space-y-4"
											onSubmit={(e) => {
												e.preventDefault();
												const data = new FormData(e.currentTarget);
												const name = String(data.get("name") || "").trim();
												const desc = String(data.get("description") || "").trim();
												const start = String(data.get("startDate") || "").trim();
												if (!name || !desc || !start) return;
												// Placeholder: handle create event
												alert(`Acara dibuat: ${name}`);
												setShowCreate(false);
											}}
										>
											<div className="flex items-start justify-between">
												<div>
													<h3 className="text-2xl font-bold">Tambahkan Acara</h3>
													<p className="text-gray-600 mt-1">Masukkan data acara</p>
												</div>
												<button
													type="button"
													onClick={() => setShowCreate(false)}
													className="cursor-pointer rounded-md p-2 text-gray-500 hover:bg-gray-100"
													aria-label="Tutup"
												>
													✕
												</button>
											</div>

											<div className="pt-2 space-y-4">
												<div>
													<label htmlFor="name" className="block font-semibold">Nama Acara <span className="text-red-500">*</span></label>
													<input
														ref={firstFieldRef}
														id="name"
														name="name"
														type="text"
														placeholder="Placeholder"
														required
														className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
													/>
												</div>

												<div>
													<label htmlFor="description" className="block font-semibold">Deskripsi Acara <span className="text-red-500">*</span></label>
													<input
														id="description"
														name="description"
														type="text"
														placeholder="Placeholder"
														required
														className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
													/>
												</div>

												<div>
													<label htmlFor="startDate" className="block font-semibold">Tanggal Mulai <span className="text-red-500">*</span></label>
													<input
														id="startDate"
														name="startDate"
														type="date"
														placeholder="Placeholder"
														required
														className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
													/>
												</div>
											</div>

											<div className="pt-4">
												<button
													type="submit"
													className="w-full rounded-xl bg-[#EC1617] py-3 text-white font-medium hover:bg-red-700"
												>
													Tambah acara
												</button>
											</div>
										</form>
									</div>
								</div>
							)}

					<div className="px-4 md:px-6 pb-4">
						<div className="rounded-xl border border-gray-200 p-4">
							<div className="flex items-start justify-between">
								<div>
									<h3 className="font-semibold">Motor Pride of the Week</h3>
									<p className="text-xs text-gray-500">3 - 10 Oktober 2025</p>
								</div>
								<button
									type="button"
									onClick={() => setShowEdit(true)}
									className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100"
									aria-label="More"
								>
									⋯
								</button>
							</div>
							<p className="mt-2 text-sm text-gray-700">Buat konten modifikasi motor paling kreatif. Konten terbaik akan tampil di Weekly Best Content dan dapat hadiah eksklusif HPZ</p>
							<div className="mt-3 grid grid-cols-2 gap-3 text-xs text-gray-600">
								<div>Peserta: <strong>128</strong></div>
								<div>Konten masuk: <strong>245</strong></div>
								<div className="col-span-2">Status: <span className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-2.5 py-0.5 text-green-700">Sedang Berjalan</span></div>
							</div>
							<div className="mt-3">
								<button className="cursor-pointer inline-flex items-center gap-2 rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs text-red-700 hover:bg-red-100" aria-label="Delete">🗑 Hapus</button>
							</div>
						</div>
					</div>
				</div>

				{/* Event Insight */}
				<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
					<div className="px-4 md:px-6 pt-4 pb-3 flex items-center gap-2">
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
						<h2 className="text-base md:text-lg font-semibold">Event Insight</h2>
					</div>
					<div className="px-4 md:px-6 pb-4">
						<div className="overflow-x-auto rounded-xl border border-gray-200">
							<table className="w-full text-left text-sm">
								<thead className="bg-gray-50 text-gray-600">
									<tr>
										<th className="py-2 pl-3">Rank</th>
										<th className="py-2">Username</th>
										<th className="py-2">Engagement</th>
										<th className="py-2 pr-3 text-right">Score</th>
									</tr>
								</thead>
								<tbody>
									{insights.map((r) => (
										<tr key={r.rank} className="border-t border-gray-100">
											<td className="py-2 pl-3">{r.rank}</td>
											<td className="py-2">
												<span className="inline-flex items-center gap-2 text-gray-700">
													<Image src={r.platform === "ig" ? instagram : tiktok} alt={r.platform === "ig" ? "Instagram" : "TikTok"} width={12} height={12} />
													{r.username}
												</span>
											</td>
											<td className="py-2">{r.engagement}</td>
											<td className="py-2 pr-3 text-right">{r.score}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{/* Past Events */}
			<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden text-black">
				<div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
						<h2 className="text-base md:text-lg font-semibold">Past Events</h2>
					</div>
					<button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
						Filter <span aria-hidden>▾</span>
					</button>
				</div>
				<div className="px-4 md:px-6 pb-4">
					<div className="overflow-x-auto rounded-xl border border-gray-200">
						<table className="w-full text-left text-sm">
							<thead className="bg-gray-50 text-gray-600">
								<tr>
									<th className="py-2 pl-3">Nama Acara</th>
									<th className="py-2">Periode</th>
									<th className="py-2">Jumlah Peserta</th>
									<th className="py-2">Jumlah Konten Masuk</th>
									<th className="py-2">Status</th>
									<th className="py-2 pr-3 text-right">Aksi</th>
								</tr>
							</thead>
							<tbody>
								{pastEvents.map((p, idx) => (
									<tr key={idx} className="border-t border-gray-100">
										<td className="py-2 pl-3">{p.name}</td>
										<td className="py-2">{p.period}</td>
										<td className="py-2">{p.participants}</td>
										<td className="py-2">{p.contents}</td>
										<td className="py-2">
											<span className={[
												"inline-flex items-center gap-2",
												p.status === "Completed" ? "text-green-600" : "text-red-600",
											].join(" ")}
											>
												{p.status}
												<span className={["inline-block h-2.5 w-2.5 rounded-full", p.status === "Completed" ? "bg-green-500" : "bg-red-500"].join(" ")} />
											</span>
										</td>
										<td className="py-2 pr-3 text-right">
											<button className="cursor-pointer inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50" aria-label="Open">📄</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* Edit Event Modal */}
			{showEdit && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
					<div className="absolute inset-0 bg-black/50" onClick={() => setShowEdit(false)} aria-hidden />
					<div className="relative z-10 w-full max-w-xl rounded-2xl bg-white text-black shadow-xl">
						<form
							className="p-6 md:p-8 space-y-4"
							onSubmit={(e) => {
								e.preventDefault();
								const data = new FormData(e.currentTarget);
								const name = String(data.get("name") || "").trim();
								const desc = String(data.get("description") || "").trim();
								const start = String(data.get("startDate") || "").trim();
								if (!name || !desc || !start) return;
								alert(`Acara diperbarui: ${name}`);
								setShowEdit(false);
							}}
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="text-2xl font-bold">Edit Acara</h3>
									<p className="text-gray-600 mt-1">Edit  data acara</p>
								</div>
								<button
									type="button"
									onClick={() => setShowEdit(false)}
									className="cursor-pointer rounded-md p-2 text-gray-500 hover:bg-gray-100"
									aria-label="Tutup"
								>
									✕
								</button>
							</div>

							<div className="pt-2 space-y-4">
								<div>
									<label htmlFor="name" className="block font-semibold">Nama Acara <span className="text-red-500">*</span></label>
									<input
										ref={editFirstFieldRef}
										id="name"
										name="name"
										type="text"
										defaultValue="Motor Pride of the Week"
										placeholder="Placeholder"
										required
										className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
									/>
								</div>

								<div>
									<label htmlFor="description" className="block font-semibold">Deskripsi Acara <span className="text-red-500">*</span></label>
									<input
										id="description"
										name="description"
										type="text"
										defaultValue="Buat konten modifikasi motor paling kreatif. Konten terbaik akan tampil di Weekly Best Content dan dapat hadiah eksklusif HPZ"
										placeholder="Placeholder"
										required
										className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
									/>
								</div>

								<div>
									<label htmlFor="startDate" className="block font-semibold">Tanggal Mulai <span className="text-red-500">*</span></label>
									<input
										id="startDate"
										name="startDate"
										type="date"
										defaultValue="2025-10-03"
										placeholder="Placeholder"
										required
										className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
									/>
								</div>
							</div>

							<div className="pt-4">
								<button type="submit" className="w-full rounded-xl bg-[#EC1617] py-3 text-white font-medium hover:bg-red-700">
									Simpan
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
