
import Calculadora from "./Calculadora";

function Botao({peso, altura, setResultado, setCategoria}){
    
    return(
        <div>
            <button onClick={() => Calculadora(peso,altura, setResultado, setCategoria)} class = "botao">Calcular</button>
        </div>
    )
}

export default Botao;