import { useState } from 'react';
import apibiblia from '../pages/service/apibiblia';


function Form({data}) {
 
  
  const registerUser = async event => {
    event.preventDefault()
   
    

    const res = await apibiblia.post("verses/search",{search: event.target.search.value, version: "nvi"})
 
    const data = await res.data.verses
   console.log(data)
   
  }

  return (
  <div>
    <form onSubmit={registerUser}>
      <label htmlFor="search">digite uma palavra </label>
      
      <input id="search" name="search" type="text" autoComplete="search" required /><br></br>
     
      <button type="submit">Register</button>
    </form>
  <div>
    <hr/>
  <ul>
 ver
  </ul>
    </div>
    </div>
  )
}

export default Form


  