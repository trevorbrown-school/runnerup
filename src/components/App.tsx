// eslint-disable-next-line
import React from 'react';
import '../scss/App.scss';
import Navbar from './Navbar';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import BrowseWorkouts from './pages/BrowseWorkouts';
import SignUp from './pages/SignUp';
import '../scss/App.scss';
const App: React.FunctionComponent = () => {
  return (
    <div className="ui-container">
      <Navbar />




      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/workouts" component={BrowseWorkouts} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
