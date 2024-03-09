import Image from "next/image";
import { GoArrowUp } from "react-icons/go";
import { RiStackLine } from "react-icons/ri";
import chart from "@/public/assets/img/chart.png";
import headshot1 from "@/public/assets/img/headshot1.jpg";
import headshot2 from "@/public/assets/img/headshot2.jpg";
import { PiStackThin } from "react-icons/pi";

const StrategicSection = () => {
    return (
        <div className="bg-gray-50 w-full rounded-[80px] h-auto py-36 px-12">
            <div className="flex justify-between gap-2 items-center">
                <h3 className="text-ramosBlack text-6xl font-urbanist w-[50%]">
                    Your key to strategic success through analytics
                </h3>
                <p className="w-[21%] font-urbanist text-xl">
                    Ready for exciting, spontaneous
                    all-accessible insight in real time?
                </p>
            </div>

            <div className="flex gap-6 py-16">
                <div className="w-2/3 bg-white rounded-3xl shadow-2xl flex pt-6">
                    <div className="w-1/2 px-8 pb-5">
                        <div className="flex flex-col items-start justify-between gap-32">
                            <div className="bg-ramosYellow rounded-lg py-3 px-5 text-sm shadow-sm shadow-ramosYellow">Setting up reports</div>
                            <div className="flex flex-col gap-5 pb-4">
                                <h4 className="text-ramosBlack text-2xl">Fast and easy access <br /> to analytics.</h4>
                                <p className="text-gray-400">
                                    One platform is a comprehensive system of solutions that will be the
                                    first step towards the digitalization of your business
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/2 border-t-[1px] border-gray-200 border-l-[1px] rounded-tl-xl py-4 px-4">
                        <p className="text-ramosBlack font-medium"> Sales Statistic</p>
                        <div className="flex gap-2 items-center">
                            <div className="mt-4 w-1/2">
                                <div className="flex gap-4 items-center">
                                    <div className="min-h-14 min-w-14 w-min h-min bg-ramosOrange rounded-full flex items-center justify-center text-white">
                                        <RiStackLine className="h-5 w-5" />
                                    </div>

                                    <div className="">
                                        <p className="text-gray-400 text-sm">Total Profit</p>
                                        <p className="text-ramosBlack mt-1">
                                            <span>$</span>
                                            <span className=" font-medium text-3xl"> 264,2K</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/2 bg-gray-100 rounded-2xl px-4 py-2 flex-col">
                                <p className="text-ramosBlack font-medium">Visitors</p>

                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 my-4">
                                    <div className="bg-green-400 h-1 rounded-full w-[45%]"></div>
                                </div>

                                <p className="text-3xl flex justify-start items-start gap-3">
                                    <span className="">56K</span>
                                    <span className="flex text-green-400 text-sm items-center gap-1">
                                        <span className="rounded-full h-5 w-5 bg-green-400 flex justify-center items-center">
                                            <GoArrowUp className="text-white h-2 w-2" />
                                        </span>
                                        +14%
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="border-gray-200 min-h-20 w-full py-4 px-6 mt-5 border rounded-xl">
                            <span className="text-sm">Visit Statistics</span>
                            <Image
                                src={chart}
                                alt="chart"
                                height={150}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-ramosBlack rounded-3xl pt-20 shadow-2xl">
                    <div className="flex gap-2 w-full justify-center items-stretch">
                        <div className="border-2 border-ramosGrayLight py-8 min-h-20 rounded-3xl w-40 shadow-sm flex flex-col gap-3 items-center pt-10">
                            <PiStackThin className="h-10 w-10 text-ramosYellow font-normal" />
                            <div className="flex">
                                <div className="h-10 w-10 bg-gray-400 rounded-full">
                                    <Image
                                        src={headshot1}
                                        alt="headshot1"
                                        className="min-w-10 min-h-10 rounded-full object-cover"
                                    />
                                </div>
                                <div className="h-10 w-10 bg-gray-400 rounded-full -ml-2">
                                    <Image
                                        src={headshot2}
                                        alt="headshot2"
                                        className="min-w-10 min-h-10 rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-ramosGrayLight py-5 px-4 min-h-20 rounded-3xl w-40 shadow-md">
                            <p className="text-white font-medium mb-3">Transactions</p>

                            <div className="flex text-green-400 text-sm gap-1 items-end justify-end mb-2">
                                <span className="rounded-full h-5 w-5 bg-green-400 flex justify-center items-center">
                                    <GoArrowUp className="text-white h-2 w-2" />
                                </span>
                                +14%
                            </div>

                            <p className="text-7xl flex justify-start items-start gap-3 text-white">
                                <span className="">43K</span>

                            </p>
                        </div>
                    </div>

                    <div className="text-white text-center py-7 px-10">
                        <h3 className="text-2xl">Widget control</h3>
                        <p className="max-w-96 mt-6 text-gray-500">Report provides a comprehensive overview of important aspect of web analytics</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-10">
                <p className="text-3xl">
                    Up to <span className="text-9xl font-medium">45%</span>
                </p>
                <p className="w-[31%]">
                    Increase your analytics efficiency by up to 45%. Unique algorithms
                    provide insights from data, reduce time for analysis and saved time 
                    for making important informed decisions.
                </p>
            </div>
        </div>
    );
}

export default StrategicSection;