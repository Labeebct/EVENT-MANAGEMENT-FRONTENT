import weddingRound1 from '../../../assets/wedding round (1).png'
import weddingRound2 from '../../../assets/wedding round (2).png'
import weddingRound3 from '../../../assets/wedding round (3).png'
import weddingRound4 from '../../../assets/wedding round (4).png'
import weddingRound5 from '../../../assets/wedding round (5).png'

const WeddingRound = () => {
  return (
    <div className='w-full flex justify-around items-center h-40 bg-white'>
        <img src={weddingRound1} className='w-14 md:w-20 h-auto' alt="" />
        <img src={weddingRound2} className='w-14 md:w-20 h-auto' alt="" />
        <img src={weddingRound3} className='w-14 md:w-20 h-auto' alt="" />
        <img src={weddingRound5} className='w-14 md:w-20 h-auto' alt="" />
        <img src={weddingRound4} className='w-14 md:w-20 h-auto' alt="" />
    </div>
  )
}

export default WeddingRound