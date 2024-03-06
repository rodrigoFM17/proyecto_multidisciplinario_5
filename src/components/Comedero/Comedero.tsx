import Image from "next/image";
import logo from '../../../public/comedero.png'
import './Comedero.css'


export default function Comedero({width}: Readonly<{width?: string}>) {        

    return <Image src={logo} alt="logo" className="logo" style={{width: width}} />
}