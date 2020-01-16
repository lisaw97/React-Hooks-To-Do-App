import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) { // props
  return (
    <div className="todo">
      { todo.text }
    </div>
  )
}

function App() {

  // todos: state
  // setTodos: update state
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for dinner',
      isCompleted: false
    },
    {
      text: 'Build todo app with React Hooks',
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App;