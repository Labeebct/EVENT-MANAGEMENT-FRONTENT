import amazonLogo from '../../../assets/amazon.png'
import shellLogo from '../../../assets/shell.png'
import xingLogo from '../../../assets/xing.png'
import appleLogo from '../../../assets/apple.png'

const LeadingCompanies = () => {
  return (
    <div className="bg-white w-full items-center px-7 h-auto flex flex-col">
        <hr className="w-[60%] text-black border my-10 min-w-[330px] border-[#00000034]" />
      <h3 className="mt-8 text-cusOrange text-[1.1rem]">Sponsers</h3>
      <h3 className="text-[1.5rem] mt-3 text-center font-poiretOne font-bold">
       5+ World's Leading Companies with us
      </h3>
      <div className="w-full my-11 h-36 flex justify-around shadow-box items-center">
         <div className="flex-1 w-full h-full border-r border-[#00000029] flex items-center justify-center"><img src={amazonLogo} className="w-20 h-auto  duration-200 ease-in-out hover:scale-[1.1]" /></div>
         <div className="flex-1 w-full h-full border-r border-[#00000029] flex items-center justify-center"><img src={shellLogo} className="w-14 h-auto  duration-200 ease-in-out hover:scale-[1.1]" /></div>
         <div className="flex-1 w-full h-full border-r border-[#00000029] flex items-center justify-center"><img src={xingLogo} className="w-14 h-auto  duration-200 ease-in-out hover:scale-[1.1]" /></div>
         <div className="flex-1 w-full h-full flex items-center justify-center"><img src={appleLogo} className="w-14 h-auto  duration-200 ease-in-out hover:scale-[1.1]" /></div>
      </div>
    </div>
  );
};

export default LeadingCompanies;
