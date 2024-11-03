import React from "react";
import { FlipWordsDemo } from "../acceternity/flipwords";
import Image from "next/image";

const Header = () => {
    return(
        <div className='relative flex flex-row w-screen h-[30rem]'>
            <div className='relative md:w-[60%] lg:w-[50%] h-full'>
                <FlipWordsDemo />
            </div>
            <div className='relative md:w-[40%] lg:w-[50%] h-full bg-orange flex flex-row justify-center items-center'>
                <Image src="/team.jpg" width={800} height={700} className="relative object-fit" alt="" />
            </div>
        </div>
    )
}

export default Header;
