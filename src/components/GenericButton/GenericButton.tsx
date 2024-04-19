import Image from "next/image";
import paws from '../../../public/paws.svg'
import './GenericButton.css'
type Props = {
    onClick: () => any,
    image: any,
    text: string
}
export default function GenericButton ({onClick, image, text }: Props){

    return (
        <button onClick={onClick} className="generic-button">
            <Image src={image} alt="paws" className="image"/>
            {text}
        </button>
    )
}