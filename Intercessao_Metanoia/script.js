// Tarefas: um cronometro, dar um jeito de ter mais de um tema ao mesmo tempo(classe), mecher com o css, fazer desaparecer e aparecer de novo


var temas = ["Família", "Missões", "Devocional"]

numero_elemento = Math.floor(Math.random() * (3 - 1) + 1)

let tema = ""

function posicao_tela(){
    let x = window.innerWidth
    let y = window.innerHeight

    let newX = Math.floor(Math.random() * (x - 1) + 1)
    let newY = Math.floor(Math.random() * (y - 1) + 1)

    let posicao = document.getElementById("meuElemento");
    posicao.style.left = newX + "px";
    posicao.style.top = newY + "px";

    tema = temas[numero_elemento]
    posicao.innerText = tema
}

posicao_tela()

// while (true){
//     posicao_tela()
// }