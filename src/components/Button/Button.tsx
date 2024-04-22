import Image from 'next/image'
import paws from '../../../public/paws.svg'
import './Button.css'

export default function Button ({text, onClick}: Readonly<{text: string, onClick?: (e:any) => Promise<void>}>) {

    return <button className='button' onClick={onClick}>
            <Image src={paws} alt='paws' className='paws'/>
            {text}
        </button>
}