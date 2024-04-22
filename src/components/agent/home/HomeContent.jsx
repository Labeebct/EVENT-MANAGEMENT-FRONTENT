import React from "react";

const HomeContent = () => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center w-full h-[calc(100vh-4.5rem)] agent_home_bg">
      <h1 className="font-bold text-black duration-300 drop-shadow-md hover:scale-[1.03] ease-linear text-center text-[3.3rem] font-playfair">
      Harmonious Partner<span className="text-white drop-shadow-md">ship</span>
      </h1>
      <h3 className="font-cagliostro text-[#000000] drop-shadow-xl text-center text-[1.3rem] sm:mb-[20rem] mb-[20rem]">
        &ldquo;Harnessing Unity for Enduring Success&rdquo;
      </h3>{" "}
    </div>
  );
};

export default HomeContent;
