import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
    .then(res => res.json())
    .then(response => setTodos(response))
  })
  return (
    <div>
      {todos.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
}

export default App;
