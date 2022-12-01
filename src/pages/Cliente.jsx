import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import defaultuser from '../assets/default_user.png'
import card from '../assets/mycard.png'

const Cliente = () => {
    const [dados, setDados] = useState({});

    console.log(Object.entries(dados));
    useEffect(() => {
        const items = JSON.parse(sessionStorage.getItem('user'))
        if (items) {
            setDados(items.user);
        }
    }, []);

    return(
        <div className='font-poppins'>
            <div className='w-full h-auto md:h-screen items-center md:flex justify-center gap-14 mt-24 px-6 md:px-0 md:mt-0'>
                <Nav />
                <div className='md:w-1/3 h-[80vh] bg-white-meet rounded-[4rem] p-16 flex flex-col items-center justify-center mb-6 md:mb-0'>
                    <img src={defaultuser} alt="" className='md:w-60 md:h-60 mb-10' />
                    {Object.entries(dados).map(([key, value]) => {
                        return (
                            <div className='flex flex-col my-3 items-center'>
                                <div className='text-dark-grey'>{key}:</div>
                                <div className='text-xl text-purple-meet'>{value}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='md:w-1/2 h-[80vh] bg-white-meet rounded-[4rem] p-16 mb-6 md:mb-0'>
                    <div className='md:flex md:flex-row gap-x-20 flex-col justify-between items-center mb-20 px-[4vw]'>
                        <div>
                            <div className='text-[30px] md:text-4xl mb-6'>Meu cartão</div>
                            <img src={card} alt="cartao" />
                        </div>
                        <div className='flex flex-col justify-center md:mt-0 mt-10'>
                            <div className='text-xl mb-4 md:mb-6'>Meet Infinite</div>
                            <div className='text-xl text-dark-grey mb-2'>Limite disponível:</div>
                            <div className='text-[30px] md:text-4xl'>R$500,00</div>
                        </div>
                    </div>
                    <div className='flex-col justify-center items-center px-[4vw]'>
                        <div className='text-[30px] md:text-4xl mb-4'>Minha conta</div>
                        <div className='text-xl text-dark-grey mb-2'>Saldo atual:</div>
                        <div className='text-[30px] md:text-4xl mb-6 items-center flex'>R$0,00 <span className='text-xl ml-3'></span></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cliente;