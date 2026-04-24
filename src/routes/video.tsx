import { createFileRoute } from "@tanstack/react-router";
import { Confetti } from "@/components/Confetti";
import { PartyLinkButton } from "@/components/PartyButton";
import video from "@/assets/video.mp4";
import next from "@/assets/next.jpg";

export const Route = createFileRoute("/video")({
  component: VideoPage,
});

function VideoPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Confetti count={30} />
      <div className="relative z-10 max-w-3xl w-full text-center animate-pop-in">
        <div className="text-5xl mb-3">🎬✨</div>
        <h1
          className="text-4xl md:text-5xl text-primary mb-6"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          A little something for you
        </h1>
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-party)] border-4 border-primary/30 bg-card">
          <video
            controls
            playsInline
            className="w-full aspect-video bg-black"
            poster=""
          >
            <source
              src={video}
              type="video/mp4"
            />
            Your browser doesn't support video.
          </video>
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          
        </p>
        <img src={next} alt="Next" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
        <div className="flex justify-center mt-10">
          <PartyLinkButton to="/smile">Next →</PartyLinkButton>
        </div>
      </div>
    </div>
  );
}