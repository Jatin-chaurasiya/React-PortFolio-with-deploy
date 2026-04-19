import React, { useState, useEffect } from "react";

const StatCard = ({ src, alt, label }) => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(s => s === "loading" ? "error" : s);
    }, 10000);
    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div className="bg-[#1e1b4b] p-4 rounded-2xl shadow-lg min-w-[280px]">
      
      {/* Loading skeleton */}
      {status === "loading" && (
        <div className="w-full h-[180px] rounded-xl bg-[#2d2a6e] animate-pulse" />
      )}

      {/* Error fallback */}
      {status === "error" && (
        <div className="flex flex-col items-center justify-center h-[180px] rounded-xl border border-gray-700 bg-[#0f172a] gap-2">
          <span className="text-3xl">📡</span>
          <p className="text-gray-400 text-sm">API currently unavailable</p>
          <p className="text-gray-600 text-xs">{label}</p>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={`rounded-xl transition-opacity duration-500 ${
          status === "loaded" ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      />
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#020617] text-white py-16 px-6" id="stats">

      <div className="text-center mb-12">
        <p className="text-gray-400 tracking-widest">MY CODING JOURNEY</p>
        <h1 className="text-5xl font-bold mt-2">GitHub & LeetCode Stats.</h1>
      </div>

      {/* GitHub Stats */}
      <h2 className="text-3xl font-semibold text-center mb-8">GitHub Statistics</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <StatCard
          src="https://github-readme-stats.vercel.app/api?username=Jatin-chaurasiya&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          label="GitHub Readme Stats"
        />
        <StatCard
          src="https://streak-stats.demolab.com?user=Jatin-chaurasiya&theme=tokyonight"
          alt="GitHub Streak"
          label="GitHub Streak Stats"
        />
        <StatCard
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jatin-chaurasiya&layout=compact&theme=tokyonight"
          alt="Top Languages"
          label="Top Languages"
        />
      </div>

      {/* LeetCode Stats */}
      <h2 className="text-3xl font-semibold text-center mb-8">LeetCode Statistics</h2>

      <div className="flex justify-center">
        <div className="bg-black p-4 rounded-2xl shadow-lg border border-gray-700">
          <StatCard
            src="https://leetcard.jacoblin.cool/jatinChaurasiya?theme=dark&font=Ubuntu&ext=activity"
            alt="LeetCode Stats"
            label="LeetCode Card"
          />
        </div>
      </div>

    </section>
  );
};

export default Stats;