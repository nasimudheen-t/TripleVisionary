import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clapperboard,
  Cuboid,
  Film,
  Image,
  Palette,
  MonitorSmartphone,
  Sparkles,
  Search,
  Play,
  ArrowUpRight,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import VideoModal from "../components/VideoModal";

const categories = [
  { name: "VFX", icon: Sparkles },
  { name: "3D Animation", icon: Cuboid },
  { name: "Video Edits", icon: Film },
  { name: "Photo Manipulation", icon: Image },
  { name: "Graphic Designs", icon: Palette },
  { name: "UI/UX", icon: MonitorSmartphone },
  { name: "2D Animation", icon: Clapperboard },
];
const projects = [
  {
    id: 1,
    title: "Midnight City",
    subtitle: "Cinematic brand film",
    category: "Video Editing",
    image: "/assets/vfx_city.png",
    accent: "#60E6C1",
    year: "2026",
    duration: "01:24",
    format: "4K",
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Future Interface",
    subtitle: "Product UI launch sequence",
    category: "Motion Graphics",
    image: "/assets/hud_motion.png",
    accent: "#7BD7FF",
    year: "2026",
    duration: "00:45",
    format: "4K",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Aura / Form",
    subtitle: "Luxury product visualization",
    category: "3D Animation",
    image: "/assets/cgi_product.png",
    accent: "#FFB66B",
    year: "2025",
    duration: "00:30",
    format: "CGI",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Signal / Noise",
    subtitle: "Editorial title treatment",
    category: "Motion Graphics",
    image: "/assets/vfx_city.png",
    accent: "#C99BFF",
    year: "2025",
    duration: "00:38",
    format: "2K",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Little Orbit",
    subtitle: "Character animation short",
    category: "2D Animation",
    image: "/assets/hud_motion.png",
    accent: "#FFD166",
    year: "2025",
    duration: "01:12",
    format: "HD",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "After Hours",
    subtitle: "Fashion campaign edit",
    category: "Video Editing",
    image: "/assets/cgi_product.png",
    accent: "#FF809F",
    year: "2025",
    duration: "00:52",
    format: "4K",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 7,
    title: "Chromatic Bloom",
    subtitle: "Abstract visual identity",
    category: "2D Animation",
    image: "/assets/vfx_city.png",
    accent: "#78F0A5",
    year: "2024",
    duration: "00:28",
    format: "HD",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 8,
    title: "Material Study 01",
    subtitle: "Procedural product film",
    category: "3D Animation",
    image: "/assets/cgi_product.png",
    accent: "#88A8FF",
    year: "2024",
    duration: "00:41",
    format: "CGI",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function PortfolioPage({ onPageChange }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [modal, setModal] = useState({ isOpen: false, url: "", title: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  const categoryCounts = useMemo(
    () =>
      projects.reduce(
        (counts, project) => ({
          ...counts,
          [project.category]: (counts[project.category] || 0) + 1,
        }),
        { All: projects.length },
      ),
    [],
  );

  const visibleProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) =>
      sortOrder === "Oldest"
        ? a.year.localeCompare(b.year)
        : b.year.localeCompare(a.year),
    );
  }, [activeCategory, searchQuery, sortOrder]);

  const openProject = (project) => {
    setModal({
      isOpen: true,
      url: project.videoUrl,
      title: project.title,
    });
  };

  return (
    <div className="relative min-h-screen pb-24 pt-28 md:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#5FFEBC]/[0.07] blur-[140px]" />

      <section className="relative z-10 mx-auto max-w-6xl px-5 md:px-6">
        {/* <div className="grid items-end gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_360px] md:pb-14">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#5FFEBC] shadow-[0_0_14px_#5FFEBC]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5FFEBC]">
                Selected work / 2024—2026
              </span>
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl">
              Ideas, crafted
              <span className="block text-white/35">into motion.</span>
            </h1>
          </div>

          <div className="pb-1">
            <p className="text-sm leading-7 text-[#C6D3E1]/65">
              A selection of editing, motion design, and animation work built to
              make brands feel impossible to ignore.
            </p>
            <button
              onClick={() => onPageChange('/contact')}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#5FFEBC]"
            >
              Start a project
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div> */}

        <div className="sticky top-[70px] z-30 -mx-2 mt-6 rounded-2xl border border-white/10 bg-[#0B0F14]/85 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="relative flex flex-1 items-center">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#10151C]/90 text-white hover:bg-[#1A222D]"
              >
                <ChevronLeft size={16} />
              </button>

              <div
                ref={scrollRef}
                className="scrollbar-hide mx-10 flex gap-1 overflow-x-auto scroll-smooth"
              >
                {categories.map(({ name, icon: Icon }) => {
                  const isActive = activeCategory === name;

                  return (
                    <button
                      key={name}
                      onClick={() => setActiveCategory(name)}
                      className="flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white/[0.04] px-3.5 py-3 text-[11px] font-medium transition-all hover:bg-white/[0.08]"
                    >
                      <Icon
                        size={13}
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={
                          isActive ? "text-[#5FFEBC]" : "text-white/55"
                        }
                      />

                      <span
                        className={
                          isActive ? "text-[#5FFEBC]" : "text-white/55"
                        }
                      >
                        {name}
                      </span>

                      <span
                        className={
                          isActive ? "text-[#5FFEBC]/70" : "text-white/25"
                        }
                      >
                        {String(categoryCounts[name] || 0).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#10151C]/90 text-white hover:bg-[#1A222D]"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex gap-2 border-t border-white/10 pt-2 lg:border-l lg:border-t-0 lg:pl-2 lg:pt-0">
              <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-white/[0.045] px-3 text-white/45 lg:w-44">
                <Search size={14} />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects"
                  className="h-10 min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/30"
                />
              </label>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                aria-label="Sort projects"
                className="cursor-pointer rounded-xl border-0 bg-white/[0.045] px-3 text-[11px] text-white/65 outline-none"
              >
                <option className="bg-[#10151C]">Newest</option>
                <option className="bg-[#10151C]">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-5 mt-10 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            {String(visibleProjects.length).padStart(2, "0")} projects found
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/20" />
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                onClick={() => openProject(project)}
                className={`group cursor-pointer overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#10151C] transition-colors hover:border-white/20 ${
                  project.featured && activeCategory === "All" && !searchQuery
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured && activeCategory === "All" && !searchQuery
                      ? "aspect-[16/8]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/15" />
                  <div
                    className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 backdrop-blur-md">
                      {project.format}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Play size={15} fill="currentColor" className="ml-0.5" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
                        {project.subtitle}
                      </p>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <div className="hidden items-center gap-3 font-mono text-[9px] text-white/40 sm:flex">
                      <span>{project.year}</span>
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <div className="rounded-[22px] border border-dashed border-white/10 py-24 text-center">
            <p className="text-sm text-white/45">
              No projects match that filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 cursor-pointer text-xs font-semibold uppercase tracking-widest text-[#5FFEBC]"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-[#5FFEBC]">
              Have something in mind?
            </p>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Let’s make the next frame count.
            </h2>
          </div>
          <button
            onClick={() => onPageChange("/contact")}
            className="flex cursor-pointer items-center gap-3 rounded-full bg-[#5FFEBC] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#07110E] transition-transform hover:scale-[1.03]"
          >
            Work with us
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <VideoModal
        isOpen={modal.isOpen}
        onClose={() => setModal((current) => ({ ...current, isOpen: false }))}
        videoUrl={modal.url}
        videoTitle={modal.title}
      />
    </div>
  );
}
