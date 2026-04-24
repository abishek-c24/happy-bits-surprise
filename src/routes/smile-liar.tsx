import { createFileRoute, Link } from "@tanstack/react-router";
import girl from "@/assets/girl.gif";

export const Route = createFileRoute("/smile-liar")({
  component: SmileLiarPage,
});

function SmileLiarPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      
      <div className="text-8xl mb-4 animate-wiggle">🙄</div>

      <h1
        className="text-6xl md:text-8xl text-primary"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        You Lier
      </h1>

      <p className="mt-4 text-2xl text-muted-foreground">
        I can see that smile from here 😏
      </p>

      <div className="mt-8 w-full max-w-md">
        <img src={girl} alt="Girl" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
      </div>

      <Link
        to="/smile"
        className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 bg-card border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
      >
        ← Be honest
      </Link>
    </div>
  );
}