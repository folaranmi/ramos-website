import Image from "next/image";
import HeadShot1 from "@/public/assets/img/headshot1.jpg";
import HeadShot2 from "@/public/assets/img/headshot2.jpg";
import BarChart from "@/public/assets/img/barchart.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbBrandAsana, TbDeviceDesktopAnalytics } from "react-icons/tb";

const DataIndicators = () => {
    return (
        <div className="">
            <h1 className="text-[9rem] text-ramosBlack leading-none font-medium py-28 px-12">
                We give you full <br />
                <span className="text-neutral-300"> control </span>
                over your data
            </h1>

            <div className="flex gap-4 px-12 pb-28">
                <div className="rounded-3xl bg-neutral-100 py-10 w-1/2 px-2 border-[1px] border-neutral-200 shadow-sm">
                    <div className="flex justify-center items-start">
                        <div className="bg-white py-9 px-11 rounded-[20px] text-center flex gap-5 flex-col items-center">
                            <p className="text-ramosBlack text-sm">Conversion rate</p>
                            <div className="bg-ramosYellow py-5 px-5 relative rounded-2xl">
                                <span className="text-ramosBlack font-medium text-5xl leading-none">
                                    2,3<span className="text-4xl">%</span>
                                </span>
                                <div className="absolute -top-3 -left-3 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-inner">
                                    <div className="bg-neutral-200 rounded-full flex items-center justify-center h-6 w-6">
                                        <BsGraphUpArrow className="h-3 w-3" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Percentage of <br />website visitors
                            </p>
                        </div>
                        <div className="bg-white py-5 px-5 rounded-[20px] text-center flex gap-4 flex-col items-start shadow-xl mt-9 -ml-5">
                            <p className="text-neutral-400 text-sm">Sales revenue</p>
                            <p className="text-ramosBlack">
                                <span>$</span>
                                <span className="text-3xl"> 131,2K</span>
                            </p>
                            <div className="flex gap-1">
                                <div className="rounded-md h-1 w-14 bg-green-500"></div>
                                <div className="rounded-md h-1 w-14 bg-ramosYellow"></div>
                                <div className="rounded-md h-1 w-14 bg-green-500"></div>
                            </div>
                            <div className="flex flex-col gap-4 pb-5 border-b-[1px] border-neutral-100 w-full">
                                <div className="flex justify-between w-full items-center gap-4">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-6 w-6 bg-gray-400 rounded-full">
                                            <Image
                                                src={HeadShot1}
                                                alt="HeadShot1"
                                                className="min-w-6 min-h-6 rounded-full object-cover"
                                            />
                                        </div>
                                        <p className="text-neutral-400 text-sm">Min. price</p>
                                    </div>
                                    <p className="text-sm text-ramosBlack">1,200 $</p>
                                </div>

                                <div className="flex justify-between w-full items-center gap-4">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-6 w-6 bg-gray-400 rounded-full">
                                            <Image
                                                src={HeadShot2}
                                                alt="HeadShot1"
                                                className="min-w-6 min-h-6 rounded-full object-cover"
                                            />
                                        </div>
                                        <p className="text-neutral-400 text-sm">Max. price</p>
                                    </div>
                                    <p className="text-sm text-ramosBlack">1,200 $</p>
                                </div>
                            </div>

                            <div className="flex justify-between gap-5 w-full">
                                <p className="text-sm text-neutral-400">Engagement rate</p>
                                <span className="">47.84%</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-ramosBlack text-center py-7 px-10">
                        <h3 className="text-2xl mt-4">Improved customer service</h3>
                        <p className="max-w-96 mt-4 text-gray-500 mx-auto">
                            Analytics helps optimize service processes by
                            providing information on how to improve interaction
                            with customer and increase their satisfaction.
                        </p>
                    </div>
                </div>
                <div className="rounded-3xl bg-neutral-100 py-10 w-1/2 px-2 border-[1px] border-neutral-200 shadow-sm">

                    <div className="">
                        <div className="w-[50%] h-20 bg-white pt-4 pb-6 mx-auto rounded-3xl flex px-4 border-[1px] border-neutral-200 shadow-sm z-20"></div>
                        <div className="w-[60%] h-20 bg-white pt-2 pb-6 mx-auto rounded-3xl flex px-4 border-[1px] border-neutral-200 shadow-sm z-20 -mt-11">
                            <div className="flex items-center justify-start gap-2">
                                <div className="min-h-6 min-w-6 bg-neutral-200 rounded-lg flex justify-center items-center">
                                    <TbBrandAsana />
                                </div>
                                <span>Finance report</span>
                            </div>
                        </div>

                        <div className="w-[70%] bg-white pt-4 pb-6 mx-auto rounded-3xl flex px-4 border-[1px] border-neutral-200 shadow-sm z-30 -mt-7">
                            <div className="w-1/3 pl-2 flex flex-col justify-between gap-2">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="min-h-6 min-w-6 bg-neutral-200 rounded-lg flex justify-center items-center">
                                        <TbDeviceDesktopAnalytics />
                                    </div>
                                    <span>Insight</span>
                                </div>

                                <div className="">
                                    <p className="text-gray-400 text-sm">Total Profit</p>
                                    <p className="text-ramosBlack mt-1 mb-5">
                                        <span>$</span>
                                        <span className=" font-medium text-3xl"> 264,2K</span>
                                    </p>
                                    <span className="bg-ramosYellow rounded-lg py-2 px-3 mt-3 text-xs shadow-sm shadow-ramosYellow">
                                        Data visualization
                                    </span>
                                </div>

                            </div>
                            <div className="w-2/3 flex justify-end">
                                <Image
                                    src={BarChart}
                                    alt="barchat"
                                    className="w-[230px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-ramosBlack text-center py-7 px-10">
                        <h3 className="text-2xl mt-4">Monitoring key indicators</h3>
                        <p className="max-w-80 mt-4 text-gray-500 mx-auto">
                            Analytics platforms allow businesses to track KPIs,
                            an important tool for measuring success and achieving goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataIndicators;