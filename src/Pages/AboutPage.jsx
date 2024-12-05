import { useEffect, useRef, useState } from "react";
import AdditionalContentAbout from "../Components/AdditionalContentAbout";
import CarouselAbout from "../Components/CarouselAbout";
import TentangKami from "../Components/TentangKami";
import Footer from "../Fragment/Footer";
import NewRoadmap from "../Fragment/NewRoadmap";

const AboutPage = () => {
    const [isRoadmap, setIsRoadmap] = useState(false);
    const [isTentang, setIsTentang] = useState(false);
    const TentangRef = useRef(null);
    const RoadmapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === RoadmapRef.current) {
                        setIsRoadmap(entry.isIntersecting);
                    } else if (entry.target === TentangRef.current) {
                        setIsTentang(entry.isIntersecting);
                    }
                })
            },
            { threshold: [0.2] }
        );

        if (TentangRef.current && RoadmapRef.current) {
            observer.observe(TentangRef.current);
            observer.observe(RoadmapRef.current);
        }

        return () => {
            if (TentangRef.current && RoadmapRef.current) {
                observer.unobserve(TentangRef.current);
                observer.unobserve(RoadmapRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col  overflow-hidden xl:overflow-visible">
            <div className="">
                <CarouselAbout />
            </div>
            <div className="lg:min-h-screen mb-16">
                <div className="lg:absolute md:h-full md:w-full">
                    <AdditionalContentAbout />
                </div>
            </div>
            <div className="2xl:min-h-screen relative" ref={RoadmapRef}>
                <div className="bg-blue-950 w-full h-[5rem] 2xl:h-36 flex lg:h-28 justify-center items-center md:mt-20 border mb-12 md:mb-28 2xl:mt-36 border-x-transparent border-y-orange-500">
                    <h1
                        className={`font-bold 2xl:text-8xl text-4xl lg:text-5xl font-bebas text-orange-400 animate__animated ${isRoadmap
                            ? "animate__fadeInRight"
                            : "animate__fadeOutRight"
                            }`}
                    >
                        BERDAYA <span className="text-red-400">ROADMAP</span>
                    </h1>
                </div>
                <div>
                    {/* <Roadmap /> */}
                    <NewRoadmap></NewRoadmap>
                </div>
            </div>
            <div className="xl:max-h-[20rem] grid xl:gap-10 mt-16 relative">
                <div className="min-h-screen grid grid-rows-2">
                    <div className="h-full w-full row-span-2">
                        <div
                            ref={TentangRef}
                            className="w-full 2xl:h-36 lg:h-28 h-20 mb-10 lg:mb-20 flex justify-center items-center lg:mt-20 2xl:mt-32"
                        >
                            <div className="bg-blue-950 w-full h-full flex justify-center items-center border border-x-transparent border-y-orange-500">
                                <h1
                                    className={`font-bold 2xl:text-8xl lg:text-5xl text-4xl font-bebas text-orange-400 animate__animated ${isTentang
                                        ? "animate__fadeInLeft"
                                        : "animate__fadeOutLeft"
                                        }`}
                                >
                                    BERDAYA <span className="text-red-400">TEAM</span>
                                </h1>
                            </div>
                        </div>
                        <TentangKami />
                    </div>
                    <div>
                        <div className="flex justify-center items-center w-full my-10 lg:h-28 h-20 2xl:h-36 bg-blue-950 mt-14 2xl:mt-28 border border-y-orange-500 border-x-transparent">
                            <h1
                                className={`font-bold 2xl:text-8xl lg:text-5xl text-4xl font-bebas text-orange-400 animate__animated ${isTentang
                                    ? "animate__fadeOutLeft"
                                    : "animate__fadeInLeft"
                                    }`}
                            >
                                BERDAYA <span className="text-red-400">CONTACT</span>
                            </h1>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full mt-10">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
