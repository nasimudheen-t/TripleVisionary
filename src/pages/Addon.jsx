import { Download, File, Shield, Clock, Database } from "lucide-react";

const files = [
  {
    id: 1,
    name: "color_solution.py",
    type: "Python File",
    size: "16 KB",
    icon: "🐍",
    file: "/assets/downloads/color_solution.py",
  },
  {
    id: 2,
    name: "color solution thumbnail.png",
    type: "Thumbnail",
    size: "2MB",
    icon: "🖼️",
    file: "/assets/downloads/color-solution-thumbnail.png",
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
              Download Center
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/30"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-4">
            Project Files
          </h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Access and download all necessary project assets securely. 
            <span className="text-green-400"> Verified files</span> ready for immediate use.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#14141a] border border-white/5 rounded-xl p-5 text-center hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-colors">
              <Database className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-white">{files.length}</p>
            <p className="text-gray-500 text-sm">Total Files</p>
          </div>
          
          <div className="bg-[#14141a] border border-white/5 rounded-xl p-5 text-center hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-white">
              {files.reduce((acc, f) => acc + parseFloat(f.size), 0).toFixed(2)} MB
            </p>
            <p className="text-gray-500 text-sm">Total Size</p>
          </div>
          
          <div className="bg-[#14141a] border border-white/5 rounded-xl p-5 text-center hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-white">Secure</p>
            <p className="text-gray-500 text-sm">Verified Downloads</p>
          </div>

          <div className="bg-[#14141a] border border-white/5 rounded-xl p-5 text-center hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors">
              <File className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-white">Latest</p>
            <p className="text-gray-500 text-sm">Updated Version</p>
          </div>
        </div>

        {/* Files List */}
        <div className="space-y-4">
          {files.map((item, index) => (
            <div
              key={item.id}
              className="group bg-[#14141a] border border-white/5 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/5 hover:translate-x-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/20 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-green-500/50 transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300 truncate">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">{item.type}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                      <span className="text-gray-500">{item.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => downloadFile(item.file)}
                  className="w-full md:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-500/30 hover:scale-105"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/10"></div>
              <span className="text-sm text-gray-600">v2.1.0</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Secure connection</span>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  HTTPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}