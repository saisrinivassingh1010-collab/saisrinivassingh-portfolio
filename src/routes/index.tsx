import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Mail, Play, Award, Clock, Users, Sparkles } from "lucide-react";
import { HeroScene } from "@/components/portfolio/HeroScene";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ToolMarquee } from "@/components/portfolio/ToolMarquee";

import neon from "@/assets/project-neon.jpg";
import athlete from "@/assets/project-athlete.jpg";
import product from "@/assets/project-product.jpg";
import doc from "@/assets/project-doc.jpg";
import music from "@/assets/project-music.jpg";
import travel from "@/assets/project-travel.jpg";
import geminiImg from "@/assets/Gemini_Generated_Image_p61z8tp61z8tp61z.png";
const weddingVideo = "/assets/final-result.mp4";
const shortVideo2 = "/assets/short-video-2.mp4";
const photoslidesVideo = "/assets/photoslids-effects.mp4";
const socialMediaVideo = "/assets/social-media-video.mp4";
const nightModeVideo = "/assets/night-mode-video.mov";
import thumbnail2 from "@/assets/thumbnail-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAI SRINIVAS SINGH — Senior & Video Editor" },
      { name: "description", content: "Premium portfolio of SAI SRINIVAS SINGH — cinematic editing, color, and sound for global brands and independent films." },
      { property: "og:title", content: "SAI SRINIVAS SINGH — Senior Film & Video Editor" },
      { property: "og:description", content: "Cinematic editorial. Color. Sound. A portfolio in motion." },
    ],
  }),
  component: Portfolio,
});

const PROJECTS = [
  { image: neon, video: weddingVideo, aspect: "9/16", title: "9:16", client: "Social media", category: "Davanci Resolve", year: "2026", duration: "" },
  { image: athlete, video: shortVideo2, aspect: "9/16", title: "9:16", client: "Social media", category: "After effects", year: "2026", duration: "" },
  { image: product, video: photoslidesVideo, aspect: "original", title: "Show Reel", client: "Wedding", category: "after effects", year: "2026", duration: "" },
  { image: doc, video: socialMediaVideo, aspect: "original", title: "Trending", client: "Lyrical song", category: "after effects", year: "2026", duration: "" },
  { image: music, video: nightModeVideo, aspect: "original", title: "Colour Grade", client: "Sky replace", category: "davanci resolve", year: "2025", duration: "" },
  { image: thumbnail2, aspect: "original", title: "Thumbnail", client: "bathakani", category: "vlog", year: "2025", duration: "" },
];

const STATS = [
  { Icon: Play, label: "Projects edited", value: "80+" },
  { Icon: Award, label: "Happy clients", value: "10+" },
  { Icon: Users, label: "Reels & Thumbnails", value: "30+" },
  { Icon: Clock, label: "Years experience", value: "2" },
];

function Portfolio() {
  return (
    <div className="film-grain surface-grad min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <ToolMarquee />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("Work");

  const active = hoveredTab || selectedTab;
  const tabs = ["Work", "Process", "About", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 sm:py-5 pointer-events-none">
      <div className="flex items-center justify-between gap-2 sm:gap-4 w-full pointer-events-auto">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg font-display text-xl font-black">
            S
          </div>
          <div className="hidden sm:block min-w-0">
            <div className="truncate font-display text-base font-semibold leading-none">SAI SRINIVAS SINGH</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Film · Edit · Color</div>
          </div>
        </a>

        {/* Liquid Flow Pill Navigation */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1.5 backdrop-blur-2xl shadow-sm max-w-full overflow-x-auto scrollbar-none"
        >
          {tabs.map((n) => {
            const isActive = active === n;
            return (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={() => setSelectedTab(n)}
                onMouseEnter={() => setHoveredTab(n)}
                onTouchStart={() => setSelectedTab(n)}
                className={`relative rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 z-10 select-none whitespace-nowrap ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="liquid-pill-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-muted border border-foreground/10 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] backdrop-blur-md"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 28,
                      mass: 0.8,
                    }}
                  />
                )}
                {n}
              </a>
            );
          })}
        </nav>

        <a href="#contact" className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition hover:scale-[1.03] sm:inline-flex shrink-0">
          Start a project <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
        <div className="relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Stories cut <br />
            with <span className="text-gradient italic">cinematic</span> <br />
            precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm SAI SRINIVAS SINGH — an editor of all kinds with 2 years of experience crafting short films,
            Instagram reels, motion graphics, wedding edits, photo edits, and eye-catching thumbnail designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_20px_60px_-20px_var(--color-glow)] transition hover:scale-[1.03]">
              <Play size={14} fill="currentColor" /> Watch the reel
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-surface">
              Book a call <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
            >
              <span>Nike</span><span>Apple</span><span>A24</span><span>Spotify</span><span>Patagonia</span><span>Netflix</span>
            </motion.div> */}
        </div>

        <div className="relative flex items-center justify-center">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-4 sm:px-6 md:grid-cols-4 md:divide-x">
        {STATS.map(({ Icon, label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex items-center gap-4 px-2 py-6 sm:px-6 sm:py-8"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon size={22} strokeWidth={1.6} />
            </div>
            <div className="min-w-0">
              <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{value}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <span className="chip">Selected Work · 2024 — 2026</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Recent <span className="text-gradient italic">cuts</span>.
            </h2>
          </div>
          <a href="https://drive.google.com/drive/folders/1btdUcmWgpGEVvUsZzC5S5eIq9WWg3ZEo" target="_blank" rel="noopener noreferrer" className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground transition hover:text-primary">
            For more <br />
            Full archive →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={`${p.title}-${i}`} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Brief & Watch", d: "We sit with the footage. Listen to the brief, the sound, the silence. Map the spine before the first cut." },
    { n: "02", t: "Rough to Rhythm", d: "Story first. Pacing is found, not forced. Multiple passes, ruthless trims, breathing room where it matters." },
    { n: "03", t: "Color & Sound", d: "DaVinci grade, custom LUTs, stem mix in Pro Tools. The frame and the field, locked in." },
    { n: "04", t: "Deliver", d: "Frame.io review cycles, every master spec, every aspect ratio. Shipped on calendar." },
  ];
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="chip">The Process</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Four moves, <span className="text-gradient italic">on repeat</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="tilt-card scene-3d group relative rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <span className="h-1 w-12 rounded-full bg-border transition-all group-hover:w-20 group-hover:bg-primary" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="scene-3d relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-3xl border border-border shadow-[0_40px_120px_-30px_var(--color-glow)]"
          >
            <img src={geminiImg} alt="Portrait of SAI SRINIVAS SINGH" width={900} height={1100} loading="lazy" className="h-full w-full object-cover" />
            <div className="scanline pointer-events-none absolute inset-0 overflow-hidden" />
          </motion.div>
          {/* <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-border bg-surface/95 px-5 py-3 backdrop-blur-xl shadow-xl sm:bottom-6 sm:right-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Now editing</div>
            <div className="font-display text-sm font-medium">A24 — Untitled Feature</div>
          </div> */}
        </div>

        <div>
          <span className="chip">About</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Two years of turning raw footage into captivating stories.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hi, I'm Saisrinivassingh, an Advanced Professional Video Editor and Basic Graphic Designer from Kurnool, Andhra Pradesh. I specialize in wedding video editing, YouTube videos, social media reels, short films, and YouTube thumbnail design. I am passionate about creating high-quality, cinematic, and engaging content that tells meaningful stories.          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Skills: Video Editing, Wedding Films, YouTube Editing, Social Media Reels, Short Films, Thumbnail Design, Motion Graphics, Color Grading, and Basic Graphic Design.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tools I Use: Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, DaVinci Resolve, and CapCut. </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["Short Films", "Instagram Reels", "Motion Graphics", "Wedding Edits", "Photo Editing", "Thumbnail Design"].map((t) => (
              <span key={t} className="chip justify-center">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scene-3d relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-2 via-surface to-background p-10 text-center shadow-[0_40px_120px_-30px_var(--color-glow)] sm:p-16"
        >
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          </div>
          <span className="chip">Let's build</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Got footage? <br />
            <span className="text-gradient italic">Let's make it sing.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Currently booking commercials and short-form for Q3. Long-form considered case by case.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saisrinivassingh1010@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_20px_60px_-20px_var(--color-glow)] transition hover:scale-[1.03]">
              <Mail size={15} /> saisrinivassingh1010@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-8 sm:px-6 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-base font-black">
            S
          </div>
          <span className="truncate font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 SAI SRINIVAS SINGH ·
          </span>
        </div>
        <div className="shrink-0 flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-primary"></a>
          <a href="#" className="hover:text-primary"></a>
          <a href="#" className="hover:text-primary"></a>
        </div>
      </div>
    </footer>
  );
}
