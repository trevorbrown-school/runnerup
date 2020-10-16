import React, { useState } from 'react';
import '../css/App.css';
import LoginContainer from './LoginContainer';
import Modal from './Modal';
import Button from './Button';


const App: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="ui-container">
      <Button className="Button" onClick={() => setVisible(true)} style={{ marginRight: "2rem", width: "10%" }}>Open Modal</Button>

      <Modal visible={visible} setVisible={(visible) => setVisible(visible)}>
        <LoginContainer />
      </Modal>
    {/* <Main /> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
