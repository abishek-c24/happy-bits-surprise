import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { PartyLinkButton } from "@/components/PartyButton";
import happycry from "@/assets/happycry.png";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";
import m5 from "@/assets/m5.jpg";
import m6 from "@/assets/m6.jpg";
import m7 from "@/assets/m7.jpg";
import m8 from "@/assets/m8.jpg";
import m9 from "@/assets/Me.jpg";
import m10 from "@/assets/abi.jpg";

export const Route = createFileRoute("/memories")({
  component: MemoriesPage,
});

const photos = [
  { src: m1, rotate: -6, mt: 0 },
  { src: m2, rotate: 4, mt: 30 },
  { src: m3, rotate: -3, mt: 10 },
  { src: m4, rotate: 6, mt: 40 },
  { src: m5, rotate: -5, mt: 15 },
  { src: m6, rotate: 3, mt: 20 },
  { src: m7, rotate: -4, mt: 35 },
  { src: m8, rotate: 5, mt: 10 },
  { src: m9, rotate: -2, mt: 25 },
  { src: m10, rotate: 4, mt: 5 },
];

function MemoriesPage() {
  return (
    <div className="relative min-h-screen px-4 py-12 overflow-hidden">
      <Confetti count={40} />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="text-5xl mb-3">🎀✨🎀</div>
        <h1
          className="text-4xl md:text-6xl text-primary mb-2 animate-pop-in"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Our Memories
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          A few moments I'll keep forever 💫
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          {photos.map((p, i) => (
            <div
              key={i}
              className="bg-card p-3 pb-10 shadow-[var(--shadow-party)] hover:scale-110 hover:rotate-0 transition-all duration-300 animate-pop-in"
              style={{
                transform: `rotate(${p.rotate}deg)`,
                marginTop: p.mt,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <img
                src={p.src}
                alt={`Memory ${i + 1}`}
                loading="lazy"
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <p
                className="text-center mt-2 text-sm text-muted-foreground"
                style={{ fontFamily: "Pacifico, cursive" }}
              >
              </p>
            </div>
          ))}
        </div>

        <img src={happycry} alt="Happycry" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />

        <div className="flex justify-center mt-16">
          <PartyLinkButton to="/video">Next →</PartyLinkButton>
        </div>
      </div>
    </div>
  );
}