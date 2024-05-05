import "./Card.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

const Card = (props) => {
    return(
        <div className="card">
            <IoMdCloseCircleOutline size={25} className="deletar" onClick={() => props.aoDeletar(props.nome)}></IoMdCloseCircleOutline>
            <div className="cabecalho">
                <img src={props.img} alt={props.nome}></img>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Card