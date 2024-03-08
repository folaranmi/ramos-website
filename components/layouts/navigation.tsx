import Link from "next/link";

const Navigation = () => {

    const navList = [
        { path: "/", linkName: "Dashboard" },
        { path: "/", linkName: "Reports" },
        { path: "/", linkName: "Documents" },
        { path: "/", linkName: "History" },
        { path: "/", linkName: "Settings" },
    ]
    return (
        <nav className="bg-ramosGrayLight py-3 px-6 font-urbanist rounded-xl">
            <ul className="flex gap-8 text-white">
                {navList.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>{link.linkName}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;