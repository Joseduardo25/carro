import React from 'react';
import './App.css';
import { Component, useState } from 'react';

function App() {
  // Array de nombres iniciales
  const array_nombres = ['Luis', 'Eduardo', 'Mateo']

  // Estados de React
  const [valueInput, setValueInput] = useState('')
  const [nombres, setNombres] = useState(array_nombres)

  // Función que detecta cuando escribo
  function onChangeInput(event) {
    // event.target.value es lo que escribo antes de setearlo en valueInput
    setValueInput(event.target.value)
  }

  // Acción a ejecutarse cuando se da click al botón
  function onClickEnviar() {
    // Primero creo una copia de nombres
    const copyNombres = [...nombres]
    // Luego agrego a la copia el valor del input
    copyNombres.push(valueInput)
    /*
      Ahora seteo el nuevo array de nombres con la copia
      del antiguo array con el nuevo nombre
    */ 
    setNombres(copyNombres)
    // Finalmente limpio el input donde se tipea
    setValueInput('')
  }

  return (
    <div>
      <div>
        {nombres.map((name) => (
          <div>Hola <strong>{name}</strong></div>
        ))}
      </div>
      <div>
        <input value={valueInput} onChange={onChangeInput} />
        <button onClick={onClickEnviar}>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default App;
