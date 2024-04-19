import ContainerImages from "@/components/ContainerImages/ContainerImages";
import './DispenserImages.css'

export default function DispenserImages ({params}: any) {

    const {id} = params

    return (
        <section className="dispenserImages">
            <h1>Imagenes del Comedero {id}</h1>

            <div>
                <ContainerImages />
            </div>
        </section>
    )
}