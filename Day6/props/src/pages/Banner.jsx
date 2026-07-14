import React from 'react'

const Banner = ({object}) => {
  console.log(object);
  
  
  
  return (
    <>
    <div className="bg-blue-300 h-50 flex justify-center items-center gap-10 flex-wrap">{
        object.map((elem,i) => (
          <div key={i+1}  className="bg-red-500 p-10    gap-10 flex-wrap">
            <h2>{elem.name}</h2>
            <p>{elem.price}</p>
            <p>{elem.status}</p>
          </div>
        ))}
    </div>
    </>
    
  )
}

export default Banner