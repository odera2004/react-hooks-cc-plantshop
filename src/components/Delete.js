import React from "react";


export default function Delete({plant}){
    
  function handleDelete(){
    fetch (`http://localhost:6001/plants/${plant.id}`,{
        method:"DELETE"
    })}
  return (
    <div>
<button  onClick={handleDelete} type="button" class="btn btn-dark">Delete</button>
     </div>
     
  )}

