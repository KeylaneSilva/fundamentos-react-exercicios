export default function jsx4(){
    const curso = 'Javascript'
    const calc = <h2>{3 * 3}</h2>
    return(
        <div>
            <h1>JSX #04</h1>
            <h2>Estou no curso de {curso}</h2>
            {calc}   
            {entre(11,1,10)}
        </div>
    )
}

function entre(num, min, max){
    if(num > min && num < max){
        return <strong>SIM</strong>
    }else{
        return <strong>NÃO</strong>
    }
}