import React from 'react';
import './index.css';
import Header from './components/Header'
import Cryptos from './components/Cryptos'

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Cryptos />
    </div>
  );
}

export default App;
