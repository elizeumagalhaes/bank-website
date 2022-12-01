import React, { useEffect, useState } from 'react'

const Nav = () => {

    let [open, setOpen] = useState(false);
    let [status, setStatus] = useState(false)
    console.log(status)

    useEffect (() => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (user) {
            setStatus(true)
        } 
    }, [])

    async function logout() {
        sessionStorage.clear()
    } 

    return (
        <>
            {status ?(
                <div className='font-poppins w-full fixed top-0 left-0 z-50'>
                    <div className='md:flex items-center justify-between bg-white py-5 px-7 md:px-20 border'>
                        <div className='text-2xl font-medium'><a href="/"><span className='text-purple-meet align-center'><i className="fa-solid fa-meteor"></i></span> Meet</a></div>
                        <div id='burguer-icon' onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-5 cursor-pointer md:hidden'><i className={open ? 'fa-solid fa-x':'fa-solid fa-bars'}></i></div>
                        <ul className={`md:flex md:gap-14 pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-400 ease-in ${open ? 'top-16':'top-[-490px] opacity-0'} md:opacity-100`}>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/cliente/" >Minha conta</a></li>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/login/" onClick={logout}>Sair</a></li>
                        </ul>
                    </div>
                </div>
            ):(
                <div className='font-poppins w-full fixed top-0 left-0 z-50'>
                    <div className='md:flex items-center justify-between bg-white py-5 px-7 md:px-20 border'>
                        <div className='text-2xl font-medium'><a href="/"><span className='text-purple-meet align-center'><i className="fa-solid fa-meteor"></i></span> Meet</a></div>
                        <div id='burguer-icon' onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-5 cursor-pointer md:hidden'><i className={open ? 'fa-solid fa-x':'fa-solid fa-bars'}></i></div>
                        <ul className={`md:flex md:gap-14 pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-400 ease-in ${open ? 'top-16':'top-[-490px] opacity-0'} md:opacity-100`}>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/">Para você</a></li>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/cadastro/">Nossos Cartões</a></li>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/cadastro/">Seja Meet</a></li>
                            <li className='text-xl my-7 md:my-0'><a className="relative after:transition-all after:content-[''] after:absolute after:bg-purple-meet after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] hover:after:w-full hover:text-purple-meet hover:transition-all after:duration-300" href="/login/">Login</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;