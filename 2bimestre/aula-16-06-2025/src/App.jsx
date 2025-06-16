import TarefaList from "./TarefaList";
import { useState } from "react";
import "./App.css"
import TarefaInput from './TarefaInput'
import './App.css'

function App() {
  const [arr_tarefas, setTarefas] = useState([])

  const adicionarTarefa = (descricao) => {
    const novaTarefa = {id: Date.now(), descricao, concluida: false}
    setTarefas([...arr_tarefas, novaTarefa])
  }

  const concluirTarefa = (id) => {
    setTarefas(
      arr_tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };
  
  
  const removerTarefa = (id) => {
    setTarefas(arr_tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TarefaInput onAddTarefa={adicionarTarefa}/>
      <TarefaList
        tarefas={arr_tarefas}
        onConcluir={concluirTarefa}
        onRemover={removerTarefa}
        />
    </div>
  );
}

export default App
