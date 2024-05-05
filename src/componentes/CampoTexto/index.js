import './CampoTexto.css'

const CampoTexto = (props) =>{

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const placeholderModificada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} required= {props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto