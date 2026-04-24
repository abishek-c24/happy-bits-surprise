import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import duck from "@/assets/duck.png";

export const Route = createFileRoute("/present")({
  component: PresentPage,
});

function PresentPage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Confetti count={40} />
      <div className="relative z-10 max-w-lg w-full text-center animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-10 shadow-[var(--shadow-party)] border-2 border-accent/30">
          <div className="text-6xl mb-3">🎁</div>
          <h1
            className="text-3xl md:text-4xl text-primary mb-6 leading-tight"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Did you like your virtual present?
          </h1>
          <img src={duck} alt="Duck" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => navigate({ to: "/present-happy" })}
              className="rounded-full px-10 py-4 text-xl font-bold bg-secondary text-secondary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Yes 💖
            </button>
            <button
              onClick={() => navigate({ to: "/present-sad" })}
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