import React from 'react';
import RouterMain from './routes'
import NavbarComponent from './components/navbar'

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <RouterMain/>
    </div>
  );
}

export default App;
