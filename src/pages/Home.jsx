import React from 'react';

import img_home from '../assets/img1.png';

const Home = () => {
    return(
        <>
            <div className='font-poppins w-full h-auto md:h-screen items-center py-24 px-6 md:justify-around md:px-36 md:flex'>
                <img className='md:hidden pointer-events-none mb-14' src={img_home} alt="pessoas-sorrindo" />
                <div>
                    <div className='md:leading-relaxed text-[30px] md:text-5xl md:w-text-home text-left mb-6 md:mb-10'><span className='text-purple-meet'>Uma nova maneira</span> de cuidar do seu dinheiro.</div>
                    <a className='text-black text-xl py-2 px-8 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all' href="/cadastro">Seja Meet</a>
                </div>
                <img className='hidden md:block md:w-img-home pointer-events-none' src={img_home} alt="pessoas-sorrindo" />
            </div>
        </>
    )
}

export default Home;