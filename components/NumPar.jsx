import React from 'react'

export default function NumPar(props) {
    const numPar = props.numero % 2 === 0
    return(
        <div>
            {numPar ? <h4>{props.numero}</h4> : null }
        </div>
    )
    
    // if(props.numero % 2 === 0){
    //     return <span>{props.numero}</span> 
    // }else{
    //     return null
    // }
}
