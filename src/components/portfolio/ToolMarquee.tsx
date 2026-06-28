import {
  Scissors, Film, Layers, Wand2, Volume2, Type,
  SlidersHorizontal, Camera, Zap, Aperture, Disc3, Palette,
} from "lucide-react";

const TOOLS = [
  { Icon: Scissors, name: "Premiere Pro", category: "EDIT", issue: "NO. 01" },
  { Icon: Film, name: "DaVinci Resolve", category: "COLOR", issue: "NO. 02" },
  { Icon: Layers, name: "After Effects", category: "VFX", issue: "NO. 03" },
  { Icon: Wand2, name: "Cinema 4D", category: "3D", issue: "NO. 04" },
  { Icon: Volume2, name: "Pro Tools", category: "AUDIO", issue: "NO. 05" },
  { Icon: Type, name: "Figma", category: "DESIGN", issue: "NO. 06" },
  { Icon: SlidersHorizontal, name: "Audition", category: "MIX", issue: "NO. 07" },
  { Icon: Camera, name: "Frame.io", category: "REVIEW", issue: "NO. 08" },
  { Icon: Zap, name: "Notch", category: "REALTIME", issue: "NO. 09" },
  { Icon: Aperture, name: "Photoshop", category: "STILLS", issue: "NO. 10" },
  { Icon: Disc3, name: "Logic Pro", category: "SCORE", issue: "NO. 11" },
  { Icon: Palette, name: "FilmConvert", category: "STOCK", issue: "NO. 12" },
];

export function ToolMarquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="relative overflow-hidden border-y-2 border-border bg-gradient-to-b from-surface/80 via-surface/30 to-surface/80 py-10 my-12 shadow-sm">
      {/* Editorial magazine header bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-b border-border/60 pb-3">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-ping" />
          Production Stack · Directory
        </span>
        <span className="hidden sm:inline">Curated For High-End Broadcast & Cinema</span>
      </div>

      {/* Giant Magazine Ticker */}
      <div className="marquee flex w-max items-center gap-10 sm:gap-16 whitespace-nowrap hover:[animation-play-state:paused] cursor-default select-none py-2">
        {row.map(({ Icon, name, category, issue }, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className="group flex items-center gap-6 sm:gap-10 transition-all duration-500 hover:scale-[1.04]"
            >
              {/* Editorial Spec Pill */}
              <div className="flex flex-col items-end justify-center font-mono text-[10px] tracking-widest text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-primary transition-opacity">
                <span>{issue}</span>
                <span className="font-semibold text-foreground">{category}</span>
              </div>

              {/* Icon Stamp */}
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl border border-border bg-background shadow-md transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_10px_30px_-10px_var(--color-glow)] group-hover:rotate-6">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              {/* Giant Headline Typography */}
              <span
                className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight transition-colors duration-300 ${
                  isEven
                    ? "font-extrabold text-foreground group-hover:text-primary"
                    : "font-bold italic text-muted-foreground/80 group-hover:text-foreground"
                }`}
              >
                {name}
              </span>

              {/* Magazine Separator Star */}
              <span className="text-primary/40 group-hover:text-primary transition-transform duration-700 group-hover:rotate-180 text-2xl sm:text-3xl font-serif">
                ✱
              </span>
            </div>
          );
        })}
      </div>

      {/* Edge Vignette Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/60 to-transparent z-10" />
    </section>
  );
}
