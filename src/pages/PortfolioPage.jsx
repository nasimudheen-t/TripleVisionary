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
  { name: "All", icon: Clapperboard },
  { name: "Video Editing", icon: Film },
  { name: "Motion Graphics", icon: Sparkles },
  { name: "3D Animation", icon: Cuboid },
  { name: "2D Animation", icon: Clapperboard },
  { name: "VFX", icon: Sparkles },
  { name: "Photo Manipulation", icon: Image },
  { name: "Graphic Designs", icon: Palette },
  { name: "UI/UX", icon: MonitorSmartphone },
];
const projects = [
  {
    id: 1,
    title: "",
    subtitle: "Cinematic brand film",
    category: "Graphic Designs",
    image: "/assets/Projects/image1.jpg",
    accent: "#60E6C1",
    year: "2026",
    duration: "01:24",
    format: "4K",
    featured: true,
    type: "image",
    // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Y2K Poster",
    subtitle: "Y2k Weeknd Poster",
    category: "Graphic Designs",
    image: "/assets/Projects/y2kweeknd.png",
    accent: "#7BD7FF",
    year: "2026",
    duration: "00:45",
    format: "4K",
    featured: false,
    type: "image",
  },
  {
    id: 3,
    title: "Aura / Form",
    subtitle: "Luxury product visualization",
    category: "Graphic Designs",
    image: "/assets/Projects/image2.jpg",
    accent: "#FFB66B",
    year: "2025",
    duration: "00:30",
    format: "CGI",
    featured: false,
    type: "image",
    // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Signal / Noise",
    subtitle: "Editorial title treatment",
    category: "Graphic Designs",
    image: "/assets/Projects/image3.jpg",
    accent: "#C99BFF",
    year: "2025",
    duration: "00:38",
    format: "2K",
    featured: false,
    type: "image",
    // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Little Orbit",
    subtitle: "Character animation short",
    category: "Graphic Designs",
    image: "/assets/Projects/image4.jpg",
    accent: "#FFD166",
    year: "2025",
    duration: "01:12",
    format: "HD",
    featured: false,
    type: "image",
    // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  // {
  //   id: 6,
  //   title: "After Hours",
  //   subtitle: "/assets/Projects/image5.jpg",
  //   category: "Graphic Designs",
  //   image: "/assets/Projects/image6.png",
  //   accent: "#FF809F",
  //   year: "2025",
  //   duration: "00:52",
  //   format: "4K",
  //   featured: false,
  //   type: "image",
  //   // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // },
  {
    id: 7,
    title: "Chromatic Bloom",
    subtitle: "Abstract visual identity",
    category: "Graphic Designs",
    image: "/assets/Projects/image6.png",
    accent: "#78F0A5",
    year: "2024",
    duration: "00:28",
    format: "HD",
    featured: false,
    type: "image",
    // videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 8,
    title: "Cyber glitch",
    subtitle: "Cyber glitch",
    category: "VFX",
    image: "/assets/Projects/image7.jpeg",
    accent: "#78F0A5",
    year: "2024",
    duration: "00:28",
    format: "HD",
    featured: false,
    type: "video",
    videoUrl: "https://youtu.be/XqMJu_VdJM4?si=KC1BQ66x3npG7Fla",
  },
  {
    id: 9,
    title: "konkrët",
    subtitle: "konkrët",
    category: "VFX",
    image: "/assets/Projects/image8.jpeg",
    accent: "#78F0A5",
    year: "2024",
    duration: "00:28",
    format: "HD",
    featured: false,
    type: "video",
    videoUrl: "https://youtu.be/8C0op1dXdec?is=pUpbfu_SGwXJlQ7M",
  },
  {
    id: 10,
    title: "Obi-wan kenobi scene recreated",
    subtitle: "Obi-wan kenobi scene recreated",
    category: "VFX",
    image: "/assets/Projects/image9.jpeg",
    accent: "#78F0A5",
    year: "2024",
    duration: "00:28",
    format: "HD",
    featured: false,
    type: "video",
    videoUrl: "https://youtu.be/MVvjsDDOjpw?is=ZS-C0mnXEzwYOzG3",
  },
  // {
  //   id: 8,
  //   title: "Material Study 01",
  //   subtitle: "Procedural product film",
  //   category: "3D Animation",
  //   image: "/assets/cgi_product.png",
  //   accent: "#88A8FF",
  //   year: "2024",
  //   duration: "00:41",
  //   format: "CGI",
  //   featured: false,
  //   type: "video",
  //   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // },
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
      behavior: "auto",
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
    if (project.type !== "video" || !project.videoUrl) return;

    setModal({
      isOpen: true,
      url: project.videoUrl,
      title: project.title,
    });
  };

  return (
    <div className="relative min-h-screen pb-24 pt-28 md:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#5FFEBC]/[0.07] blur-[140px]" />

      <section>
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

        <div className="sticky top-[70px] z-30 mt-6 w-full rounded-2xl bg-[#0B0F14]/90 p-2 shadow-2xl backdrop-blur-xl">
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
                className="scrollbar-hide mx-10 flex gap- overflow-x-auto scroll-smooth"
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

                      {/* <span
                        className={
                          isActive ? "text-[#5FFEBC]/70" : "text-white/25"
                        }
                      >
                        {String(categoryCounts[name] || 0).padStart(2, "0")}
                      </span> */}
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
                className="cursor-pointer rounded-xl bg-[#151A20] px-3 text-[11px] text-white/70 outline-none"
              >
                <option className="bg-[#10151C]">Newest</option>
                <option className="bg-[#10151C]">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-10 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            {String(visibleProjects.length).padStart(2, "0")} projects found
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/20" />
        </div>

        <motion.div
          layout
className="w-full columns-1 gap-0 sm:columns-2 md:columns-3 xl:columns-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.035, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => openProject(project)}
               className={`group mb-0 inline-block w-full break-inside-avoid overflow-hidden ${
                  project.type === "video" ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-[400ms] ease-out group-hover:bg-black/25" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />

                  <div className="absolute left-3 top-3">
                    <span className="inline-flex rounded-full bg-black/30 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-xl">
                      {project.category}
                    </span>
                  </div>

                  {project.type === "video" && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-black opacity-90 backdrop-blur-md transition-transform duration-[400ms] group-hover:scale-100">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.14em] text-white/65">
                        {project.subtitle}
                      </p>
                      <h2 className="font-display text-lg font-semibold text-white">
                        {project.title}
                      </h2>
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
