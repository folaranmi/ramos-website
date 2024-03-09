import { CiWavePulse1 } from "react-icons/ci";

const RequestDemo = () => {
    return (
        <div className="py-32 px-12">
            <h1 className="text-[9rem] text-ramosBlack leading-none">
                Maximize
                <span className="text-neutral-300"> efficiency </span>
                with our intuitive
            </h1>

            <div className="flex justify-between items-center mt-16">
                <div className="flex">
                    <div className="rounded-full min-h-40 min-w-40 text-white bg-ramosGray flex justify-center items-center">
                        <div className="min-h-14 min-w-14 bg-ramosOrange rounded-2xl flex items-center justify-center">
                            <CiWavePulse1 className="w-10 h-10 " />
                        </div>
                    </div>
                    <div className="rounded-full min-h-40 min-w-40 bg-ramosYellow text-black flex flex-col justify-center items-center -ml-4">
                        <span className="text-3xl font-medium">45%</span>
                        <span className="text-center text-sm leading-1">System grow <br />faster</span>
                    </div>
                </div>
                <div className="bg-ramosYellow rounded-[40px] py-5 px-3">
                    <h1 className="text-ramosBlack text-8xl font-medium">Analytics Services</h1>
                </div>
            </div>

            <div className="h-[2px] w-full bg-gray-100 my-16"></div>

            <div className="flex justify-between gap-3 items-center">
                <p className="w-[45%] text-lg">
                    Explore traffic sources, page behaviour, conversion and more to
                    gain deep insight into your audience. with us your business 
                    doesn&apos;t just adapt - it evolves.
                </p>

                <div className="flex gap-4">
                    <button className="py-4 px-14 bg-ramosGray rounded-2xl">Request a demo</button>
                    <button className="py-4 px-14 bg-ramosOrange rounded-2xl text-white">Start for free</button>
                </div>
            </div>
        </div>
    );
}

export default RequestDemo;