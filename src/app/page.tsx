import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-16">
            Welcome to TereSphere Blog
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Share your thoughts, connect with others, and explore amazing
            content from our community.
          </p>

          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <a
              href="/register"
              className="rounded-full bg-foreground text-background px-8 py-4 text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/posts"
              className="rounded-full border border-foreground px-8 py-4 text-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              Browse Posts
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
