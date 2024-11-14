import React from "react";
import { useState } from "react";

export default function NewPlantForm() {
const [name,setName]=useState('')
const [image,setImage]=useState('')
const[price,setPrice]=useState('')


const handleSubmit = (e) => {  
  e.preventDefault();  
  const newPlant = { name, image, price: parseFloat(price) };  

  fetch('https://react-hooks-cc-plantshop-0659.onrender.com/plants', {  
    method: 'POST',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(newPlant),  
  })  
  .then(response => response.json())  
  .then(data => (data));   
   
  setName('');  
  setImage('');  
  setPrice(''); 
};  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>  
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Plant name" required />  
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />  
      <input value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />  
      <button type="submit">Add Plant</button>  
    </form>  
    </div>
  );
}