import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const fetchApi = async() => { 
    const response = await fetch(url)
    console.log(response)
  }
  useEffect( ( ) => {
    fetchApi()
  }, [] )
  return (
    <div className="App">
      <h1>TECHNICAL TEST</h1>
    </div>
  );
}

export default App;
