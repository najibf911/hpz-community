"use client";
import Image from "next/image";
import instagram from "@/assets/Instagram.png";
import tiktok from "@/assets/Tik Tok.png";

export default function AdminAnalytic() {
	return (
		<div className="space-y-6 md:space-y-8">
			{/* Header */}
			<div className="flex items-start justify-between gap-4">
				<div>
					<h1 className="text-2xl md:text-[28px] font-bold">Analitik</h1>
					<p className="text-gray-500">Manage user's join request</p>
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

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
				{/* Engagement Rate Growth */}
				<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
					<div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
							<h2 className="text-base md:text-lg font-semibold">Engagement Rate Growth</h2>
						</div>
						<button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">7 days ▾</button>
					</div>
					<div className="px-4 md:px-6 pb-4">
						{/* simple SVG chart placeholder matching mock */}
						<div className="rounded-xl border border-gray-200 p-3">
							<svg viewBox="0 0 600 220" className="w-full h-48">
								<rect x="0" y="0" width="600" height="220" fill="white" />
								{/* grid lines */}
								{Array.from({ length: 5 }).map((_, i) => (
									<line key={i} x1="40" x2="580" y1={30 + i * 40} y2={30 + i * 40} stroke="#eee" />
								))}
								{/* axes */}
								<line x1="40" x2="40" y1="20" y2="200" stroke="#ccc" />
								<line x1="40" x2="580" y1="200" y2="200" stroke="#ccc" />
								{/* dashed avg line */}
								<polyline fill="none" strokeDasharray="6 6" stroke="#222" strokeWidth="2" points="40,170 120,130 200,160 280,140 360,150 440,160 520,170" />
								{/* purple line */}
								<polyline fill="none" stroke="#7C3AED" strokeWidth="3" points="40,180 120,140 200,90 280,120 360,130 440,110 520,140" />
								{/* red line */}
								<polyline fill="none" stroke="#EC1617" strokeWidth="3" points="40,150 120,160 200,130 280,140 360,120 440,130 520,120" />
								{/* orange line */}
								<polyline fill="none" stroke="#F59E0B" strokeWidth="3" points="40,180 120,170 200,160 280,150 360,150 440,160 520,155" />
								{/* day labels */}
												{['M','T','W','Th','F','S','S'].map((d, i) => (
													<text key={`${d}-${i}`} x={40 + i*80} y={215} fontSize="12" fill="#666">{d}</text>
								))}
							</svg>
						</div>

						{/* KPIs */}
						<div className="mt-4 grid grid-cols-2 gap-4 text-black">
							<div className="rounded-xl border border-gray-200 p-4 flex items-center gap-3">
								<Image className="h-10 w-10 rounded-lg" src={instagram} alt="Instagram" width={40} height={40} />
								<div>
									<div className="text-2xl font-bold">9.7%</div>
									<div className="text-xs text-gray-500">1027 interaksi</div>
									<div className="mt-1 grid grid-cols-2 gap-2 text-xs">
										<div>peak at <strong>10.1%</strong></div>
										<div>baseline <strong>5.1%</strong></div>
									</div>
								</div>
							</div>
							<div className="rounded-xl border border-gray-200 p-4 flex items-center gap-3">
								<Image className="h-10 w-10 rounded-lg" src={tiktok} alt="TikTok" width={40} height={40} />
								<div>
									<div className="text-2xl font-bold">9.7%</div>
									<div className="text-xs text-gray-500">1027 interaksi</div>
									<div className="mt-1 grid grid-cols-2 gap-2 text-xs">
										<div>peak at <strong>10.1%</strong></div>
										<div>baseline <strong>5.1%</strong></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Active Member Analysis */}
				<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
					<div className="px-4 md:px-6 pt-4 pb-3 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1f1f1f] text-white">▶</span>
							<h2 className="text-base md:text-lg font-semibold">Active Member Analysis</h2>
						</div>
						<button className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">7 days ▾</button>
					</div>
					<div className="px-4 md:px-6 pb-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
							{/* donut */}
							<div className="flex items-center justify-center">
								<svg viewBox="0 0 160 160" className="w-48 h-48">
									<circle cx="80" cy="80" r="60" fill="none" stroke="#eee" strokeWidth="20" />
									{/* active segment */}
									<circle cx="80" cy="80" r="60" fill="none" stroke="#EF4444" strokeWidth="20" strokeDasharray="70 400" strokeLinecap="round" transform="rotate(-90 80 80)" />
									<text x="80" y="80" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="700">211</text>
									<text x="80" y="100" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#666">Active Creator</text>
								</svg>
							</div>
							{/* legend */}
							<div>
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<span className="inline-block h-3 w-3 rounded-sm bg-red-500" />
										<span className="text-sm">Active Creator</span>
										<span className="ml-auto font-semibold">211</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="inline-block h-3 w-3 rounded-sm bg-gray-300" />
										<span className="text-sm">Less Active Creator</span>
										<span className="ml-auto font-semibold">1009</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
