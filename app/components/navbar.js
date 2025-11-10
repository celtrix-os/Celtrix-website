import logo from "../../public/celtrix-text-logo.png";
import { useState } from "react";
import Image from "next/image";
import Github from "./github";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="flex flex-row md:flex md:flex-row lg:flex lg:flex-row justify-between items-center gap-4 sm:gap-0 w-full">
                <button className="flex items-center gap-0 tracking-wider text-green-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl whitespace-nowrap">
                    <Image className="hidden sm:block" src={logo} alt="Celtrix" width={160} height={150} />
                    <Image className="sm:hidden block" src={logo} alt="Celtrix" width={110} height={120} />

                </button>
                <button onClick={() => {setOpen(!open)}} className="text-green-500 text-2xl md:hidden">𓃑</button>
            </nav>
                
            <ul className={`${open ? "flex flex-col mt-2" : "hidden"} md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl`}>
                <Link href="/" className="hover:text-green-500 transition-colors tracking-wide cursor-pointer underline">Home</Link>
                <Link href="/api/auth/github" className="hover:text-blue-500 transition-colors tracking-wide cursor-pointer underline">Login</Link>
                <Link href="https://github.com/celtrix-os/Celtrix" className="cursor-pointer"><Github/></Link>
            </ul>
        </>
    )
}
