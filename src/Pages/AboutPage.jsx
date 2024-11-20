import AdditionalContentAbout from "../Components/AdditionalContentAbout";
import CarouselAbout from "../Components/CarouselAbout";

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <div>
                <CarouselAbout></CarouselAbout>
            </div>
            <div className="min-h-screen">
                <div className="min-h-screen bg-white absolute h-full w-full">
                    <AdditionalContentAbout></AdditionalContentAbout>
                </div>
            </div>
            <div className="min-h-screen">
                <div className="min-h-screen bg-white absolute h-full w-full">
                    <div className="w-full h-[75%] bg-slate-600 mt-36">
                        // ROAD MAP
                    </div>
                </div>
            </div>
            <div className="min-h-[20rem] bg-black">

            </div>
        </div>
    )
}

export default AboutPage;