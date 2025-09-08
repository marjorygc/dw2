import { useState } from "react";
import styles from"./Contador.module.css"

export default function Contador(){

  //const estado = useState[0]
  //let contador = estado[0]
  //const setContador = estado[1]

  let [contador, setContador] = useState(0)

  function incrementar(){
    setContador(contador => contador + 1)
  }

  function decrementar(){
   setContador(contador => contador - 1)
  }

  return(
    <>
      <div className={styles.container}>
        <h1>Contador</h1>
        <div className={styles.contadorDisplay}>{contador}</div>
        <div className={styles.botaoContainer}>
          <button
           className={styles.botao}
           onClick={decrementar}
           >-</button>
          <button 
           className={styles.botao}
          onClick={incrementar}
          >+</button>
        </div>
        <button className={styles.botao}> Reset</button>
      </div>
    </>
  )
}