import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from './components/Users'

const App = () => {
  return (
    <Router>
      <Route path="/" component={Users} exact />
    </Router>
  );
};
export default App;
