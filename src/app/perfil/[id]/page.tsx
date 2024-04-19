'use client'
import { useParams } from 'next/navigation'
import GenericButton from '../../../components/GenericButton/GenericButton'
import comederoImage from '../../../../public/comedero-dark.svg'
import paws from '../../../../public/two-paws.svg'
import buttonPaws from '../../../../public/paws.svg'
import './perfil.css'
import Image from 'next/image'

export default function Perfil () {

    const {id} = useParams()

    return (
        <section className='perfil'>
            <form>
                <h1>Usuario con el id {id}</h1>

                <fieldset>
                    <Image src={paws} alt='paws' />
                    <label htmlFor='nickname'>
                        Nickname: 
                    </label>
                    <input type="text" id='nickname' />
                </fieldset>

                <fieldset>
                    <Image src={paws} alt='paws' />
                    <label htmlFor='contrasena'>
                        Contrasena: 
                    </label>
                    <input type="password" id='contrasena' />
                </fieldset>

                <div>
                    <GenericButton image={comederoImage} text={"Comederos"} onClick={() =>{}} />
                    <GenericButton image={buttonPaws} text={"Guardar"} onClick={() => {}} />
                </div>

            </form>
        </section>
    )
}