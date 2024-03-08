import { RiStackLine } from "react-icons/ri";

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
                        <div className="flex justify-between flex-col items-start gap-24">
                            <div className="bg-ramosYellow rounded-lg py-1 px-3 text-sm shadow-sm shadow-ramosYellow">Setting up reports</div>
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
                        <div className="flex gap-2">
                            <div className="mt-4 w-1/2">
                                <div className="flex gap-4 items-center">
                                    <div className="min-h-14 min-w-14 w-min h-min bg-ramosOrange rounded-full flex items-center justify-center text-white">
                                        <RiStackLine />
                                    </div>

                                    <div className="">
                                        <p className="text-gray-400 text-sm">Total Profit</p>
                                        <p className="text-ramosBlack mt-1">
                                            <span>$</span>
                                            <span className=" font-medium text-3xl">264,2k</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/2 bg-gray-200 rounded-2xl">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-ramosBlack rounded-3xl py-20 shadow-2xl">

                </div>
            </div>
        </div>
    );
}

export default StrategicSection;