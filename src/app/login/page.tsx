'use client'
import './login.css'
import InputText from '@/components/InputText/InputText'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'
import { login, register } from '@/helpers/fetchApi'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import UserContext from '@/context/UserContext'

export default function Login () {

    const router = useRouter()
    const {setUser} = useContext(UserContext)

    const handleLogin = async (e:any) => {
        e.preventDefault()
        const user = document.querySelector('#user') as HTMLInputElement
        const password = document.querySelector('#password') as HTMLInputElement
        const kit = document.querySelector('#kit') as HTMLInputElement
        
        if(user.value !== '' && password.value !=='' ){
            const logged = await login(user.value, password.value, kit.value)
            await console.log(logged)
            if (logged.type == "user"){
                alert('inicio de sesion correcto')
                const userLogged = {
                    nickname: logged.attributes.user.nickname,
                    token: logged.attributes.token
                }
                setUser(userLogged)
                router.push('/')
            } else {
                alert('inicio de sesion incorrecto')
            }
        } else {
            alert('llene los campos usuario y contrasena')
        }
    }

    const handleRegister = async (e:any) => {
        e.preventDefault()
        const user = document.querySelector('#user') as HTMLInputElement
        const password = document.querySelector('#password') as HTMLInputElement
        const kit = document.querySelector('#kit') as HTMLInputElement
        
        if(user.value !== '' && password.value !=='' ) {
            const registered = await register(user.value, password.value, kit.value)
            await console.log(registered)
                if (registered.type == "user"){
                    alert('registro correcto, inicie sesion')
                } else {
                    alert('el registro fallo, intente mas tarde')
                }
        } else {
            alert('lleno los campos usuario y contrasena')
        }
    }

    return (
        <section className="login">
            <form action="" >
                <Logo />
                <InputText type='text' placeholder='Nombre de usuario' id='user'/> 
                <InputText type='password' placeholder='Contraseña' id='password' />
                <InputText type='text' placeholder='id del Kit (si tiene uno)' id='kit'/>

                <Button text='entrar' onClick={handleLogin}/>
                <Button text='registrarse' onClick={handleRegister}/>
            </form>
        </section>
    )
} 