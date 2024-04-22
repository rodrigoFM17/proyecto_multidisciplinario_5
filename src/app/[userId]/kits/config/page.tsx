'use client'
import React, {useContext, useRef, useState } from "react"
import './ConfigurateKit.css'
import Button from "@/components/Button/Button"
import Image from "next/image"
import calendar from '../../../../../public/calendar-regular.svg'
import clock from '../../../../../public/clock-regular.svg'
import food from '../../../../../public/food.svg'
import { updateConfigKit } from "@/helpers/fetchApi"
import UserContext from "@/context/UserContext"
import { useRouter } from "next/navigation"

export const horas = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
const minutos: string[]  = []

for (let i=0; i < 60; i++){
  if(i < 10){
    minutos.push(`0${i}`)
  } else {
    minutos.push(`${i}`) 
  }
}

type dispensation = { 
  hour: string,
  foodAmount: number
}

// const Dispensation = ({dispensation}: {dispensation: dispensation}) => {

//   return <figure className="dispensation">
//       <div>
//         <span>{dispensation.hour}</span>
//         <Image alt="reloj" src={clock} width={30} height={30} />
//       </div>
//       <div>
//         <span>{dispensation.foodAmount}</span>
//         <Image alt="comida" src={food} width={30} height={30} />
//       </div>
//   </figure>
// }

function ConfigurateKit() {
  const router = useRouter()

  const [dispensation, setDispensation] = useState<dispensation>({})
  const {user} = useContext(UserContext)

  // const addConfiguratedDispensation = async (e) => {
  // e.preventDefault()
  //   const hour = document.querySelector('select[name="hora"]') as HTMLInputElement
  //   const minute = document.querySelector('select[name="minuto"]') as HTMLInputElement
  //   const foodAmount = document.querySelector('#food-amount') as HTMLInputElement

  //   dispensations.push({
  //     hour: `${hour.value}:${minute.value}`,
  //     foodAmount: Number.parseInt(foodAmount.value)
  //   })
  //   console.log(dispensations)
  //   setDispensations([...dispensations)
  // }

  const fetchConfiguratedDispensations = async (e) => {

    e.preventDefault()

    const hour = document.querySelector('select[name="hora"]') as HTMLInputElement
    const minute = document.querySelector('select[name="minuto"]') as HTMLInputElement
    const foodAmount = document.querySelector('#food-amount') as HTMLInputElement
    // dispensations.forEach(async (dispensation) => {
    //   const updates = await updateConfigKit(user.nickname, dispensation.hour, dispensation.foodAmount)
    //   console.log(updates)
    // })

    const updated = await updateConfigKit(user.nickname, `${hour.value}:${minute.value}`, Number.parseInt(foodAmount.value))
    console.log(updated)

    await router.push('/')

  }
  
  

  return (
    <>
      <section className="configurate-kit-section">
        <form className="configurate-kit" onSubmit={fetchConfiguratedDispensations}>
          <h2>Configura tu kit</h2>

          <div className="container-options">
            <select name="hora" required>
              <option value="" disabled defaultChecked>Seleccione la hora</option>
              {
                horas.map(hora => {
                  return <option value={hora}>{hora}</option>
                })
              }
            </select>
            :
            <select name="minuto" required>
              <option value="" disabled defaultChecked>Seleccione el minuto</option>
              {
                minutos.map(minuto => {
                  return <option value={minuto}>{minuto}</option>
                })
              }
            </select>
            <div>
              <input id="food-amount" type="number" required min={100} max={500}/>
              <span>gr</span>
            </div>

          </div>

          <button type="submit">
            Aceptar
          </button>
          
        </form>

      </section>
      
    </>
  )
}

export default ConfigurateKit
