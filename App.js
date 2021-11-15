import React,{useState} from "react";
import './App.css';

function App() {

  let [num, setNum]= useState(1)

  return (
    <>
    <h3>Contador: {num}</h3>
    <button onClick={()=>{setNum(num+1)}}>Sumar uno</button>
    </>
  );
}

export default App;
