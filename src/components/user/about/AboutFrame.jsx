const AboutFrame = ({ aboutObj }) => {
  return (
    <div className="w-full justify-around h-auto flex mt-3 flex-wrap">
      {aboutObj.map((obj) => (
        <div className="h-auto relative w-auto flex items-center flex-col flex-1 min-w-[230px] max-w-[300px] m-5 shadow-box">
          <img src={obj.img} className="w-60 -z-30 absolute -top-28 h-auto" />
          <h3 className="text-center mt-32 font-scope-one font-[600] text-[1.2rem] text-[#000000c2] uppercase">
            {obj.title}
          </h3>
          <p className="text-center font-roboto text-[.7rem] mt-4 px-5 pb-4 text-gray-500">
            {'"' + obj.discription + '"'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutFrame;
