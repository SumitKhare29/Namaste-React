import React, { useEffect } from 'react'

function User(props) {
    useEffect(()=>{
      const timer = setInterval(()=>{
        console.log('Setting Interval: Sumit is in Functional Component');
      },1000);
     return(()=>{
      clearInterval(timer);
      console.log('Clearing Interval: Sumit is leaving Functional Component');
     }); 
    });
    const {name, location} = props;
  return (
    <div className='user-card'>
    <div>User Details!!!</div>
    <h1>{name}</h1>
    <p>{name} is from {location}</p>
    </div>
  )
}

export default User