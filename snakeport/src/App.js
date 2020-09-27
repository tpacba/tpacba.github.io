import React from 'react';
import GameArea from './components/GameArea';
import Navbar from './components/Navbar';
import PopupContainer from './components/PopupContainer';

function App() {
    return (
      <div>
        <Navbar />
        <GameArea />
        <PopupContainer />
      </div>
    )
}

export default App;
