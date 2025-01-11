import { useCallback, useEffect, useState,useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [CharAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    if (numberAllowed) str += '0123456789';
    if (CharAllowed) str += '!@#$%^&*()_+';
  
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);  // Corrected here
    }
  
    setPassword(pass);
  }, [length, CharAllowed, numberAllowed]);
  

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passref.current.select()
  }

  const passref = useRef(null)
  return (
    <div className='bg-gray-500 min-h-screen flex flex-col items-center justify-center'>
      <div className='bg-gray-800 min-w-96 rounded-lg min-h-52 absolute top-5 left-10 right-10 flex flex-col items-center justify-center'>
        <h1 className='text-white m-5 absolute top-0'>Password Generator</h1>
        <div className='flex items-center justify-center mb-4'>
          <input type='text' value={password} ref={passref} className='rounded-sm px-2 w-80' readOnly />
          <button className='bg-blue-500 text-white rounded-sm px-4 ml-2' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-white items-center justify-center'>
          <input
            type='range'
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            value={length}
            name=''
            id=''
          />
          <label htmlFor='length'>length: {length}</label>
        </div>
        <div className='flex text-white items-center justify-center'>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=''
            id=''
          />
          <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex text-white items-center justify-center'>
          <input
            type='checkbox'
            checked={CharAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=''
            id=''
          />
          <label htmlFor='char'>Chars</label>
        </div>
      </div>
    </div>
  );
}

export default App;
