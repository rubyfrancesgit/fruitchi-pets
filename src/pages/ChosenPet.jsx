import { useSelector } from 'react-redux';

// Media
import blueberry from '../assets/blueberry.svg';
import strawberry from '../assets/strawberry.svg';
import orange from '../assets/orange.svg';

function ChosenPet() {
    const myFruitchiPet = useSelector((state) => state.myFruitchiPet.value);
    console.log(myFruitchiPet);

  return (
    <div>
      {/* <img src={} alt="" /> */}
    </div>
  )
}

export default ChosenPet
