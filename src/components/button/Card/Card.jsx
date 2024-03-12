import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ todo, onDelete }) => {

  const handleDelete = (e) => {
    e.preventDefault(); 
    onDelete(todo.title);
  }

  return (
    <div className='todo'>
      <Link to={`TodoDetails/${todo.title}`}>
        <button className='todo_container'>
          <h2>{todo.title}</h2>
        </button>
      </Link>
      <button className='todo-btn' onClick={handleDelete}>X</button>
    </div>
  )
}

export default Card
