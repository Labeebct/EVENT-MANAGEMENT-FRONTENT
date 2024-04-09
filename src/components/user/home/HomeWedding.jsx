import weddingImg from "../../../assets/bg (19).jpg";

const HomeWedding = () => {
  return (
    <main className="w-full h-auto p-1 flex flex-col md:flex-row flex-wrap">
      <div className="h-[30rem] flex-1 flex justify-center items-center p-10">
        <img src={weddingImg} alt="" className="w-auto h-full rounded-xl  duration-500 ease-in hover:scale-[1.02]"/>
      </div>
      <div className="h-[30rem] flex flex-col gap-5 justify-center items-center flex-1">
        <h2 className="text-[1.6rem] md:text-[2.4rem] font-inter text-center">Cherished Wedding Day.</h2>
        <h3 className="font-roboto text-center text-[1rem] text-gray-600 px-4 md:px-7 my-4">
          &ldquo;Cherished Wedding Day" encapsulates the heartfelt joy and 
          significance of a couple's special day. This brief phrase evokes
          images of love, happiness, and lasting memories created during a
          wedding celebration. It signifies a deeply meaningful event filled
          with cherished moments shared with loved ones, capturing the essence
          of the couple's commitment and the beginning of their journey
          together&rdquo;
        </h3>
        <p className="font-cagliostro font-light text-[.78rem] text-gray-700 translate-y-10 my-2 ">~Sponsored by labio, the Innovative future</p>
      </div>
    </main>
  );
};

export default HomeWedding;
