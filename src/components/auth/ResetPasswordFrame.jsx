const ResetPasswordFrame = () => {
  return (
    <div className="w-[35%] min-w-[290px] backdrop-blur-[.1rem]  bg-[#ffffff96]  flex flex-col items-center translate-y-5 h-[520px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">Reset password</h3>
      <form className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1">
      <div className="w-full h-auto flex flex-col mt-5 gap-1">
          <label
            htmlFor="email"
            className="font-roboto text-[gray] text-[.8rem]"
          >
            Old Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="oldPassword"
            maxLength={16}
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 text-[gray] text-[.8rem]"
          >
            New Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="newPassword"
            maxLength={16}
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 text-[gray] text-[.8rem]"
          >
            Confirm Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="confirmPassword"
            maxLength={16}
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
        </div>
        <p className="text-center text- text-[.9rem] text-red-600">
          Incorrect password
        </p>
        <button
          type="submit"
          className="w-full py-2 mt-4 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordFrame;
