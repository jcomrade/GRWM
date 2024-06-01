
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Header/NavBar";
function Description() {
    const [scope, animate] = useAnimate();
    const navigate = useNavigate();
    const [enterStart, setEnterStart] = useState(false)
    return (
        // Background Image
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className="bg-[url('assets/hero.svg')] bg-no-repeat bg-cover w-screen h-screen relative">
                <NavBar />
                {/* Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className="bg-gradient-to-t from-black to-transparent to-100% w-screen h-screen">
                </motion.div>

                {/* Hero Content Description */}
                <div className="absolute inset-x-0 bottom-0 h-auto px-32">
                    <div className="text-white text-justify tracking-widest flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-[170px] font-custom">
                            Bonjour!
                        </motion.div>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-4xl font-custom2 tracking-wider leading-loose">
                            Dive into a journey of self-discovery with our
                            advance color analysis intelligent system, designed
                            to celebrate your unique beauty. Discover which
                            season reflects your essence and embrace fashion
                            recommendations and lifestyle insights that make you
                            feel truly special.
                        </motion.div>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5 }}
                            onMouseDown={async () => { await animate(scope.current, { opacity: 1, scale: [0, 1000] }, { duration: 1 }); navigate("/begin") }}
                            className="flex mb-7 flex-col space-y-2 items-center justify-center hover:cursor-pointer" onMouseEnter={() => { setEnterStart(true) }} onMouseLeave={() => { setEnterStart(false) }}>
                            <div className="text-[40px] font-serif tracking-[8px] -mr-[10px]">START</div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}>
                                <HiOutlineChevronDoubleDown className="text-5xl" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            ref={scope}
                            className="bg-black w-1 h-1 z-50 rounded-full"
                        >
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            asds
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className="bg-[url('assets/hero.svg')] bg-no-repeat bg-cover w-screen h-screen relative">
                <NavBar />
                {/* Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className="bg-gradient-to-t from-black to-transparent to-100% w-screen h-screen">
                </motion.div>

                {/* Hero Content Description */}
                <div className="absolute inset-x-0 bottom-0 h-auto px-32">
                    <div className="text-white text-justify tracking-widest flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-[170px] font-custom">
                            Bonjour!
                        </motion.div>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-4xl font-custom2 tracking-wider leading-loose">
                            Dive into a journey of self-discovery with our
                            advance color analysis intelligent system, designed
                            to celebrate your unique beauty. Discover which
                            season reflects your essence and embrace fashion
                            recommendations and lifestyle insights that make you
                            feel truly special.
                        </motion.div>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5 }}
                            onMouseDown={async () => { await animate(scope.current, { opacity: 1, scale: [0, 1000] }, { duration: 1 }); navigate("/begin") }}
                            className="flex mb-7 flex-col space-y-2 items-center justify-center hover:cursor-pointer" onMouseEnter={() => { setEnterStart(true) }} onMouseLeave={() => { setEnterStart(false) }}>
                            <div className="text-[40px] font-serif tracking-[8px] -mr-[10px]">START</div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}>
                                <HiOutlineChevronDoubleDown className="text-5xl" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            ref={scope}
                            className="bg-black w-1 h-1 z-50 rounded-full"
                        >
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Description;