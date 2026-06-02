import { NextResponse } from "next/server";
import { getQuestionCount } from "@/lib/notion";

export const revalidate = 300; // cache for 5 minutes

export async function GET() {
  try {
    const count = await getQuestionCount();
    return NextResponse.json({ count });
  } catch (err) {
    console.error("question-count error:", err);
    return NextResponse.json({ count: null });
  }
}
