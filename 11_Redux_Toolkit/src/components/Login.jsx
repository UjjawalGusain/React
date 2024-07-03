import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Hello Sign in</h1>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
        value={username}
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        value={password}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
