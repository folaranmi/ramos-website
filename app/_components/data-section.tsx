"use client"

import Image from "next/image";
import DesktopView from "@/public/assets/img/desktopview.png";
import MobileView from "@/public/assets/img/mobileview.png";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { BsDash } from "react-icons/bs";
import Accordion from "@/components/ui/accordion";

const DataSection = () => {

    const accordion = [
        { title: "Instant Insight", content: "Lorem ipsum dolor sit amet consectetur adipisicing" },
        { title: "AI Technology", content: "Lorem ipsum dolor sit amet consectetur adipisicing" },
        { title: "Easy Integration", content: "Lorem ipsum dolor sit amet consectetur adipisicing" },
    ]

    // const handleClick = () => {
    //     setOpen(!open)
    // }

    return (
        <div className="bg-gray-50 w-full rounded-[80px] h-auto py-36 pl-12">
            <div className="flex justify-between gap-2">
                <div className=" w-1/2 pr-7">
                    <h3 className="text-ramosBlack text-6xl font-urbanist mb-16">
                        Turning data to real actions and ideas.
                    </h3>

                    <div className="w-2/3 mt-8" >
                        {accordion.map((item, index) => (
                            <Accordion key={index} title={item.title} content={item.content} />
                        ))}
                    </div>

                </div>
                <div className="relative w-1/2">
                    <Image
                        src={DesktopView}
                        alt="desktop view"
                        className="shadow-2xl"
                    />
                    <Image
                        src={MobileView}
                        alt="desktop view"
                        className="absolute w-80 rounded-[45px] -bottom-[95px] -left-[133px] z-10 shadow-2xl"
                    />
                </div>
            </div>

            <div className="w-full pr-12">
                <h1 className="text-ramosOrange text-[29rem] font-bold w-full leading-none relative -z-0 -mt-32 pr-12">Ramos</h1>
            </div>
        </div>
    );
}

export default DataSection;