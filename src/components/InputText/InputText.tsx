import './InputText.css'

type inputArgs = {
    placeholder: string,
    type: string,
    id: string
}

export default function InputText({placeholder, type, id}: Readonly<inputArgs>) {

    return (
        <input type={type} placeholder={placeholder} className='inputText' id={id}/>
    )
}