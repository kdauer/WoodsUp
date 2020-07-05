import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectForm from './components/ProjectForm';
import History from './components/History';
import Support from './components/Support';
import Knowing from './components/Links.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Impress from './components/legalnotice';
import DSGVO from './components/privacypolicy';

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    console.log('<App/> render: ', this.state.user);

    return (
      <div className="App">
        <div className="nav-img">
          <h1 className="logo">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              WoodsUp
            </Link>
          </h1>

          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/history" component={History} />
          <Route exact path="/add-project" component={ProjectForm} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/links" component={Knowing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/legalnotice" component={Impress} />
          <Route path="/privacypolicy" component={DSGVO} />
        </Switch>
        <Footer />
      </div>
      // <div className="App">
      //   <Navbar setUser={this.setUser} user={this.state.user} />
      //   <Route
      //     path="/signup"
      //     render={props => (
      //       <Signup
      //         history={props.history}
      //         // {...props}
      //         setUser={this.setUser}
      //       />
      //     )}
      //     // component={Signup}
      //   />
      //   <Route
      //     path="/login"
      //     render={props => (
      //       <Login history={props.history} setUser={this.setUser} />
      //     )}
      //   />

      //   <Route
      //     exact
      //     path="/"
      //     render={props => <Posts {...props} user={this.state.user} />}
      //   />
      //   <Route
      //     exact
      //     path="/posts/:postId"
      //     render={props => (
      //       <PostDetail {...props} isLoggedIn={Boolean(this.state.user)} />
      //     )}
      //   />
      // </div>
    );
  }
}

export default App;
