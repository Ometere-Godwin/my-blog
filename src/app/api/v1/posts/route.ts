import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Make request to your backend service
    const response = await fetch(`${process.env.API_BASE_URL}/api/v1/post`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: `Failed to fetch posts: ${errorMessage}` },
      { status: 500 }
    );
  }
}
