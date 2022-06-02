import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { choosePet } from '../reducers/myFruitchiPet';
import { useNavigate } from 'react-router-dom';
import { setBackgroundClasses } from '../reducers/backgroundClasses';

// Media
import blueberry from '../assets/blueberry.svg';
import strawberry from '../assets/strawberry.svg';
import orange from '../assets/orange.svg';
import chuffedBlueberry from '../assets/chuffed-blueberry.svg';
import chuffedStrawberry from '../assets/chuffed-strawberry.svg';
import chuffedOrange from '../assets/chuffed-orange.svg';

function ChooseYourFruitchi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myFruitchiPet = useSelector((state) => state.myFruitchiPet.value);
  console.log(myFruitchiPet);

  const backgroundClasses = useSelector((state) => state.backgroundClasses.value);
  console.log(backgroundClasses);

  const setChoosenPet = async (thisPet) => {
    console.log('click');

    if (thisPet === 'blueberry') {
      document.getElementById('strawberry').classList.add("hide");
      document.getElementById('orange').classList.add("hide");
    } else if (thisPet === 'strawberry') {
      document.getElementById('blueberry').classList.add("hide");
      document.getElementById('orange').classList.add("hide");
    } else if (thisPet === 'orange') {
      document.getElementById('blueberry').classList.add("hide");
      document.getElementById('strawberry').classList.add("hide");
    }

    await dispatch(choosePet(thisPet));
    console.log(myFruitchiPet);
    // navigate('/chosen-pet');
  }

  const chuffedHover = (ids) => {
    document.getElementById(ids[0]).classList.add("hide");
    document.getElementById(ids[1]).classList.remove("hide");
    document.getElementById(ids[1]).classList.add("choose-fruitchi__patting");
    console.log('hover');
  }

  const chuffedReverseHover = (ids) => {
    document.getElementById(ids[0]).classList.remove("hide");
    document.getElementById(ids[1]).classList.add("hide");
  }

  return (
    <div className={backgroundClasses}>
      <img className="choose-fruitchi__pet" id="blueberry" src={blueberry} onMouseOver={() => chuffedHover(['blueberry', 'chuffedBlueberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('blueberry')} />
      
      <img className="choose-fruitchi__pet hide" src={chuffedBlueberry} id="chuffedBlueberry" onMouseOut={() => chuffedReverseHover(['blueberry', 'chuffedBlueberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('blueberry')} />

      <img className="choose-fruitchi__pet" id="strawberry" src={strawberry} onMouseOver={() => chuffedHover(['strawberry', 'chuffedStrawberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('strawberry')} />

      <img className="choose-fruitchi__pet hide" src={chuffedStrawberry} id="chuffedStrawberry" onMouseOut={() => chuffedReverseHover(['strawberry', 'chuffedStrawberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('strawberry')} />

      <img className="choose-fruitchi__pet" id="orange" onMouseOver={() => chuffedHover(['orange', 'chuffedOrange'])} src={orange} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('orange')} />

      <img className="choose-fruitchi__pet hide" src={chuffedOrange} id="chuffedOrange" onMouseOut={() => chuffedReverseHover(['orange', 'chuffedOrange'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('orange')} />
    </div>
  )
}

export default ChooseYourFruitchi;