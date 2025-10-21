"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CrewSidebar from "@/components/crewSidebar";
import CrewLeaderboard from "@/components/crewLeaderboard";
import MainCrewDashboard from "@/components/mainCrewDashboard";

export default function CrewDashboard() {
  const [active, setActive] = useState<"dashboard" | "leaderboard">("dashboard");
  const [ready, setReady] = useState(false);
  const router = useRouter();

  // One-time welcome gate: if not completed, redirect to /crew/welcome
  useEffect(() => {
    try {
      const done = typeof window !== "undefined" && localStorage.getItem("hpz_crew_welcome_done");
      if (!done) {
        router.replace("/crew/welcome?return=/crew/dashboard");
        return;
      }
    } finally {
      setReady(true);
    }
  }, [router]);

  return (
    <div className="flex  min-h-screen">
      {ready && (
        <>
          <CrewSidebar
            active={active}
            onSelect={(key) => {
              setActive(key);
            }}
          />
          <div className="flex-1 p-16">
            {active === "dashboard" ? <MainCrewDashboard /> : <CrewLeaderboard />}
          </div>
        </>
      )}
    </div>
  );
}
 

