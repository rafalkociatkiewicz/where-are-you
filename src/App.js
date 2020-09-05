import React, {useState} from 'react';
import './App.css';
import BirthDate from "./components/BirthDate";
// import Gender from "./components/Gender";
import Header from "./components/Header";
import Graph from "./components/Graph";

const lifeSpan = 77.85; // TODO: request for this value

const App = () => {
  const [birthDate, setBirthDate] = useState('1988-05-05');
  const today = new Date().toJSON().slice(0,10);

  return (
    <div className="App">
      <Header>
        <BirthDate birthDate={birthDate} setBirthDate={setBirthDate} />
        {/*<Gender />*/}
      </Header>
      {/*<h2>Average life expectancy in Poland: {lifeSpan} years</h2>*/}
      <Graph today={today} birthDate={birthDate} lifeSpan={lifeSpan} />
    </div>
  );
}

export default App;
