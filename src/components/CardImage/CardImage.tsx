import Image from "next/image";
import './CardImage.css'
import example from '../../../public/login-background.png'
import Reactions from "../Reactions/Reactions";

export default function CardImage({srcImage}: Readonly<{srcImage: string}>) {

    return (

        <figure className="CardImage">

            <Image src={srcImage} alt="image" className="Image" width={500} height={500} />
            <Reactions/>
            
        </figure>
    )
}