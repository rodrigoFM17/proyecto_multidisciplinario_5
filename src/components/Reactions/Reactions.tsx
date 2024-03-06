'use client'
import meEncanta from '../../../public/me encanta.svg'
import meDivierte from '../../../public/me divierte.svg'
import Image from 'next/image'
import './Reactions.css'
import { useState } from 'react'

export default function Reactions (){

    const [likes, setLikes] = useState(0)
    const [laughs, setLaughs] = useState(0)

    const increseLikes = () => {
        setLikes(likes + 1)
    }

    const increseLaughs = () => {
        setLaughs(laughs + 1)
    }

    return (
        <div className='reactionsContainer'>
            <button onClick={increseLikes}>
                {likes}
                <Image src={meDivierte} alt='me divierte' className='reaction' title='me divierte'/>
            </button>
            <button onClick={increseLaughs}>
                {laughs}
                <Image src={meEncanta} alt='me encanta' className='reaction' title='me encanta'/>
            </button>

        </div>
    )
}