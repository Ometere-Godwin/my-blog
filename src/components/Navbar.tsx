"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogIn, FiLogOut, FiUserPlus, FiFileText } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-foreground text-background p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          TereSphere Blog
        </Link>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/register"
            className={`px-4 py-2 rounded-full ${
              pathname === "/register"
                ? "bg-background/80 text-foreground font-bold"
                : "bg-background text-foreground hover:bg-opacity-90"
            } transition-colors flex items-center gap-2`}
          >
            <FiUserPlus className="text-lg" />
            Register
          </Link>
          <Link
            href="/login"
            className={`px-4 py-2 rounded-full ${
              pathname === "/login"
                ? "bg-background/80 text-foreground font-bold"
                : "bg-background text-foreground hover:bg-opacity-90"
            } transition-colors flex items-center gap-2`}
          >
            <FiLogIn className="text-lg" />
            Login
          </Link>
          <Link
            href="/logout"
            className={`px-4 py-2 rounded-full ${
              pathname === "/logout"
                ? "bg-background/30 font-bold"
                : "border border-background hover:bg-background/10"
            } transition-colors flex items-center gap-2`}
          >
            <FiLogOut className="text-lg" />
            Logout
          </Link>
          <Link
            href="/posts"
            className={`px-4 py-2 rounded-full ${
              pathname === "/posts"
                ? "bg-background/30 font-bold"
                : "border border-background hover:bg-background/10"
            } transition-colors flex items-center gap-2`}
          >
            <FiFileText className="text-lg" />
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
