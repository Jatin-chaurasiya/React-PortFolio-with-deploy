import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#020617] text-white py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-400 tracking-widest">MY CODING JOURNEY</p>
        <h1 className="text-5xl font-bold mt-2">
          GitHub & LeetCode Stats.
        </h1>
      </div>

      {/* GitHub Section */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        GitHub Statistics
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        
        {/* GitHub Stats */}
        <div className="bg-[#1e1b4b] p-4 rounded-2xl shadow-lg">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Jatin-chaurasiya&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
          />
        </div>

        {/* GitHub Streak */}
        <div className="bg-[#1e1b4b] p-4 rounded-2xl shadow-lg">
          <img
            src="https://streak-stats.demolab.com?user=Jatin-chaurasiya&theme=tokyonight"
            alt="GitHub Streak"
          />
        </div>

        {/* Top Languages */}
        <div className="bg-[#1e1b4b] p-4 rounded-2xl shadow-lg">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jatin-chaurasiya&layout=compact&theme=tokyonight"
            alt="Top Languages"
          />
        </div>

      </div>

      {/* LeetCode Section */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        LeetCode Statistics
      </h2>

      <div className="flex justify-center">
        <div className="bg-black p-4 rounded-2xl shadow-lg border border-gray-700">
          <img
            src="https://leetcard.jacoblin.cool/jatinChaurasiya?theme=dark&font=Ubuntu&ext=activity"
            alt="LeetCode Stats"
          />
        </div>
      </div>

    </section>
  );
};

export default StatsSection;