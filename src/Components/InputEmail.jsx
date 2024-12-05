import { useState } from "react";
import Button from "./Button";
import { getNewsletter } from "../services/newsletter.services";

const InputEmail = (props) => {
    const { type, name, placeholder, value } = props;
    const [email, setEmail] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        getNewsletter(email, (res) => {
            console.log(res.message);
            alert("Terima Kasih Telah mendukung Berdaya :)");
        }, (err) => {
            console.log(err.message);
            alert("Mohon Maaf, Terjadi Kesalahan");
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
                    value={value}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-full relative bg-transparent w-full px-10 placeholder-white placeholder:opacity-70 rounded-lg focus:outline-none"
                />
                <Button type="submit" cname="hover:cursor-pointer bg-white text-black mr-1">Subscribe</Button>
            </div>
        </form>
    );
};

export default InputEmail;
