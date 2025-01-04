import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold bg-blue-600 p-4'>Welcome to the tailwindCss</h1>

      <Card  username= "uzair" post="Computational physicist"/>
      <Card  username= "Qaseem" post="vetran"/>
      <Card  username = "" post="Engineer"/>

      </>
  )
}

export default App
