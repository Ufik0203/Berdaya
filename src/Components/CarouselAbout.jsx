import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getAboutCel } from "../services/about.services";
import "animate.css";
import TypingText from "./TypingText";
import { Link } from "react-router-dom";

const CarouselAbout = () => {
    const [aboutCel, setAboutCel] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animated, setAnimated] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        getAboutCel((data) => {
            setAboutCel(data);
        })
    }, []);

    useEffect(() => {
        if (aboutCel.length > 0) {
            startScroll();
        }
        return () => stopScroll();
    }, [aboutCel]);

    useEffect(() => {
        const handleSize = () => {
            setIsSmScreen(window.innerWidth < 1080);
        }
        handleSize();
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, [])

    const handleCardClick = (index) => {
        setActiveIndex(index);
        setAnimated(true);
        stopScroll();
        setTimeout(() => {
            startScroll();
        }, 10000);
    };

    const startScroll = () => {
        stopScroll();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % aboutCel.length);
            setAnimated(true);
        }, 5000);
    }

    const stopScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const handleClickSize = () => {
        setIsSmScreen(!isSmScreen);
    }

    return (
        <div className="min-h-screen">
            <div className="2xl:absolute w-full h-full overflow-hidden">
                <div className="min-h-[5rem] w-full bg-transparent flex ml-5">
                    <Link to={'/shop'} className="flex flex-col justify-center">
                        <img src="./images/Berdaya-logo.png" alt="" className="h-10 w-10 mt-2 md:w-16 md:h-16 mr-2 lg:h-20 lg:w-20 lg:mt-0 ml-2" />
                        <span className="font-bold text-center text-xs lg:text-base text-blue-950">Home</span>
                    </Link>
                    <TypingText text="BERDAYA" text2="hadir untuk solusi" color1="text-blue-950" color2="text-orange-500" typingSpeed={100} className="text-xl md:text-4xl 2xl:text-5xl">
                        <span className="blinking-cursor">|</span>
                    </TypingText>
                </div>
                <motion.div className="rounded-2xl select-none flex mx-5 2xl:mx-0 justify-center 2xl:w-full h-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={animated ? { opacity: [0, 1], scale: [0.5, 0.9] } : { opacity: 1, scale: 1 }}
                    onAnimationComplete={() => setAnimated(false)}
                >
                    <img
                        src={aboutCel[activeIndex]?.image_url}
                        alt={`Background`}
                        className="bg-cover bg-center bg-no-repeat w-full rounded-2xl shadow-2xl border border-slate-200 md:min-h-[35rem] 2xl:h-[50rem] 2xl:w-[70rem] h-60"
                    />
                </motion.div>
                <div className="grid lg:grid-cols-2 2xl:grid-cols-none">
                    <motion.div className="2xl:absolute text-white 2xl:h-[25rem] my-5 mx-5 h-[23rem] 2xl:w-[45rem] border border-orange-500 2xl:bottom-10 2xl:left-10 rounded-xl shadow-xl black-glass"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={animated ? { opacity: [0, 1], scale: [0.5, 0.9] } : { opacity: 1, scale: 1 }}
                    >
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className="grid px-5 py-5 hover:cursor-pointer"
                            onClick={handleClickSize}
                        >
                            <p className="font-bold md:text-3xl my-5 text-center 2xl:text-start text-base">{aboutCel[activeIndex]?.judul}</p>
                            <p className="md:text-xl flex flex-col text-sm">
                                {isSmScreen ? `${aboutCel[activeIndex]?.description}` : aboutCel[activeIndex]?.description}
                                {/* <br />
                            <span className=" text-center w-full lg:hidden 2xl:hidden mt-5 text-blue-950 font-semibold text-xs">Click untuk info lebih lanjut</span> */}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="2xl:mr-5 2xl:absolute 2xl:w-[38rem] h-[23rem] lg:mt-5 black-glass right-5 top-64 rounded-xl border mx-5 border-orange-500"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={animated ? { opacity: [0, 1], scale: [0.5, 0.9] } : { opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setAnimated(false)}
                    >
                    <img src={`${aboutCel[activeIndex]?.image_diagram}`} alt="" className="w-full h-full rounded-md"/>
                    </motion.div>
                </div>
            </div>
            <div className="2xl:absolute 2xl:right-[45rem] 2xl:bottom-10 flex justify-center mt-10 2xl:mt-0 2xl:justify-normal">
                {aboutCel.map((item, index) => (
                    <label key={item.id} className={`flex items-center justify-center w-16 h-3 mx-2 rounded-md cursor-pointer border transition-all duration-300 ${activeIndex === index
                        ? "bg-orange-500 border-orange-500"
                        : "bg-slate-600"}`}
                    >
                        <input type="radio" name="aboutRadio" value={index} checked={activeIndex === index} onChange={() => handleCardClick(index)} className="hidden" />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CarouselAbout;
