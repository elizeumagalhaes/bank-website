import React from 'react';

import cartao from '../assets/card.png';

const Cartao = () => {
    return(
        <div id='conta' className='font-poppins w-full h-auto md:h-screen py-24 px-6 md:px-36 md:flex md:justify-around items-center'>
            <img className='pointer-events-none mb-14 w-img-home' src={cartao} alt="" />
            <div>
                <div className='text-[30px] md:text-5xl md:leading-relaxed md:w-[600px] mb-6 md:mb-10'>Cartão <span className='text-purple-meet'>gratuito, sem complicações,</span> como você sempre quis.</div>
                <a className='text-black text-xl py-2 px-8 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all' href="/cadastro">Peça já o seu</a>
            </div>
        </div>
    )
}

export default Cartao;