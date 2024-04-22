import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const EventHeader = () => {
  return (
    <div className='w-full flex items-center mt-14 sm:mt-0 justify-between px-8 h-16 bg-[#ece9e9]'>
        <h2 className='font-semibold text-[1.3rem] font-inter text-gray-800'>My Events</h2>
       <button className='p-2 px-2 text-[.8rem] duration-200 active:scale-[.97] ease-linear flex items-center rounded-sm bg-black text-white font-inter gap-1'>Add Event<AddIcon sx={{fontSize:22}} /></button>
    </div>
  )
}

export default EventHeader