import Image from "next/image";
import RamosLogo from "@/public/assets/svgs/ramos-logo-white.svg"
import RamosBrand from "@/public/assets/svgs/ramos-brand-white.svg"

const Logo = ({ brand, width, height }: { brand?: boolean, width?: any, height?: string }) => {
    return (
        <>
            {brand ? (
                <Image
                    className=""
                    src={RamosBrand}
                    alt="Ramos Logo"
                    width={width}
                />
            ) : (
                <Image
                    className=""
                    src={RamosLogo}
                    alt="Ramos Logo"
                    width="100"
                />
            )}
        </>


    );
}

export default Logo;