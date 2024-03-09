"use client"
import Image from "next/image";
import QRCode from "@/public/assets/img/qrcode.png";

const Footer = () => {

    const navList = [
        { path: "/", linkName: "About" },
        { path: "/", linkName: "Why Us" },
        { path: "/", linkName: "Platform" },
        { path: "/", linkName: "Pricing" },
        { path: "/", linkName: "Contacts" },
    ]

    const socials = [
        { path: "/", linkName: "LinkedIn" },
        { path: "/", linkName: "Instagram" },
        { path: "/", linkName: "Facebook" },
    ]

    return (
        <div className="w-full bg-ramosBlack py-28">
            <div className="container mx-auto">
                <div className="flex gap-3 justify-between items-center border-b-[1px] border-ramosGrayLight pb-14">
                    <nav className="flex text-neutral-500 gap-10 text-2xl">
                        {navList.map((item, index) => (
                            <a href={item.path} key={index}>{item.linkName}</a>
                        ))}
                    </nav>

                    <h2 className="text-white text-7xl">hello@ramos.com</h2>
                </div>

                <div className="flex justify-between gap-8 mt-20">
                    <div className="flex gap-12">
                        <div className="flex flex-col text-neutral-500 text-xl gap-2">
                            <span className="text-white font-medium">Warrensville Heights</span>
                            <span className="">14418 Vineyard Drive, NC</span>
                            <span className="">44128</span>
                        </div>
                        <div className="flex flex-col text-neutral-500 text-xl gap-2">
                            <span className="text-white font-medium">Saint Louis</span>
                            <span className="">1366 Penn Street</span>
                            <span className="">63101</span>
                        </div>
                    </div>
                    <div className="flex text-white flex-col gap-8 justify-end text-2xl items-end">
                        {socials.map((item, index) => (
                            <a href={item.path} key={index}>{item.linkName}</a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center pt-16">
                    <h2 className="text-white text-[9rem] font-medium">
                        Ramos <span className="-ml-3">&reg;</span>
                    </h2>

                    <div className="flex gap-10 items-center text-neutral-500 text-2xl">
                        <a href="/">Privacy Policy</a>
                        <a href="/">License agreement</a>
                    </div>

                    <Image
                        src={QRCode}
                        alt="QRcode"
                        className="h-[100px] w-[100px] rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;