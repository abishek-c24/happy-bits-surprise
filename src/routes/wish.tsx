import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import { PartyLinkButton } from "@/components/PartyButton";
import perumalae from "@/assets/perumalae.png";

export const Route = createFileRoute("/wish")({
  component: WishPage,
});

function WishPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Balloons count={8} />
      <Confetti count={40} />
      <div className="relative z-10 max-w-2xl w-full animate-pop-in">
        <div className="rounded-3xl bg-card/95 backdrop-blur-md p-8 md:p-12 shadow-[var(--shadow-party)] border-2 border-primary/30">
          <div className="text-center text-5xl mb-4">💖🎉</div>
          <h1
            className="text-3xl md:text-5xl text-primary text-center mb-8 leading-tight"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Happy 19th Birthday, Hepsi 💖
          </h1>
          <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed">
            <p>
              No matter how far you are, you'll always be my closest and favorite person.
              Some friendships don't need constant talking… they just stay strong, no matter what.
            </p>
            <p>
              I'm really grateful for all the memories we share. You've always been more than
              just a friend to me.
            </p>
            <p>
              I hope this year brings you happiness, peace, and everything you truly deserve.
            </p>
            <p className="font-semibold text-secondary">
              Stay the same amazing person, Hepsi ✨
            </p>
            <p>
              Always cheering for you… from here to Dubai 💫
            </p>
            <p className="italic text-muted-foreground">
              And one more thing… you're 19 now, but your height is still stuck in childhood 😭
            </p>
            <p className="text-2xl font-bold text-primary text-center pt-2">
              Grow Up GIRLLLLLLLLLL.............. !!!!!!!
            </p>
          </div>
          <img src={perumalae} alt="Perumalae" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
          <div className="flex justify-center mt-10">
            <PartyLinkButton to="/memories">Next →</PartyLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}