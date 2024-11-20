import { motion } from "framer-motion";

const SeacrhBox = () => {
    return (
        <div className="flex items-center justify-center rounded-md hover:cursor-pointer md:border px-1 py-1 md:mt-5">
            <div>
                <input type="text" className="px-2 w-[100%] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] xl:w-[40rem] focus:outline-none" placeholder="Search..." />
            </div>
            <motion.div className="md:min-h-10 md:min-w-10 h-7 w-16 border flex justify-center items-center rounded-md bg-black select-none"
                initial={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
                <img src="./images/Search-1.png" alt="" className="min-w-5 h-5" />
            </motion.div>
        </div>
    )
}

export default SeacrhBox;