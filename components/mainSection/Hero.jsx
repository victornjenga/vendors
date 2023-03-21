import Link from 'next/link'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillFire } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";

export const Hero = () => {

  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="flex items-start gap-20 mt-[70px] md:mt-5 md:flex-col">
        <div className="max-w-[600px] mt-4 md:text-center">
          <p className=" text-gray-400 tracking-wider font-semibold mb-3 text-xl flex items-center gap-1">
            TRENDY COLLECTION&apos;S{' '}
            <AiFillFire size={30} className="text-primary-color" />
          </p>
          <div
            style={{ wordSpacing: '15px' }}
            className="text-[90px] font-bold tracking-tighter mb-10"
          >
            <p className="whitespace-nowrap">DRESSES TO</p>
            <p className="whitespace-nowrap">BE NOTICED</p>
          </div>
          <div className="!text-medium !border-l-4 !border-gray-200 !pl-5 !bg-white !leading-loose !text-lg !max-w-[500px]">
            Fashion is part of the daily air and it changes all the time, with
            all the events
          </div>
          <div className="mt-9 flex items-center gap-5">
              <div
                className="uppercase bg-primary-color  font-medium text-lg
                rounded-full
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#e5b32f] 
                hover:bg-[#fecd48] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-3 px-5
                group
                inline-block text-center
                animate-pulse
                "
              >
                <div className="flex gap-3 items-center">
                  <p>Start shopping</p> <BsFillPlayCircleFill size={25} />
                </div>
                <div
                  className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
                ></div>
              </div>
            
              <div className="flex gap-2 items-center">
                <AiFillPlaySquare size={57} className="text-black" />
                <p className="font-medium text-lg">What&apos;s Trending?</p>
              </div>
          </div>
        </div>

        <div className="relative w-[600px] h-[600px] shrink-0 overflow-x-hidden">
          {/* <Image src={guy} alt="" layout="fill" className="object-cover" /> */}
        </div>
      </div>
    </div>
  )
}
export default Hero
