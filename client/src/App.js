import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CookieConsent, { Cookies } from 'react-cookie-consent';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ProjectForm from './components/ProjectForm';
import Support from './components/Support';
import Knowing from './components/Links';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Impress from './components/legalnotice';
import DSGVO from './components/privacypolicy';
import Contact from './components/Contact';

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
            <Link to="/">
              <img src="/IMG_2825.JPG" alt="Logo" className="logo-img" />
            </Link>
          </h1>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={props => (
              <Signup
                history={props.history}
                // {...props}
                setUser={this.setUser}
              />
            )}
            // component={Signup}
          />
          <Route
            path="/login"
            render={props => (
              <Login history={props.history} setUser={this.setUser} />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route
            exact
            path="/projects/:id"
            render={props => (
              <ProjectDetail {...props} isLoggedIn={Boolean(this.state.user)} />
            )}
          />
          <Route
            exact
            path="/add-project"
            render={props => (
              <ProjectForm history={props.history} setUser={this.setUser} />
            )}
          />
          <Route exact path="/support" component={Support} />
          <Route exact path="/links" component={Knowing} />
          <Route path="/legalnotice" component={Impress} />
          <Route path="/privacypolicy" component={DSGVO} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          Diese Website nutzt Cookies im Sinne der
          <Link
            to="/privacypolicy"
            style={{ textDecoration: 'none', color: 'lightblue' }}
          >
            Datenschutzerklärung
          </Link>{' '}
          <span style={{ fontSize: '10px' }}>
            (Akzeptieren um fortzufahren)
          </span>
        </CookieConsent>
        <Footer />
      </div>
    );
  }
}

export default App;
