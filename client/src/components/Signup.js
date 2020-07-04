import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post('api/auth/signup', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        // redirect
        this.props.history.push('/');
        // update state for user in <App/>
        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">Sign up</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </>
    );
  }
}
// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = props => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const setUsernameHandler = event => {
//     setUsername(event.target.value);
//   };

//   const setPasswordHandler = event => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .post('/api/auth/signup', {
//         username: username,
//         password: password
//       })
//       .then(response => {
//         console.log('signup happening');
//         props.setUser(response.data);
//         props.history.push('/');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email"></label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Username"
//             value={username}
//             onChange={setUsernameHandler}
//           />
//         </div>

//         <div>
//           <label htmlFor="password"></label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={setPasswordHandler}
//           />
//         </div>
//         <div>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
