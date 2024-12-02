import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import 'animate.css';
import CardCel from "./CardCel";
import ContentCel from "./ContentCel";
import { Link } from "react-router-dom";
import { getAboutCel } from "../services/about.services";

// const bg_1 = import.meta.env.VITE_BG_1;

const CarouselAbout = () => {
    const [aboutCel, setAboutCel] = useState([]);
    const cardRefs = useRef([]);
    const BgroundRef = useRef([]);
    const loTopRef = useRef([]);
    const [isAnimated, setIsAnimated] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        getAboutCel((data) => {
            setAboutCel(data);
            // console.log(data);
        });
    }, [])

    const scrollToCard = (index) => {
        setActiveIndex(index);
        setIsAnimated(false);

        setTimeout(() => {
            setIsAnimated(true);
        }, 10)

        if (cardRefs.current[index]) {
            cardRefs.current[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }

        if (BgroundRef.current[index]) {
            BgroundRef.current[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }

        if (loTopRef.current[index]) {
            loTopRef.current[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }

        if (index === cards.length - 2) {
            setCards((prevCards) => [
                ...prevCards,
                ...prevCards.map((card, idx) => ({
                    ...card,
                    id: `${card.id}-${prevCards.length + idx + 1}`
                }))
            ]);
        }

        if (index === bGround.length - 2) {
            setBground((prevBground) => [
                ...prevBground,
                ...prevBground.map((bg, idx) => ({
                    ...bg,
                    id: `${bg.id}-${prevBground.length + idx + 1}`
                }))
            ]);
        }

        if (index === loTop.length - 2) {
            setLoTop((prevLoTop) => [
                ...prevLoTop,
                ...prevLoTop.map((lo, idx) => ({
                    ...lo,
                    id: `${lo.id}-${prevLoTop.length + idx + 1}`
                }))
            ]);
        }
    };

    return (
        <motion.section className="h-screen relative select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >

            {/* HEAD SECTION */}
            {aboutCel.length && aboutCel.map((item, index) => {
                return (
                    <>
                        <motion.div className="overflow-hidden h-[100%]"
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ duration: 1.5 }}
                        >
                            <motion.div
                                key={`${item.id}-${activeIndex}`}
                                ref={(el) => (BgroundRef.current[index] = el)}
                                initial={{ opacity: 1, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="w-full h-[100%] fixed bg-black rounded-sm bg-opacity-40"></div>
                                <img
                                    src={`${item.image_url}`}
                                    alt=""
                                    className="bg-cover bg-center bg-no-repeat h-screen w-full"
                                />
                            </motion.div>
                        </motion.div >

                        <Link to='/' className={`absolute top-8 left-8 text-white text-3xl font-crimson font-bold ${isAnimated ? 'animate__animated animate__fadeInLeft' : ''}`}>Home</Link>
                        <div className={`absolute top-32 left-24 text-white text-8xl font-crimson font-bold ${isAnimated ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <h1>Berdaya Mengatasi Solusi</h1>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="absolute left-20 bottom-32 select-text rounded-xl h-[40rem] w-[40rem] flex overflow-hidden">
                            <motion.div
                                key={`${item.id}-${index}`}
                                ref={(el) => (loTopRef.current[index] = el)}
                                initial={{ scale: 1, opacity: 0 }}
                                animate={
                                    index === activeIndex
                                        ? { scale: 1, opacity: 1 }
                                        : { scale: 0, opacity: 0 }
                                }
                                transition={{ duration: 1 }}
                                className="flex-shrink-0 min-w-[100%] cursor-pointer"
                            >
                                <ContentCel>
                                    {/* <ContentCel.ContentCelHead images={lo.image}></ContentCel.ContentCelHead> */}
                                    <ContentCel.ContentCelBody title={item.judul} description={item.description}></ContentCel.ContentCelBody>
                                </ContentCel>
                            </motion.div>
                        </div>


                        {/* CARD SECTION */}
                        <div className="absolute bottom-20 right-6 w-[30%] overflow-x-hidden overflow-y-hidden flex gap-5 hide-scrollbar">
                            <motion.div
                                key={`${item.id}-${index}`}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="flex-shrink-0 w-[35%] min-w-[200px] h-72 cursor-pointer"
                                onClick={() => scrollToCard(index)}
                                initial={{ scale: 1, opacity: 0.7 }}
                                animate={
                                    index === activeIndex
                                        ? { scale: 1, opacity: 1 }
                                        : { scale: 0.8, opacity: 0.7 }
                                }
                                transition={{ duration: 0.5 }}
                            >
                                <CardCel>
                                    <CardCel.HeaderCard
                                        image={item.image_url}
                                        title={item.judul}
                                        topic={'card.topic'}
                                    />
                                </CardCel>
                            </motion.div>
                        </div>
                    </>
                )
            })}
        </motion.section>
    );

};

export default CarouselAbout;
