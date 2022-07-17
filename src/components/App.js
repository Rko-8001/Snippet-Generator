import React, { useState } from 'react';
import Header from './header/Header';
import Input from './input/Input';
import Output from './output/Output';
import "./style/App.css";
function App() {

  const [input, inputUpdate] = useState({
    des: '',
    tab: '',
    html: '',
  })
  function saveInputCode(inputCode) {
    inputUpdate(inputCode);
  }
  return (
    <>
      <div className="main">
        <Header />
        <div className="sub-main">
          <Input onSaveInputCode={saveInputCode} />
        </div>
        <Output des={input.des} tab={input.tab} html={input.html} />
      </div>
    </>
  );
}

export default App;
