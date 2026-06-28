import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  image: string;
  video?: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  index: number;
  aspect?: string;
};

export function ProjectCard({ image, video, title, client, category, year, duration, index, aspect }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaRatio, setMediaRatio] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 16 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => { 
    mx.set(0); my.set(0); 
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const finalAspectRatio = aspect === "original" && mediaRatio
    ? mediaRatio
    : aspect === "9/16"
    ? 9 / 16
    : 16 / 10;

  return (
    <>
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={() => video && setIsPlaying(true)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        className={`scene-3d group relative ${video ? "cursor-pointer" : ""}`}
      >
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div 
            className="relative overflow-hidden"
            style={{ aspectRatio: finalAspectRatio }}
          >
            {video ? (
              <video
                ref={videoRef}
                src={video}
                poster={image}
                preload="metadata"
                loop
                muted
                playsInline
                onLoadedMetadata={(e) => {
                  const videoEl = e.currentTarget;
                  setMediaRatio(videoEl.videoWidth / videoEl.videoHeight);
                }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <img
                src={image}
                alt={title}
                loading="lazy"
                width={1280}
                height={800}
                onLoad={(e) => {
                  const imgEl = e.currentTarget;
                  setMediaRatio(imgEl.naturalWidth / imgEl.naturalHeight);
                }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {/* Floating play button — z lifted */}
            {video && (
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateZ(60px)" }}
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl ring-4 ring-primary/20 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                  <Play size={22} className="ml-1" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Top meta */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between" style={{ transform: "translateZ(40px)" }}>
              <span className="chip !text-foreground/80">{category}</span>
              <span className="font-mono text-xs text-foreground/70">{duration}</span>
            </div>

            {/* Bottom info */}
            <div
              className="absolute inset-x-0 bottom-0 p-5"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{client} · {year}</div>
              <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">{title}</h3>
            </div>
          </div>
        </motion.div>
      </motion.article>

      <AnimatePresence>
        {isPlaying && video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setIsPlaying(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl max-w-full max-h-[85vh]"
              style={{ aspectRatio: finalAspectRatio }}
            >
              <video
                src={video}
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
