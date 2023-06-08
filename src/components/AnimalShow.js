import cat from "../imgs/cat.svg"
import dog from "../imgs/dog.svg"
import horse from "../imgs/horse.svg"
import heart from "../imgs/heart.svg"
import './AnimalShow.css'


import { useState } from "react";
const svgMap = {
    dog,
    cat,
    horse
};
function Animalshow({ type }) {

    const [clicks, setClick] = useState(0);

    const handleClick = () => {
        setClick(clicks + 1 );

    };
  return (
    <>
    <div className="animals-list">
    <div  onClick={handleClick}>
    <img className="animal-img"  alt='animls-pictures' src={svgMap[type]}></img>
    <img className="heart-img"  alt='heart' src={heart} style={{width: 10 + 10 * clicks + "px" }}></img>
    </div>
    </div>
    </>
  );
}
export default Animalshow;
