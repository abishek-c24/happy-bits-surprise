import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Confetti } from "@/components/Confetti";
import { Balloons } from "@/components/Balloons";
import { PartyButton } from "@/components/PartyButton";
import magicImg from "@/assets/magic.png";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

export const Route = createFileRoute("/magic-corner")({
  component: MagicCornerPage,
});

const wishSchema = z.object({
  wish: z
    .string()
    .trim()
    .nonempty({ message: "Please type your wish first ✨" })
    .max(2000, { message: "Keep it under 2000 characters" }),
});

const WEB3FORMS_KEY = "1524e1a3-9532-44b3-8fe8-96572f299852";

function MagicCornerPage() {
  const navigate = useNavigate();
  const [wish, setWish] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = wishSchema.safeParse({ wish });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid wish");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "🎂 New Birthday Wish from Hepsi's Magic Corner",
          from_name: "Hepsi's Birthday Site",
          message: parsed.data.wish,
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (!res.ok || !data.success) {
        throw new Error("Failed to send");
      }
      navigate({ to: "/final" });
    } catch {
      setError("Couldn't send your wish. Please try again 💕");
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <Balloons count={6} />
      <Confetti count={30} />
      <div className="relative z-10 w-full max-w-xl animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-8 md:p-10 shadow-[var(--shadow-party)] border-2 border-primary/30 text-center">
          <div className="text-6xl mb-3">✨🪄✨</div>
          <h1
            className="text-4xl md:text-5xl text-primary mb-3"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            The Magic Corner
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            You can type your wish here — it'll fly straight to me 💌
          </p>

        <img
          src={magicImg}
          alt="Magic"
           className="w-full max-w-md mx-auto rounded-2xl shadow-lg mb-6"
          />
          <form onSubmit={onSubmit} className="space-y-4 text-left">
            <Textarea
              value={wish}
              onChange={(e) => {
                setWish(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Type your wish, secret, or anything you want to say…"
              maxLength={2000}
              rows={6}
              className="rounded-2xl border-2 border-border bg-background text-base focus-visible:ring-primary"
              disabled={submitting}
            />
            {error && (
              <p className="text-sm font-semibold text-destructive text-center">
                {error}
              </p>
            )}
            <div className="flex justify-center pt-2">
              <PartyButton type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send Wish ✨"}
              </PartyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}