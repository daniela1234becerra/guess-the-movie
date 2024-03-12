import { useState } from 'react'
import './Form.css'
import { Link, useOutletContext, useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()
  const [todos, setTodos] = useOutletContext()
  const [values, setValues] = useState({
    title: "",
    description: "",
    time: "",
  });

  const handleInputChage = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const handleForms = (event) => {
    event.preventDefault()
    console.log(values)
    setTodos([...todos, values])
    navigate('/')
  }

  return (
    <div>
      <h2>NEW TODO</h2>
      <form action="" onSubmit={handleForms}>
        <div className='title'>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder='ToDo title'
            name="title"
            value={values.title}
            onChange={handleInputChage}
          />
        </div>

        <div className='description'>
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            name="description"
            value={values.description}
            placeholder='ToDo description'
            onChange={handleInputChage}
          />
        </div>

        <div className='time'>
          <label htmlFor="time">Creation date</label>

          <input
            type="date"
            name="time"
            value={values.time}
            placeholder='ToDo creation time'
            onChange={handleInputChage}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export { Form }
