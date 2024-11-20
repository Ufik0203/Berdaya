import React, { useRef, useEffect, useState } from "react";
import "animate.css";

const AdditionalContentAbout = () => {
    const elementsRef = useRef([]);
    const [isVisible, setIsVisible] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            elementsRef.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="h-[100%]">
            <div className="h-[50%] grid items-center grid-cols-4 gap-5 mx-5">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => (elementsRef.current[index] = el)}
                        className={`border h-[40%] rounded-xl bg-slate-600 hover:cursor-pointer px-2 py-2 ${isVisible[index]
                            ? "animate__animated " +
                            (index < 2
                                ? "animate__backInLeft"
                                : "animate__backInRight")
                            : "opacity-0"
                            }`}
                    >
                        <div className="border-2 border-yellow-500 w-full h-full rounded-xl"></div>
                    </div>
                ))}
            </div>
            <div className="h-[50%] w-full flex justify-end">
                <div
                    className={`w-[50%] h-full bg-slate-600 rounded-l-3xl ${isVisible[3] ? "animate__animated animate__fadeInRight" : "opacity-0"
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default AdditionalContentAbout;