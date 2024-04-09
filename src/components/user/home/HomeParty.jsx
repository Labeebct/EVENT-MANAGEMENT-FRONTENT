import React from "react";
import partyImg from "../../../assets/bg (15).jpg";

const HomeParty = () => {
  return (
    <main className="w-full p-1 h-auto mt-6 flex flex-col md:flex-row flex-wrap">
      <div className="h-[30rem] flex flex-col gap-5 justify-center items-center flex-1">
        <h2 className="text-[1.6rem] md:text-[2.4rem] font-inter text-center">
          Exclusive Luxury Party.
        </h2>
        <h3 className="font-roboto text-center text-[1rem] text-gray-600 px-4 md:px-8 my-4">
          &ldquo;Exclusive Luxury Party" conveys an event that promises upscale
          elegance and premium experiences. This type of party typically
          features lavish amenities, sophisticated decor, gourmet catering, and
          high-end entertainment. Attendees can expect a refined atmosphere,
          personalized service, and attention to detail that elevate the
          celebration to a truly luxurious level. Such events often cater to
          discerning guests who appreciate exquisite settings and top-notch
          hospitality. From exclusive venues to curated guest lists, an
          "Exclusive Luxury Party" epitomizes indulgence and exclusivity&rdquo;
        </h3>
      </div>
      <div className="h-[30rem] flex-1 flex justify-center items-center p-10">
        <img src={partyImg} alt="" className="w-auto h-full rounded-xl  duration-500 ease-in hover:scale-[1.02]" />
      </div>
    </main>
  );
};

export default HomeParty;
