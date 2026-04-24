import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import cool from "@/assets/cool.png";
import { PartyLinkButton } from "@/components/PartyButton";

export const Route = createFileRoute("/present-happy")({
  component: PresentHappyPage,
});

function PresentHappyPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Balloons count={10} />
      <Confetti count={50} />
      <div className="relative z-10 max-w-xl w-full text-center animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-10 shadow-[var(--shadow-party)] border-2 border-secondary/30">
          <div className="text-6xl mb-4">😏💖</div>
          <h1
            className="text-3xl md:text-4xl text-primary mb-6 leading-tight"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            I knew before you even clicked the Yes button…
            <br />
            anyway, Thank you 💕
          </h1>
          <img src={cool} alt="Cool" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
          <div className="flex justify-center mt-6">
            <PartyLinkButton to="/magic-corner">Next →</PartyLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}