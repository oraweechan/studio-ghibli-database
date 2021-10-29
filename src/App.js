import React, { useEffect } from "react";

function App() {

  const makeAPICall = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);


  return (
    <div className="App">
      <h1>hello</h1>
    
    </div>
  );
  }

export default App;
