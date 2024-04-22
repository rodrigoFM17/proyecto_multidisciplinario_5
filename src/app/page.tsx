'use client'
import Logo from "@/components/Logo/Logo";
import meGusta from '../../public/me encanta.svg'
import './page.css'
import ContainerImages from "@/components/ContainerImages/ContainerImages";
import { Mochiy_Pop_One } from "next/font/google";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import configuration from '../../public/gear-solid.svg'
import sand from '../../public/hourglass-start-solid.svg'
import graphic from '../../public/chart-line-solid.svg'
import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import Graphic from "@/components/Graphic/Graphic";
const titles = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"]
})


export default function Home() {

  
  const router = useRouter()
  const {user} = useContext(UserContext)

  return (
    <main className={"Home flex-col-center "}>

      <section className="welcome flex-col-center">

        <Menu />
        <Logo width="15em" />

        <div className="container-dashboard">
          <article onClick={() => router.push(`${user.nickname}/kits/dispensations`)}>
            <div>
              <h3>Dispensaciones en la semana</h3>

              <p>vea como su dispensador alimento a 
                su mascota durante la semana</p>
            </div>
            <Image src={graphic} alt="grafica" width={30} height={30} />
          </article>

          <article onClick={()=> router.push(`${user.nickname}/kits/config`)}>
            <div>
              <h3>Configure su kit</h3>
              <p>Elija la hora y la cantidada de comida que quiere darle a su mascota</p>
            </div>
            <Image src={configuration} alt="configuracion" width={50} height={50} />
          </article>

          <article onClick={() => router.push(`${user.nickname}/kits/waiting-time-graphic`)}>
            <div>
              <h3>Tiempo en espera</h3>

              <p>vea a que hora del dia 
                su mascota pasa mas tiempo frente al
                dispensador esperando recibir comida</p>
            </div>
              <Image src={sand} alt="tiempo de espera" width={50} height={50} />
          </article>
        </div>

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
          Album de fotos
        </h2>
        <ContainerImages/>
      </div>

      
      
    </main>
  );
}
