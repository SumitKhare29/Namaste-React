import React from 'react'

function User(props) {
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