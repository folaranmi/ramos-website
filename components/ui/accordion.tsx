"use client"

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

interface IAccordion {
    title: string;
    content: string;
    action?: () => void;
}

const Accordion = ({ title, content, action }: IAccordion) => {
    
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="bg-white shadow-xl rounded-3xl  mb-8">
            <div className="flex justify-between items-center py-5 px-4 cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                <h3 className="text-xl font-medium">{title}</h3>
                <div className="text-black min-h-12 min-w-12 rounded-full bg-ramosGray items-center flex justify-center">
                    {isVisible ? <BsDash /> : <AiOutlinePlus />}
                </div>
            </div>
            {isVisible && (<div className="text-black px-4 pt-2 pb-7">
                {content}
            </div>)}
        </div>
    );
}

export default Accordion;