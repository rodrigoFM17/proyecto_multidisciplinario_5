'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import clock from '../../../../../public/clock-regular.svg'
import calendar from '../../../../../public/calendar-regular.svg'
import foodImage from '../../../../../public/food.svg'
import arrowDown from '../../../../../public/arrow-turn-down-solid.svg'
import './Dispensations.css'
import UserContext from "@/context/UserContext";
import { getDispensationsHistory } from "@/helpers/fetchApi";

type dispensation  =  {
    hour: string,
    day: string,
    cantidad: number,
}

const Dispensation = ({hour, day, cantidad}:dispensation) => {


    return <article className="dispensation">
        <div title="dia">
            <span>
                {day}
            </span>
            <Image src={calendar} alt="calendario" width={50} height={50}/>
        </div>
        <div title="hora de la dispensacion">
            <span>
                {hour}:00
            </span>
            <Image src={clock} alt="reloj" width={50} height={50} />
        </div>
        <div title="comida ingerida por el perro">
            <span>
                {cantidad}
            </span>
            <Image src={foodImage} alt="comida" width={50} height={50}/>
        </div>
        {/* <div title="comida restante">
            <span>
                {foodLeft}
            </span>
            <Image src={arrowDown} alt="comida abandonada" width={50} height={50}/>
        </div> */}
    </article>
} 

export default function Dispensations() {


    const {user} = useContext(UserContext)
    console.log(user)
    const [dispensations, setDispensations] = useState<dispensation[]>([])

    useEffect(() => {
        const fetchDispensation = async () => {
            const dispensations = await getDispensationsHistory(user.id)
            if(dispensations)
            console.log(dispensations.attributes.dispensations)
            setDispensations([...dispensations.attributes.dispensations])
        }
        fetchDispensation()

    },[])

    return (
        <section className="dispensations-section">
            <h1>Dispensaciones</h1>

            {
                dispensations.map((dispensation, index) => (
                    <Dispensation 
                    day={new Date().toDateString()}
                    cantidad={dispensation.cantidad}
                    hour={dispensation.hour}
                    key={`dispensation${index}`}
                    />
                ))
            }


        </section>
    )
}