"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Memory } from "@/types/memory";
import { useAuth } from "@/store/auth-context";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { MemoryGrid } from "@/components/dashboard/memory-grid";
import { TokenCard } from "@/components/dashboard/token-card";

export default function DashboardPage() {
    const router = useRouter();

    const { user, loading } = useAuth();

    const [search, setSearch] = useState("");

    const [memories, setMemories] = useState<Memory[]>([]);

    async function loadMemories() {
        if (!user) return;

        const { data } = await supabase
            .from("memories")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", {
                ascending: false,
            });

        setMemories(data || []);
    }

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading]);

    useEffect(() => {
        loadMemories();
    }, [user]);

    const filteredMemories = memories.filter((memory) =>
        `${memory.title}
       ${memory.content}`
            .toLowerCase()
            .includes(search.toLowerCase()),
    );

    const uniqueDomains = new Set(
        memories.map((memory) => {
            try {
                return new URL(memory.source_url).hostname;
            } catch {
                return "unknown";
            }
        }),
    );

    if (loading || !user) {
        return null;
    }

    return (
        <main className="flex min-h-screen bg-black">
            <DashboardSidebar />

            <section className="flex-1">
                <DashboardHeader search={search} onSearchChange={setSearch} />

                <div className="space-y-8 p-8">
                    <StatsCards
                        totalMemories={memories.length}
                        totalDomains={uniqueDomains.size}
                    />
                    <TokenCard />
                    <MemoryGrid memories={filteredMemories} />
                </div>
            </section>
        </main>
    );
}
