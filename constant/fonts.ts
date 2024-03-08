
import localFont from "next/font/local"
export const urbanist = localFont({
    src: [
        {
            path: "../public/fonts/Urbanist-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/Urbanist-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "../public/fonts/Urbanist-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
        {
            path: "../public/fonts/Urbanist-Bold.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../public/fonts/Urbanist-ExtraBold.ttf",
            weight: "800",
            style: "normal"
        },
        {
            path: "../public/fonts/Urbanist-Black.ttf",
            weight: "900",
            style: "normal"
        },
    ],
    variable: "--font-urbanist"
})