import React, {useState} from 'react'
import './Todo.css'
import { Link, useOutletContext } from 'react-router-dom'
import Card from '../../components/button/Card/Card'

const Todo = () => {
  const [todos, setTodos] = useOutletContext()

  const deleteTodo = (title) => {
    setTodos(todos.filter(todo => todo.title !== title));
  }

  return (
    <div>
      <h2>TODO LIST </h2>
      {todos.map((todo) => {
        return (
          <Card key={todo.title} todo={todo} onDelete={deleteTodo} />
        )
      })}
      <Link to="/form">
        <button className='main-btn'>NewTodo</button>
      </Link>
    </div>
  )
}

export { Todo }
