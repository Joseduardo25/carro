import React from 'react';
import './App.css';
import { Component, useState } from 'react';

function App() {
  const[luz1, setLuz1] = useState(true)
  function changeFoco1(){
    setLuz1(!luz1)
  }
  const[luz2, setLuz2] = useState(true)
  function changeFoco2(){
    setLuz2(!luz2)
  }
  const[luz3, setLuz3] = useState(true)
  function changeFoco3(){
    setLuz3(!luz3)
  }
  return(
    <div>
      <div>
        <div>
          <img style={{width:'200px', heigth:'200px'}} src={luz1 ? 'https://live.staticflickr.com/5186/5854477079_bdb0e67ba2_b.jpg' : 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg'}/>
        </div>
        <div>
          <button onClick={changeFoco1}>{luz1 ? 'Apagar' : 'Encender'}</button>
        </div>
      </div> 
      <div>
       <div>
          <img style={{width:'200px', heigth:'200px'}} src={luz2 ? 'https://live.staticflickr.com/5186/5854477079_bdb0e67ba2_b.jpg' : 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg'}/>
        </div>
       <div>
          <button onClick={changeFoco2}>{luz2 ? 'Apagar' : 'Encender'}</button>
       </div>
      </div> 
      <div>
        <div>
         <img style={{width:'200px', heigth:'200px'}} src={luz3 ? 'https://live.staticflickr.com/5186/5854477079_bdb0e67ba2_b.jpg' : 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg'}/>
        </div>
        <div>
          <button onClick={changeFoco3}>{luz3 ? 'Apagar' : 'Encender'}</button>
         </div>
      </div> 
    </div>  
 )   
}
export default App;

