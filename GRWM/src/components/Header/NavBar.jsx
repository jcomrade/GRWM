import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
function NavBar() {
    return (
        <motion.div
            className="absolute z-10 w-full flex flex-col items-center justify-center bg-white bg-opacity-60 py-4"
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration:0.5}}
        >
            <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration:2}}
            src={logo} width={230} className="mt-3" />
        </motion.div>
    )
}

export default NavBar;