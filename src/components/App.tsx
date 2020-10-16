// eslint-disable-next-line
import React, { useState } from 'react';
import '../css/App.css';
import Navbar from './Navbar';


const App: React.FunctionComponent = () => {
  return (
    <div className="ui-container">
      <Navbar />
    </div>
  );
}

export default App;
