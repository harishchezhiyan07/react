import React from 'react'
import Student from '../pages/student'

const study = () => {
  const arrObj=[{Name: "John", Age: 20, Course: "Computer Science"}, 
        {Name: "Jane", Age: 22, Course: "Mathematics"}]
  return (
  <>
  <Student object={arrObj}/>
  </>
  )
}

export default study