import {
  Search,
  Shield,
  Sparkles,
} from "lucide-react";

import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
      
      <Card className="border-white/10 bg-white/5 p-6 text-white">
        <Search className="mb-4 h-8 w-8" />

        <h3 className="text-xl font-semibold">
          Semantic Search
        </h3>

        <p className="mt-3 text-white/60">
          Search by meaning, not keywords.
        </p>
      </Card>

      <Card className="border-white/10 bg-white/5 p-6 text-white">
        <Sparkles className="mb-4 h-8 w-8" />

        <h3 className="text-xl font-semibold">
          AI Summaries
        </h3>

        <p className="mt-3 text-white/60">
          Understand content instantly.
        </p>
      </Card>

      <Card className="border-white/10 bg-white/5 p-6 text-white">
        <Shield className="mb-4 h-8 w-8" />

        <h3 className="text-xl font-semibold">
          Privacy First
        </h3>

        <p className="mt-3 text-white/60">
          Your data stays protected.
        </p>
      </Card>
    </section>
  );
}