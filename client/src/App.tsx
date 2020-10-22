// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import BrowseWorkouts from './pages/BrowseWorkouts';
import SignUp from './pages/SignUp';
import './scss/App.scss';
import Workout from 'types/Workout';
import wger from 'api/wger';
import MyWorkouts from 'pages/MyWorkouts';
const App: React.FunctionComponent = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);
  const [myWorkouts, setMyWorkouts] = useState<Workout[]>([]);
    
    

    useEffect(() => {
        const getPosts = async () => {
            const response = await wger.get('/', {
                params: {
                    limit: 100
            }});
            const results: Workout[] = response.data.results;

            results.forEach(result => {
                result.name = result.name.replace(/<.+?>/g, '');
                result.description = result.description.replace(/<.+?>/g, '');
            })
            setWorkouts(results);
        }
        getPosts();
    }, [])




  return (
    <div className="ui-container">
      <Navbar />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/workouts"><BrowseWorkouts workouts={workouts} filteredWorkouts={filteredWorkouts} setFilteredWorkouts={setFilteredWorkouts} myWorkouts={myWorkouts} setMyWorkouts={setMyWorkouts} /></Route>
        <Route path="/myworkouts"><MyWorkouts myWorkouts={myWorkouts} setMyWorkouts={setMyWorkouts} filteredWorkouts={filteredWorkouts} setFilteredWorkouts={setFilteredWorkouts} /></Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
