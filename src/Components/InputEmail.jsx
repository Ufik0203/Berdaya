import { useState } from "react";
import Button from "./Button";
import { getNewsletter } from "../services/newsletter.services";
import Swal from "sweetalert2";

const InputEmail = (props) => {
    const { type, name, placeholder } = props;
    const [email, setEmail] = useState("");

    const validateGmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateGmail(email)) {
            Swal.fire({
                title: "Peringatan",
                text: "Hanya email dengan domain @gmail.com yang diterima.",
                icon: "warning",
                backdrop: false,
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    popup: "styled-swal",
                    icon: "styled-icon",
                    title: "styled-title",
                },
                showClass: {
                    popup: `animate__animated animate__fadeInRight animate__faster`,
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutRight animate__faster`,
                },
            });
            return;
        }

        getNewsletter(email, (res) => {
            Swal.fire({
                title: "Terima Kasih",
                text: "Telah mendukung Berdaya",
                icon: "success",
                backdrop: false,
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    popup: "styled-swal",
                    icon: "styled-icon",
                    title: "styled-title",
                },
                showClass: {
                    popup: `animate__animated animate__fadeInRight animate__faster`,
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutRight animate__faster`,
                },
            });
            setEmail("");
            console.log(res.message);
        }, (err) => {
            if (err.response?.status === 429) {
                Swal.fire({
                    title: "Peringatan",
                    text: "Anda telah melakukan terlalu banyak permintaan. Coba lagi nanti",
                    icon: "warning",
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: "styled-swal",
                        icon: "styled-icon",
                        title: "styled-title",
                    },
                    showClass: {
                        popup: `animate__animated animate__fadeInRight animate__faster`,
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutRight animate__faster`,
                    },
                });
                setEmail("");
                console.log(res.message);
            } else if (err.response?.status === 400) {
                Swal.fire({
                    title: "Terima Kasih",
                    text: "Anda telah terdaftar sebelumnya",
                    icon: "success",
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: "styled-swal",
                        icon: "styled-icon",
                        title: "styled-title",
                    },
                    showClass: {
                        popup: `animate__animated animate__fadeInRight animate__faster`,
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutRight animate__faster`,
                    },
                });
                setEmail("");
                console.log(res.message);
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Mohon maaf, terjadi kesalahan, kami sedang dalam perbaikan",
                    icon: "error",
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: "styled-swal",
                        icon: "styled-icon",
                        title: "styled-title",
                    },
                    showClass: {
                        popup: `animate__animated animate__fadeInRight animate__faster`,
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutRight animate__faster`,
                    },
                });
                setEmail("");
                console.log(res.message);
                alert("Mohon maaf, terjadi kesalahan.");
            }
            console.error("Error:", err.message);
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex border-2 h-14 border-white relative w-full items-center rounded-lg bg-white bg-opacity-15">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    id={name}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-full relative bg-transparent w-full px-10 placeholder-white placeholder:opacity-70 rounded-lg focus:outline-none"
                />
                <Button type="submit" cname="hover:cursor-pointer bg-white text-black mr-1">Subscribe</Button>
            </div>
        </form>
    );
};

export default InputEmail;