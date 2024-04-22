'use client'
import meEncanta from '../../../public/me encanta.svg'
import imgComments from '../../../public/comments.svg'
import Image from 'next/image'
import './Reactions.css'
import { useEffect, useState } from 'react'
import { updateLikes } from '@/helpers/fetchApi'


export default function Reactions ({setShow, initialLikes, initialLaughs, publicationId, comments}:any){

    const [likes, setLikes] = useState(initialLikes)

    useEffect(()=> {
        if(likes > initialLaughs){
            const fetchPublications = async () => {
                const updated = await updateLikes(publicationId, likes) 
                await console.log(updated)
            }
            fetchPublications()
        }
    },[likes])
    

    const increseLikes = () => {
        setLikes(likes + 1)
    }

    return (
        <div className='reactionsContainer'>
            <button onClick={increseLikes}>
                {likes}
                <Image src={meEncanta} alt='me encanta' className='reaction' title='me encanta'/>
            </button>
            <button onClick={() => {}}>
                {comments}
                <Image src={imgComments} alt='comentarios' className='reaction' title='comentarios' />
            </button>
        </div>
    )
}