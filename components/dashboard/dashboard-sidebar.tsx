"use client";

import {
  Brain,
  Home,
  Search,
  Settings,
  LogOut,
} from "lucide-react";

import { signOut } from "@/services/auth.service";

export function DashboardSidebar() {
  async function handleLogout() {
    await signOut();

    window.location.href = "/login";
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl">
      
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        
        <Brain className="h-7 w-7 text-white" />

        <div>
          <h2 className="text-lg font-semibold text-white">
            TabMind
          </h2>

          <p className="text-sm text-white/40">
            AI Memory
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        
        <button className="flex w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/15">
          <Home className="h-5 w-5" />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/60 transition hover:bg-white/10 hover:text-white">
          <Search className="h-5 w-5" />
          Search
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/60 transition hover:bg-white/10 hover:text-white">
          <Settings className="h-5 w-5" />
          Settings
        </button>
      </nav>

      <div className="border-t border-white/10 p-4">
        
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}