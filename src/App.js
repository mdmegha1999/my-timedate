import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(time);
  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(UpdateTime, 1000);
  let todayDate = new Date().toLocaleDateString()
  return (
    <div className="App">
      <div>
        <h1>Clock</h1>
        <div className='samay'>
        <h2 className='time'>Time<br/>{currentTime}</h2>
         <h2 className='date'>Date <br/>{todayDate}</h2> 
         </div>
      </div>
    </div>
  );
}

export default App;
