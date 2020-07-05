// import React, { Component } from "react";
// import axios from "axios";

// export default class Login extends Component {
//   state = {
//     username: "",
//     password: "",
//     message: ""
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .post("/api/auth/login", {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(response => {
//         // redirect
//         this.props.history.push("/");
//         // update state for user in <App/>
//         console.log(response);
//         this.props.setUser(response.data);
//       })
//       .catch(err => {
//         this.setState({
//           message: err.response.data.message
//         });
//       });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />

//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />

//           <button type="submit">Sign in</button>
//         </form>
//         {this.state.message && <p>{this.state.message}</p>}
//       </>
//     );
//   }
// }
import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const setPasswordHandler = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post('/api/auth/login', {
        username,
        password
      })
      .then(response => {
        props.history.push('/add-project');
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
