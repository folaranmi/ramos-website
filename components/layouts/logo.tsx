import Image from "next/image";
import RamosLogo from "@/public/assets/svgs/ramos-logo-white.svg"

const Logo = () => {
    return (
        <Image
            className=""
            src={RamosLogo}
            alt="Ramos Logo"
            width="100"
        />
    );
}

export default Logo;