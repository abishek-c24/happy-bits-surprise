import { createFileRoute, Link } from "@tanstack/react-router";
import Liar from "@/assets/Liar.jpg";

export const Route = createFileRoute("/liar")({
  component: LiarPage,
});

function LiarPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <img
        src={Liar}
        alt="Liar"
        className="w-64 h-64 object-cover rounded-3xl shadow-lg mb-6"
      />


      <h1
        className="text-6xl md:text-8xl text-primary"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        You Lier !!!
      </h1>

      <p className="mt-4 text-2xl text-muted-foreground">
        I know your real age 😏
      </p>

      <Link
        to="/age"
        className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 bg-card border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
      >
        ← Try again
      </Link>
    </div>
  );
}