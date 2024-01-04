// import React, { useCallback, useState } from 'react'

// const Next = () => {
//     const [length,setLength]=useState(8)
//     const[numberAllowed,setNumberAllowed]= useState(false)
//     const[charAllowed,setCharAllowed]= useState(false)
//     const[pasword,setPassword]= useState('')

//     const passwordGenerator=useCallback(()=>{
//         let pass=''
//         let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//         if(numberAllowed)str+='0123456789'
//         if(charAllowed)str+='#@%&^|(*'

//         for(let i=1;i<=length;i++){
//         let char= Math.floor(Math.random()*str.length+1)
//         pass=str.charAt(char)
//         }
//         setPassword(pass)

//     },[length,numberAllowed,charAllowed,setPassword])

//   return (
//     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'> 
//             <h1 className='text-white text-center'>Password Generatore</h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//             <input 
//             type="text"
//             value={pasword}
//             className='outline-none w-full py-1 px-3'
//             placeholder='Password'
//             readOnly
//             />

//         </div>
//         <div className='flex text-sm gap-x-2'>
//             <div className='flex items-center gap-x-1'>
//                 <input 
//                 type="range"
//                 min={8}
//                 max={20}
//                 value={length} 
//                 className='cursor-pointer'
//                 onChange={(e)=>{setLength(e.target.value)}}
//                 />
//                 <label htmlFor="Length">Length: {length}</label>
//             </div>
//             <div className='flex items-center gap-x-1'>
//                 <input 
//                 type="checkbox"
//                 defaultChecked={numberAllowed}
//                 id='numberInput'
//                 onChange={()=>{setLength((prev)=> !prev)}}
//                 />
//                 <label htmlFor="Number">Number</label>
//             </div>
//             <div className='flex items-center gap-x-1'>
//              <input type="checkbox" 
//                 defaultChecked={numberAllowed}
//                 id='numberInput'
//                 onChange={()=>{setCharAllowed((prev)=> !prev)}}
//              />
//             <label>Character </label>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Next
