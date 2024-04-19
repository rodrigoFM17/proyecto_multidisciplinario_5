'use client'
import Logo from "@/components/Logo/Logo";
import meGusta from '../../public/me encanta.svg'
import './page.css'
import ContainerImages from "@/components/ContainerImages/ContainerImages";
import { Mochiy_Pop_One } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import Menu from "@/components/Menu/Menu";
import { stringify } from "querystring";
const titles = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"]
})


export default function Home() {

  


  return (
    <main className={"Home flex-col-center "}>

      <section className="welcome flex-col-center">

        <Menu />
        <Logo width="15em" />

        <article className="flex-col-center">

          <h3 className={titles.className}>Bienvenido</h3>
          <h2 className={titles.className}>Auto-Bowl</h2>
          <p>
            Nuestra mision es que ninguna de tus mascotas 
            se quede sin alimento a la vez que proporcionamos un medio para 
            llevar el control de los dispensadores y los caninos que comen en 
            estos comederos inteligentes.
          </p>

        </article>

      </section>

      <div className="seccion1">

        <h2 className={titles.className}>
          <Image src={meGusta} alt="me gusta" className="image"/>
          Los mas gustados 
        </h2>
        <ContainerImages/>
      </div>

      
      
    </main>
  );
}
