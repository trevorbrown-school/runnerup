import React, { useState } from 'react';
import '../css/App.css';
import '../css/Button.css';
import Modal from './Modal';


const App: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="ui-container">
      <button className="Button" onClick={() => setVisible(true)} style={{ marginRight: "2rem", width: "10%" }}>Open Modal</button>
      <Modal visible={visible} setVisible={(visible) => setVisible(visible)} />
    {/* <Main /> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
