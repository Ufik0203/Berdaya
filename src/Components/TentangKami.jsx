import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TentangKami = () => {
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);
    const [isActive5, setActive5] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: [0.2] });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        }
    }, [])

    return (
        <div className="2xl:h-full grid 2xl:grid-cols-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-5 2xl:mt-24 overflow-hidden 2xl:gap-5 gap-5" ref={cardRef} onMouseEnter={() => {
            setActive1(false);
            setActive2(false);
            setActive3(false);
            setActive4(false);
            setActive5(false);
        }}>
            <div className={`border 2xl:h-[42rem] h-[20rem] rounded-lg shadow-xl hover:cursor-pointer animate__animated ${isVisible ? 'animate__fadeInDown' : 'animate__fadeOut'} bg-orange-400 flex flex-col border-blue-950`}>
                <div className="h-[68%] w-full">
                    <img src="./images/mario.png" alt="" className="bg-cover bg-center bg-no-repeat w-full h-full"/>
                </div>
                <div />
                <div className="bg-blue-950 2xl:mx-5 2xl:rounded-xl mx-1 rounded-md min-h-10 text-white flex justify-center items-center border border-red-400">
                    <p className="font-bold 2xl:text-xl text-xs">Mario Achmad Taufik</p>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex"
                        onMouseEnter={() => setActive1(true)}
                    >
                        <p className="font-bold 2xl:text-sm text-xs text-blue-950">More Information</p>
                        <img src="./images/icons/info-30.png" alt="" className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <AnimatePresence>
                    {isActive1 && (
                        <motion.div className="absolute 2xl:w-[22.2rem] 2xl:h-[42rem] h-[20rem] black-glass 2xl:rounded-xl rounded-md"
                            initial={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                            }}
                            exit={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => {
                                setActive2(false);
                                setActive3(false);
                                setActive4(false);
                                setActive5(false);
                            }}
                            onMouseLeave={() => setActive1(false)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center 2xl:h-40 items-center">
                                    <h3 className="font-bold 2xl:text-2xl">Full Stack</h3>
                                </div>
                                <div className="flex flex-wrap min-h-20 2xl:mt-36 mt-5 2xl:text-base text-xs hover:cursor-text">
                                    <p>" Saat ini Berdaya mungkin masih kecil, tapi saya percaya Berdaya mampu menangani hal besar. Perjalanan Berdaya
                                        baru dimulai, Berdaya siap tumbuh dan berkembang dalam memberdayakan masyarakat sekaligus menjadi big Company,
                                        dan saya akan terus berkomitmen penuh terhadap Berdaya. "</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`border 2xl:h-[42rem] h-[20rem] rounded-lg shadow-xl hover:cursor-pointer animate__animated ${isVisible ? 'animate__fadeInUp' : 'animate__fadeOut'} bg-orange-400 flex flex-col border-blue-950`}>
                <div className="h-[68%] w-full">
                    <img src="./images/amoure.png" alt="" className="bg-cover bg-center bg-no-repeat w-full h-full"/>
                </div>
                <div />
                <div className="bg-blue-950 2xl:mx-5 2xl:rounded-xl mx-1 rounded-md min-h-10 text-white flex justify-center items-center border border-red-400">
                    <p className="font-bold 2xl:text-xl text-xs">Amoure Chelsy Purba</p>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex"
                        onMouseEnter={() => setActive2(true)}
                    >
                        <p className="font-bold 2xl:text-sm text-xs text-blue-950">More Information</p>
                        <img src="./images/icons/info-30.png" alt="" className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <AnimatePresence>
                    {isActive2 && (
                        <motion.div className="absolute 2xl:w-[22.2rem] 2xl:h-[42rem] h-[20rem] black-glass 2xl:rounded-xl rounded-md"
                            initial={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                            }}
                            exit={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => {
                                setActive1(false);
                                setActive3(false);
                                setActive4(false);
                                setActive5(false);
                            }}
                            onMouseLeave={() => setActive2(false)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center 2xl:h-40 items-center">
                                    <h3 className="font-bold 2xl:text-2xl">Marketing</h3>
                                </div>
                                <div className="flex flex-wrap min-h-20 2xl:mt-36 mt-5 2xl:text-base text-xs hover:cursor-text">
                                    <p>" Bersama Berdaya menciptakan peluang yang lebih besar bagi UMKM, mendorong kemajuan, dan mewujudkan masa depan yang lebih sejahtera untuk Indonesia. "</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`border 2xl:h-[42rem] h-[20rem] rounded-lg shadow-xl hover:cursor-pointer animate__animated ${isVisible ? 'animate__fadeInDown' : 'animate__fadeOut'} bg-orange-400 flex flex-col border-blue-950`}>
                <div className="h-[68%] w-full">
                    <img src="./images/reyhan.png" alt="" className="bg-cover bg-center bg-no-repeat w-full h-full"/>
                </div>
                <div />
                <div className="bg-blue-950 2xl:mx-5 2xl:rounded-xl mx-1 rounded-md min-h-10 text-white flex justify-center items-center border border-red-400">
                    <p className="font-bold 2xl:text-xl text-xs">Reyhan Dwi Cahyo N</p>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex"
                        onMouseEnter={() => setActive3(true)}
                    >
                        <p className="font-bold 2xl:text-sm text-xs text-blue-950">More Information</p>
                        <img src="./images/icons/info-30.png" alt="" className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <AnimatePresence>
                    {isActive3 && (
                        <motion.div className="absolute 2xl:w-[22.2rem] 2xl:h-[42rem] h-[20rem] black-glass 2xl:rounded-xl rounded-md"
                            initial={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                            }}
                            exit={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => {
                                setActive2(false);
                                setActive1(false);
                                setActive4(false);
                                setActive5(false);
                            }}
                            onMouseLeave={() => setActive3(false)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center 2xl:h-40 items-center">
                                    <h3 className="font-bold 2xl:text-2xl">Backend</h3>
                                </div>
                                <div className="flex flex-wrap min-h-20 2xl:mt-36 mt-5 2xl:text-base text-xs hover:cursor-text">
                                    <p>" Setiap langkah yang Berdaya ambil adalah bagian dari perjalanan panjang untuk menciptakan perubahan.
                                        Saya percaya, dengan dedikasi dan inovasi, Berdaya tidak hanya akan mencapai target, tetapi juga menjadi
                                        inspirasi bagi banyak pihak. "</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`border 2xl:h-[42rem] h-[20rem] rounded-lg shadow-xl hover:cursor-pointer animate__animated ${isVisible ? 'animate__fadeInUp' : 'animate__fadeOut'} bg-orange-400 flex flex-col border-blue-950`}>
                <div className="h-[68%] w-full">
                    <img src="./images/yulan.png" alt="" className="bg-cover bg-center bg-no-repeat w-full h-full"/>
                </div>
                <div />
                <div className="bg-blue-950 2xl:mx-5 2xl:rounded-xl mx-1 rounded-md min-h-10 text-white flex justify-center items-center border border-red-400">
                    <p className="font-bold 2xl:text-xl text-xs">Yulan Tamariska Lepur</p>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex"
                        onMouseEnter={() => setActive4(true)}
                    >
                        <p className="font-bold 2xl:text-sm text-xs text-blue-950">More Information</p>
                        <img src="./images/icons/info-30.png" alt="" className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <AnimatePresence>
                    {isActive4 && (
                        <motion.div className="absolute 2xl:w-[22.2rem] 2xl:h-[42rem] h-[20rem] black-glass 2xl:rounded-xl rounded-md"
                            initial={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                            }}
                            exit={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => {
                                setActive2(false);
                                setActive3(false);
                                setActive1(false);
                                setActive5(false);
                            }}
                            onMouseLeave={() => setActive4(false)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center 2xl:h-40 items-center">
                                    <h3 className="font-bold 2xl:text-2xl">Marketing</h3>
                                </div>
                                <div className="flex flex-wrap min-h-20 2xl:mt-36 mt-5 2xl:text-base text-xs hover:cursor-text">
                                    <p>" Dengan Berdaya, kita menanam benih kemajuan untuk ekonomi yang inklusif dan berkelanjutan. Bersama,
                                        melalui semangat dan kolaborasi, kita memperkuat UMKM, membuka peluang baru, dan melangkah menuju Indonesia
                                        yang lebih mandiri, sejahtera, dan penuh harapan. "</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`border 2xl:h-[42rem] h-[20rem] rounded-lg shadow-xl hover:cursor-pointer animate__animated ${isVisible ? 'animate__fadeInDown' : 'animate__fadeOut'} bg-orange-400 flex flex-col border-blue-950`}>
                <div className="h-[68%] w-full">
                    <img src="./images/kika.png" alt="" className="bg-cover bg-center bg-no-repeat w-full pt-10 2xl:pt-[6.5rem] px-3 h-full md:px-10"/>
                </div>
                <div />
                <div className="bg-blue-950 2xl:mx-5 2xl:rounded-xl mx-1 rounded-md min-h-10 text-white flex justify-center items-center border border-red-400">
                    <p className="font-bold 2xl:text-xl text-xs">Syakhila Fortuna</p>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex"
                        onMouseEnter={() => setActive5(true)}
                    >
                        <p className="font-bold 2xl:text-sm text-xs text-blue-950">More Information</p>
                        <img src="./images/icons/info-30.png" alt="" className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <AnimatePresence>
                    {isActive5 && (
                        <motion.div className="absolute 2xl:w-[22.2rem] 2xl:h-[42rem] h-[20rem] black-glass 2xl:rounded-xl rounded-md"
                            initial={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                            }}
                            exit={{
                                clipPath: "inset(100% 0% 0% 0%)",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => {
                                setActive2(false);
                                setActive3(false);
                                setActive1(false);
                                setActive4(false);
                            }}
                            onMouseLeave={() => setActive5(false)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center 2xl:h-40 items-center">
                                    <h3 className="font-bold 2xl:text-2xl">Marketing</h3>
                                </div>
                                <div className="flex flex-wrap min-h-20 2xl:mt-36 mt-5 2xl:text-base text-xs hover:cursor-text">
                                    <p>" Berdaya adalah langkah kecil yang membawa dampak besar. Dengan semangat inovasi dan kerja keras,
                                        Berdaya terus bertumbuh untuk menginspirasi, mendukung, dan memberdayakan masyarakat.
                                        Saya percaya perjalanan ini akan mengubah tantangan menjadi peluang besar. "</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default TentangKami;