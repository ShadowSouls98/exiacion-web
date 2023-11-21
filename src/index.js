import React from "react";
import ReactDOM from "react-dom";

const user = {
  name: 'Ivan Caldera',
  username: 'Shadow',
  avatar: 'https://imgs.search.brave.com/GEARYcqawKF0aprmBvQtS7bkOBtuO2q5xbdn6yu--FM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmFz/ZXNwYXJhZm90b3Mu/dG9wL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAxL2NoaWNv/cy1mb3RvLXBlcmZp/bC5qcGc'
}
function getName(user){
  return `${user.name} (${user.username})`
}
function getGreeting(user){
  if(user){
    return <h1>Bienvenido a Expiacion {getName(user)}</h1>
  }
  return <h1>Bienvenido a Expiacion ser desconocido</h1>
}
const name = "shadow"
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>

) 
const container = document.getElementById('root')

ReactDOM.render(element, container)