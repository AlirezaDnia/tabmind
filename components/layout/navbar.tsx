import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6" />

          <span className="text-lg font-semibold">
            TabMind
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link href={'/login'} >
          <Button variant="ghost">
            Login
          </Button>
</Link>
          <Link href={'/test'} >
          <Button>
            Get Started
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}