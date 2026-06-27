import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "../components/VideoModal";
import { Link, useNavigate } from "react-router-dom";
export default function Hero({ onPageChange }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // All images from projects folder
  const navigate = useNavigate();
  const projectImages = [
    "/assets/Projects/image1.jpg",
    "/assets/Projects/image2.jpg",
    "/assets/Projects/image3.jpg",
    "/assets/Projects/image4.jpg",
    "/assets/Projects/image5.jpg",
    "/assets/Projects/image6.png",
    "/assets/Projects/image7.jpeg",
    "/assets/Projects/image8.jpeg",
    "/assets/Projects/image9.jpeg",
    "/assets/Projects/image10.jpeg",
    "/assets/Projects/image11.jpeg",
    "/assets/Projects/image12.jpeg",
    "/assets/Projects/image13.jpg",
    "/assets/Projects/y2kweeknd.png",
  ];

  // Duplicate images for seamless loop (3 times for smooth scrolling)
  const allImages = [...projectImages, ...projectImages, ...projectImages];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
    >
      {/* Banner Image Section */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src="/assets/banner.png"
            alt="Vortex Studio Banner"
            className="w-full max-h-[650px] object-cover"
          />
        </motion.div>
      </div>

      {/* Hero Content with Background */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/Hero.jpg')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Background radial highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-none mb-6 text-white"
            >
              TripleVisionary Multidisciplinary Creative studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-[#C6D3E1] leading-relaxed mb-8 max-w-xl font-light"
            >
              Where creativity meets innovation. We transform ideas into visual
              masterpieces through cutting-edge video production, motion
              graphics, and immersive 3D animations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            ></motion.div>
          </div>
          {/* Right Side - Info Panel */}
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden border-y border-[#1b2735] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Hero.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Same Blue Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.08),transparent_70%)]" />

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#05080d] via-[#05080d]/80 to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#05080d] via-[#05080d]/80 to-transparent" />
        <div className="relative z-10 py-5">
          <div className="marquee">
            <div className="marquee-content">
              {[...projectImages, ...projectImages].map((image, index) => (
                <div
  key={index}
 onClick={() => {
  console.log("Image clicked");
  console.log(onPageChange);

  if (onPageChange) {
    onPageChange("/show");
  }
}}
  className="group flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer"
>
  <img
    src={image}
    alt={`Project ${index}`}
    className="w-[380px] h-[350px] object-cover transition-all duration-500 group-hover:scale-110"
  />
</div>
              ))}
            </div>
          </div>
        </div>
        {/* Statement Section */}
   <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative z-30 px-6 py-16"
>
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-center md:text-left">
    {/* Anti AI Image */}
    <div className="relative flex-shrink-0">
      <div className="absolute inset-1 rounded-full bg-green-500" />
      <div className="absolute inset-1 rounded-full bg-green-400 blur-xl opacity-80" />
      <div className="absolute inset-0 rounded-full border-2 border-green-400 shadow-[0_0_40px_rgba(34,197,94,0.9)]" />

      <img
        src="/assets/fukk-ai.png"
        alt="Anti AI"
        className="relative z-10 h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
      />
    </div>

    {/* Text */}
    <div className="max-w-xl">
      <h3 className="text-lg font-bold uppercase leading-tight tracking-tight text-white md:text-2xl lg:text-xl">
        We are free from AI generated imaginary
      </h3>

      <span className="mt-2 block bg-gradient-to-r from-white via-[#8EEBFF] to-[#00ff0d] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl lg:text-3xl">
        100% Human made content
      </span>
    </div>
  </div>
</motion.div>
      </div>

      {/* Showreel video modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        videoTitle="Vortex Creative Showreel 2026"
      />
    </section>
  );
}
