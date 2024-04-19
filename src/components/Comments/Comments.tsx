'use client'
import { createComment, getComments } from '@/helpers/fetchApi'
import './Comment.css'
import { useContext, useEffect, useState } from 'react'
import UserContext from '@/context/UserContext'
import send from '../../../public/send.svg'
import Image from 'next/image'
type props = {
    publicationId: string
}

export default function Comments({publicationId}: props) {
    
    const [comments, setComments] = useState<any[]>([])

    useEffect(()=>{
        const fetchComments = async () => {
            const newComments = await getComments(publicationId)
            console.log(newComments.data)
            setComments(newComments.data)
        }
        fetchComments()
    },[])

    const {user} = useContext(UserContext)
    const fetchCreateComment = async (e:any) => {
        e.preventDefault()
        const content = document.querySelector(`#comment${publicationId}`) as HTMLInputElement
        if(user.nickname !== ''){
            const created = await createComment(publicationId, user.nickname, content.value)
            await console.log(created)
            const aux = comments
            aux.push(created.data)
            console.log(setComments)
            setComments([...aux])
            content.value = ''
        } else {
            alert('tienes que iniciar sesion para comentar')
        }
    }
    return (
        <figcaption className='comments'>
            <form onSubmit={fetchCreateComment}>
                <label>
                    <span>Tu:</span> 
                    <input type="text" id={`comment${publicationId}`} placeholder='Escribe tu comentario aqui' required/>
                    <button type='submit'>
                        <Image src={send} alt="send" width={20} height={20} />
                    </button>
                </label>
            </form>
            <ul>
                {
                    comments.map((comment, index) => <li key={"comment"+index}>
                                <span>{comment.attributes.nickname}: </span>
                                <span>{comment.attributes.content}</span>
                            </li>)
                }
            </ul>
        </figcaption>
    )
}