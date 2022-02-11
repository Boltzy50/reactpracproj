import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';

const MyForm = ({ action }) => {
  
  const [inputs, setInputs] = useState({});

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))

  }



  return (
    <form onSubmit={(e) => action(e, inputs)}>
      <label>Name:
        <input 
          type="string"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>Adress:
        <input 
          type="string" 
          name="address" 
          value={inputs.address || ""} 
          onChange={handleChange}
        />
        </label>
        <label>City:
        <input 
          type="text" 
          name="city" 
          value={inputs.city || ""} 
          onChange={handleChange}
        />
        </label>
        <label>State:
        <input 
          type="text" 
          name="state" 
          value={inputs.state || ""} 
          onChange={handleChange}
        />
        </label>
        <label>ZipCode:
        <input 
          type="number" 
          name="zip" 
          value={inputs.zip || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Phone:
        <input 
          type="number" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Job Description:
        <input 
          type="text" 
          name="jobDescript" 
          value={inputs.jobDescript || ""} 
          onChange={handleChange}
        />
        </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm