export default function Titulo(props){
    return props.p ? (
        <>
            <h1>E ai, galerinha</h1>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>            
        </>
    )
        :
    (
        <>
            <h1>{props.principal}</h1>
            <h1>{props.secundario}</h1>
            
        </>
    )
}