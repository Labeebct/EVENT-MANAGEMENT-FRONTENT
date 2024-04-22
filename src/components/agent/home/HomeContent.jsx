import React from "react";

const HomeContent = () => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center w-full h-[calc(100vh-4.5rem)] agent_home_bg">
      <h1 className="font-bold text-black duration-300 hover:scale-[1.03] ease-linear text-center text-[3.3rem] font-playfair">
      Unity in Opera<span className="text-white">tions</span>
      </h1>
      <h3 className="font-cagliostro text-[#000000] text-center text-[1.3rem] sm:mb-[25rem] mb-[20rem]">
        &ldquo;Embracing Diversity, Building Unity&rdquo;
      </h3>{" "}
    </div>
  );
};

export default HomeContent;
