import React from 'react';

import celular from '../assets/cel.png';

const Conta = () => {
    return(
        <div id='conta' className='font-poppins w-full h-auto md:h-screen py-24 px-6 md:px-36 md:flex md:justify-around items-center'>
            <img className='md:hidden pointer-events-none mb-14 w-img-home' src={celular} alt="" />
            <div>
                <div className='text-[30px] md:text-5xl md:leading-relaxed md:w-[600px] mb-6 md:mb-10'>Conta digital, seguros, investimentos. <br/>Tudo em <span className='text-purple-meet'>um só lugar.</span></div>
                <a className='text-black text-xl py-2 px-8 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all' href="/cadastro">Seja Meet</a>
            </div>
            <img className='hidden md:block pointer-events-none mb-14 w-img-home' src={celular} alt="" />
        </div>
    )
}

export default Conta;