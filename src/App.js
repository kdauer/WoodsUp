import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PProjects from "./components/pprojects";
import FProjects from "./components/fprojects";
import Support from "./components/support";
import Knowing from "./components/links.js";
import { Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
// import Impress from "./components/legalnotice";
// import DSGVO from "./components/privacypolicy";

function App() {
  return (
    <div className="App">
      <div className="nav-img">
        <h1 className="logo">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            WoodsUp
          </Link>
        </h1>

        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/past-projects" component={PProjects} />
        <Route exact path="/future-projects" component={FProjects} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/links" component={Knowing} />
        {/* <Route path="/legalnotice" component={Impress} />
        <Route path="/privacypolicy" component={DSGVO} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
