import React from 'react'
import {InputContainer} from './styles'


function Input({value, onChange}) {
  return (
    <InputContainer>
        <input placeholder='usuario/nomeDoRepositório' value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input