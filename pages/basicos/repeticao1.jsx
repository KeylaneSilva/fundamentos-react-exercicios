export default function repeticao1() {
    
    const listaAprovados = [
        'Keylane',
        'Karyne',
        'Adriana',
        'Sergio',
        'Weslley',
        'Ricardo'
    ]
    
    function renderizaLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    
    return(
        <>
        <ul>
            {renderizaLista()}
        </ul>
        </>
    )
}

//function renderizaLista() {
//    const itens = []
//    
//    for(var i=0; i< listaAprovados.length; i++){
//        itens.push(<li key={i}>{listaAprovados[i]}</li>)
//    }
//    return itens        
//}