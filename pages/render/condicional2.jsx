import React from 'react'
import If from '../../components/If'

export default function condicional2() {
    
    const numero = 5
    
    return (
        <div>
            <h1>condicional 2</h1>
            <If teste={numero % 2 === 0}>
                <h3>O numero {numero} é par</h3> 
            </If>
            <If teste={numero % 2 === 1}>
                <h3>O numero {numero} é ímpar</h3> 
            </If>
        </div>
    )
}
