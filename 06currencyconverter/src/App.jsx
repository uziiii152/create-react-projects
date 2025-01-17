import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat items-center' style={{backgroundImage:`url(https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
     <h1 className='bg-red-200'>Hello World</h1>
   </div>
   
  )
}

export default App
