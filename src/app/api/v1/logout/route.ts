import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Make request to authentication service
    const response = await fetch(`${process.env.API_BASE_URL}/api/v1/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Logout successful" },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "Logout failed" }, { status: 400 });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
