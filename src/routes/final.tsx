import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";

export const Route = createFileRoute("/final")({
  component: FinalPage,
});

function FinalPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <Balloons count={15} />
      <Confetti count={80} />
      <div className="relative z-10 max-w-2xl w-full text-center animate-pop-in">
        <div className="text-7xl mb-6">💫💖💫</div>
        <h1
          className="text-5xl md:text-7xl leading-tight"
          style={{
            fontFamily: "Pacifico, cursive",
            background: "var(--gradient-party)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          I'm Waiting.
          <br />
          See You Soon
        </h1>
        <p className="mt-8 text-xl text-muted-foreground">
          Until then… stay amazing 💖
        </p>
      </div>
    </div>
  );
}