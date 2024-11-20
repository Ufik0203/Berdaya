import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NavbarMenu = (props) => {
    const { children, path, clsname } =props;
    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`select-none ${clsname} h-full flex justify-center items-center text-center`}
        >
            <Link to={`${path}`} className={`text-[11px] sm:text-sm ${clsname}`}>{children}</Link>
        </motion.div>
    )
}

export default NavbarMenu;