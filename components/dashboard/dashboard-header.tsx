"use client";

import { Search }
from "lucide-react";

import { Input }
from "@/components/ui/input";

import {
  Avatar,
  AvatarFallback,
}
from "@/components/ui/avatar";

import { useAuth }
from "@/store/auth-context";

interface Props {
  search: string;

  onSearchChange: (
    value: string
  ) => void;
}

export function DashboardHeader({
  search,
  onSearchChange,
}: Props) {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-white/10 px-8 py-6">
      
      <div>
        <h1 className="text-3xl font-bold text-white">
          Your Memories
        </h1>

        <p className="mt-1 text-white/50">
          Welcome back, {user?.email}
        </p>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="relative">
          
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

          <Input
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search memories..."
            className="w-72 border-white/10 bg-white/5 pl-10 text-white"
          />
        </div>

        <Avatar>
          <AvatarFallback>
            {user?.email?.[0]
              ?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}