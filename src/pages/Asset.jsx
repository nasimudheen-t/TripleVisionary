import React, { useState } from "react";

// Sample asset data with various software names and extensions
const assetData = [
  // Blender assets
  {
    id: "b1",
    name: "Vortex_Cyberpunk_Scene",
    extension: ".blend",
    software: "Blender",
    year: "2026",
    sizeMB: "284",
    downloadLink: "http://10.2.0.2:8080/stream/9?hash=fdd6e4",
  },
  {
    id: "b2",
    name: "Vortex_Character_Rig",
    extension: ".blend",
    software: "Blender",
    year: "2025",
    sizeMB: "142",
    downloadLink: "#",
  },
  {
    id: "b3",
    name: "Vortex_Environment_Kit",
    extension: ".blend",
    software: "Blender",
    year: "2026",
    sizeMB: "512",
    downloadLink: "#",
  },
  // After Effects assets
  {
    id: "a1",
    name: "Vortex_Title_Animation",
    extension: ".aep",
    software: "After Effects",
    year: "2026",
    sizeMB: "96",
    downloadLink: "#",
  },
  {
    id: "a2",
    name: "Vortex_Motion_Graphics_Template",
    extension: ".aep",
    software: "After Effects",
    year: "2025",
    sizeMB: "210",
    downloadLink: "#",
  },
  // Cinema 4D assets
  {
    id: "c1",
    name: "Vortex_Product_Visualization",
    extension: ".c4d",
    software: "Cinema 4D",
    year: "2026",
    sizeMB: "378",
    downloadLink: "#",
  },
  {
    id: "c2",
    name: "Vortex_Abstract_Shapes",
    extension: ".c4d",
    software: "Cinema 4D",
    year: "2025",
    sizeMB: "65",
    downloadLink: "#",
  },
  // Maya assets
  {
    id: "m1",
    name: "Vortex_VFX_Explosion",
    extension: ".ma",
    software: "Maya",
    year: "2026",
    sizeMB: "430",
    downloadLink: "#",
  },
  {
    id: "m2",
    name: "Vortex_Character_Animation",
    extension: ".mb",
    software: "Maya",
    year: "2025",
    sizeMB: "198",
    downloadLink: "#",
  },
  // Premiere Pro assets
  {
    id: "p1",
    name: "Vortex_Editing_Project",
    extension: ".prproj",
    software: "Premiere Pro",
    year: "2026",
    sizeMB: "156",
    downloadLink: "#",
  },
  {
    id: "p2",
    name: "Vortex_LUT_Pack",
    extension: ".cube",
    software: "Premiere Pro",
    year: "2025",
    sizeMB: "12",
    downloadLink: "#",
  },
  // Additional assets for variety
  {
    id: "n1",
    name: "Vortex_Nuke_Composite",
    extension: ".nk",
    software: "Nuke",
    year: "2026",
    sizeMB: "324",
    downloadLink: "#",
  },
  {
    id: "h1",
    name: "Vortex_Houdini_FX",
    extension: ".hip",
    software: "Houdini",
    year: "2025",
    sizeMB: "567",
    downloadLink: "#",
  },
];

// Get unique software names for filter tabs
const softwareList = [
  "All",
  ...new Set(assetData.map((item) => item.software)),
];

const Asset = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter assets based on selected software
  const filteredAssets =
    activeFilter === "All"
      ? assetData
      : assetData.filter((asset) => asset.software === activeFilter);

  // Handle download click – triggers download of the file from the provided link
  const handleDownload = (link, fileName) => {
    // If the link is '#', simulate a download for demo purposes
    if (link === "#") {
      alert(
        `Download simulation: ${fileName} (In production, this would trigger the actual download)`,
      );
      return;
    }

    // Create an anchor element and trigger download
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = fileName; // set the download filename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-6 md:p-10">
      {/* Header / Navigation (matching the design from the image) */}
      <header className="flex flex-wrap justify-between items-center border-b border-gray-800 pb-4 mb-8">
        <div className="text-2xl font-bold tracking-wider text-cyan-400">
          VORTEX
        </div>
        <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-wider">
          <span className="hover:text-cyan-400 cursor-pointer">ShowCase</span>
          <span className="hover:text-cyan-400 cursor-pointer border-b-2 border-cyan-400 text-cyan-400">
            Assets
          </span>
          <span className="hover:text-cyan-400 cursor-pointer">Addon</span>
          <span className="hover:text-cyan-400 cursor-pointer">Services</span>
          <span className="hover:text-cyan-400 cursor-pointer">Contact</span>
        </nav>
      </header>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-light tracking-wider">
          ASSET <span className="text-cyan-400 font-medium">LIBRARY</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Browse and download production-ready assets by software.
        </p>
      </div>

      {/* Filter Tabs - Software names */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-2">
        {softwareList.map((software) => (
          <button
            key={software}
            onClick={() => setActiveFilter(software)}
            className={`px-5 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
              activeFilter === software
                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {software}
          </button>
        ))}
      </div>

      {/* Asset Grid - Tab by Tab with heading, extension, year, size, download */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-gray-900 rounded-xl border border-gray-800 p-5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Heading: software name + file name */}
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-cyan-300 truncate pr-2">
                  {asset.software}
                </h2>
                <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-gray-400 whitespace-nowrap">
                  {asset.year}
                </span>
              </div>

              {/* File name with extension */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-mono text-gray-300 truncate">
                  {asset.name}
                </span>
                <span className="text-sm font-mono text-cyan-400 bg-gray-800/60 px-2 py-0.5 rounded border border-gray-700">
                  {asset.extension}
                </span>
              </div>

              {/* File size and download button row */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>{asset.sizeMB} MB</span>
                </div>
                <a
                  href={asset.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-600/20 hover:shadow-cyan-500/40"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No assets found for{" "}
            <span className="text-cyan-400">{activeFilter}</span>
          </div>
        )}
      </div>

      {/* Footer with company info and resources (matching design) */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="text-cyan-400 font-medium mb-2">RESOURCES</h4>
            <ul className="space-y-1">
              <li>Video Editing</li>
              <li>Motion Graphics</li>
              <li>3D Animation</li>
              <li>VFX Production</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-medium mb-2">WORK & PROCESS</h4>
            <ul className="space-y-1">
              <li>Featured Portfolio</li>
              <li>Production Pipeline</li>
              <li>Interactive Editor</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-medium mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li>Studio Profile</li>
              <li>Roster Team</li>
              <li>Testimonials</li>
              <li>Career Openings</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-medium mb-2">
              RESOURCES & CONNECT
            </h4>
            <ul className="space-y-1">
              <li>Secure Terminal</li>
              <li>WhatsApp Direct</li>
              <li>Email Address</li>
              <li>Google Calendar</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-4">
          <span>© 2026 VORTEX STUDIO. ALL RIGHTS RESERVED.</span>
          <span className="font-mono">SYS_LOC: CLOUD_06</span>
        </div>
      </footer>
    </div>
  );
};

export default Asset;
