import { useEffect, useState } from 'react';
import './App.css'

function App() {

   const [count, setcount] = useState(0);

  function Increment(){
    setcount(count => count +1);
  }

  function Decrement(){
    setcount(count => count -1);
  }

  function Reset(){
    setcount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <div>{count}</div>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement </button>
      <button onClick={Reset}> reset </button>
      <Counter setcount={setcount}/>
      
    </div>
  )
}
function Counter({setcount}){


  

  useEffect(function(){
    setInterval(() => {
      setcount(count=>count +1)
      
    }, 1000);

  },[setcount])

  return null;
}



export default App