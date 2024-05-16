import HomeCatFrame from "./HomeCatFrame";
import { catgoryContext } from "../../../context/CategoryContext";
import partyImg from "../../../assets/bg (5).jpg";
import cateringImg from "../../../assets/bg (16).jpg";
import weddingImg from "../../../assets/bg (13).jpg";
import conferenceImg from "../../../assets/bg (8).jpg";

const HomeCatSection = ({ from }) => {
  const catgoryDatas = catgoryContext();


  return (
    <div className={`w-full ${from == "home" && "px-7"} h-auto`}>
      <div
        className={`w-full ${
          from == "home" ? "bg-cusBlue" : "bg-white"
        } bg-cusBlue m-auto rounded-md flex-1 gap-3 h-auto  ${
          from == "home" && "mt-8"
        } ${from == "category" && "sm:mt-0 mt-6"}  py-4  px-4 flex ${
          from == "home"
            ? "justify-around flex-wrap"
            : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-1 grid"
        }`}
      >
        {catgoryDatas
          .slice(0, from === "home" ? 4 : catgoryDatas.length)
          .map((list) => (
            <HomeCatFrame key={list._id} from={from} list={list} />
          ))}
      </div>
    </div>
  );
};

export default HomeCatSection;
