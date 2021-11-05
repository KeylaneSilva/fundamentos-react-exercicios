import listaProdutos from "../../data/listaProdutos"

export default function repeticao2(){

    function mostarLista(){
        return listaProdutos.map((produto, index) => {
            return(
                <>
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                    </tr>
                </>
            )
        })
    }
    
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td >Código</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {mostarLista()} 
                </tbody>
            </table>
        </>
    )
}