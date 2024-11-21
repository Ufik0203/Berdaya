import Navbar from "../Fragment/Navbar";

import "swiper/swiper-bundle.css";
import Information from "../Fragment/Information";

const LandingPage = () => {

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="h-full w-full flex justify-center items-center">
                <div className="min-h-[10%] w-full md:mx-20 rounded-xl justify-center items-center my-36 border hidden md:flex">
                    <img
                        src="./images/roadmap.png"
                        alt="Roadmap"
                        className="md:h-[50rem] h-[20rem] w-[32rem] md:w-full rounded-xl bg-cover bg-center bg-no-repeat"
                    />
                </div>
            </div>
            <div className="select-none md:hidden">
                <div className="border min-h-52 mx-2 mt-2 rounded-lg black-glass flex justify-center items-center">
                    <h1 className="font-bold text-2xl">Cooming Soon</h1>
                </div>
                <div className="border h-5 mx-2 mt-2 rounded-lg black-glass flex justify-center items-center">
                    <h1 className="font-bold text-xl">Cooming Soon</h1>
                </div>
                <div className="min-h-24 mx-2 mt-2 grid grid-cols-3 gap-2">
                    <div className="black-glass rounded-lg">
                        <h1 className="font-bold text-xl text-center">Cooming Soon</h1>
                    </div>
                    <div className="black-glass rounded-lg">
                        <h1 className="font-bold text-xl text-center">Cooming Soon</h1>
                    </div>
                    <div className="black-glass rounded-lg">
                        <h1 className="font-bold text-xl text-center">Cooming Soon</h1>
                    </div>
                </div>
                <div className="border min-h-56 mx-2 mt-2 rounded-lg black-glass flex justify-center items-center">
                    <h1 className="font-bold text-2xl">Cooming Soon</h1>
                </div>
            </div>
            <Information></Information>
        </div>
    );
};

export default LandingPage;
