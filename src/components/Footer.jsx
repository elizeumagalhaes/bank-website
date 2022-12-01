import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[30vh] bg-[#111111] flex flex-col justify-center items-center'>
            <div className='gap-[3vw] md:gap-[1.5vw] flex mb-10'>
                <a href='' className='p-4 bg-white text-3xl rounded-full justify-center flex w-[62px] transform transition duration-500 hover:scale-110 hover:text-purple-meet'><i class="fa-brands fa-instagram"></i></a>
                <a href='' className='p-4 bg-white text-3xl rounded-full justify-center flex w-[62px] transform transition duration-500 hover:scale-110 hover:text-purple-meet'><i class="fa-brands fa-twitter"></i></a>
                <a href='' className='p-4 bg-white text-3xl rounded-full justify-center flex w-[62px] transform transition duration-500 hover:scale-110 hover:text-purple-meet'><i class="fa-brands fa-google-play"></i></a>
                <a href='' className='p-4 bg-white text-3xl rounded-full justify-center flex w-[62px] transform transition duration-500 hover:scale-110 hover:text-purple-meet'><i class="fa-brands fa-apple"></i></a>
            </div>
            <div className='text-white w-[300px] md:w-[400px] text-center'>Copyright © 2022 Banco Meet - Instituição de Pagamento. 99.999.999/9999-99.</div>
        </div>
    )
}

export default Footer;