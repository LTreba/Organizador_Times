import './Form.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import {useState} from 'react'


const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [cor, setCor] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome,cargo,imagem,time})
        setNome('')
        setImagem('')
        setTime('')
        setCargo('')
    }


    return(
        <section className='formulario'>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar um novo integrante</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
                    <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}></CampoTexto>
                    <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}></CampoTexto>
                    <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} itens={props.time} label="Time"></ListaSuspensa>
                    <Botao texto="Criar card">
                        Criar Card
                    </Botao>
                </form>
                <form onSubmit={(evento) => {evento.preventDefault(); props.cadastrarTime({nome: nomeTime, cor:cor}); setNomeTime(''); setCor('')}}>
                    <h2>Preencha os dados para criar um novo time</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)}></CampoTexto>
                    <CampoTexto type="color" obrigatorio={true} label="Cor" placeholder="Digite a cor do time em hexadecimal" valor={cor} aoAlterado={valor => setCor(valor)}></CampoTexto>
                    <Botao texto="Criar novo time">
                        Criar Time
                    </Botao>
                </form>
        </section>
    )
}

export default Formulario;