import React, { useState } from "react";
import "./App.css";
import Login from "../src/components/Login/Login";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Preferences from "../src/components/Preference/Preference";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
