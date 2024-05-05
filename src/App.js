import Banner from './componentes/Banner'
import Form from './componentes/Form'
import Time from './componentes/Time'
import {useState} from 'react'

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Time-Exemplo',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado  = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(props){
    console.log(props)
    setColaboradores(colaboradores.filter((colaborador => colaborador.nome !== props)))
  }

  function mudarCor(cor, nome){
    setTimes(times.map(time=>{
      if(time.nome === nome){
        time.cor = cor;
      }
      return(time)
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times,{...novoTime}])
  }

  return (
    <div className="App">
      <Banner />
      <Form cadastrarTime={cadastrarTime} time={times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} ></Form>
      {times.map(time =>
        <Time 
        mudarCor = {mudarCor}
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}>
        </Time>)}
    </div>
  );
}

export default App;
