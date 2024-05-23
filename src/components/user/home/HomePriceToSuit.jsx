import { useNavigate } from "react-router-dom";

const HomePriceToSuit = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-auto px-7">
      <div className="w-full h-auto bg-cusBlue rounded-lg flex flex-col justify-center items-center">
        <h3 className="text-[2rem] text-center mt-12 font-poiretOne font-bold">
          A Price To Suit Everyone
        </h3>
        <h3 className="font-roboto mt-8 md:px-32 px-6 text-center text-[.99rem] text-gray-600">
          &ldquo;Our event features a diverse range of pricing options to
          accommodate every attendee. Whether you're looking for a basic
          admission ticket at an affordable rate or prefer a VIP experience with
          exclusive perks, we've curated pricing tiers that suit all preferences
          and budgets. From general admission to premium packages, we ensure
          that everyone can participate in and enjoy our event at a level that
          aligns with their financial comfort. Join us for an unforgettable
          experience without breaking the bank, as there's a ticket price to fit
          everyone's needs and desires.&rdquo;
        </h3>
        <button
          onClick={() => navigate("/events")}
          className="bg-cusOrange my-12 shadow-box font-inter ease-in-out duration-200 active:scale-[.95] text-white m-auto text-center p-3 w-[18%] min-w-[200px]"
        >
          EXPLORE NOW
        </button>
      </div>
    </div>
  );
};

export default HomePriceToSuit;
