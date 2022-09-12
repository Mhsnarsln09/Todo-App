import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "./login.css"
export function Login() {
  const [input, setInput] = useState("")
  const { setUser } = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(input)
  }

  return (
    <div className="logindiv" >
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="loginlabel" htmlFor="user">User Name</label>
        <input name="user" id="user" onChange={e => setInput(e.target.value)} />
        <button className="btnlogin" type="submit">Log In</button>
      </form>
    </div>
  )
}
