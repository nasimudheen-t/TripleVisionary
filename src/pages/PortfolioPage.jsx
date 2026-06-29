import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Play, ArrowUpRight, PackageOpen } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { projects, categories } from "../utilities/data";
import VideoModal from "../components/VideoModal";

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

  const handleAddonClick = (e, project) => {
    e.stopPropagation();

    if (!project.addon?.available) return;

    sessionStorage.setItem("selectedAssetId", project.addon.assetId);

    onPageChange("/assets");
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

  // Get the display name for the current category
  const getCategoryDisplayName = () => {
    if (activeCategory === "All") return "All Projects";
    return activeCategory;
  };

  return (
    <div className="relative min-h-screen md:pt-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#5FFEBC]/[0.07] blur-[140px]" />

      <section>
        {/* Filter Bar - Sticky */}
        <div className="sticky top-[60px] z-30 mb-4 w-full rounded-2xl bg-[#0B0F14]/90 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-3 p-3 lg:flex-row lg:items-center lg:p-4">
            {/* Categories Scroll Section */}
            <div className="relative flex flex-1 items-center">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#10151C]/90 text-white hover:bg-[#1A222D]"
              >
                <ChevronLeft size={16} />
              </button>

              <div
                ref={scrollRef}
                className="scrollbar-hide mx-9 flex gap-2 overflow-x-auto scroll-smooth"
              >
                {categories.map(({ name, icon: Icon }) => {
                  const isActive = activeCategory === name;

                  return (
                    <button
                      key={name}
                      onClick={() => setActiveCategory(name)}
                      className="flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-[8px] bg-white/[0.04] px-3.5 py-2.5 text-[11px] font-medium transition-all hover:bg-white/[0.08]"
                    >
                      <Icon
                        size={13}
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className={
                          isActive ? "text-[#0E7A0D]" : "text-white/55"
                        }
                      />
                      <span
                        className={
                          isActive ? "text-[#0E7A0D]" : "text-white/55"
                        }
                      >
                        {name}
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

            {/* Search and Sort Section */}
            <div className="flex w-full flex-col items-center gap-2 border-t border-white/10 pt-3 lg:w-auto lg:flex-row lg:border-l lg:border-t-0 lg:pl-3 lg:pt-0">
              <div className="flex w-full items-center justify-center lg:w-auto">
                <label className="flex w-full max-w-[320px] items-center gap-2 rounded-xl bg-white/[0.045] px-3 text-white/45 lg:w-[260px]">
                  <Search size={14} className="flex-shrink-0" />
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search projects"
                    className="h-10 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/30"
                  />
                </label>
              </div>

              <div className="flex w-full justify-center lg:w-auto">
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  aria-label="Sort projects"
                  className="w-full max-w-[320px] cursor-pointer rounded-xl bg-[#151A20] px-4 py-2.5 text-[11px] text-white/70 outline-none lg:w-auto lg:px-3 lg:py-2.5"
                >
                  <option className="bg-[#10151C]">Newest</option>
                  <option className="bg-[#10151C]">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title - Below Filter Bar */}
      

        {/* Divider */}
      

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-15 sm:mt-0 w-full columns-1 gap-0 sm:columns-2 md:columns-3 xl:columns-4"
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

                  <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
                    <span className="inline-flex max-w-[calc(100vw-110px)] rounded-full bg-black/40 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-[9px]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute right-2 top-2 z-30 sm:right-3 sm:top-3">
                    <button
                      onClick={(e) => handleAddonClick(e, project)}
                      className="transition-all duration-300 hover:scale-110"
                    >
                      <PackageOpen
                        size={22}
                        className={
                          project.addon?.available
                            ? "text-[#0E7A0D]"
                            : "text-white"
                        }
                      />
                    </button>
                  </div>

                  {project.type === "video" && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-black opacity-90 backdrop-blur-md transition-transform duration-[400ms] group-hover:scale-100">
                        <Play
                          size={16}
                          fill="currentColor"
                          className="ml-0.5"
                        />
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
              Let's make the next frame count.
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