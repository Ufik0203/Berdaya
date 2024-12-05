import React, { useRef, useEffect, useState } from "react";
import "animate.css";
import { getSolusi } from "../services/about.services";
import { motion } from "framer-motion";

const AdditionalContentAbout = () => {
    const containerRef = useRef(null);
    const [activeItem, setActiveItem] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSolusi, setIsSolusi] = useState([]);
    const [animated, setAnimated] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.intersectionRatio >= 0.2) {
                    setIsVisible(true);
                } else if (entry.intersectionRatio <= 0.9) {
                    setIsVisible(false);
                }
            },
            { threshold: [0.2, 0.9] }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        getSolusi((data) => {
            setIsSolusi(data);
            if (data.length > 0) {
                setActiveItem(data[0]);
            }
        });
    }, []);

    const HandleClick = (item) => {
        setActiveItem(item);
        setAnimated(false);
        setTimeout(() => {
            setAnimated(true);
        }, 10)
    }

    const HandleAnimate = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="h-full overflow-hidden select-none 2xl:absolute mt-20" ref={containerRef}>
            <div className="w-full 2xl:h-36 lg:h-28 h-20 flex justify-center items-center mb-10">
                <div className="bg-blue-950 w-full h-full flex justify-center items-center border border-x-transparent border-y-orange-500">
                    <h1 className={`font-bold 2xl:text-8xl md:text-5xl text-3xl font-bebas text-orange-400 animate__animated ${isVisible ? "animate__fadeInLeft" : "animate__fadeOutLeft"}`}>BERDAYA <span className="text-red-400">SOLUSI</span></h1>
                </div>
            </div>
            <div className="h-[20rem] grid items-center grid-cols-2 md:grid-cols-4 gap-5 mx-10">
                {isSolusi.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={activeIndex === index ? { scale: 1.1 } : { scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={() => HandleAnimate(index)}
                    >
                        <div className={`md:min-h-[14rem] border xl:flex justify-center items-center rounded-xl bg-slate-200 border-orange-500 shadow-xl hover:cursor-pointer px-2 py-2 animate__animated ${isVisible
                            ? index <= 1
                                ? "animate__fadeInLeft"
                                : "animate__fadeInRight"
                            : index <= 1
                                ? "animate__fadeOutLeft"
                                : "animate__fadeOutRight"
                            }`}
                            key={item.id}
                            onClick={() => HandleClick(item)}>
                            <div className="w-full h-full rounded-xl grid 2xl:grid-cols-2">
                                <div className="flex justify-center items-center">
                                    <img src={item.solusi_image_url} alt="" className="lg:w-36 lg:h-36 w-20 h-20" />
                                </div>
                                <div className="flex items-center w-full justify-center 2xl:justify-start lg:mt-5 2xl:mt-0">
                                    <div>
                                        <p className="font-bold md:text-base xl:text-xl text-orange-500 text-center 2xl:text-start">{item.tag}</p>
                                        <p className="font-bold text-xs md:text-base xl:text-xl text-center lg:text-start">{item.judul_solusi}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="h-[50%] w-full flex justify-end">
                <div className={`w-[55%] 2xl:h-[25rem] md:h-[20rem] h-[15rem] mt-14 bg-slate-200 border rounded-l-3xl animate__animated ${isVisible ? "animate__fadeInRight" : "animate__fadeOutRight"}`} />
                <div className={`absolute lg:min-w-[60rem] xl:h-[25rem] xl:right-[0] h-[23rem] mx-10 animate__animated ${isVisible && animated ? "animate__bounceInLeft" : "animate__fadeOutLeft"}`} >
                    <div className="w-full h-full flex items-center flex-wrap 2xl:text-[2.5rem] md:text-2xl font-bold lg:text-3xl">
                        {activeItem ? (
                            <p className="text-blue-950">
                                {activeItem.solusi_description_first}{" "}
                                <span className="text-orange-500">
                                    {activeItem.solusi_description_last}
                                </span>
                            </p>
                        ) : (
                            <p className="text-gray-400">Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalContentAbout;
