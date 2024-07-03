import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

  return (
    <div>
        <h1>Username: {user.username}</h1>
        <h1>Password: {user.password}</h1>
    </div>
  )
}

export default Profile