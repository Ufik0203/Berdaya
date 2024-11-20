import SeacrhBox from "../Components/SeacrhBox";
import NavbarMenu from "../Components/NavbarMenu";
import Categories from "../Components/Categories";

const Navbar = () => {
    return (
        <div className="border border-red-500 md:grid md:grid-cols-12 min-h-32 flex select-none">
            <div className="col-span-2 hidden md:flex">

            </div>
            <div className="mx-2 col-span-8 grid">
                <div className="grid grid-cols-5 md:grid-cols-6 justify-center items-center text-xs gap-2 sm:text-sm md:text-base font-semibold">
                    <NavbarMenu>HOME</NavbarMenu>
                    <NavbarMenu>BEST SELLER</NavbarMenu>
                    <NavbarMenu>TOP RATED</NavbarMenu>
                    <NavbarMenu>DISKON</NavbarMenu>
                    <NavbarMenu>PAGES</NavbarMenu>
                    <NavbarMenu path='/about' clsname="hidden md:flex">ABOUT</NavbarMenu>
                </div>
                <div className=" flex justify-center items-center h-9 md:border-none border rounded-md px-1 py-1">
                    <Categories></Categories>
                    <SeacrhBox></SeacrhBox>
                </div>
            </div>
            <div className="md:col-span-2 min-w-28 border grid justify-end md:justify-center">
                <div className='border flex mt-2 font-semibold'>
                    <NavbarMenu clsname='h-min'>Login </NavbarMenu>
                    <p className="text-xs sm:text-sm mx-2">or</p>
                    <NavbarMenu clsname='h-min'> Register</NavbarMenu>
                </div>
                <div>
                    // cart dll
                </div>
            </div>
        </div>
    )
}

export default Navbar;