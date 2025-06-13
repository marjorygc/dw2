import { useState } from 'react'
import './App.css'
import Botao from './Botao'
import Calculadora from './Calculadora';


function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [categoria, setCategoria] = useState('');

    return(
    <div>
        <h1>Calculadora de IMC</h1>
        <input 
        type="number"  
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        <input 
        type="number" 
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <Botao peso = {peso} altura = {altura} setResultado = {setResultado} setCategoria = {setCategoria}/>
        <div>
        <p>{resultado}</p>
        <p>{categoria}</p>
       </div>
    </div>
    )
}

export default App
