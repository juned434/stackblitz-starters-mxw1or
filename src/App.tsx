import * as React from 'react';
import './style.css';
import Create from './components/create';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Create />
      </div>
    </div>
  );
}

export default App;
