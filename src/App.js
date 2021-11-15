import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/components/CharacterCard/CharacterCard.css';
import '../src/components/RandomCharacterCard/RandomCharacterCard.css'
import '../src/components/Pagination/Pagination.css'
import '../src/components/Episodes/Episode.css'
import '../src/components/Quotes/Quotes.css'
import '../src/components/Deaths/RandomDeathCard.css'

import NavigationItems from '../src/components/NavigationItems';
import MainPage from '../src/components/MainPage'
import { useState } from 'react';
import MainTitle from './components/MainTitle';

function App() {
  const [navItem, setNavItem] = useState('Random Character')
  
  const handleChangeNavItem = (event) => {
    setNavItem(event.target.value)
  }

  return (
    <div className="App">
      <div className="App__navigation" onChange={handleChangeNavItem}>
          <NavigationItems />
      </div>
      <div className="App__content">
        <MainTitle />
        <MainPage page={navItem}/> 
      </div>
    </div>
  );
}

export default App;
