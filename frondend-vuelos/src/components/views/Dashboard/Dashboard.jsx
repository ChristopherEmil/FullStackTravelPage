import React from 'react'

function Dashboard() {
  const userJSON = localStorage.getItem("userData");
const user = JSON.parse(userJSON);
  return (
    <div>
        <h1>Este es el dashborad {user.user}</h1>
    </div>
  )
}

export default Dashboard
