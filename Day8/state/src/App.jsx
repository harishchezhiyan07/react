import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const showalert = () => {
    setCount(count + 1)

    console.log(count);
  }
  const [name,setName]=useState(false)
  const change=()=>{
    setName(true) 
  }

  const [cot,setCot]=useState("Harish")
  const login =()=>{
    setCot("Harini")
  }
  return (
    <>
      <div className='flex justify-between m-10 align-center'>
        <div className='p-10 bg-blue-200 rounded-lg w-70 ml-10 mt-10 shadow-lg'>
        <p className='pl-20 pb-3 font-bold'>TASK 1
        </p>
          <button
            onClick={showalert}
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-300 shadow-lg">
            Increase Count
          </button>
          <div className="bg-white w-20 h-20 rounded-md ml-10 flex items-center justify-center mt-5 text-2xl font-bold text-gray-800 shadow-lg">
            {count}
          </div>
        </div>
        <div className='p-10 bg-blue-200 rounded-lg w-70 ml-10 mt-10 shadow-lg'>
          <p className='pl-20 pb-3 font-bold'>TASK 2</p>
          <button onClick={change} className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-300 shadow-lg"> CHANGE NAME </button>
          <p className="bg-white w-20 h-10 p-20 rounded-md ml-5 flex items-center justify-center mt-5 text-2xl font-bold text-gray-800 shadow-lg">{name ? "welcome login":"login plese"}</p>

        </div>
        <div className='p-10 bg-blue-200 rounded-lg w-70 ml-10 mt-10 shadow-lg'>
          <p className='pl-20 pb-3 font-bold'>TASK 2</p>
          <button onClick={login} className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-300 shadow-lg"> CHANGE NAME </button>
          <p className="bg-white w-20 h-10 p-20 rounded-md ml-5 flex items-center justify-center mt-5 text-2xl font-bold text-gray-800 shadow-lg">{cot}</p>

        </div>
        


      </div>

    </>
  )
}

export default App