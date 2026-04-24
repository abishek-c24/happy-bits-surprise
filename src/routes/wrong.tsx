import { createFileRoute, Link } from "@tanstack/react-router";
import kitten from "@/assets/wrong.png";

export const Route = createFileRoute("/wrong")({
  component: WrongPage,
});

function WrongPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1
        className="text-5xl md:text-7xl text-primary animate-wiggle"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        You're Wroooooong........
      </h1>
      <img
        src={kitten}
        alt="Angry"
        loading="lazy"
        width={400}
        height={400}
        className="mt-8 rounded-3xl shadow-[var(--shadow-party)] max-w-xs md:max-w-md animate-pop-in"
      />
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 bg-card border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
      >
        ← Try again
      </Link>
    </div>
  );
}