import React, { useState, useEffect } from "react";

const TypingText = (props) => {
    const { children, text = "", text2 = "", typingSpeed = 100, delay = 3050, className = "text-5xl", color1, color2 } = props;
    const [displayedText, setDisplayedText] = useState("");
    const [displayedText2, setDisplayedText2] = useState(""); 
    const [typingIndex, setTypingIndex] = useState(0);
    const [typingIndex2, setTypingIndex2] = useState(0); 
    const [isText1Finished, setIsText1Finished] = useState(false); 

    useEffect(() => {
        let timeout = null;

        if (!isText1Finished) {
            if (typingIndex < text.length) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[typingIndex]);
                    setTypingIndex((prev) => prev + 1);
                }, typingSpeed);
            } else if (typingIndex === text.length) {
                setIsText1Finished(true);
                timeout = setTimeout(() => {
                    setTypingIndex2(0);
                }, delay);
            }
        } else {
            if (typingIndex2 < text2.length) {
                timeout = setTimeout(() => {
                    setDisplayedText2((prev) => prev + text2[typingIndex2]);
                    setTypingIndex2((prev) => prev + 1);
                }, typingSpeed);
            } else if (typingIndex2 === text2.length) {
                timeout = setTimeout(() => {
                    setDisplayedText("");
                    setDisplayedText2(""); 
                    setTypingIndex(0);
                    setTypingIndex2(0);
                    setIsText1Finished(false); 
                }, delay); 
            }
        }

        return () => clearTimeout(timeout);
    }, [typingIndex, typingIndex2, text, text2, typingSpeed, delay, isText1Finished]);

    useEffect(() => {
        setDisplayedText("");
        setTypingIndex(0);
        setIsText1Finished(false); 
    }, [text]);

    useEffect(() => {
        setDisplayedText2("");
        setTypingIndex2(0);
    }, [text2]);

    return (
        <div className={`select-none font-anton mt-5 ${className}`}>
            <span className={color1}>{displayedText}</span> 
            <span className={color2}>{" " + displayedText2}</span> 
            {children}
        </div>
    );
};

export default TypingText;
