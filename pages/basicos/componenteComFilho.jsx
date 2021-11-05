import React from 'react'
import Itens from '../../components/Itens'
import Lista from '../../components/Lista'

export default function componenteComFilho() {
    return (
        <div>
            <h1>Componente com filho</h1>
            <Lista>
                <Itens conteudo="item #21" />
                <Itens conteudo="item #22" />
                <Itens conteudo="item #23" />
            </Lista>
        </div>
    )
}
