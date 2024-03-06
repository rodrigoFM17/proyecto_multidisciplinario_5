import './ParticularDispenser.css'
import food from '../../../../public/food.svg'
import droplet from '../../../../public/droplet.svg'
import Image from 'next/image'
import bowl from '../../../../public/bowl.svg'
import images from '../../../../public/images-regular.svg'

export default function ParticularDispenser({params}: any){

    return (
        <section className='dispensers'>

            <header>
                <Image alt='bowl' src={bowl} className='bowl'/> 
                <h1>Mis comederos</h1>
                <Image alt='bowl' src={bowl} className='bowl'/> 
            </header>

            <article className="dispenser">
                <h2>Comedero {params.id}</h2>
                
                <div>
                    <figure className='containerInfoFood'>
                        <Image alt='comida' src={droplet} className='food'/>
                        <span>40</span>
                    </figure>
                    <figure className='containerInfoFood'>
                        <Image alt='comida' src={food} className='food'/>
                        <span>40</span>
                    </figure>
                </div>

                <button className='buttonImages'>
                    <Image src={images} alt='images'/>
                    <span>
                        Imagenes del dispensador 
                    </span>
                </button>

            </article>
        </section>
    )
}