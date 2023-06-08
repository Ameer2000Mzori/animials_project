import { useState } from "react";
import Animalshow from "./AnimalShow";
import './App.css';

// import
// import
function randomAnimals() {
  const animals = ["dog", "cat", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function BundelApp() {
  const [animals, setAnimal] = useState([]);

  const clicked = () => {
    setAnimal([...animals, randomAnimals()]);
  };

  const renderAnimals = animals.map((animal, index)=> {
    return <Animalshow type={animal} key={index}/>
  })

  return (
    <>
      <button className="add-animals-btn" onClick={clicked}>
        Add Animals
      </button>
      <div>{renderAnimals}</div>
    </>
  );
}

export default BundelApp;
