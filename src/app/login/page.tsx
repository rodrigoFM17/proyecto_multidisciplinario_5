import './login.css'
import InputText from '@/components/InputText/InputText'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'

export default function Login () {

    return (
        <section className="login">

            <form action="" >

                <Logo />

                <InputText type='text' placeholder='Nombre de usuario' /> 
                <InputText type='password' placeholder='Contraseña' />

                <Button text='entrar'/>

            </form>

        </section>
    )
} 