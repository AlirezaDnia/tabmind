import { supabase } from "@/lib/supabase";

export async function createMemory(data: {
  title: string;
  content: string;
  source_url: string;
  summary?: string;
}) {
  const response = await supabase
    .from("memories")
    .insert({
      ...data,
    });

  console.log(response);

  return response;
}