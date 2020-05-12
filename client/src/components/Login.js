import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/auth/login", {
        username,
        password
      })
      .then(response => {
        props.history.push("/add-project");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={setUsernameHandler}
          />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={setPasswordHandler}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
