"use client"
import { useParams } from "next/navigation"
import './Post.css'
import Image from "next/image"
import Comments from "@/components/Comments/Comments"
import { useEffect, useState } from "react"
import { getComments, getPublication } from "@/helpers/fetchApi"
import imageDefault from '../../../../public/images-regular.svg'

export default function Post(){

    const [comments, setComments] = useState([])
    const [publication, setPublication] = useState<any>(null)
    const {id} = useParams()

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getComments("661fd86e2c903a83acb0343b")
            console.log(data)
            if(data)
            setComments(data.data)
        }
        fetchComments()

        const fetchPublication = async () => {
            if(!Array.isArray(id)){
                const data = await getPublication(id)
                if(data){
                    console.log(data.data)
                    setPublication(data.data)
                }
            }
        }
        fetchPublication()

    }, [])

    return (
        <section className="singular-post">

            {
                publication && <>
                    <h1>Publicacion {id}</h1>

                    <h3>
                        {publication.attributes.title}
                    </h3>

                    <Image 
                    src={publication.attributes ? publication.attributes.imageUrl : imageDefault } 
                    className="post-image" 
                    alt="imagen del post" 
                    width={500} 
                    height={500} 
                    />

                    <p>{publication.attributes.content}</p>
                    
                    <div className="container-post-comments">
                    <Comments publicationId={publication.id}/>
                    </div>

                </>
            }

            
            

        </section>
    )
}