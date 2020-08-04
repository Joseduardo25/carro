import React from 'react';
import './App.css';
import { Component, useState } from 'react';

function App() {

  const persona = [
    {
      nombre: 'eduardo',
      apellido: 'calachua',
      edad: 25,
      sexo: 'M',
      direccion: 'calle - 123'
    }
  ]
  const[valorInput, setValorInput] = useState('')
  const[usuario, setUsuario] = useState(persona)

  function newValue(e){
    setValorInput(e.target.value)
  }
  function addValue(){
    const copia_usuario = [...usuario]
    copia_usuario.push({
      nombre: 'eduardo',
      apellido: 'calachua',
      edad: 25,
      sexo: 'M',
      direccion: valorInput
    })
    setUsuario(copia_usuario)
    setValorInput('')
  }
  
  return(
    <div>
      <div>
      {usuario.map((e) => (<div>{e.direccion}</div>))}
      </div>
      <div>
        <input value={valorInput} onChange={newValue}/>
        <button onClick={addValue}>Agregar</button>
      </div>
    </div> 
  ) 
}
export default App;

