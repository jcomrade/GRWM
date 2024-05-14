
import { useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function Description() {
    const [enterStart, setEnterStart] = useState(false)
    return (
        // Background Image
        <div className="bg-[url('assets/hero.svg')] bg-no-repeat bg-cover w-screen h-screen relative">

            {/* Gradient Overlay */}
            <div className="bg-gradient-to-t from-black to-transparent to-100% w-screen h-screen"></div>

            {/* Hero Content Description */}
            <div className="absolute inset-x-0 bottom-0 h-auto px-32">
                <div className="text-white text-justify tracking-widest flex flex-col items-center justify-center">
                    <div className="text-[170px] font-custom">Bonjour!</div>
                    <div className="text-4xl font-custom2 tracking-wider leading-loose">
                        Dive into a journey of self-discovery with our
                        advance color analysis intelligent system, designed
                        to celebrate your unique beauty. Discover which
                        season reflects your essence and embrace fashion
                        recommendations and lifestyle insights that make you
                        feel truly special.
                    </div>
                    <div className="flex mb-7 flex-col space-y-2 items-center justify-center hover:cursor-pointer" onMouseEnter={()=>{setEnterStart(true)}} onMouseLeave={()=>{setEnterStart(false)}}>
                        <div className="text-[40px] font-serif tracking-[8px] -mr-[10px]">START</div>
                        <div><HiOutlineChevronDoubleDown className={`text-5xl ${enterStart && "animate-bounce duration-1000"}`} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;