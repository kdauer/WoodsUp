import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Support from './components/Support';
import Knowing from './components/Links.js';
import Login from './components/Login';
import Signup from './components/Signup';
import { Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
// import Impress from "./components/legalnotice";
// import DSGVO from "./components/privacypolicy";

function App() {
  return (
    <div className="App">
      <div className="nav-img">
        <h1 className="logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            WoodsUp
          </Link>
        </h1>

        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/links" component={Knowing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/* <Route path="/legalnotice" component={Impress} />
        <Route path="/privacypolicy" component={DSGVO} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
