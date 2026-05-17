import { NextResponse }
from "next/server";

import { createClient }
from "@supabase/supabase-js";

const supabase = createClient(
  process.env
    .NEXT_PUBLIC_SUPABASE_URL!,
    
  process.env
    .SUPABASE_SERVICE_ROLE_KEY!
);

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin":
          "*",

        "Access-Control-Allow-Methods":
          "POST, OPTIONS",

        "Access-Control-Allow-Headers":
          "Content-Type, Authorization",
      },
    }
  );
}

export async function POST(
  request: Request
) {
  try {
    const authHeader =
      request.headers.get(
        "authorization"
      );

    if (!authHeader) {
      return NextResponse.json(
        {
          error:
            "Missing token",
        },
        { status: 401 }
      );
    }

    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );

    const { data: tokenData } =
      await supabase
        .from("api_tokens")
        .select("*")
        .eq("token", token)
        .maybeSingle();

    if (!tokenData) {
      return NextResponse.json(
        {
          error:
            "Invalid token",
        },
        { status: 401 }
      );
    }

    const body =
      await request.json();

    const {
      title,
      content,
      source_url,
    } = body;

    const { data, error } =
      await supabase
        .from("memories")
        .insert({
          title,
          content,
          source_url,
          user_id:
            tokenData.user_id,
        })
        .select()
        .single();

    if (error) {
      return NextResponse.json(
        {
          error:
            error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      data,
      {
        headers: {
          "Access-Control-Allow-Origin":
            "*",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      { status: 500 }
    );
  }
}