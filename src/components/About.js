import React from 'react'
import User from './User'
import UserClass from './UserClass'

function About() {
  return (
    <div>
      <h1>Welcome to About!!</h1>
      <User name="Sumit" location="Shridham"/>
      <UserClass name="Sumit khare" location="Shridham"/>
    </div>
  )
}

export default About