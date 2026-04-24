import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Confetti } from "@/components/Confetti";
import { PartyButton } from "@/components/PartyButton";
import AdhaarImage from "@/assets/Adhaar.jpg";

export const Route = createFileRoute("/birthday")({
  component: BirthdayPage,
});

function BirthdayPage() {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (day === "24" && month === "04" && year === "2007") {
      navigate({ to: "/age" });
    } else {
      navigate({ to: "/wrong" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <Confetti count={50} />
      <div className="relative z-10 w-full max-w-lg animate-pop-in">
        <div className="rounded-3xl bg-card/90 backdrop-blur-md p-8 shadow-[var(--shadow-party)] border-2 border-secondary/30 text-center">
          <div className="text-6xl mb-3">🎈</div>
          <h1
            className="text-4xl md:text-5xl text-primary mb-6"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            When is your Birthday?
          </h1>
          <img src={AdhaarImage} alt="Adhaar" />
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex gap-3 justify-center">
              <div className="flex-1">
                <label className="block text-xs font-bold text-muted-foreground mb-1">
                  Date
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="DD"
                  className="w-full text-center text-2xl font-bold rounded-2xl border-2 border-border px-2 py-3 bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-muted-foreground mb-1">
                  Month
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                  className="w-full text-center text-2xl font-bold rounded-2xl border-2 border-border px-2 py-3 bg-background focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-muted-foreground mb-1">
                  Year
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YYYY"
                  className="w-full text-center text-2xl font-bold rounded-2xl border-2 border-border px-2 py-3 bg-background focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <PartyButton type="submit">Submit 🎁</PartyButton>
          </form>
        </div>
      </div>
    </div>
  );
}