import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearchPlant] = useState('');

  const handleSearch = (y) => {
    setSearchPlant(y);
  }
  const plantFilter= plants.filter((plant)=> plant.name.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
       
      });
  }, []);

  
  return (
    <main>
      <NewPlantForm />
      <Search search={search} onSearchChange={handleSearch}  />
      <PlantList plants={plantFilter}/>
    </main>
  );
}

export default PlantPage;
