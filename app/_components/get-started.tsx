"use client"

import Logo from "@/components/layouts/logo";

const GetStarted = () => {
    return (
        <div className="flex justify-center items-center gap-12 flex-col pb-32">
            <div className="w-32 h-32 flex items-center justify-center bg-ramosOrange rounded-[35px] shadow-2xl shadow-ramosOrange">
                <Logo brand={true} width="60" />
            </div>
            <h2 className="text-ramosBlack text-9xl font-medium">Get Started</h2>
            <p className="flex w-1/3 text-center text-gray-400 text-2xl">
                Turn information into advantage! Start using Ramos today.
                Sign up for a free trial.
            </p>

            <div className="flex gap-4">
                <button className="py-4 px-14 bg-ramosGray rounded-2xl">Request a demo</button>
                <button className="py-4 px-14 bg-ramosOrange rounded-2xl text-white">Start for free</button>
            </div>
        </div>
    );
}

export default GetStarted;