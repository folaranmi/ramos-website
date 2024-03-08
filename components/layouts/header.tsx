"use client"

import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
    return (
        <div className="py-3 px-3">
            <div className="bg-ramosBlack rounded-3xl w-full min-h-7 flex justify-between gap-4 py-4 px-4">
                <Logo />
                <Navigation />

                <button className="bg-white font-urbanist font-bold px-6 rounded-xl transition hover:shadow-lg duration-500 hover:scale-[0.95]">
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Header;