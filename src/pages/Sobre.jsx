import React from 'react';

const Sobre = () => {
    return(
        <div id='sobre' className='font-poppins w-full h-screen bg-fy-img bg-cover bg-right md:bg-center'>
            <div className='w-full h-screen bg-black bg-opacity-40 items-center py-24 px-6 flex flex-col justify-center md:px-36'>
                <div className='w-full md:w-[600px]'>
                    <div className='text-[30px] md:text-5xl text-white md:leading-relaxed mb-6 md:mb-10'>Junte-se a nós e descubra o universo de possibilidades de Meet.</div>
                    <a className='text-white text-xl py-2 px-8 border-solid border-2 border-white rounded-full hover:bg-purple-meet hover:border-purple-meet transition-all' href="/cadastro">Seja Meet</a>
                </div>
            </div>
        </div>
    )
}

export default Sobre;