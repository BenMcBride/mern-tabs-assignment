import React from 'react';
import './App.css';
import Tabs from './components/Tabs'

function App() {
  const tabNames = ['Tab 1', 'Tab 2', 'Tab 3'];
  return (
    <div className="App">
      <Tabs
        tab={["Tab 1", "Tab 2", "Tab 3"]}
        onClickTab={(value) => {
          console.log(`Clicked on tab ${value}`);
        }}
      />
    </div>
  );
}

export default App;
