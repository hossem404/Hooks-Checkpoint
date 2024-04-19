import React, { useState } from 'react'

const Filter  = ({movie,setmovie}) => {
  const [number,setnumber]= useState()
  const filtre =(e)=>{
    e.preventDefault()
    const filtremovie = movie.filter(m=>m.rating>=number)
    setmovie(filtremovie)
  }

  return (
    <div>
      <form onSubmit={filtre}>
        <input  onChange={(e)=>setnumber(e.target.value)}/>  
        <input type="submit" /> 
      </form>
    </div>
  )
}

export default Filter 