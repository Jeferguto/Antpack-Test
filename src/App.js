import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState()
  const fetchApi = async() => { 
    const response = await fetch(url)
    /* console.log(response.status) */
    const responseJSON = await response.json()
    setUsers (responseJSON)
    /* console.log(responseJSON) */
  }
  useEffect( ( ) => {
    fetchApi()
  }, [] )

  return (
    <div className="App">
      <h1>TECHNICAL TEST</h1>
      <ol>
      { !users? 'Actualizando' :
        users.map( (users,index)=>{
          return <li>{users.name},{users.email},{users.address}</li>
        })
      }
      </ol>
    </div>
  );
}

export default App;
