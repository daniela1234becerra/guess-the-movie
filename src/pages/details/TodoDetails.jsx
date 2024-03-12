import React, { useEffect, useState } from 'react'
import { Link, useParams, useOutletContext } from 'react-router-dom'
import './TodoDetails.css'


const TodoDetails = (todo) => {

    const [todoDetails, setTodoDetails] = useState()
    const params = useParams()
    const [todos, setTodos] = useOutletContext()
    useEffect(() => {
        setTodoDetails(todos.find((todo) => todo.title === params.title))
    }, [])
    if (!todoDetails) {
        return (<h1>not found</h1>)
    }
    return (

        <div>
            <h2>TODO DETAILS</h2>
            <div className='input'>

                <label>Title
                    <div className='todo-title'>
                        {todoDetails.title}
                    </div>
                </label>
                <label>Description
                    <div className='todo-description'>
                        {todoDetails.description}
                    </div>
                </label>
                <label>Creation date
                    <div className='todo-time'>
                        {todoDetails.time}
                    </div>
                </label>
            </div>
            <Link to='/'>
                <button className='main-boton'>Home</button>
            </Link>

        </div>

    )
}

export { TodoDetails }
