import { NextResponse } from "next/server";
import { getResumeData } from "@/lib/mongodb";

export async function GET() {
  try {
    const data = await getResumeData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching resume data:", error);
    return NextResponse.json(
      { error: "Failed to fetch resume data" },
      { status: 500 },
    );
  }
}

