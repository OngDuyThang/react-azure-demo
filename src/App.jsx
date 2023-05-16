import React, { useState } from "react";
import axios from 'axios';
import './App.scss';

export default function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [res, setRes] = useState()
  async function submit() {
    try {
      const res = await axios.post('https://ongduythangspring.azurewebsites.net/login', { userName, password })
      setRes(res.data)
    } catch (err) {
      console.log('Login failure!')
    }
  }

  return (
    <div className="appContainer">
      <h2>Login form</h2>
      <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="User Name" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <div className="btn" onClick={() => submit()}>Submit</div>
      <span>{res}</span>
    </div>
  )
}