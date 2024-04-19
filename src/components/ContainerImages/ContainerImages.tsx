"use client"
import './ContainerImages.css'
import CardImage from '../CardImage/CardImage'
import { useEffect, useRef, useState } from 'react'
import { getPublications } from '@/helpers/fetchApi'
import {v4 as uuidv4} from 'uuid'
import { League_Gothic } from 'next/font/google'
import ReconnectingWebSocket from 'reconnecting-websocket'

const optionsWs = {
    WebSocket: WebSocket,
    connectionTimeout: 10000,
    maxRetries: 5
}

export default function ContainerImages () {

    const [publications, setPublications] = useState<any[]>([])
    const ws = useRef<ReconnectingWebSocket>(new ReconnectingWebSocket(process.env.NEXT_PUBLIC_API_WS!, [], optionsWs))

    useEffect(() => {
        const fetchPublications = async () => {
            const publications = await getPublications()
            setPublications(publications)
        }
        fetchPublications()
    }, [])

    useEffect(()=>{
        if(ws.current)
            ws.current.close()
        ws.current = new ReconnectingWebSocket(process.env.NEXT_PUBLIC_API_WS!, [], optionsWs)
        if(process.env.NEXT_PUBLIC_API_WS)
         
        
        ws.current.addEventListener('open', ()=> {
            console.log('conectades')
            if(ws.current){
                ws.current.send(JSON.stringify({_id: uuidv4()}))
                console.log('enviado')
            }
        })
        ws.current.addEventListener('message', data => {
        console.log(data)
        const newPublication = JSON.parse(data.data)
        const formatted = {
            id: newPublication._id,
            attributes: {
                title: newPublication.title,
                content: newPublication.content,
                likes: newPublication.likes,
                laughs: newPublication.laughs,
                imageUrl: newPublication.imageUrl
            }

        }
        console.log(newPublication)
        console.log(formatted)
        const aux = publications
        aux.push(formatted)
        console.log(aux)
        setPublications([...aux])

        })
    }, [publications])


    return(
    <section className='containerImages'>
        {
            publications.map((publication, index) => <CardImage 
                                                    srcImage={publication.attributes.imageUrl} 
                                                    publicationId={publication.id}
                                                    initialLikes={publication.attributes.likes}
                                                    initialLaughs={publication.attributes.laughs} 
                                                    key={index}
                                                    />)
        }
        
    </section>
    )

}