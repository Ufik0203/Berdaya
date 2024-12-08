import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const Categories = (props) => {
    const { name, clsname, children } = props;
    const [isDropdown, setIsDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const isOpen = () => setIsDropdown(!isDropdown);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className={`dropdown rounded-md border-2 border-orange-500 ${clsname}`} ref={dropdownRef}>
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="hover:cursor-pointer rounded-sm justify-center items-center flex min-h-6 px-3 select-none"
                onClick={isOpen}
                tabIndex={0}
            >
                <p className="text-xs sm:text-sm font-semibold lg:text-center">{name}</p>
                <img src="./images/icons/dropdown.png" alt="" className="w-5 h-5" />
            </motion.div>
            <AnimatePresence>
                {isDropdown && (
                    <motion.div
                        className="dropdown-menu dropdown-menu-bottom-center w-40 border bg-white absolute ml-8 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeIn" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Categories;  