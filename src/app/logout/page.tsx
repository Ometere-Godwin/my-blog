"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch("/api/v1/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Logout failed");
        }

        // Redirect to home page after successful logout
        router.push("/");
      } catch (error) {
        console.error("Logout failed:", error);
        // Still redirect to home page even if logout fails
        router.push("/");
      }
    };

    handleLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Logging out...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-foreground mx-auto"></div>
      </div>
    </div>
  );
}
