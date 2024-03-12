import './App.css';
import { Todo } from './pages/todo/Todo'
import { Form } from './pages/form/Form'
import { TodoDetails } from './pages/details/TodoDetails'
import Layout from './pages/layout/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Todo />} />
              <Route path='form' element={<Form />} />
              <Route path='TodoDetails/:title' element={<TodoDetails/>} />
            </Route>
          </Routes>
          

    </div>
  );
}

export default App;
