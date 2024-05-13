import HomeCatSection from "./HomeCatSection";
import HomeWedding from "./HomeWedding";
import WeddingRound from "./WeddingRound";
import timoutLoading from "../../../config/timeoutLoading";
import HomePriceToSuit from "./HomePriceToSuit";
import HomeParty from "./HomeParty";
import LeadingCompanies from "./LeadingCompanies";
import HomeCoFounder from "./HomeCoFounder";
import HomeMemorable from "./HomeMemorable";

const HomeContent = () => {
  timoutLoading();
  return (
    <>
      <div className="w-full h-[calc(100vh-4.5rem)] home_main_bg flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-[#1b3146] duration-300 hover:scale-[1.03] ease-linear text-center text-[3.3rem] font-playfair">
          Beyond Gatherings
        </h1>
        <h3 className="font-cagliostro text-[#10232d] text-center text-[1.3rem] mb-24">
          &ldquo;Transforming Moments into Memories&rdquo;
        </h3>{" "}
      </div>
      <HomeCatSection from={"home"} />
      <HomeWedding />
      <WeddingRound />
      <HomePriceToSuit />
      <HomeParty />
      <LeadingCompanies />
      <HomeCoFounder />
      <HomeMemorable />
    </>
  );
};

export default HomeContent;
