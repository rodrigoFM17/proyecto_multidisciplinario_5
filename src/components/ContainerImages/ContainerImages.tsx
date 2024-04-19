"use client"
import './ContainerImages.css'
import CardImage from '../CardImage/CardImage'
import { useEffect, useRef, useState } from 'react'
import { getPublications } from '@/helpers/fetchApi'
import {v4 as uuidv4} from 'uuid'

export default function ContainerImages () {

    const [publications, setPublications] = useState<any[]>([])
    const ws = useRef<WebSocket>(null)

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

        ws.current = new WebSocket('wss://websocket-super-bowl.onrender.com')
        
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
        console.log(newPublication)
        const aux = publications
        aux.push(newPublication)
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