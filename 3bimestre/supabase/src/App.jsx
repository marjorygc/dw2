import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import {supabase} from "./supabaseClient"

function App() {

  const [tarefas, setTarefas] = useState([])

  

  const consultaTarefas = async () => {
     const {data, error }= await supabase
                    .from('tarefas')
                    .select('*')
                    .order('created_at', {ascending: true})
     
     setTarefas(data)
  }
 


  return (
    <>
    <h1>React com Supabase</h1>
    <button onClick={consultaTarefas}>
      Ok
      </button>

    <br />
    <br />
    <br />

    <div>
      {tarefas.map(elemento => (<div>{elemento.tarefa}<div/>))}
    </div>
    </>
  )
}

export default App
