import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import bully from "@/assets/bully.png";
import { PartyLinkButton } from "@/components/PartyButton";

export const Route = createFileRoute("/present-sad")({
  component: PresentSadPage,
});

function PresentSadPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Confetti count={20} />
      <div className="relative z-10 max-w-lg w-full text-center animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-10 shadow-[var(--shadow-party)] border-2 border-primary/30">
          <div className="text-7xl mb-4">🥲</div>
          <h1
            className="text-4xl md:text-6xl text-primary mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            I am Sad
          </h1>
          <img src={bully} alt="Bully" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
          <div className="flex justify-center mt-6">
            <PartyLinkButton to="/magic-corner">Next →</PartyLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}