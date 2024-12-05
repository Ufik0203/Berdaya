import { Link } from "react-router-dom";
import InputEmail from "../Components/InputEmail";

const Footer = () => {
    return (
        <div className="relative w-full h-full">
            <div className="grid 2xl:grid-cols-12 grid-cols-2 2xl:gap-8 bg-black text-white pt-10 ">
                <div className="2xl:col-span-4 col-span-2 mx-8 h-full border-white grid">
                    <div className="flex items-center">
                        <img src="./images/Berdaya-logo.png" alt="" className="h-10 w-10 bg-white rounded-md border border-red-400" />
                        <h1 className="font-bold ms-2 text-xl">Berdaya</h1>
                    </div>
                    <p className="2xl:my-5">JL.Ketintang no.156, Ketintang <span><br />Kec. Gayungan</span> <span><br />Surabaya, Jawa Timur</span></p>
                    <div className="flex">
                        <img src="./images/icons/email-1.png" alt="" className="w-6 h-6 mr-2" />
                        <p>berdayaindonesiamakmur@gmail.com</p>
                    </div>
                    <div className="flex">
                        <p className="text-sm font-semibold hidden 2xl:block">&copy; Copyright 2024 Berdaya</p>
                    </div>
                </div>
                <div className="2xl:col-span-4 w-full h-full hidden 2xl:block">
                    <div className="my-8 mx-20">
                        <h3 className="font-bold text-xl text-center">More</h3>
                        <div className="my-8 flex justify-center font-semibold"> {/* It will be change to Justify-between when the websites is ready */}
                            <div className="grid grid-rows-3 gap-3 px-10">
                                <Link to={''} className="">Cooming Soon</Link>
                                <Link to={''} >Cooming Soon</Link>
                                <Link to={''} >Cooming Soon</Link>
                            </div>
                            {/* <div className="grid grid-rows-3 gap-3 px-10">
                                <Link to={''} className="">Contact Us</Link>
                                <Link to={''} >Placed</Link>
                                <Link to={''} >FAQ</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-4 w-full h-full col-span-2 flex justify-center">
                    <div className="my-8 2xl:mx-20 mx-2">
                        <h3 className="font-bold text-xl text-center">Get Updates</h3>
                        <div className="flex justify-end my-8">
                            <div className="grid grid-rows-3 gap-5">
                                <InputEmail type='email' name='email' placeholder='example@mail.com' ></InputEmail>
                                <div className="grid grid-cols-5 justify-center items-center">
                                    <Link to={''}>
                                        <img src="./images/icons/twt.png" alt="" className="h-10 btn" />
                                    </Link>
                                    <Link to={''}>
                                        <img src="./images/icons/fb.png" alt="" className="h-10 btn" />
                                    </Link>
                                    <Link to={''}>
                                        <img src="./images/icons/wa.png" alt="" className="h-10 btn" />
                                    </Link>
                                    <Link to={''}>
                                        <img src="./images/icons/link-in.png" alt="" className="h-10 btn" />
                                    </Link>
                                    <Link to={''}>
                                        <img src="./images/icons/ig.png" alt="" className="h-10 btn" />
                                    </Link>
                                </div>
                                <div className="flex justify-end items-center text-xs gap-20">
                                    <p className="text-xs font-semibold 2xl:hidden">&copy; Copyright 2024 Berdaya</p>
                                    <Link to={''}>Privacy Policy</Link>
                                    <Link to={''}>Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;