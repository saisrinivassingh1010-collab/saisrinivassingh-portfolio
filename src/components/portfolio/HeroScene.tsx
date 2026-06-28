import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import {
  Scissors,
  Play,
  Film,
  Layers,
  Wand2,
  Volume2,
  Type,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

type FloatIcon = {
  Icon: typeof Scissors;
  label: string;
  x: string;
  y: string;
  z: number;
  rx: number;
  ry: number;
  size: number;
  tint: "primary" | "accent" | "secondary";
  delay: number;
};

const ICONS: FloatIcon[] = [
  { Icon: Scissors, label: "Cut", x: "8%", y: "18%", z: 80, rx: -10, ry: 18, size: 56, tint: "primary", delay: 0 },
  { Icon: Play, label: "Play", x: "82%", y: "12%", z: 140, rx: 12, ry: -22, size: 68, tint: "accent", delay: 0.8 },
  { Icon: Film, label: "Reel", x: "6%", y: "72%", z: 60, rx: 8, ry: 14, size: 72, tint: "secondary", delay: 1.6 },
  { Icon: Layers, label: "Stack", x: "86%", y: "68%", z: 120, rx: -14, ry: -10, size: 60, tint: "primary", delay: 0.4 },
  { Icon: Wand2, label: "FX", x: "20%", y: "44%", z: 200, rx: 6, ry: 22, size: 44, tint: "accent", delay: 2.2 },
  { Icon: Volume2, label: "Mix", x: "72%", y: "38%", z: 180, rx: -8, ry: -18, size: 48, tint: "secondary", delay: 1.2 },
  { Icon: Type, label: "Title", x: "44%", y: "88%", z: 90, rx: 4, ry: 0, size: 40, tint: "primary", delay: 2.6 },
  { Icon: SlidersHorizontal, label: "Grade", x: "52%", y: "6%", z: 110, rx: -6, ry: 6, size: 44, tint: "accent", delay: 1.8 },
];

const tintMap = {
  primary: "from-primary/30 to-primary/5 text-primary ring-primary/40",
  accent: "from-accent/30 to-accent/5 text-accent ring-accent/40",
  secondary: "from-secondary/30 to-secondary/5 text-secondary ring-secondary/40",
} as const;

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <div ref={ref} className="scene-3d relative aspect-square w-full max-w-[640px]">
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      >
        {/* Center stage — film reel */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) translateZ(0px)" }}
        >
          <CentralReel />
        </div>

        {/* Floating editor tool icons */}
        {ICONS.map(({ Icon, label, x, y, z, rx: irx, ry: iry, size, tint, delay }, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: `translate3d(-50%, -50%, ${z}px) rotateX(${irx}deg) rotateY(${iry}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay * 0.15, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="float-3d"
              style={{ ["--tx" as string]: "0px", ["--rx" as string]: `${irx}deg`, ["--ry" as string]: `${iry}deg`, animationDelay: `${delay}s` } as React.CSSProperties}
            >
              <div
                className={`group relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${tintMap[tint]} ring-1 backdrop-blur-md shadow-[0_20px_60px_-20px_var(--color-glow)]`}
                style={{ width: size, height: size }}
              >
                <Icon size={size * 0.45} strokeWidth={1.6} />
                <span className="chip absolute left-1/2 -bottom-7 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Floating timeline strip */}
        <div
          className="absolute left-1/2 top-[58%] -translate-x-1/2"
          style={{ transform: "translate(-50%, 0) translateZ(40px) rotateX(48deg)" }}
        >
          <TimelineStrip />
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute left-[20%] top-[70%] h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
      </div>
    </div>
  );
}

function CentralReel() {
  return (
    <motion.div
      animate={{ rotateZ: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="relative grid h-56 w-56 place-items-center rounded-full border border-border bg-gradient-to-br from-surface to-background shadow-[0_40px_120px_-20px_var(--color-glow)] sm:h-64 sm:w-64"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-3 rounded-full border border-border/60" />
      <div className="absolute inset-8 rounded-full border border-border/40" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <div
          key={deg}
          className="absolute h-10 w-10 rounded-full bg-background ring-1 ring-border"
          style={{ transform: `rotate(${deg}deg) translateY(-72px)` }}
        />
      ))}
      <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg font-display text-3xl font-black">
        S
      </div>
    </motion.div>
  );
}

function TimelineStrip() {
  const tracks = [
    { color: "bg-primary/70", blocks: [12, 28, 8, 20] },
    { color: "bg-accent/70", blocks: [18, 10, 24, 16] },
    { color: "bg-secondary/60", blocks: [8, 14, 20, 30] },
  ];
  return (
    <div className="flex w-[420px] flex-col gap-1.5 rounded-xl border border-border bg-surface/80 p-2 backdrop-blur-xl shadow-2xl">
      {tracks.map((t, i) => (
        <div key={i} className="flex h-3 gap-1">
          {t.blocks.map((w, j) => (
            <motion.div
              key={j}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1 + i * 0.15 + j * 0.08, duration: 0.5 }}
              className={`${t.color} rounded-sm origin-left`}
              style={{ width: `${w * 4}px` }}
            />
          ))}
        </div>
      ))}
      <div className="mt-1 flex items-center gap-2 border-t border-border/60 pt-1 font-mono text-[10px] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        00:01:24:12 / 00:03:42:08
      </div>
    </div>
  );
}
