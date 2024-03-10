import Image from "next/image";
import { BiSolidZap } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { IoAnalyticsSharp, IoPlaySharp } from "react-icons/io5";
import HeroImage from "@/public/assets/img/mockup.png"

const HeroSection = () => {
    return (
        <div className="w-full min-h-[300px] flex flex-col justify-center py-36 px-12">
            <div className="flex justify-between">
                <div className="flex flex-col font-urbanist text-9xl">
                    <div className="flex gap-2 items-center ml-32">
                        <div className="flex">
                            <div className="rounded-full h-24 w-24 text-ramosOrange bg-ramosGray flex justify-center items-center">
                                <BiSolidZap className="w-12 h-12 " />
                            </div>
                            <div className="rounded-full h-24 w-24 bg-ramosOrange text-white flex justify-center items-center -ml-4">
                                <IoAnalyticsSharp className="w-12 h-12" />
                            </div>
                        </div>
                        <span className="text-[10rem]">Analytics</span>
                    </div>
                    <div className="text-[10rem] text-ramosBlack">that <span className="text-gray-300">helps</span> you</div>
                </div>
                <div className="relative">
                    <Image
                        src={HeroImage}
                        alt="laptop mockup"
                        width={420}
                        className="rounded-xl overflow-hidden"
                    />
                    <div className="w-12 h-12 rounded-full bg-ramosOrange flex justify-center items-center absolute -top-4 -left-4 shadow-md shadow-ramosOrange">
                        <IoPlaySharp className="h-4 w-4 text-white"/>
                    </div>
                </div>
            </div>
            <h1 className="text-ramosBlack text-[10rem] font-urbanist flex items-center gap-4 justify-end">
                shape
                <div className="rounded-full min-h-24 min-w-24 bg-ramosYellow flex justify-center items-center">
                    <FiBarChart2 className="w-14 h-14" />
                </div>
                the future
            </h1>
        </div>
    );
}

export default HeroSection;