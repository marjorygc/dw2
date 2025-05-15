
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display
};
fhgjjhg

// Botão AC
btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

for (let i = 0; i < btnBotoes.length; i++) {
    const element =btnBotoes[i];
    element.addEventListener("click", () => {
        adicionaNumero(calculadora,element.innerHTML)
    } )
}

for (let i = 0; i < btnOperacoes.length; i++) {
    const element = btnOperacoes[i];
    if(element.innerHTML !== "="){
        element.addEventListener("click", () => {
        escolheOperador(calculadora, element.innerHTML)
    })
    }
}

function atualizaDisplay(calculadora) {
    bufferElemento.innerHTML = calculadora.operandoAnterior + calculadora.operador
    displayElemento.innerHTML = calculadora.operandoAtual
}

/* Limpa os atributos do objeto calculadora e atualiza o display.
 * Para atualizar o dispay, chame a função responsável por isso.
 */
function limpaVariaveis(calculadora) {
    calculadora.operandoAnterior = ""
    calculadora.operandoAtual = ""
    calculadora.operador = ""
    atualizaDisplay(calculadora)
}

/* Função chamada quando um botão de número é pressionado
 * A função recebe o objeto calculadora e o número a ser exibido no display.
 * - Adiciona um dígito no atributo operandoAtual e atualiza o display
 * O dígito "." deve receber um tratamento especial
 */
function adicionaNumero(calculadora, numero) {
    if(numero == "." && calculadora.operandoAtual.includes(".")){
        return
    }
    calculadora.operandoAtual += numero
    atualizaDisplay(calculadora)
}

/* Função chamada quando um botão de operador é pressionado
 * Essa função tem comportamentos diferentes dependendo do estado da calculadora.
 * Se o operandoAnterior e o operandoAtual estiverem preenchidos
 * - executar o cálculo (chamar outra função para realizar o cálculo).
 * Caso o operandoAnterior estiver vazio,
 * - armazenar o operador recebido por parâmetro no atributo operador do objeto calculadora.
 * - copiar operandoAtual para o operandoAnterior, deixando a calculadora preparada para receber o próximo número
 */
function escolheOperador(calculadora, operador) {
    
    if( calculadora.operandoAnterior !== "" && calculadora.operandoAtual !== ""){
        executaCalculo(calculadora)
        calculadora.operandoAnterior = calculadora.operandoAtual
        calculadora.operandoAtual = ""
    } else if (calculadora.operandoAnterior == ""){
        calculadora.operandoAnterior = calculadora.operandoAtual
        calculadora.operandoAtual = ""
    }
      calculadora.operador = operador
    atualizaDisplay(calculadora)}
    

/* A função recebe o objeto calculadora e executa o calculo
 * - Verificar a operação a ser executada
 * - Executar a operação
 * - Atualizar os atributos operador, operandoAnterior e operandoAtual
 * - Atualizar o display
 */
function executaCalculo(calculadora) {
    let valor1 = parseFloat(calculadora.operandoAnterior)
    let valor2 = parseFloat(calculadora.operandoAtual)
    let operador = calculadora.operador

    if (operador == "*"){
         calculadora.operandoAtual = String(valor1*valor2)
    }
    if (operador == "÷"){
         calculadora.operandoAtual = String(valor1/valor2)
    }
    if (operador == "+"){
         calculadora.operandoAtual = String(valor1+valor2)
    }
    if (operador == "-"){
         calculadora.operandoAtual = String(valor1-valor2)
    }

    calculadora.operador = ""
    calculadora.operandoAnterior = ""
    atualizaDisplay(calculadora)
}

/* Função chamada quando o botão delete for pressionado
 * Apaga o último dígito digitado no
 */
function apagaDigito(calculadora){
    calculadora.operandoAtual = calculadora.operandoAtual.substr(0, calculadora.operandoAtual.length -1)
    atualizaDisplay(calculadora)
}
