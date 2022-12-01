import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [cpf, setCPF] = useState();
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/cliente')
        }
    })

    async function login() {
        var api = 'https://backmeet.azurewebsites.net/usuarios/'

        let item={cpf, password, operacao: 'logar'}

        let result = await fetch(api, {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(res => {
            res.json().then(vv => {
                if (vv.cliente) {
                    sessionStorage.setItem('user', JSON.stringify({user:vv.cliente}))
                    localStorage.setItem('status', JSON.stringify({logado:true}))
                    navigate('/cliente')
                    return
                }
            })
        })
    }

    return (
        <>
            <Nav />
            <div className='font-poppins w-full h-screen bg-gradient-to-b from-[#CECEFE] to-[#696BB9] items-center py-24 px-6 flex justify-center md:px-36 mt-8 md:mt-0'>
                <div className='bg-white p-12 rounded-3xl flex flex-col justify-center shadow-lg md:w-[400px] items-center'>
                    <div className='text-[30px] md:text-4xl'>Login</div>
                    <form className='my-16 flex flex-col justify-center gap-8 grow w-full'>
                        <input type="number" placeholder='CPF' value={cpf} onChange={(event) => setCPF(event.target.value)} required='Required' className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <input type="password" placeholder='Senha' value={password} onChange={(event) => setPassword(event.target.value)} required='Required' className='py-2 px-4 bg-gray-meet rounded-xl' />
                        <button type='button' onClick={login} className='text-black text-xl py-2 border-solid border-2 border-black rounded-full hover:bg-purple-meet hover:border-purple-meet hover:text-white transition-all mt-2'>Continuar</button>
                    </form>
                    <div className='flex flex-col gap-4'>
                        <a href="/cadastro"  className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300">Ainda não sou cliente ></a>
                    </div>
                </div>
            </div>
        </>    
    )
};

export default Login;