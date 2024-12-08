import { useEffect, useRef, useState } from "react";
import TypingText from "../Components/TypingText";
import { motion } from "framer-motion";

const NewRoadmap = () => {
    const [mainProgress, setMainProgress] = useState(0);
    const [mainScrollProgress, setMainScrollProgress] = useState(0);
    const [branchScrollProgress1, setBranchScrollProgress1] = useState(0);
    const [branchScrollProgress2, setBranchScrollProgress2] = useState(0);
    const [branchScrollProgress3, setBranchScrollProgress3] = useState(0);
    const [branchScrollProgress4, setBranchScrollProgress4] = useState(0);
    const [branchProgress1, setBranchProgress1] = useState(0);
    const [branchProgress2, setBranchProgress2] = useState(0);
    const [branchProgress3, setBranchProgress3] = useState(0);
    const [branchProgress4, setBranchProgress4] = useState(0);
    const [branchScroll1, setBranchScroll1] = useState(false);
    const [branchScroll2, setBranchScroll2] = useState(false);
    const [branchScroll3, setBranchScroll3] = useState(false);
    const [branchScroll4, setBranchScroll4] = useState(false);
    const [isMainActive, setIsMainActive] = useState(false);
    const [isBranchActive1, setIsBranchActive1] = useState(false);
    const [isBranchActive2, setIsBranchActive2] = useState(false);
    const [isBranchActive3, setIsBranchActive3] = useState(false);
    const [isBranchActive4, setIsBranchActive4] = useState(false);
    const [isCompleted1, setIsCompleted1] = useState(false);
    const [isCompleted2, setIsCompleted2] = useState(false);
    const [isCompleted3, setIsCompleted3] = useState(false);
    const [isCompleted4, setIsCompleted4] = useState(false);
    const [scrollComlpeted1, setScrollCompleted1] = useState(false);
    const [scrollComlpeted2, setScrollCompleted2] = useState(false);
    const [scrollComlpeted3, setScrollCompleted3] = useState(false);
    const [scrollComlpeted4, setScrollCompleted4] = useState(false);
    const roadmapRef = useRef(null);
    const scrollRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const element = scrollRef.current;
            const rect = element.getBoundingClientRect();
            const elementHeight = rect.height;
            const offset = 410;
            const scrollTop = Math.max(0, -rect.top + offset);
            const progress = (scrollTop / elementHeight) * 100;
            setMainScrollProgress(progress);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const visibility = entry.intersectionRatio * 100;
                if (visibility <= 10) {
                    setMainProgress(0);
                    setMainScrollProgress(0);
                    setBranchProgress1(0);
                    setBranchProgress2(0);
                    setBranchProgress3(0);
                    setBranchProgress4(0);
                    setIsMainActive(false);
                    setIsBranchActive1(false);
                    setIsBranchActive2(false);
                    setIsBranchActive3(false);
                    setIsBranchActive4(false);
                    setIsCompleted1(false);
                    setIsCompleted2(false);
                    setIsCompleted3(false);
                    setIsCompleted4(false);
                } else if (visibility >= 50) {
                    setTimeout(() => setIsMainActive(true), 0);
                }
            },
            {
                threshold: [0.1, 0.5],
            }
        );

        if (roadmapRef.current) {
            observer.observe(roadmapRef.current);
        }

        return () => {
            if (roadmapRef.current) {
                observer.unobserve(roadmapRef.current);
            }
        };
    }, []);

    {/* Logic Animation */ }
    useEffect(() => {
        if (mainProgress === 20) {
            setIsBranchActive1(true);
        }

        if (mainProgress === 43) {
            setIsBranchActive2(true);
        }

        if (mainProgress === 68) {
            setIsBranchActive3(true);
        }

        if (mainProgress === 90) {
            setIsBranchActive4(true);
        }

        if (branchProgress1 === 50) {
            setIsCompleted1(true);
        }

        if (branchProgress2 === 50) {
            setIsCompleted2(true);
        }

        if (branchProgress3 === 50) {
            setIsCompleted3(true);
        }

        if (branchProgress4 === 50) {
            setIsCompleted4(true);
        }
    }, [mainProgress, branchProgress1, branchProgress2, branchProgress3, branchProgress4]);

    {/* Logic Scroll */ }
    useEffect(() => {
        if (mainScrollProgress >= 7) {
            setBranchScroll1(true);
        } else if (mainScrollProgress <= 9) {
            setBranchScroll1(false);
            setScrollCompleted1(false);
            setBranchScrollProgress1(0);
        }

        if (mainScrollProgress >= 30) {
            setBranchScroll2(true);
        } else if (mainScrollProgress <= 32) {
            setBranchScroll2(false);
            setScrollCompleted2(false)
            setBranchScrollProgress2(0);
        }

        if (mainScrollProgress >= 50) {
            setBranchScroll3(true);
        } else if (mainScrollProgress <= 50) {
            setBranchScroll3(false);
            setScrollCompleted3(false);
            setBranchScrollProgress3(0);
        }

        if (mainScrollProgress >= 73) {
            setBranchScroll4(true);
        } else if (mainScrollProgress <= 73) {
            setBranchScroll4(false);
            setScrollCompleted4(false);
            setBranchScrollProgress4(0);
        }

        if (branchScrollProgress1 === 100) {
            setScrollCompleted1(true);
        }

        if (branchScrollProgress2 === 100) {
            setScrollCompleted2(true);
        }

        if (branchScrollProgress3 === 100) {
            setScrollCompleted3(true);
        }

        if (branchScrollProgress4 === 100) {
            setScrollCompleted4(true);
        }

    }, [mainScrollProgress, branchScrollProgress1, branchScrollProgress2, branchScrollProgress3, branchScrollProgress4]);

    useEffect(() => {
        if (branchScroll1) {
            const branch1Interval = setInterval(() => {
                setBranchScrollProgress1((prev) => (prev < 100 ? prev + 1 : 100));
            }, 0);
            return () => clearInterval(branch1Interval);
        }
    }, [branchScroll1]);

    useEffect(() => {
        if (branchScroll2) {
            const branch2Interval = setInterval(() => {
                setBranchScrollProgress2((prev) => (prev < 100 ? prev + 1 : 100));
            }, 0);
            return () => clearInterval(branch2Interval);
        }
    }, [branchScroll2])

    useEffect(() => {
        if (branchScroll3) {
            const branch3Interval = setInterval(() => {
                setBranchScrollProgress3((prev) => (prev < 100 ? prev + 1 : 100));
            }, 0);
            return () => clearInterval(branch3Interval);
        }
    }, [branchScroll3])

    useEffect(() => {
        if (branchScroll4) {
            const branch4Interval = setInterval(() => {
                setBranchScrollProgress4((prev) => (prev < 100 ? prev + 1 : 100));
            }, 0);
            return () => clearInterval(branch4Interval);
        }
    }, [branchScroll4])

    useEffect(() => {
        if (isMainActive) {
            const mainInterval = setInterval(() => {
                setMainProgress((prev) => (prev < 100 ? prev + 1 : 100));
            }, 100);

            return () => clearInterval(mainInterval);
        }
    }, [isMainActive]);

    useEffect(() => {
        if (isBranchActive1) {
            const branch1Interval = setInterval(() => {
                setBranchProgress1((prev) => (prev < 50 ? prev + 1 : 50));
            }, 8);

            return () => clearInterval(branch1Interval);
        }
    }, [isBranchActive1]);

    useEffect(() => {
        if (isBranchActive2) {
            const branch2Interval = setInterval(() => {
                setBranchProgress2((prev) => (prev < 50 ? prev + 1 : 50));
            }, 8);

            return () => clearInterval(branch2Interval);
        }
    }, [isBranchActive2]);

    useEffect(() => {
        if (isBranchActive3) {
            const branch3Interval = setInterval(() => {
                setBranchProgress3((prev) => (prev < 50 ? prev + 1 : 50));
            }, 8);

            return () => clearInterval(branch3Interval);
        }
    }, [isBranchActive3]);

    useEffect(() => {
        if (isBranchActive4) {
            const branch4Interval = setInterval(() => {
                setBranchProgress4((prev) => (prev < 50 ? prev + 1 : 50));
            }, 8);

            return () => clearInterval(branch4Interval);
        }
    }, [isBranchActive4]);

    return (
        <div className="flex flex-col h-[80rem] bg-slate-800 border border-y-orange-500 border-x-transparent" ref={roadmapRef}>
            <div className="flex lg:h-[20rem] h-[12rem] justify-center relative">
                <div className="border-4 lg:w-[30rem] w-[20rem] flex justify-center h-[5rem] lg:h-[10rem] mt-10 rounded-2xl bg-blue-950 border-orange-400">
                    <div className="absolute lg:mt-5">
                        <TypingText text="2024 -" text2="2025" typingSpeed={100} className='text-orange-400 text-2xl lg:text-5xl 2xl:text-7xl font-bold'>
                            <TypingText text="2024 -" text2="2025" color2="text-lime-400" typingSpeed={100} className='absolute top-0 text-red-400 font-thin' />
                        </TypingText>
                    </div>
                </div>
            </div>
            <div className="flex-col h-full justify-center items-center mb-20 mt-5 hidden lg:flex">
                <div className="w-[80%] grid grid-cols-4 gap-5 h-[50%] relative">
                    <div className="grid grid-rows-2 col-span-2 lg:col-span-1">
                        {isCompleted1 && (
                            <div className="flex justify-center">
                                <motion.div className=" flex flex-col bg-slate-200 border-8 border-red-400 w-full rounded-xl z-10"
                                    initial={{ opacity: 0.5, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <p className="text-center mt-5 font-bold text-lg text-blue-950">Stage 1</p>
                                    <p className="text-center font-bold text-lg text-blue-950">Soft Launching</p>
                                    <p className="text-center mb-5 font-bold text-sm text-orange-500">November 2024</p>
                                    <div className="h-max flex mx-5 flex-wrap min-w-[12rem]">
                                        <p className="text-blue-950 font-semibold">Memperkenalkan pengembangan ide dan aplikasi serta penggalian fitur.</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                        {isBranchActive1 && (
                            <div className="flex justify-center">
                                <div className="absolute h-[49%] w-5 bottom-0 z-0">
                                    <div className="absolute bottom-0 w-full bg-red-400 transition-all duration-200 ease-in-out"
                                        style={{
                                            height: `${(branchProgress1 / 50) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-rows-2 col-start-3 col-span-2 lg:-col-start-3 lg:col-span-1">
                        {isCompleted3 && (
                            <div className="flex justify-center">
                                <motion.div className="flex flex-col bg-slate-200 border-8 border-red-400 w-full rounded-xl z-10"
                                    initial={{ opacity: 0.5, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <p className="text-center mt-5 font-bold text-lg text-blue-950">Stage 3</p>
                                    <p className="text-center font-bold text-lg text-blue-950">Grand Launching</p>
                                    <p className="text-center mb-5 font-bold text-sm text-orange-500">Mei 2025</p>
                                    <div className="h-max flex mx-5 flex-wrap min-w-[12rem]">
                                        <p className="text-blue-950 font-semibold">Platform dirilis untuk beberapa pengguna saja sebagai bentuk testing awal.</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                        {isBranchActive3 && (
                            <div className="flex justify-center">
                                <div className="absolute h-[49%] w-5 bottom-0 z-0">
                                    <div className="absolute bottom-0 w-full bg-red-400 transition-all duration-200 ease-in-out"
                                        style={{
                                            height: `${(branchProgress3 / 50) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-[85%] h-8 rounded-full bg-gray-300 overflow-hidden relative">
                    <div className=" bg-red-400 w-full h-full relative" style={{
                        width: `${mainProgress}%`,
                        transition: `width 500ms `,
                    }} >
                        <p className="w-full text-end text-white font-bold px-5">{mainProgress}%</p>
                    </div>
                </div>
                <div className="w-[80%] grid grid-cols-4 gap-5 h-[50%] relative">
                    <div className="grid grid-rows-2 col-span-2 lg:col-span-1 lg:col-start-2">
                        {isBranchActive2 && (
                            <div className="flex justify-center">
                                <div className="absolute h-[50%] w-5 top-0">
                                    <div className="absolute top-0 w-full bg-red-400 transition-all duration-200 ease-in-out"
                                        style={{
                                            height: `${(branchProgress2 / 50) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                        {isCompleted2 && (
                            <div className="flex justify-center">
                                <motion.div className="flex flex-col bg-slate-200 border-8 border-red-400 w-full rounded-xl"
                                    initial={{ opacity: 0.5, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <p className="text-center mt-5 font-bold text-lg text-blue-950">Stage 2</p>
                                    <p className="text-center font-bold text-lg text-blue-950">Beta Launching</p>
                                    <p className="text-center mb-5 font-bold text-sm text-orange-500">Oktober 2025</p>
                                    <div className="h-max flex mx-5 flex-wrap min-w-[12rem]">
                                        <p className="text-blue-950 font-semibold">Platform dirilis untuk publik.</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-rows-2 col-start-3 col-span-2 lg:-col-start-2 lg:col-span-1">
                        {isBranchActive4 && (
                            <div className="flex justify-center">
                                <div className="absolute h-[50%] w-5 top-0">
                                    <div className="absolute top-0 w-full bg-red-400 transition-all duration-200 ease-in-out"
                                        style={{
                                            height: `${(branchProgress4 / 50) * 100}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                        {isCompleted4 && (
                            <div className="flex justify-center">
                                <motion.div className="flex flex-col bg-slate-200 border-8 border-red-400 w-full rounded-xl"
                                    initial={{ opacity: 0.5, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <p className="text-center mt-5 font-bold text-lg text-blue-950">Stage 4</p>
                                    <p className="text-center font-bold text-lg text-blue-950">Continous Development</p>
                                    <div className="flex justify-center">
                                        <p className="text-center mb-2 font-bold text-sm text-orange-500">2025 - </p>
                                        <img src="./images/icons/Infinity.png" alt="" className="w-5 h-5 ml-1" />
                                    </div>
                                    <div className="h-max flex mx-5 flex-wrap min-w-[12rem]">
                                        <p className="text-blue-950 font-semibold">Platform akan dimonitoring dan dievaluasi untuk improve fitur yang dibutuhkan.</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex h-full mb-20 mt-5 lg:hidden justify-center items-center px-5" ref={scrollRef}>
                <div className="w-full h-[90%] grid grid-rows-4">
                    {branchScroll1 && (
                        <div className="relative">
                            <div className="absolute right-[-1rem] h-6 w-[65%] rounded-l-full overflow-hidden">
                                <div className="absolute h-full w-full bg-red-400 right-0 transition-all duration-100" style={{ width: `${branchScrollProgress1}%` }} />
                            </div>
                            {scrollComlpeted1 && (
                                <div className="absolute top-[1.3rem] flex justify-center mr-5 border">
                                    <motion.div className=" flex flex-col bg-slate-200 border-4 border-red-400 w-full rounded-xl"
                                        initial={{ opacity: 0.5, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        <p className="text-center mt-5 font-bold text-sm text-blue-950">Stage 1</p>
                                        <p className="text-center font-bold text-sm text-blue-950">Soft Launching</p>
                                        <p className="text-center mb-2 font-bold text-sm text-orange-500">November 2024</p>
                                        <div className="h-max flex mx-2 mb-2 flex-wrap min-w-[5rem]">
                                            <p className="text-blue-950 font-semibold text-xs">Memperkenalkan pengembangan ide dan aplikasi serta penggalian fitur.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="row-start-3">
                        {branchScroll3 && (
                            <div className="relative">
                                <div className="absolute right-[-1rem] h-6 w-[65%] rounded-l-full overflow-hidden">
                                    <div className="absolute h-full w-full bg-red-400 right-0 transition-all duration-100" style={{ width: `${branchScrollProgress3}%` }} />
                                </div>
                                {scrollComlpeted3 && (
                                    <div className="absolute top-[1.3rem] sm:min-w-[16.5rem] flex justify-center mr-5 border">
                                        <motion.div className=" flex flex-col bg-slate-200 border-4 border-red-400 w-full rounded-xl"
                                            initial={{ opacity: 0.5, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            <p className="text-center mt-5 font-bold text-sm text-blue-950">Stage 3</p>
                                            <p className="text-center font-bold text-sm text-blue-950">Grand Launching</p>
                                            <p className="text-center mb-2 font-bold text-sm text-orange-500">Oktober 2025</p>
                                            <div className="h-max flex mx-2 mb-2 flex-wrap min-w-[5rem]">
                                                <p className="text-blue-950 font-semibold text-xs">Platform dirilis untuk publik.</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center w-12 rounded-full h-[105%] relative overflow-hidden bg-gray-300">
                    <div className="absolute bg-red-400 w-full top-0"
                        style={{ height: `${mainScrollProgress}%` }} />

                </div>
                <div className="w-full h-[90%] grid grid-rows-4 gap-5">
                    <div className="row-start-2">
                        {branchScroll2 && (
                            <div className="relative w-full h-full">
                                <div className="absolute left-[-0.1rem] h-6 w-[65%] rounded-r-full overflow-hidden">
                                    <div className="absolute h-full w-full bg-red-400 left-0 transition-all duration-100" style={{ width: `${branchScrollProgress2}%` }} />
                                </div>
                                {scrollComlpeted2 && (
                                    <div className="ml-5 md:ml-6 absolute top-[1.3rem] left-0 flex justify-center mr-5">
                                        <motion.div className=" flex flex-col bg-slate-200 border-4 border-red-400 w-full rounded-xl"
                                            initial={{ opacity: 0.5, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            <p className="text-center mt-5 font-bold text-sm text-blue-950">Stage 2</p>
                                            <p className="text-center font-bold text-sm text-blue-950">Beta Launching</p>
                                            <p className="text-center mb-2 font-bold text-sm text-orange-500">Mei 2025</p>
                                            <div className="h-max flex mx-2 mb-2 flex-wrap min-w-[7rem]">
                                                <p className="text-blue-950 font-semibold text-xs">Platform dirilis untuk beberapa pengguna saja sebagai bentuk testing awal.</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="row-start-4">
                        {branchScroll4 && (
                            <div className="relative w-full h-full">
                                <div className="absolute left-[-0.1rem] h-6 w-[65%] rounded-r-full overflow-hidden">
                                    <div className="absolute h-full w-full bg-red-400 left-0 transition-all duration-100" style={{ width: `${branchScrollProgress4}%` }} />
                                </div>
                                {scrollComlpeted4 && (
                                    <div className="absolute ml-5 md:ml-6 top-[1.3rem] left-0 flex justify-center mr-5">
                                        <motion.div className=" flex flex-col bg-slate-200 border-4 border-red-400 w-full rounded-xl"
                                            initial={{ opacity: 0.5, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            <p className="text-center mt-5 font-bold text-sm text-blue-950">Stage 4</p>
                                            <p className="text-center font-bold text-sm text-blue-950">Continous Development</p>
                                            <div className="flex justify-center">
                                                <p className="text-center mb-2 font-bold text-sm text-orange-500">2025 - </p>
                                                <img src="./images/icons/Infinity.png" alt="" className="w-5 h-5 ml-1" />
                                            </div>
                                            <div className="h-max flex mx-2 mb-2 flex-wrap min-w-[7rem]">
                                                <p className="text-blue-950 font-semibold text-xs">Platform akan dimonitoring dan dievaluasi untuk improve fitur yang dibutuhkan.</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRoadmap;