import React from "react";
import { useState } from "react";
import Delete from "./Delete";
// import {useParams} from "react-router-dom";

function PlantCard({plant}) {
  const [input, setInput] = useState("");
  
  function handleInput() {
    setInput(!input);
  }
 
  return (
    <li className="card">
                <img src={plant.image} className="card-img-top" alt={plant.name} />
         <h5 className="p-2">{`Name: ${plant.name}`}</h5>
          <h5 className="p-2">{`Price: ${plant.price}`}</h5>
          {input?(<button className="primary" onClick={handleInput}>In stock</button>)
          :<button onClick={handleInput}>Out of stock</button> }
          <Delete plant={plant}/>
{/* <button onClick={handleDelete} type="button" class="btn btn-dark">Delete</button> */}
    </li> 
     
    
  )};


export default PlantCard;
