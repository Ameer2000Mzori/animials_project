import { useState } from "react";
// import
// import
 function randomAnimals(){
  const animals = ['cat','dog','horse','fish'];
  return animals[Math.floor(Math.random() * animals.length)]
 }

function BundelApp() {

  const clicked = () => {
    console.log(randomAnimals());
  }

  return (
    <>
    <button className="add-animals-btn" onClick={clicked}>Add Animals</button>
    </>
  );
}

export default BundelApp;
