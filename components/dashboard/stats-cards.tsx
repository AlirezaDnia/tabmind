import {
  Brain,
  Globe,
  Sparkles,
} from "lucide-react";

interface Props {
  totalMemories: number;

  totalDomains: number;
}

export function StatsCards({
  totalMemories,
  totalDomains,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-sm text-white/50">
              Total Memories
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {totalMemories}
            </h2>
          </div>

          <div className="rounded-xl bg-white/10 p-3">
            <Brain className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-sm text-white/50">
              Saved Websites
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {totalDomains}
            </h2>
          </div>

          <div className="rounded-xl bg-white/10 p-3">
            <Globe className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-sm text-white/50">
              AI Search
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Soon
            </h2>
          </div>

          <div className="rounded-xl bg-white/10 p-3">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}