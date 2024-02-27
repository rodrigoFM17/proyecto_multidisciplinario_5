import Logo from "@/components/Logo/Logo";
import './page.css'
import ContainerImages from "@/components/ContainerImages/ContainerImages";

export default function Home() {
  return (
    <main className="Home flex-col-center">

      <section className="welcome flex-col-center">
        <Logo width="15em" />

        <article className="flex-col-center">

          <h3>Bienvenido</h3>
          <h2>IntelligentBowl</h2>

          <p>
            Nuestra mision es que ninguna de tus mascotas 
            se quede sin alimento a la vez que proporcionamos un medio para 
            llevar el control de los dispensadores y los caninos que comen en 
            estos comederos inteligentes.
          </p>

        </article>

      </section>

      <ContainerImages />

      
    </main>
  );
}
