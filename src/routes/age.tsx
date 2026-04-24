import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import R from "@/assets/R.jpg";

export const Route = createFileRoute("/age")({
  component: AgePage,
});

function AgePage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <Confetti count={40} />
      <div className="relative z-10 max-w-lg w-full text-center animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-10 shadow-[var(--shadow-party)] border-2 border-accent/30">
          <div className="text-6xl mb-3">🎉</div>
          <h1
            className="text-4xl md:text-5xl text-primary mb-8"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Is your age 19?
          </h1>
          <img src={R} alt="R" />
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate({ to: "/short" })}
              className="rounded-full px-10 py-4 text-xl font-bold bg-secondary text-secondary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Yes ✨
            </button>
            <button
              onClick={() => navigate({ to: "/liar" })}
              className="rounded-full px-10 py-4 text-xl font-bold bg-card border-2 border-primary text-primary hover:scale-105 active:scale-95 transition-transform"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}