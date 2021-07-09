export default function lista1(){
    return (
        <div>
            {listaDeArray(10)}
            <br/>
            {listaDeArray(20)}
        </div>
    )
} 

function listaDeArray(num){
    const lista = []
    for(var i = 0; i <= num; i++){
        lista.push(<span>{i},</span>)
    }
    return lista
}