import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

const SideBar = () => {
  return (
   <div className="hidden md:flex h-full w-80 bg-cusBlue justify-center items-center flex-col gap-3">
         <h1 className="font-[600] text-[2.1rem] text-cusOrange font-serif tracking-[.7rem]">LABIO</h1>
         <p className="tracking-widest  mb-20 font-extrabold font-poiretOne text-black text-[1.3rem]">EVENTS & CATERING</p>
         <ul className="flex translate-y-44 gap-2">
            <li className="p-1 cursor-pointer"><InstagramIcon sx={{fontSize:'1.3rem', color:'black' , opacity:'.6'}} /></li>
            <li className="p-1 cursor-pointer"><WhatsAppIcon sx={{fontSize:'1.3rem', color:'black' , opacity:'.6'}} /></li>
            <li className="p-1 cursor-pointer"><XIcon sx={{fontSize:'1.2rem', color:'black' , opacity:'.6'}} /></li>
         </ul>
   </div>
  )
}

export default SideBar