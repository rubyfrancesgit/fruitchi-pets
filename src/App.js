import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Style
import './sass/style.scss';

// Pages & components
import Home from './pages/Home';
import ChosenPet from './pages/ChosenPet';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chosen-pet' element={<ChosenPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
