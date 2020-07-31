import React from 'react';
import './App.css';
import { Component, useState } from 'react';

function App() {

  const array_nombres = ['juanita', 'pepita', 'maria']
  const[valueInput, setValueInput] = useState('') 
  const[nombres,setNombres] = useState(array_nombres) 

  function onChangeInput(e) {
    setValueInput(e.target.value)
  }

  function onClickEnviar(){
    const copyNombres = [...nombres]
    copyNombres.push(valueInput)
    setNombres(copyNombres)
    setValueInput('')
  }
  return (
    <div>
      <div>
        {nombres.map((e) => (<div>{e}</div>))}
      </div>
      <input 
        value={valueInput} 
        onChange={onChangeInput}/>
      <button  
        onClick={onClickEnviar}
        >
          Enviar
      </button>
    </div>
  )
}

export default App;
