import React from 'react'

export default function If(props) {
    if(props.teste){
        // renderiza tudo que tiver como filho do componente if
        return props.children
    }else{
        return null
    }
}
