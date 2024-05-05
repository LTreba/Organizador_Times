import './Time.css'
import Card from '../Card'

const Time = (props) => {
    return(
        (props.colaboradores.length>0) && <section className="time" style={{backgroundColor:props.cor}}>
            <input value={props.corSecundaria} onChange={evento => {props.mudarCor(evento.target.value, props.nome)}} type='color' className='input-cor'></input>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador=>
                {
                    return(<Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.imagem} aoDeletar={props.aoDeletar}></Card>)
                }
            )}
            </div>
        </section>
    )
}

export default Time