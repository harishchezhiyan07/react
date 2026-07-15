import React from 'react'

const student = ({object}) => {

  console.log(object );
  
  return (
    <>
    <div>
      {object.map((e,i) => (
        <div key={i}>
          <h1>Name: {e.name}</h1>
          <p>Age: {e.age}</p>
          <p>Course: {e.course}</p>
        </div>
      ))}
    </div>
    </>
    )
}

export default student 