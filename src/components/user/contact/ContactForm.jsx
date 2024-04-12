import contactImg from "../../../assets/contact.png";

const ContactForm = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center contact_bg">
    <h3 className="text-[3.2rem] mb-10 text-[#ffffff] font-cagliostro">Contact us</h3>
    </div>
    <div className="w-full relative h-auto flex justify-center">
      <div className="w-full p-10 h-auto mt-8 sm:mt-0 flex justify-center flex-wrap">
        <div className="h-[22rem] flex flex-1 justify-center">
          <form action="" className="w-[40%] py-7 min-w-[340px] absolute -top-28 rounded-md bg-cusBlue h-auto shadow-box">
            <div className="w-full px-10 h-auto flex flex-col mt-2 gap-2">
              <label
                htmlFor="email"
                className="font-roboto text-[#808080db] text-[.75rem]"
              >
                Name
              </label>
              <input
                spellCheck={false}
                type="text"
                name="username"
                className="h-[2.5rem] shadow-md outline-none px-3 text-[.9rem]  bg-gray-50"
              />
              <label
                htmlFor="email"
                className="font-roboto  text-[#808080db] text-[.75rem]"
              >
                Email
              </label>
              <div className="h-[2.5rem] relative shadow-md outline-none  text-[.9rem]  bg-gray-50">
                <input
                  type="text"
                  name="email"
                  maxLength={16}
                  className="h-full w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                />
              </div>
              <label
                htmlFor="email"
                className="font-roboto  text-[#808080db] text-[.75rem]"
              >
                Subject
              </label>
              <div className="h-[2.5rem] relative shadow-md outline-none  text-[.9rem]  bg-gray-50">
                <input
                  type="text"
                  name="subject"
                  maxLength={16}
                  className="h-full w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                />
              </div>
              <label
                htmlFor="email"
                className="font-roboto  text-[#808080db] text-[.75rem]"
              >
                Message
              </label>
              <div className="h-[5rem] relative shadow-md outline-none  text-[.9rem]  bg-gray-50">
                <textarea
                  type="text"
                  name="message"
                  className="h-full p-3 resize-none w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 my-6 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 text-white cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
