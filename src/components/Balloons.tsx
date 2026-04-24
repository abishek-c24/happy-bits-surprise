import { useMemo } from "react";

const COLORS = [
  "var(--party-pink)",
  "var(--party-purple)",
  "var(--party-blue)",
  "var(--party-yellow)",
];

export function Balloons({ count = 12 }: { count?: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
        size: 40 + Math.random() * 40,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {balloons.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            bottom: "-100px",
            left: `${b.left}%`,
            width: b.size,
            height: b.size * 1.2,
            backgroundColor: b.color,
            borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
            animation: `float-up ${b.duration}s linear ${b.delay}s infinite`,
            opacity: 0.7,
            boxShadow: "inset -8px -10px 20px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              width: 1,
              height: 40,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          />
        </div>
      ))}
    </div>
  );
}