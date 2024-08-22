import logo from './logo.svg';
import './App.css';
import UserCard from './Components/UserCard/UserCard';
import { useState } from 'react';


function App() {

  const [show,SetShow]=useState(false);
  const[age,SetAge]=useState(0);
  const userData=[
    {
      Name:"Prabhat",
      Age:'24',
      Profession:'Developer',
    }

  
  ]
//callBack Function
  function handleDataFromChild(data) {
    console.log(data);
    SetShow(data);
  }
  function handleAgwFromChild(data) {
    console.log(data);
    SetAge(data);
  }
  

  return (
    <div className="App">
      <input type='number' value={age} onChange={(e)=>SetAge(e.target.value)}></input>
      <UserCard
      userData={userData}
//Passing props to child a s Callback function
      sendDataToParent={handleDataFromChild}
      MyAge={handleAgwFromChild}
      />
      {show?<div>
        This Data will be visible if you click Child button
      </div>:null}

      {age >= 18 ?null:<div>  
        Your Not eligible as you underAge
      </div>
        
      }
      
      
    </div>
  );  
}

export default App;
