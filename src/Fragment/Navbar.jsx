import SeacrhBox from "../Components/SeacrhBox";
import NavbarMenu from "../Components/NavbarMenu";
import Categories from "../Components/Categories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const handleClick = () => {
        alert("This site is under development");
    }
    return (
        <div className="border-b border-b-blue-400 md:grid md:grid-cols-12 min-h-32 flex select-none bg-blue-950 text-white">
            <div className="col-span-2 hidden xl:flex">

            </div>
            <div className="mx-2 col-span-8 grid">
                <div className="grid grid-cols-5 md:grid-cols-5 justify-center items-center text-xs gap-2 sm:text-sm md:text-base font-semibold">
                    <NavbarMenu>BERANDA</NavbarMenu>
                    <NavbarMenu>
                        <span className="block md:hidden">LANG GANAN</span>
                        <span className="hidden md:block">LANGGANAN</span>
                    </NavbarMenu>
                    <NavbarMenu>SUPER</NavbarMenu>
                    <NavbarMenu>DISKON</NavbarMenu>
                    <div className="rounded-md flex justify-center items-center relative">
                        <Categories name="PAGES" clsname='border-transparent w-full hover:text-red-400'>
                            <Link to={'/about'} className="dropdown-item text-xs font-extrabold hover:bg-gray-300 text-blue-950" tabIndex={-1}>About</Link>
                            <Link className="dropdown-item text-xs font-bold hover:bg-gray-300" tabIndex={-1}>Cooming soon</Link>
                        </Categories>
                    </div>
                </div>
                <div className=" flex justify-center items-center h-9 md:border-none border rounded-md px-1 lg:px-0 py-1 bg-white md:bg-transparent">
                    <Categories name="Kategori" clsname='bg-orange-500 md:hidden'>
                        <Link className="dropdown-item text-xs font-bold hover:bg-gray-300" tabIndex={-1}>Cooming soon</Link>
                    </Categories>
                    <SeacrhBox></SeacrhBox>
                </div>
            </div>
            <div className="md:col-span-2 xl:min-w-28 md:grid justify-end md:justify-center mr-1 md:absolute right-5">
                <div className='md:flex mt-2 font-semibold justify-center md:items-center mx-1 flex'>
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={handleClick}
                    >
                        <Link to='#' className='text-[10px] md:text-sm border border-orange-400 px-2 py-1 flex rounded-md md:px-8 md:py-1 xl:py-2 md:rounded-lg bg-orange-500'>Login </Link>
                    </motion.div>
                    <p className="text-[10px] sm:text-sm mx-1 items-center flex md:mx-2">or</p>
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={handleClick}
                    >
                        <Link to='#' className='text-[10px] md:text-sm border px-2 py-1 border-orange-400 flex rounded-md md:px-8 md:py-1 xl:py-2 md:rounded-lg bg-orange-500'>Register </Link>
                    </motion.div>
                </div>
                <div className="h-full hover:cursor-pointer">
                    <motion.div className="absolute right-3 md:right-10 border top-[80px] bg-red-500 px-2 py-2 rounded-lg"
                        nitial={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={handleClick}
                    >
                        <img src="./images/icons/cart-1.png" alt="" className="w-5 h-5" />
                    </motion.div>
                    <motion.div className="absolute right-14 md:right-24 border top-[80px] bg-red-500 px-2 py-2 rounded-lg"
                        nitial={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={handleClick}
                    >
                        <img src="./images/icons/heart-1.png" alt="" className="w-5 h-5" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;