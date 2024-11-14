import React from "react";


export default function Delete({plant}){
    
  function handleDelete(){
    fetch (`https://react-hooks-cc-plantshop-0659.onrender.com/plants/${plant.id}`,{
        method:"DELETE"
    })}
  return (
    <div>
<button  onClick={handleDelete} type="button" class="btn btn-dark">Delete</button>
     </div>
     
  )}

