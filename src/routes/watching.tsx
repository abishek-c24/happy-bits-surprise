import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { PartyLinkButton } from "@/components/PartyButton";
import watch from "@/assets/watch.png";

export const Route = createFileRoute("/watching")({
  component: WatchingPage,
});

function WatchingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <Confetti count={30} />
      <div className="relative z-10 max-w-lg w-full text-center animate-pop-in">
        <div className="text-7xl mb-4">👀</div>
        <h1
          className="text-5xl md:text-7xl text-primary mb-8"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          I'm watching you
        </h1>
        <img src={watch} alt="Watch" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
        <div className="mt-6">
          <PartyLinkButton to="/present">Next →</PartyLinkButton>
        </div>
      </div>
    </div>
  );
}