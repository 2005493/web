 
 
 
 import { useState } from 'react'
import ButtonForm from './components/ButtonForm'
import './App.css'
import Navbar from './components/navbar'
import ContactDetails from './components/ContactDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-0'>
     <Navbar/>
     <ContactDetails/>
     <ButtonForm/>
    </div>
  )
}

export default App
