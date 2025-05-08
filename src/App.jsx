import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(100)
  const [vivo, setVivo] = useState(true)
  const [felicidade, setFelicidade] = useState(50)
  const [sono, setSono] = useState(50)
  const [fome, setFome] = useState(50)
  const [sabedoria, setSabedoria] = useState(0)
  const [cozinhando, setCozinhando] = useState(false)
  const [brincando, setBrincando] = useState(false)
  const [dormindo, setDormindo] = useState(false)
  const [estudando, setEstudando] = useState(false)

  function getImagemJake() {
    if (!vivo) return 'public/jake/jakeDEATH.jpg'
    if (cozinhando) return 'public/jake/jakeCOOKING.jpg'
    if (brincando) return 'public/jake/jakeHAPPY.jpg' 
    if (dormindo) return 'public/jake/jakeSLEEP.jpg'
    if (estudando) return 'public/jake/jakeSTUDYING.png'
    if (felicidade > 70) return 'public/jake/jakeHAPPY.jpg'

    return 'public/jake/jakeVIBE.jpg' 
  }

  useEffect(() => {
    let tick = 0

    const intervalo = setInterval(() => {
      tick++

      if (vida <= 0 || fome <= 0) {
        setVivo(false)
        clearInterval(intervalo)
        return
      }

      setVida((v) => v - 1)

      if (tick % 5 === 0) {
        setFelicidade((f) => Math.max(f - 1, 0))
        setSono((s) => Math.max(s - 1, 0))
        setFome((f) => Math.max(f - 1, 0))
      }
    }, 1000)

    return () => clearInterval(intervalo)
  }, [vida, fome])

  function curar() {
    if (vivo) {
      setVida((v) => Math.min(v + 10, 100))
    } else {
      alert("NAAAÃO! TU DEIXOU O JAKE MORRER!")
    }
  }

  function brincar() {
    if (!vivo) return
    setBrincando(true)
    setFelicidade((f) => Math.min(f + 10, 100))
    setSono((s) => Math.max(s - 5, 0))
    setFome((f) => Math.max(f - 5, 0))

    // 5 seg
    setTimeout(() => setBrincando(false), 5000)
  }

  function dormir() {
    if (!vivo) return
    setDormindo(true)
    setSono((s) => Math.min(s + 15, 100))
    setFelicidade((f) => Math.max(f - 5, 0))

    // 10 seg
    setTimeout(() => setDormindo(false), 5000)
  }

  function alimentar() {
    if (!vivo) return
    setFome((f) => Math.min(f + 15, 100))
    setFelicidade((f) => Math.min(f + 5, 100))
    alert("São panquecas, panquecas de toucinho")
    setCozinhando(true)

    // 8 seg
    setTimeout(() => setCozinhando(false), 5000)
  }

  function estudar() {
    if (!vivo) return
    setEstudando(true)
    setSabedoria((s) => s + 5)
    setSono((s) => Math.max(s - 5, 0))
    setFelicidade((f) => Math.max(f - 5, 0))

    // 5 seg
    setTimeout(() => setEstudando(false), 5000)
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={getImagemJake()} alt="Jake" width="200" style={{ marginBottom: '20px' }} />

      <div>Vida: {vida}</div>
      <div>Felicidade: {felicidade}</div>
      <div>Sono: {sono}</div>
      <div>Fome: {fome}</div>
      <div>Sabedoria: {sabedoria}</div>

      <div className='botoes' style={{ marginTop: '20px' }}>
        <button onClick={curar}>Curar</button>
        <button onClick={brincar}>Brincar</button>
        <button onClick={dormir}>Dormir</button>
        <button onClick={alimentar}>Alimentar</button>
        <button onClick={estudar}>Estudar</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        Vivo: {vivo ? <p>Vivo🌿</p> : <p>Morto☠️</p>}
      </div>
    </div>
  )
}

export default App
