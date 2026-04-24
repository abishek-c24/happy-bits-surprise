import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import { PartyButton } from "@/components/PartyButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const u = username.trim().toLowerCase();
    const p = password.trim().toLowerCase();
    if (u === "hepsi" && p === "short girl") {
      navigate({ to: "/birthday" });
    } else {
      navigate({ to: "/wrong" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <Balloons count={10} />
      <Confetti count={40} />
      <div className="relative z-10 w-full max-w-md animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-8 shadow-[var(--shadow-party)] border-2 border-primary/20">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">🎂</div>
            <h1
              className="text-4xl text-primary"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              A Special Surprise
            </h1>
            <p className="text-muted-foreground mt-2">Only the right person may enter ✨</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-full border-2 border-border px-5 py-3 bg-background focus:outline-none focus:border-primary transition"
                placeholder="Enter your name..."
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full border-2 border-border px-5 py-3 bg-background focus:outline-none focus:border-primary transition"
                placeholder="Shhh... it's a secret 🤫"
              />
            </div>
            <div className="flex justify-center pt-2">
              <PartyButton type="submit">Let me in 🎉</PartyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
