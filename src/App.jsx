import { useEffect, useRef } from 'react'
import { useCallback, useState } from 'react'
function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  //useref Hook

  const passwordref=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"


    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "@!#%^&*\-+}{?<>"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length+1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipeboard=useCallback(()=>{
    passwordref.current?.select()
    //for range select
    passwordref.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password)
  },[password])

  
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600 '>

        <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
          />
          <button
          onClick={copyPasswordToClipeboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 duration-300 ease-in-out transform hover:scale-105 active:scale-95'
          
          >Copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
           onChange={(e)=>{
            setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{setNumberAllowed((prev)=> !prev)}}
            />
            <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{setCharAllowed((prev)=> !prev)}}
            />
            <label>Character </label>
          </div>

        </div>
       </div>
    </>
  )
}

export default App
