import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative bg-teal w-screen h-[4rem] flex flex-row">
            <section className="relative w-[30%] lg:w-[20%] h-[4rem] bg-teal flex flex-row justify-center">
                <div className="relative w-[40%] lg:w-[25%] h-full flex flex-row justify-center items-center bg-teal">
                    <Image src="/clockwise-icon.png" width={50} height={50} className="bg-teal object-fit" alt="Clockwise Logo" />
                </div>
                <div className="relative flex flex-row justify-start items-center bg-teal">
                    <Link href="/" className="relative c-orange bg-teal playwrite-600 text-xl md:text-2xl lg:text-[1.75rem]">Clockwise</Link>
                </div>
            </section>
            <section className="relative w-[80%] h-[4rem] bg-teal flex flex-row justify-center">
                <div className="relative w-[98%] h-[4rem] bg-teal">
                    <section className="relative left-[60%] w-[40%] h-[4rem] bg-teal flex flex-row items-center justify-around" id="nav-tag">
                        <Link href="/" className="bg-teal c-orange hover:text-orange-500 text-lg jetbrains-mono-3">home</Link>
                        <Link href="/manager" className="bg-teal c-orange hover:text-orange-500 text-lg jetbrains-mono-3">manager</Link>
                        <Link href="/team" className="bg-teal c-orange hover:text-orange-500 text-lg jetbrains-mono-3">team</Link>
                        <Link href="/about" className="bg-teal c-orange hover:text-orange-500 text-lg jetbrains-mono-3">about</Link>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
