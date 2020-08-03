import React from 'react';
import './App.css';
import { Component, useState } from 'react';


  


function App() {

  const paises = [
    {
      continente:'europa',
      pais:'alemania',
      capital: 'berlin'
    },
    {
      continente:'europa',
      pais:'alemania',
      capital: 'berlin'
    },
    {
      continente:'europa',
      pais:'alemania',
      capital: 'berlin'
    }
  ]
  const [valorInput, setValorInput] = useState('')
  const [Array, setArray] = useState(paises)
    
  function daleClick(e){
    setValorInput(e.target.value)
  }
  
  function agregarClick(){
    const copia_Array= [...Array]
    console.log(valorInput)
    copia_Array.push({
      continente:'europa',
      pais:valorInput,
      capital: 'berlin'
    })
    console.log(copia_Array)
    setArray(copia_Array)
    setValorInput('')
  }
  return(
    <div>
      <div>
        {Array.map((e)=><div>{e.pais}</div>)}

      </div>
      <div>
        <input onChange={daleClick} value={valorInput}/>
        <button onClick={agregarClick}>Agregar</button>  
      </div>
      <div>

      </div>
    </div> 
  ) 
}
export default App;

