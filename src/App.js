import React from 'react';
import './App.css';

import Global from './styles/Global';


import Main from './containers/Main';
import Navbar from './components/navbar/Navbar';

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
