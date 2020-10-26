// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import BrowseWorkouts from './pages/BrowseWorkouts';
import SignUp from './pages/SignUp';
import MyWorkouts from 'pages/MyWorkouts';
import Navbar from './components/Navbar';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Workout from 'types/Workout';

import wger from 'api/wger';

import './scss/App.scss';
import axios from 'axios';
import Button from 'components/Button';

const clientId = '250456254334-ftjm0p2a9om31g16btupt44qmhoqqoff.apps.googleusercontent.com';

const App: React.FunctionComponent = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);
  const [myWorkouts, setMyWorkouts] = useState<number[]>([]);
  const [myReqWorkouts, setMyReqWorkouts] = useState<number[]>([]);
  const [userId, setUserId] = useState<string>();
  
  const addWorkout = (workout: Workout) => {
    setMyWorkouts(oldWorkouts => {
      if (!oldWorkouts?.includes(workout.id))
      return [...oldWorkouts, workout.id];
      return oldWorkouts;
    });
    console.log(myWorkouts);
  }
  
    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const response = res as GoogleLoginResponse;
    const user = {
      _id: response.profileObj.googleId,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
    }
    setUserId(user._id);
    
    interface AxiosUser {
        workouts: number[];
    }
    axios.post<AxiosUser>('http://localhost:5000/users', user).then((res) => {
      console.log("DATA", res.data);
      setMyWorkouts(res.data?.workouts);
    });

  }
  
  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const response = res as GoogleLoginResponse;
    console.log(response);
  }
  



    

  useEffect(() => {
      (async () => {
        const response = await wger.get('/', {
          params: {
            limit: 100
          }
        });
        const results: Workout[] = response.data.results;

        results.forEach(result => {
          result.name = result.name.replace(/<.+?>/g, '');
          result.description = result.description.replace(/<.+?>/g, '');
        })
        setWorkouts(results);
      })();
    }, [])

  useEffect(() => {
    if (userId) {
      axios.post(`http://localhost:5000/users/u/${userId}`, {
        workouts: myWorkouts
      }).then(res => {
        console.log(res.data);
      });
    }
  
    }, [myWorkouts, userId])



  return (
    
      
      <div className="ui-container">
      <Navbar>
        <GoogleLogin
          render={renderProps =><span onClick={renderProps.onClick} style={{display: "inline-block", width:"100%", height:"100%"}}><i className="fab fa-google"></i> Login</span>}
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      </Navbar>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/workouts"><BrowseWorkouts workouts={workouts} filteredWorkouts={filteredWorkouts} setFilteredWorkouts={setFilteredWorkouts} myWorkouts={myWorkouts} addWorkout={addWorkout} /></Route>
        <Route path="/myworkouts"><MyWorkouts workouts={workouts} myWorkouts={myWorkouts} setMyWorkouts={setMyWorkouts} filteredWorkouts={filteredWorkouts} setFilteredWorkouts={setFilteredWorkouts} /></Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
