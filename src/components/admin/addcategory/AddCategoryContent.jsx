import React from 'react'

const AddCategoryContent = () => {
  return (
    <div className='h-full w-full p-10 flex items-center justify-center'>
      <form action="" className='h-full rounded-md bg-white min-w-80 flex items-center flex-col py-4 px-10 w-[40%] border shadow-box border-[#0000000c] '>
        <img className='w-36 h-36 ' alt="" />
        <div className="w-auto mt-3 flex h-[3rem] items-center">
                <div className="my-4 w-full p-2 px-4 bg-cusGreen text-white font-poppins font-medium text-[.7rem] rounded-sm">
                  CHOOSE FILE
                </div>
                <input className="absolute opacity-0 w-24"
                 type="file" encType="multipart/form-data"
                 name="foodImg"/>
              </div>

              <span className="flex w-full flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-70">
            Category Name
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border border-[#6363631a] outline-none px-4 text-[.9rem]"
            type="text"
            name="firstname"
          />
        </span> 

              <span className="flex mt-3 w-full flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-70">
            Category Description
          </label>
          <textarea
            spellCheck={false}
            className="h-[8rem] resize-none shadow-md w-full border border-[#6363631a] outline-none p-3 text-[.9rem]"
            type="text"
            name="firstname"
          />
        </span> 

        <button type="button" className='w-full h-[2.7rem] bg-cusGreen mt-4 text-white font-roboto duration-150 active:scale-[.98] ease-in-out'>Submit</button>

      </form>
    </div>
  )
}

export default AddCategoryContent