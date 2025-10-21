"use client";
import { useState } from "react";
import CrewSidebar from "@/components/crewSidebar";
import CrewLeaderboard from "@/components/crewLeaderboard";
import MainCrewDashboard from "@/components/mainCrewDashboard";

export default function CrewDashboard() {
  const [active, setActive] = useState<"dashboard" | "leaderboard">("dashboard");

  return (
    <div className="flex  min-h-screen">
      <CrewSidebar
        active={active}
        onSelect={(key) => {
          setActive(key);
        }}
      />
      <div className="flex-1 p-16">
        {active === "dashboard" ? <MainCrewDashboard /> : <CrewLeaderboard />}
      </div>
    </div>
  );
}
 

