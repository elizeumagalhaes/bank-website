import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Nav from '../components/Nav'

const Cadastro = () => {

    const [cpf, setCPF] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function signUp() {
        let user={cpf, password, 'operacao': 'cadastrar'}

        var api = 'https://backmeet.azurewebsites.net/usuarios/'

        console.log(user)

        let result = await fetch(api, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate('/cadastro-cliente')
    }

    return(
        <>
            <div className='block md:hidden'>
                <Nav />
            </div>
            <div className='font-poppins w-full h-screen flex justify-center'>
                <div className='bg-cadastro bg-cover bg-center w-1/2 h-screen hidden md:block'>
                    <div className='py-20 px-6 flex flex-col justify-center md:px-36'>
                        <a href="/" className='text-2xl text-white'>Meet</a>
                        <div className='text-white leading-relaxed text-5xl text-left mb-10 w-[550px] pt-16'>Preencha os campos ao lado para abrir sua conta.</div>
                    </div>
                </div>
                <div className='w-1/2 h-auto flex flex-col justify-center items-center mt-8 md:mt-0'>
                    <div className='block md:hidden text-[20px] mb-10 text-center w-[250px]'>Preencha os campos abaixo para abrir sua conta.</div>
                    <div className='flex flex-col justify-center gap-8 w-[300px] md:w-1/2'>
                        <input type="text" placeholder='CPF' value={cpf} onChange={(event) => setCPF(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="password" placeholder='Senha' value={password} onChange={(event) => setPassword(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <button onClick={signUp} className='text-black text-xl py-2 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all mt-2'>Continuar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;