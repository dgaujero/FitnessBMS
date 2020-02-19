import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckIn from "./pages/checkIn";
import Manage from './pages/manage';
import MemberPortal from './pages/memberPortal';

function App() {
  return (
    <Router>
      <Route path="/checkin" component={CheckIn} />
      <Route path="/memberportal" component={MemberPortal} />
      <Route path="/manage" component={Manage} />
    </Router>
  );
}

export default App;
