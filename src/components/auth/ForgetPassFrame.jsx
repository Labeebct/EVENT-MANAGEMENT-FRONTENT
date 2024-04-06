const ForgetPassFrame = () => {
  return (
    <div className="w-[35%] min-w-[290px] backdrop-blur-[.07rem]  bg-[#ffffff04]  flex flex-col items-center translate-y-5 h-[420px] rounded-md box_shadow_black">
      <h3 className="text-[1.7rem] font-playfair mt-9   ">Forget password</h3>
      <h3 className="mt-7 font-roboto opacity-85">Entered your registered email address</h3>
      
      <form className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1">
      <div className="flex flex-col gap-2 w-full">
      <label htmlFor="email" className="font-roboto text-[gray] text-[.75rem]">
        Email
      </label>
      <input
        spellCheck={false}
        type="text"
        name="email"
        className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
      />
      </div>    
        <p className="text-center my-3 text-[.9rem] text-red-600">
          Incorrect password
        </p>
        <button
          type="submit"
          className="w-full py-2 mt-4 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ForgetPassFrame;
