import React from 'react'
import Banner from '../pages/Banner'

const cart = () => {
    const arrObj=[
        {name:"react",price:1000,status:"available"},
        {name:"js",price:2000,status:"available"},
        {name:"nodejs",price:3000,status:"available"},
        {name:"expressjs",price:4000,status:"available"}
    ]
  return (
   <>
   <Banner object={arrObj}/>
   </>
  )
}

export default cart