import jazin from '../../../assets/jaziin.jpg'
import joyet from '../../../assets/joyet.jpg'
import labio from '../../../assets/labio.png'
import ramees from '../../../assets/ramees.png'

const HomeCoFounder = () => {
  return (
    <div className="w-full h-auto px-7">
      <div className="w-full Founders_bg bg-cusBlue pb-10 flex items-center flex-col h-auto rounded-xl">
        <h2 className="text-[1.6rem] md:text-[1.6rem] text-gray-800 font-inter mt-10  text-center">
          Meet our team
        </h2>
        <h3 className="font-roboto text-center text-[1rem] text-gray-500 px-4 md:px-7 my-4">
          &ldquo; Unveiling Our Dream Team, The Faces Behind Our Success &rdquo;
        </h3>
        <div className="w-auto flex justify-around w-fullp-10 flex-wrap h-auto">
          <div className="shadow-box bg-white flex flex-col p-6 items-center bg-[#ffffff1d] backdrop-blur-[3px] rounded-[.4rem]  w-[290px] m-4 duration-200 ease-in-out hover:scale-[1.01] h-[340px]">
            <img src={labio} alt="" className="w-44 rounded-[50%] h-44 shadow-box" />
            <h3 className="my-4 font-inter text-[1.2rem]  mt-10">Labeeb ct</h3>
            <h3 className="font-inter text-center text-[.9rem] mb-24">
          &ldquo;CEO&rdquo;
        </h3>
          </div>
          <div className="shadow-box bg-white flex flex-col p-6 items-center bg-[#ffffff1d] backdrop-blur-[3px] rounded-[.4rem]  w-[290px] m-4 duration-200 ease-in-out hover:scale-[1.01] h-[340px]">
              <img src={ramees} alt="" className="w-44 rounded-[50%] h-44 shadow-box" />
            <h3 className="my-4 font-inter text-[1.2rem]  mt-10">Ramees kkvl</h3>
            <h3 className="font-inter text-center text-[.9rem] mb-24">
          &ldquo;Supervisor&rdquo;
        </h3>
          </div>
          <div className="shadow-box bg-white flex flex-col p-6 items-center bg-[#ffffff1d] backdrop-blur-[3px] rounded-[.4rem]  w-[290px] m-4 duration-200 ease-in-out hover:scale-[1.01] h-[340px]">
              <img src={jazin} alt="" className="w-44 rounded-[50%] h-44 shadow-box" />
            <h3 className="my-4 font-inter text-[1.2rem]  mt-10">Jazeen Azeez</h3>
            <h3 className="font-inter text-center text-[.9rem] mb-24">
          &ldquo;Team Leader&rdquo;
        </h3>
          </div>
          <div className="shadow-box bg-white flex flex-col p-6 items-center bg-[#ffffff1d] backdrop-blur-[3px] rounded-[.4rem]  w-[290px] m-4 duration-200 ease-in-out hover:scale-[1.01] h-[340px]">
              <img src={joyet} alt="" className="w-44 rounded-[50%] h-44 shadow-box" />
            <h3 className="my-4 font-inter text-[1.2rem]  mt-10">Joyet Joe</h3>
            <h3 className="font-inter text-center text-[.9rem] mb-24">
          &ldquo;Chief Marketing Officer&rdquo;
        </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCoFounder;
