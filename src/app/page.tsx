import Logo from "@/components/Logo/Logo";
import './page.css'
import CardImage from "@/components/CardImage/CardImage";
import ContainerImages from "@/components/ContainerImages/ContainerImages";
import { Mochiy_Pop_One } from "next/font/google";
const titles = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"]
})


export default function Home() {
  return (
    <main className={"Home flex-col-center "}>

      <section className="welcome flex-col-center">
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

        <h2 className={titles.className}> Seccion 1 </h2>
        <ContainerImages/>
      </div>

      
      
    </main>
  );
}
