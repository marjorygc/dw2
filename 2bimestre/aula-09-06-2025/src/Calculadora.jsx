

function Calculadora(peso, altura, setResultado, setCategoria){

    let imc = peso / Math.pow(altura, 2)
    setResultado (peso / Math.pow(altura, 2))

    if(imc < 18.5){
        setCategoria ("Abaixo do peso")
    }
    else if(imc < 25){
        setCategoria ("Peso normal.")
    }
    else if(imc < 30){
        setCategoria ("Excesso de peso.")
    }
    else if(imc < 35){
        setCategoria ("Obessidade de classe 1.")
    }
    else if(imc < 40){
        setCategoria ("Obessidade de classe 2.")
    }
    else{
        setCategoria ("Obessidade de classe 3.")
    }   
    
}

export default Calculadora