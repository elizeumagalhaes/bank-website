import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Nav from '../components/Nav'

const CadastroCliente = () => {

    const [name, setNome] = useState()
    const [last_name, setSobrenome] = useState()
    const [email, setEmail] = useState()
    const [phone_number, setTelefone] = useState()
    const [birth_date, setNascimento] = useState()
    const navigate = useNavigate()

    async function signUp() {
        var user_data = JSON.parse(localStorage.getItem('user-info'))
        var user = user_data.id

        let client={name: name, last_name: last_name, email: email, phone_number: phone_number, birth_date: birth_date, user: user}

        var api = 'https://backmeet.azurewebsites.net/clientes/'

        let result = await fetch(api, {
            method:'POST',
            body:JSON.stringify(client),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        localStorage.clear();
        navigate('/login')
    }

    return(
        <>
            <div className='block md:hidden'>
                <Nav />
            </div>
            <div className='font-poppins w-full h-screen flex justify-center'>
                <div className='bg-cadastro bg-cover bg-center w-1/2 h-screen hidden md:block'>
                    <div className='py-20 px-6 flex flex-col justify-center md:px-36 items-center'>
                        <a href="/" className='text-2xl text-white'>Meet</a>
                        <div className='text-white leading-relaxed text-5xl text-left mb-10 w-[550px] pt-16'>Preencha os campos ao lado para abrir sua conta.</div>
                    </div>
                </div>
                <div className='w-1/2 h-auto flex flex-col justify-center items-center mt-8 md:mt-0'>
                    <div className='block md:hidden text-[20px] mb-10 text-center w-[250px]'>Preencha os campos abaixo para abrir sua conta.</div>
                    <div className='flex flex-col justify-center gap-8 w-[300px] md:w-1/2'>
                        <input type="text" placeholder='Nome' value={name} onChange={(event) => setNome(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="text" placeholder='Sobrenome' value={last_name} onChange={(event) => setSobrenome(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="email" placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="number" placeholder='Telefone' value={phone_number} onChange={(event) => setTelefone(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="date" value={birth_date} onChange={(event) => setNascimento(event.target.value)} className='py-2 px-4 bg-gray-meet rounded-xl'/>
                        <button onClick={signUp} className='text-black text-xl py-2 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all mt-2'>Finalizar Cadastro</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CadastroCliente;