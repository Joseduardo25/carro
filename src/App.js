import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

function App() {
  const motos = [
    {
      imagen:'https://flux.somosmoto.pe/r/https://somosmoto.pe/images/models/colors/wanxin-wx200gy-7-2019-blanco-f36380.png?width=1082',
      color: 'morado',
      precio: 123,
      cilindrada: 1500,
    },
    {
      imagen:'https://flux.somosmoto.pe/r/https://somosmoto.pe/images/models/colors/wanxin-wx200gy-7-2019-blanco-f36380.png?width=1082',
      color: 'morado',
      precio: 123,
      cilindrada: 1500,
    },
    {
      imagen:'https://flux.somosmoto.pe/r/https://somosmoto.pe/images/models/colors/wanxin-wx200gy-7-2019-blanco-f36380.png?width=1082',
      color: 'morado',
      precio: 123,
      cilindrada: 1500,
    }
  ]
  const[motitos,setMotitos] = useState(motos)
  function onClickAdd(){
    setMotitos(motitos)
    
    }
  return (
     <div>
      <div>
        {motos.map((e) => 
        <div>
          <div>
            {e.precio}
          </div>
          <img style={{width:'200px', heigth:'200px'}} src={e.imagen}/>
        </div> )}
      </div>  
      <div>
        <input></input>
        <button onClick={onClickAdd}>Agregar</button>
      </div>
    </div>

  );
}

export default App;
