import Image, { type StaticImageData } from "next/image";
import logo from "@/assets/logo.png";
import iconDashboard from "@/assets/icon/material-symbols_dashboard.svg";
import iconUser from "@/assets/icon/material-symbols_person-check-outline.svg";
import iconEvent from "@/assets/icon/material-symbols_event-note-outline-sharp.svg";
import iconAnalytics from "@/assets/icon/material-symbols_analytics-outline-sharp.svg";

type SidebarKey = "dashboard" | "users" | "events" | "analytics";

const navItems: { key: SidebarKey; label: string; icon: StaticImageData }[] = [
  { key: "dashboard", label: "Dashboard", icon: iconDashboard },
  { key: "users", label: "Pengguna", icon: iconUser },
  { key: "events", label: "Event", icon: iconEvent },
  { key: "analytics", label: "Analitik", icon: iconAnalytics },
];

export default function AdminSidebar({
  active = "dashboard",
  onSelect,
}: {
  active?: SidebarKey;
  onSelect?: (key: SidebarKey) => void;
}) {
  return (
    <aside className="w-64 bg-[#1f1f1f] text-white min-h-screen flex-shrink-0 border-r border-white/10">
      <div className="py-6 px-5">
        <a href="/" aria-label="HPZ Home" className="inline-flex items-center gap-3">
          <Image src={logo} alt="HPZ Logo" className="h-auto w-28" />
        </a>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-5" />

      <nav className="mt-4 px-3 pb-6">
        <ul className="space-y-1">
          {navItems.map(({ key, label, icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => onSelect?.(key)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative w-full text-left flex items-center gap-3 rounded-lg px-3 py-2.5",
                    "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70",
                    isActive
                      ? "bg-white/10 text-white shadow-inner ring-1 ring-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-red-500"
                    />
                  )}

                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Image alt={`${label} Icon`} src={icon} width={18} height={18} />
                  </span>

                  <span className="text-sm font-medium">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
