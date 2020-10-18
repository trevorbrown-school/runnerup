// eslint-disable-next-line
import React from 'react';
import '../scss/App.scss';
import Navbar from './Navbar';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import BrowseWorkouts from './pages/BrowseWorkouts';

const App: React.FunctionComponent = () => {
  return (
    <div className="ui-container">
      <Navbar />




      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/workouts" component={BrowseWorkouts} />
      </Switch>
    </div>
  );
}

export default App;
