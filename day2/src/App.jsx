import { useState } from 'react'

import './App.css'

function App() {

  const [Todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Hit the gym regularly",
  }])

  function Addtodo() {
    setTodos([...Todos, {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value
    }])
  }




  return (
    <div>
      <input id='title' type="text" placeholder='your todo title' />
      <input id='description' type="text" placeholder='add your description' />
      <button onClick={Addtodo}>add todo</button>

      <br />

      {
        Todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
          />
        ))
      }
    </div>
  )
}
function Todo(props) {
    return (
        <div>
            <h3>{props.title}</h3> 
            <p>{props.description}</p> 
        </div>
    );
}

export default App
