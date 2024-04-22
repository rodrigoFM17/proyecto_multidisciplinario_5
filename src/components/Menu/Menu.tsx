'use client'
import './Menu.css'
import { useContext, useState } from 'react'
import UserContext from '@/context/UserContext'
import { redirect, useRouter } from 'next/navigation'

export default function Menu () {

    const {user} = useContext(UserContext)
    const router = useRouter()

    return (
        <>
            <header className='header-menu' >
                {
                    user.nickname ? <span onClick={()=> router.push(`${user.nickname}/kits/config`)}>
                        {user.nickname}
                    </span>
                    :
                    <p>no has iniciado sesion <span onClick={() => router.push('/login')}>inicia aqui</span></p>
                }    
            </header>
        </>
    )
}