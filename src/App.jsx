import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(1000)
  const [vivo, setVivo] = useState(true)
  const [felicidade, setFelicidade] = useState()
  const [sono, setSono] = useState()
  const [fome, setFome] = useState()
  const [sabedoria, setSabedoria] = useState()



  useEffect(() => {
    const intervalo = setInterval(() => {
      if(vida <= 0){
        setVivo(false)
        clearInterval(intervalo)
        return 0
      }
      setVida((vidaAtual) => vidaAtual-1)

    }, 1000);

    return () => clearInterval(intervalo)
  },[vida])



  function curar(){
    if(vivo){
       if(vida <= 90){
      setVida(vida + 10)
      }else{
        setVida(100)
      }
    }else{
      alert("Acabou a cura! ... tá achando que a vida é um morango?")
    }
      console.log(vida);
    }



  return (
    <>
    <div>
      Vida: {vida}
    </div>

    <div>
     <button onClick={curar} >Curar</button>
    </div>

    <div>
     <button onClick={brincar} >Brincar</button>
    </div>

    <div>
     <button onClick={dormir} >Dormir</button>
    </div>

    <div>
     <button onClick={alimentar} >Alimentar</button>
    </div>

    <div>
     <button onClick={estudar} >Estudar</button>
    </div>
    
    <div>
      Vivo: {vivo ? <p>Vivo</p> : <p>Morto</p>}
    </div>
    </>
  )
}

export default App
