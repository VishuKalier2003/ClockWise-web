import React from "react";
import cardData from '../data/CardData'
import Link from "next/link";

const WhatWeDo = () => {
    return(
        <div className='relative w-screen h-[32rem] flex justify-center items-center bg-teal'>
            <section className='relative w-[95vw] h-[30rem] flex flex-col bg-teal'>
                <div className='relative w-full h-[4rem] flex flex-row justify-center items-center text-xl md:text-2xl lg:text-4xl bg-teal c-orange font-medium'>Always be on Clock</div>
                <div className='relative w-[80%] left-[10%] h-[26rem] flex flex-row justify-center items-center rounded-2xl'>
                    <div className='relative grid grid-cols-2 gap-[10%] px-[1rem] md:px-[2rem] lg:px-[4rem]'>
                    {cardData.map((item) => (
                        <Card key={item.id} text={item.text} buttonText={item.buttonText} link={item.link} />
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

const Card = ({ text, buttonText, link }) => {
    return(
        <div className='relative w-full h-full flex flex-col gap-4 lg:gap-6 justify-center items-center px-[1rem] py-[0.8rem] rounded-xl bd-orange'>
            <div className='text-lg md:text-xl lg:text-2xl text-center c-teal'>{text}</div>
            <Link href={link} className='bg-orange px-[2rem] py-[0.5rem] text-lg md:text-xl lg:text-2xl font-medium rounded-xl bd-teal'>{buttonText}</Link>
        </div>
    )
}

export default WhatWeDo;
