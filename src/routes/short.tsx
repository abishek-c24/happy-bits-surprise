import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { PartyLinkButton } from "@/components/PartyButton";
import short from "@/assets/short.png";

export const Route = createFileRoute("/short")({
  component: ShortPage,
});

function ShortPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Confetti count={50} />
      <div className="relative z-10 max-w-2xl w-full text-center animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-10 shadow-[var(--shadow-party)] border-2 border-primary/30">
          <div className="text-6xl mb-4">🎂✨</div>
          <h1
            className="text-3xl md:text-4xl text-primary leading-tight mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            You're officially 19 now…
            <br />
            but still not taller 😌
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-3">
            At this point I think even your birthday candles are taller than you 😂
          </p>
          <p className="text-xl md:text-2xl font-semibold text-secondary mb-8">
            Stay small, it suits you 💖
          </p>
          <img src={short} alt="Short" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
          <div className="mt-6">
          <PartyLinkButton to="/wish">Next →</PartyLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}