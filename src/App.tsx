import React from 'react';
import useGreetings from "./greetings";

function App() {
  const { greet, name } = useGreetings();

  return (
    <div className="App">
      <button onClick={() => greet()}>Greetings</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
