import {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Layout.css'



const Layout = () => {

    const [todos, setTodos] = useState([]) 

    return (
        <div className="Layout">
            <header className="Layout-header">
                {/* <h1>TODO</h1> */}
            </header>
            <body className='Layout-container'>
                <div className='container'>
                    <Outlet context={[todos, setTodos]}/>
                </div>
            </body>
        </div>
    )
}

export default Layout
