"use client";
import { useState } from "react";
import AdminSidebar from "@/components/adminSidebar";
import MainAdminDashboard from "@/components/mainAdminDashboard";
import AdminCrew from "@/components/adminCrew";
import AdminAnalytic from "@/components/adminAnalytic";
import AdminEvent from "@/components/adminEvent";

export default function AdminDashboard() {
  const [active, setActive] = useState<"dashboard" | "users" | "events" | "analytics">("dashboard");

  return (
    <div className="flex  min-h-screen">
      <AdminSidebar
        active={active}
        onSelect={(key) => {
          setActive(key);
        }}
      />
      <div className="flex-1 p-16">
        {active === "dashboard" ? <MainAdminDashboard /> : active === "users" ? <AdminCrew /> : active === "events" ? <AdminEvent /> : active === "analytics" ? <AdminAnalytic /> : ""}
      </div>
    </div>
  );
}
 

