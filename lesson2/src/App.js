import React from 'react';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <Clock city="sydney" name="ahaha" func={()=>{ return this}}/>
    </div>
  );
}

export default App;
