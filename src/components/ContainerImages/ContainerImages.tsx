import './ContainerImages.css'
import background from '../../../public/login-background.png'
import CardImage from '../CardImage/CardImage'

export default function ContainerImages () {

    const images = ["https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg", 
                    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg", 
                    "https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg", 
                    "https://cdn.forbes.com.mx/2023/07/Dia-del-perro.jpg",
                    "https://s1.eestatic.com/2022/04/19/curiosidades/mascotas/666193753_223665685_1706x960.jpg", 
                    "https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg", 
                    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg", 
                    "https://img.freepik.com/fotos-premium/perro-comiendo-comida-tazon_865967-62764.jpg", 
                    "https://www.diariodesevilla.es/2021/12/01/sociedad/perro-comiendo-mala-postura-sabias_1634246583_148309088_1200x675.jpg", 
                    "https://fotografias.larazon.es/clipping/cmsimages01/2019/10/24/0D729F64-22FD-4768-BB97-7375A07C6CAF/98.jpg?crop=2000,1125,x0,y103&width=1900&height=1069&optimize=low&format=webply", 
                    "https://estaticos-cdn.prensaiberica.es/clip/b5469312-a6bf-437a-9740-33609f9884ea_16-9-discover-aspect-ratio_default_0.jpg"]
    let i = 0

    return(
    <section className='containerImages'>
        {
            images.map( image => <CardImage srcImage={image} key={i++}/>)
        }
        
    </section>
    )

}