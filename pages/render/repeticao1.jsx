export default function repeticao1(){
    
    const itensLista = [
        'Keylane',
        'Ricardo',
        'Adriana',
        'Sergio',
        'Weslley'
    ]

    // Percorrendo com o .map
    function renderLista(){
       return itensLista.map((nome, index) => <li>{nome}</li>) 
       
    }

    // Percorrendo o array
    // function renderLista() {
    //     var listaItens = []
    //     for(let i = 0; i < itens.length; i++){
    //         listaItens.push(<li key={i}>{itens[i]}</li>)
    //     }
    //     return(
    //         <>
    //             {listaItens}
    //         </>
    //     )
    // }
    
    return(
        <>
        <ul>
          {renderLista()}  
        </ul>
        </>
    )
}