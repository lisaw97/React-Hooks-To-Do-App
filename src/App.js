import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) { // props
  return (
    <div className="todo">
      { todo.text }
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState(''); // default value

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; // can't submit form if value is empty
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value="value"
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
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

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;