import React from 'react';
import './index.css';
import Header from './components/Header'
import Cryptos from './components/Cryptos'

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto m-4">
        <Cryptos />
      </div>
    </div>
  );
}

export default App;
