'use client'
import Image from "next/image";
import './CardImage.css'
import Reactions from "../Reactions/Reactions";
import Comments from '../Comments/Comments';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getComments } from "@/helpers/fetchApi";


export default function CardImage({srcImage, publicationId, initialLaughs, initialLikes}: any) {

    const [showComments, setShowComments] = useState(false)
    const [comments, SetComments] = useState<any[]>([])
    const router = useRouter()

    useEffect(()=>{
        const fetchComments = async () => {
            const newComments = await getComments(publicationId)
            console.log(newComments.data)
            SetComments(newComments.data)
        }
        fetchComments()
    },[])

    return (   
        <div >
            <figure className="CardImage">
                <Image src={srcImage} alt="image" className="Image" width={500} height={500} onClick={() => router.push(`post/${publicationId}`)}/>
                <Reactions 
                setShow={setShowComments} 
                initialLikes={initialLikes} 
                initialLaughs={initialLaughs} 
                publicationId={publicationId}
                comments = {comments.length}
                />
                
            </figure>
            {
                showComments && <figcaption className="container-comments">
                    <Comments publicationId={publicationId} />
                </figcaption>
            }
        </div>
    )
}