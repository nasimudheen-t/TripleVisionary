import React, { useEffect, useRef, useState } from "react";
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
  const assetRefs = useRef({});
  const [selectedAssetId] = useState(() => {
    return sessionStorage.getItem("selectedAssetId");
  });
  // Filter assets based on selected software
  const filteredAssets =
    activeFilter === "All"
      ? assetData
      : assetData.filter(
          (asset) =>
            asset.software.toLowerCase() === activeFilter.toLowerCase() ||
            asset.extension.toLowerCase() === activeFilter.toLowerCase(),
        );

  useEffect(() => {
    if (!selectedAssetId) return;

    const asset = assetData.find((a) => a.id === selectedAssetId);

    if (!asset) return;

    // change filter automatically
    setActiveFilter(asset.software);

    setTimeout(() => {
      assetRefs.current[selectedAssetId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }, [selectedAssetId]);

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
            className={`px-5 py-2 text-sm font-medium rounded-[8px] transition-all duration-200 ${
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
      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset) => {
            const isSelected = asset.id === selectedAssetId;

            return (
              <div
                key={asset.id}
                ref={(el) => (assetRefs.current[asset.id] = el)}
                className={`bg-gray-900 rounded-[8px] border p-5 transition-all duration-300 ${
                  isSelected
                    ? "border-[#0E7A0D] ring-2 ring-[#0E7A0D] shadow-lg shadow-[#0E7A0D]/40"
                    : "border-gray-800 hover:border-cyan-500/50"
                }`}
              >
                {/* Heading */}
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold text-[#0E7A0D] truncate pr-2">
                    {asset.software}
                  </h2>

                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-[8px] text-gray-400 whitespace-nowrap">
                    {asset.year}
                  </span>
                </div>

                {/* File name */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-mono text-gray-300 truncate">
                    {asset.name}
                  </span>

                  <span className="text-sm font-mono text-cyan-400 bg-gray-800/60 px-2 py-0.5 rounded-[8px] border border-gray-700">
                    {asset.extension}
                  </span>
                </div>

                {/* Download */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800">
                  <div />

                  <a
                    href={asset.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#0E7A0D] text-white text-sm font-medium px-4 py-1.5 rounded-[8px]"
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
            );
          })
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No assets found for{" "}
            <span className="text-cyan-400">{activeFilter}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Asset;
