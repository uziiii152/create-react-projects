import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='bg-green-400 text-center w-full flex flex-col h-screen text-white' style={{backgroundColor: color}}>
        Bg-Changer by react
        <button onClick={()=> setColor("red")}className="bg-red-500 text-white p-2 m-2">Red</button>
      <button onClick={()=> setColor("blue")}className="bg-blue-500 text-white p-2 m-2">Blue</button>
      <button onClick={()=> setColor("green")}className="bg-green-500 text-white p-2 m-2">Green</button>
      </div>
    </>
  );
}

export default App;
