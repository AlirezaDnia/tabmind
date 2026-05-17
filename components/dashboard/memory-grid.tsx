import { Memory } from "@/types/memory";

import { MemoryCard }
from "@/components/dashboard/memory-card";

export function MemoryGrid({
  memories,
}: {
  memories: Memory[];
}) {
  if (!memories.length) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-3xl border border-dashed border-white/10">
        
        <div className="text-center">
          
          <h2 className="text-2xl font-semibold text-white">
            No memories yet
          </h2>

          <p className="mt-2 text-white/50">
            Save something from the web
            using the extension.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {memories.map((memory) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
        />
      ))}
    </div>
  );
}