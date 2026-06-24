import React, { useState } from "react";
import { assetData, softwareList } from "../utilities/data";

// Get unique software names for filter tabs
// const filteredAssets =
//   selectedFilter === "All"
//     ? assetData
//     : assetData.filter(
//         (item) =>
//           item.software === selectedFilter ||
//           item.extension.toLowerCase() === selectedFilter.toLowerCase()
//       );

const Asset = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter assets based on selected software
  const filteredAssets =
    activeFilter === "All"
      ? assetData
      : assetData.filter(
          (asset) =>
            asset.software.toLowerCase() === activeFilter.toLowerCase() ||
            asset.extension.toLowerCase() === activeFilter.toLowerCase(),
        );

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
                ? "bg-[#0E7A0D] text-white shadow-lg shadow-cyan-500/30"
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
                  className="flex items-center gap-1 bg-[#5FFEBC] hover:bg-[#5FFEBC] text-black text-sm font-medium px-4 py-1.5 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-600/20 hover:shadow-cyan-500/40"
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
