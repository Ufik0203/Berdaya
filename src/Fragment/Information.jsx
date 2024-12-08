import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "animate.css";

const Information = () => {
    const data = [
        { id: 1, Description: "Memperkenalkan pengembangan ide dan aplikasi serta penggalian fitur", title: `Stage 1 <br/> Soft Launching`, image: "./images/Soft-Launch.png", date: 'November 2024' },
        { id: 2, Description: "Platform dirilis untuk beberapa pengguna saja sebagai bentuk testing awal", title: "Stage 2 <br/> Beta Launching", image: "./images/Beta-Launch.png", date: 'Mei 2025' },
        { id: 3, Description: "Platform dirilis untuk publik", title: "Stage 3 <br/> Public Launching", image: "./images/Public-Launch.png", date: 'Oktober 2025' },
        { id: 4, Description: "Platform akan dimonitoring dan evaluasi untuk improve fitur yang dibutuhkan", title: "Stage 4 <br/> Continouse Development", image: "./images/Continouse-Development.png", date: '2025 - TBA' },
    ];

    const [isShow, setIsShow] = useState(false);

    const showInformation = () => {
        const productHtml = `<div class="flex flex-col items-center p-4 overflow-hidden">
                <div id="close-btn" class="bg-white absolute right-2 top-2 rounded-full animate__animated animate__bounce select-none">
                    <img src="./images/icons/close.png" alt="Close" class="w-6 h-6 animate__animated" />
                </div>
                <div class="swiper-container min-h-[30rem]" style="width: 300px; height: 300px;">
                    <div class="swiper-wrapper">
                        ${data.map((item, index) => `
                            <div class="swiper-slide text-white" id="slide-${index}">
                                <img src="${item.image}" alt="${item.title}" class="rounded-lg border border-white w-[16.5rem] min-h-64 object-cover select-none animate__animated animate__fadeInUp mx-5"/>
                                <h2 class=" mt-3 font-semibold text-xl sm:text-2xl animate__animated animate__fadeInLeft">${item.title}</h2>
                                <p class="mt-2 text-base my-2 font-bold sm:text-base animate__animated animate__fadeInLeft text-yellow-500">${item.date}</p>
                                <p class=" mt-2 text-lg text-left sm:text-base animate__animated animate__fadeInUp mx-5">${item.Description}</p>
                            </div>
                        `).join("")}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>`;

        Swal.fire({
            showConfirmButton: false,
            background: "rgba(0, 0, 0, 0.8)",
            html: productHtml,
        });

        setTimeout(() => {
            const swiperInstance = new Swiper(".swiper-container", {
                modules: [Navigation, Pagination],
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                loop: true,
                spaceBetween: 60,
                on: {
                    slideChange: function () {
                        const currentSlide = this.slides[this.activeIndex];
                        const animationClass = 'animate__fadeInUp';
                        currentSlide.classList.remove('animate__animated');
                        void currentSlide.offsetWidth;
                        currentSlide.classList.add('animate__animated', animationClass);
                    },
                },
            });

            const closeBtn = document.getElementById("close-btn");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    Swal.close();
                    setIsShow(false);
                });
            }
        }, 100);
    };

    const variants = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            scale: [1, 1.2, 1],
            y: ["-40%", "-50%", "-40%"],
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    return (
        <motion.div
            className="absolute h-14 w-14 bottom-32 bg-yellow-300 md:hidden right-5 px-1 py-1 rounded-full border border-yellow-400 select-none hover:cursor-pointer"
            onClick={() => (isShow ? setIsShow(true) : showInformation())}
            initial="initial"
            animate="animate"
            variants={variants}
        >
            <img src="./images/icons/info-1.png" alt="Info Icon" />
        </motion.div>
    );
};

export default Information;
