import React from 'react';
import './App.css';
import { Component, useState } from 'react';


  


function App() {

  const auto = [
    {
      imagen:'https://cnnespanol.cnn.com/wp-content/uploads/2017/06/170628112455-jaguar-xe-sv-780x439.jpg?quality=100&strip=info',
      marca: 'JAGUAR',
      placa: 'ASD-456'
      },
    {
      imagen:'https://cnnespanol.cnn.com/wp-content/uploads/2017/06/170628112455-jaguar-xe-sv-780x439.jpg?quality=100&strip=info',
      marca: 'JAGUAR',
      placa: 'ASD-456'
      },
    {
      imagen:'https://cnnespanol.cnn.com/wp-content/uploads/2017/06/170628112455-jaguar-xe-sv-780x439.jpg?quality=100&strip=info',
      marca: 'JAGUAR',
      placa: 'ASD-456'
    }
  ]
  
  const [valorInput, setValorInput] = useState('')
  const [array_carros,setArray_carros] = useState(auto)
  
  function agregarAnimal(e){
    setValorInput(e.target.value)
  }
  function daleClick(){
    if (valorInput === '') return
    const copyArray_carros = [...array_carros]
    copyArray_carros.push({
      imagen:'https://cnnespanol.cnn.com/wp-content/uploads/2017/06/170628112455-jaguar-xe-sv-780x439.jpg?quality=100&strip=info',
      marca: valorInput,
      placa: 'ASD-456'
    })
    setArray_carros(copyArray_carros)
    setValorInput('')
  }
  return(
    <div>
      <div> 
        {array_carros.map((e,i)=> (
          <div key={i}>
            {e.marca} - {e.placa} - posición: {i}
            {i === 1 ? '- SOY LA SEGUNDA POSICIÓN' : '' }
            </div>
        ))}
      </div>
      <div>
        <input value={valorInput} onChange={agregarAnimal}/>
            
    
        <button onClick={daleClick}>
          Agregar
        </button>
      </div>
    </div> 
  ) 
}
export default App;

