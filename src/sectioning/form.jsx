import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';

function MyForm() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Info Entered: ${inputs}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="string" 
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
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
          type="string" 
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