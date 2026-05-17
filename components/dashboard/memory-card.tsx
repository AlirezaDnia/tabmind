import { ExternalLink }
from "lucide-react";

import { Memory }
from "@/types/memory";

interface Props {
  memory: Memory;
}

export function MemoryCard({
  memory,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      
      <h2 className="line-clamp-1 text-xl font-semibold text-white">
        {memory.title}
      </h2>

      <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/60">
        {memory.content}
      </p>

      <a
        href={memory.source_url}
        target="_blank"
        className="mt-6 flex items-center gap-2 text-sm text-blue-400"
      >
        Open Source

        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}