import React from 'react';
import Footer from '../components/Footer'

const Chamada = () => {
    return(
        <div className='w-full h-screen font-poppins'>
            <div className='w-full h-[70vh] bg-footer bg-center bg-cover md:bg-fixed'>
                <div className='w-full h-[70vh] bg-black bg-opacity-60 items-center py-24 px-6 flex flex-col justify-center md:px-36'>
                    <div className='text-[30px] md:text-5xl text-white md:leading-relaxed mb-6 md:mb-10 md:w-[600px] text-center'>O banco que vai deixar você no controle.</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Chamada;