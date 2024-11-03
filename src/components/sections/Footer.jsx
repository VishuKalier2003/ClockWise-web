import Link from "next/link";
import React from "react";
import Image from 'next/image';

const Footer = () => {
    return(
        <div className='relative w-screen h-[9rem] bg-orange flex flex-row'>
            <section className='relative w-[40%] bg-orange flex flex-col justify-center items-center text-md'>
                <p className='relative w-[80%] my-2 text-sm lg:text-md'>This is a personalized application. The contents of the website
                are subject to dynamic change, hence I would request for your observations and recommendations.
                </p>
                <Link href='/contact' className='relative px-[2rem] font-normal c-orange bg-teal rounded-xl text-md lg:text-lg py-1'>
                Recommend Changes</Link>
            </section>
            <section className='relative w-[60%] h-[9rem] flex flex-col justify-center items-end'>
                <p className='relative mr-[4rem] lg:mr-[6rem] px-[1rem] my-2 text-2xl font-normal'>Reach Out to Me</p>
                <Link href='/' className='relative mr-[4rem] lg:mr-[6rem] px-[1rem] bg-teal c-orange rounded-xl text-xl py-1'>Contact Me</Link>
            </section>
        </div>
    )
}

export default Footer;
