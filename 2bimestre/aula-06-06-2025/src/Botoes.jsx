

function Botoes({ onIcrement, onDecrement }){
    return(
        <div>
            <button onClick={onDecrement}> - </button>
            <button onClick={onIcrement}> + </button>
        </div>
    )
}

export default Botoes;