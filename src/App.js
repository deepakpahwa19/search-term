import React from 'react';
import './App.css';

import Global from './styles/Global';


import { Layout } from './components';

function App() {
  return (
    <div className="App">
      <Global />
      <Layout />
    </div>
  );
}

export default App;
