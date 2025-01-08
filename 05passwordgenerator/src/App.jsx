import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  return(<>
     <div className='bg-gray-500 min-h-screen flex flex-col items-center justify-center'>
      <div className='bg-gray-800 min-w-96 rounded-lg min-h-52 absolute top-5 left-10 right-10 flex flex-col items-center justify-center'>
      <h1 className='text-white m-5 absolute top-0'>Password Generator</h1>
          
          <div className='flex items-center justify-center mb-4'>
            <input type="password" className='rounded-sm px-2' />
            <button className='bg-blue-500 text-white rounded-sm px-4 ml-2'>Copy</button>
          </div>
          <div className='flex text-white items-center justify-center'>
            <input type="range" name="" id="" />
            <input type="RAdio" className='mx-2' name="" id="" />Number
            <input type="RAdio" className='mx-2' name="" id="" />characters
          </div>
          
      </div>
     </div>
    </>)
}

export default App
