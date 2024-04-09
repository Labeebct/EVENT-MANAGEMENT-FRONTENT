import memory from '../../../assets/memory.jpg'
import memory1 from '../../../assets/memory (1).jpg'
import memory2 from '../../../assets/memory (2).jpg'
import memory3 from '../../../assets/memory (3).jpg'

import React from "react";

const HomeMemorable = () => {
  return (
    <div className="w-full h-auto flex items-center flex-col py-10 px-7 bg-white">
      <h3 className="text-[1.5rem] my-5 font-poiretOne font-bold">
        Our memorable Events ever...
      </h3>
      <div className="w-full flex justify-between h-auto flex-wrap my-10">
        <img src={memory} className='w-72 min-w-64 m-auto h-96 mt-4 ease-in-out duration-200 hover:scale-[1.03] shadow-box rounded-md' alt="" />
        <img src={memory1} className='w-72 min-w-64 m-auto h-96 mt-4 ease-in-out duration-200 hover:scale-[1.03] shadow-box rounded-md' alt="" />
        <img src={memory2} className='w-72 min-w-64 m-auto h-96 mt-4 ease-in-out duration-200 hover:scale-[1.03] shadow-box rounded-md' alt="" />
        <img src={memory3} className='w-72 min-w-64 m-auto h-96 mt-4 ease-in-out duration-200 hover:scale-[1.03] shadow-box rounded-md' alt="" />
      </div>
    </div>
  );
};

export default HomeMemorable;
