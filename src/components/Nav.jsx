import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundClasses } from '../reducers/backgroundClasses';

function Nav() {
    const dispatch = useDispatch();

    const selectBackgroundClasses = (value) => {
        console.log(value);

        dispatch(setBackgroundClasses("choose-fruitchi " + value));
    }

  return (
    <div class="nav">
        <div class="nav__div hide">
          <p class="nav__p">Choose pet</p>
          <ul class="nav__ul">
            <li class="nav__li">🫐</li>
            <li class="nav__li">🍓</li>
            <li class="nav__li">🍊</li>
          </ul>
        </div>

        <div class="nav__div">
          <p class="nav__p">Choose background</p>
          <div class="nav__bg-picker-div">
            <div class="nav__colour-square nav__green-bg-picker" id="greenBgPicker" onClick={() => selectBackgroundClasses("green-bg")}></div>
            <div class="nav__colour-square nav__blue-bg-picker" id="blueBgPicker" onClick={() => selectBackgroundClasses("blue-bg")}></div>
            <div class="nav__colour-square nav__pink-bg-picker" id="pinkBgPicker" onClick={() => selectBackgroundClasses("pink-bg")}></div>
          </div>
        </div>
    </div>
  )
}

export default Nav
