import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateLogin from "./create-login";
import forgot from "./forgot"
import login from "./login"


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CreateLogin">Create Login</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forgot">Forgot Password</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/CreateLogin" component={CreateLogin} />
      <Route path="/login" component={login} />
      <Route path="/forgot" component={forgot} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


 



export default BasicExample;