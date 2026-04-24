import { ImageIcon } from "lucide-react";

type MemePlaceholderProps = {
  label?: string;
  className?: string;
};

/**
 * Placeholder slot for memes. Replace this component (or pass an actual
 * <img />) with the real meme image when ready.
 */
export function MemePlaceholder({
  label = "Drop your meme here 😜",
  className = "",
}: MemePlaceholderProps) {
  return (
    <div
      className={`mx-auto my-6 flex aspect-video w-full max-w-sm flex-col items-center justify-center rounded-2xl border-4 border-dashed border-primary/40 bg-card/60 p-4 text-center shadow-[var(--shadow-party)] backdrop-blur-sm ${className}`}
    >
      <ImageIcon className="mb-2 h-10 w-10 text-primary/60" aria-hidden="true" />
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground/70">
        (meme placeholder)
      </p>
    </div>
  );
}