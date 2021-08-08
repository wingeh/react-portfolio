import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Hub from './components/Hub';
import Footer from './components/Footer';

function App() {      

return (
  <div className="App">
    <Header />
    <Hub />
    <Footer />
  </div>
  );
};

export default App;