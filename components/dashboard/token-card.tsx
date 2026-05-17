"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Copy,
  Key,
} from "lucide-react";

import { toast }
from "sonner";

import { supabase }
from "@/lib/supabase";

import { Button }
from "@/components/ui/button";

export function TokenCard() {
  const [token, setToken]
    = useState("");

  const [loading, setLoading]
    = useState(false);

  async function loadToken() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } =
      await supabase
        .from("api_tokens")
        .select("token")
        .eq("user_id", user.id)
        .maybeSingle();

    if (error) {
      console.error(error);

      return;
    }

    if (data?.token) {
      setToken(data.token);
    }
  }

  async function generateToken() {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const newToken =
        crypto.randomUUID();

      const { error } =
        await supabase
          .from("api_tokens")
          .upsert(
            {
              user_id: user.id,
              token: newToken,
            },
            {
              onConflict: "user_id",
            }
          );

      if (error) {
        toast.error(
          error.message
        );

        return;
      }

      setToken(newToken);

      toast.success(
        "Token generated"
      );
    } catch {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyToken() {
    await navigator.clipboard.writeText(
      token
    );

    toast.success(
      "Token copied"
    );
  }

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      
      <div className="flex items-start justify-between">
        
        <div className="flex items-start gap-4">
          
          <div className="rounded-xl bg-white/10 p-3">
            <Key className="h-5 w-5 text-white" />
          </div>

          <div>
            
            <h2 className="text-lg font-semibold text-white">
              Extension Token
            </h2>

            <p className="mt-1 text-sm text-white/50">
              Connect your browser extension securely.
            </p>

            {token && (
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
                
                <p className="break-all font-mono text-sm text-white/80">
                  {token}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          
          {token && (
            <Button
              variant="outline"
              onClick={copyToken}
            >
              <Copy className="mr-2 h-4 w-4" />

              Copy
            </Button>
          )}

          <Button
            disabled={loading}
            onClick={generateToken}
          >
            {loading
              ? "Generating..."
              : token
              ? "Regenerate"
              : "Generate"}
          </Button>
        </div>
      </div>
    </div>
  );
}