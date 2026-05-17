"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import {
  signIn,
  signUp,
} from "@/services/auth.service";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleAuth() {
    try {
      setLoading(true);

      let response;

      if (isLogin) {
        response = await signIn(
          email,
          password
        );
      } else {
        response = await signUp(
          email,
          password
        );
      }

      if (response.error) {
        toast.error(response.error.message);

        return;
      }

      toast.success(
        isLogin
          ? "Logged in successfully"
          : "Account created"
      );

      router.push("/dashboard");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        
        <h1 className="text-3xl font-bold">
          {isLogin
            ? "Welcome back"
            : "Create account"}
        </h1>

        <p className="mt-2 text-white/60">
          Your AI memory workspace.
        </p>

        <div className="mt-8 space-y-4">
          
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            className="w-full"
            disabled={loading}
            onClick={handleAuth}
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create account"}
          </Button>
        </div>

        <button
          className="mt-6 text-sm text-white/60"
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >
          {isLogin
            ? "Create new account"
            : "Already have an account?"}
        </button>
      </div>
    </main>
  );
}