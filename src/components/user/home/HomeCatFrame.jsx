import { useNavigate } from "react-router-dom";

const HomeCatFrame = ({ list, from }) => {
  const Navigate = useNavigate();
  return (
    <div
      className={`w-[20%] duration-200 ease-in-out ${
        from == "home" && "hover:-translate-y-2"
      } bg-white mx-auto flex justify-center flex-col shadow-box my-5 rounded-[.3rem] min-w-[250px] md:min-w-[300px] h-auto p-4`}
      key={list.id}
    >
      <img
        src={`https://eventapi.labio.shop/${list.categoryImage}`}
        className="w-full h-[13rem]"
        alt="Category"
      />
      <h3 className="text-center mt-5 font-scope-one font-[600] text-[1.3rem] text-[#000000c2] uppercase">
        {list.categoryName}
      </h3>
      <p className="text-center font-roboto text-[.9rem] my-2 p-3 text-gray-800">
        {'"' + list.categoryDiscription + '"'}
      </p>
      <button
        onClick={() => Navigate(`/events?category=${list.categoryName}`)}
        className="bg-cusOrange font-inter ease-in-out duration-200 active:scale-[.95] text-white shadow-box m-auto text-center p-2 w-[90%]"
      >
        EXPLORE
      </button>
    </div>
  );
};

export default HomeCatFrame;
