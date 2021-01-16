import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Details from "./components/Details"

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
