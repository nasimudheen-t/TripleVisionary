import { Download, File, Shield, Clock, Database } from "lucide-react";

const files = [
  {
    id: 1,
    name: "color_solution.py",
    type: "Python File",
    size: "16 KB",
    file: "/assets/downloads/color_solution.py",
    thumbnail: "/assets/downloads/color-solution-thumbnail.png",
  },
];

const downloadFile = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default function Addon() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-500/30"></div>
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
              Addon & plugins
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/30"></div>
          </div>
        </div>

        {/* File Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-[#14141a] border border-white/5 rounded-[8px] overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1"
            >
              {/* Thumbnail Image */}
              <div className="relative w-full bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4">
                <div className="relative rounded-[8px] overflow-hidden bg-[#0a0a0f] border border-white/10">
                  <img
                    src={file.thumbnail}
                    alt={file.name}
                    className="w-full h-auto max-h-[300px] object-contain"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* File Info Section */}
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <File className="w-5 h-5 text-green-400" />
                      </div>
                      <h2 className="text-xl font-bold text-white truncate">
                        {file.name}
                      </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ml-13 text-sm">
                      <span className="text-gray-400">{file.type}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                      <span className="text-gray-400">{file.size}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadFile(file.file)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-6 py-3  rounded-[8px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Download Now
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Shield size={14} className="text-green-400" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={14} className="text-emerald-400" />
                    <span>Updated</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="px-2 py-0.5 rounded-[8px] bg-green-500/10 text-green-400 border border-green-500/20">
                      Python 3.8+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {/* <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>All systems operational</span>
              </div> */}
              <div className="hidden md:block w-px h-6 bg-white/10"></div>
              {/* <span className="text-sm text-gray-600">v2.1.0</span> */}
            </div>

            {/* <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Secure connection</span>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  HTTPS
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
