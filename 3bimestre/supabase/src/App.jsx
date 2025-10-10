import { useState} from "react"
import { supabase } from "./supabaseClient"

function App() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState("")

  const consultaTarefas = async () => {
    const { data, error } = await supabase
      .from("tarefas")
      .select("*")
      .order("created_at", { ascending: true })

    if (error) {
      console.error("Erro ao buscar tarefas:", error)
    } else {
      setTarefas(data)
    }
  }

  const adicionarTarefa = async () => {
    if (!novaTarefa) return
    await supabase.from("tarefas").insert([{tarefa: novaTarefa}])
    setNovaTarefa("")
    consultaTarefas()
  }

  const alternarCompleta = async (id, atual) => {
    await supabase
      .from("tarefas")
      .update({esta_completa: !atual})
      .eq("id", id)
      consultaTarefas
  }

  const excluirTarefa = async (id) => {
    await supabase.from("tarefas").delete().eq("id", id)
    consultaTarefas()
  }

  return (
    <>
      <h1>React com Supabase</h1>

      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <button onClick={consultaTarefas}>Consulta</button>

      <div>
      <ul>
      {tarefas.map((t) => (
        <li key={t.id}>
          <span
            style={{
              textDecoration: t.esta_completa ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => alternarCompleta(t.id, t.esta_completa)}
          >
            {t.tarefa}
          </span>
          <button onClick={() => excluirTarefa(t.id)}>🗑️</button>
        </li>
      ))}
    </ul>
      </div>
    </>
  )
}

export default App
