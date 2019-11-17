import React from 'react';
import './App.css';

import Global from './styles/Global';


import { Main } from './components/index';
import { Navbar } from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Global />
    </div>
  );
}

export default App;
