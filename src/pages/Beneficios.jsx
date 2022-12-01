import React from 'react';

import Card from '../components/Card'

const Beneficios = () => {
    return(
        <div className='font-poppins bg-white-meet w-full md:h-screen py-24 px-6 md:px-36 md:flex md:flex-col md:justify-center items-center'>
            <div className='text-[30px] md:text-5xl mb-6 md:mb-10 md:w-[750px] text-center md:leading-relaxed'>Benefícios <span className='text-purple-meet'>surpreendentes</span> na palma de sua mão.</div>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-[2vw] items-center mt-12'>
                <Card icon='fa-solid fa-plane' text='Viagens' />
                <Card icon='fa-solid fa-gift' text='Gift Card' />
                <Card icon='fa-solid fa-gas-pump' text='Shell Box' />
                <Card icon='fa-solid fa-coins' text='Cashback' />
            </div>
        </div>
    )
}
export default Beneficios;