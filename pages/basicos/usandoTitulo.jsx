import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
                principal = "Pagina de login"
                secundario = "Se cadastrar"       
            />
            <Titulo
                principal = "Entrou no sistema com sucesso"
                secundario = "deseja sair?"
                p={true}
            />
       
        </div>
    )
}