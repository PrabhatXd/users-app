import React, { useEffect, useState } from 'react'

function UserCard({userData,sendDataToParent,MyAge}) {

    const [showChild,SetShowChild]=useState(false);
    // const[Age,SetAge]=useState(20)
    
   
   const SetShowChildfun=()=>{
    SetShowChild(true);
    //calling callback function with callback parameters
    sendDataToParent(showChild)
    }

    const Agefun=()=>{
        MyAge(20)
    }
  return (

    <div>{userData[0].Name}
    <button class='btn btn-primary'onClick={SetShowChildfun}>Child button</button>
    <button class='btn btn-primary'onClick={Agefun}>Im 18</button>

    </div>
  )
}

export default UserCard