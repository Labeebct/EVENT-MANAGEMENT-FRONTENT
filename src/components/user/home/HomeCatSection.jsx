import HomeCatFrame from "./HomeCatFrame";
import partyImg from "../../../assets/bg (5).jpg";
import cateringImg from "../../../assets/bg (16).jpg";
import weddingImg from "../../../assets/bg (13).jpg";
import conferenceImg from "../../../assets/bg (8).jpg";


const HomeCatSection = ({from}) => {
  const catObj = [
    {
      id:1,
      image: partyImg,
      title: "party",
      description: "Party planning is the art of organizing social events, handling details like venue, decorations, food, and entertainment to ensure a great time for guests",
    },
    {
      id:2,
      image: cateringImg,
      title: "catering",
      description: "Catering involves preparing and serving food and drinks for events. Caterers manage menu, and service to ensure guests enjoy delicious meals tailored to the occasion."      ,
    },
    {
      id:3,
      image: weddingImg,
      title: "wedding",
      description: "Wedding planning includes organizing ceremonies, coordinating venues, decor, food, and entertainment to create memorable experiences for guests."      ,
    },  
    {
      id:4,
      image: conferenceImg,
      title: "conference",
      description: "Conference management involves planning events, arranging venues, speakers, logistics, and materials to ensure informative and engaging experiences for attendees."      ,
    },
  ];

  return (
    <div className={`w-full ${from == 'home' && 'px-7'} h-auto`}>
    <div className={`w-full ${from == 'home' ? 'bg-cusBlue' : 'bg-white'} bg-cusBlue m-auto rounded-md flex-1 gap-3 h-auto flex justify-around ${from == 'home' && 'mt-8'} ${from == 'category' && 'sm:mt-0 mt-6'}  py-4  px-4 flex-wrap`}>
      <HomeCatFrame from={from} catObj={catObj} />
    </div>
    </div>
  );
};

export default HomeCatSection;
