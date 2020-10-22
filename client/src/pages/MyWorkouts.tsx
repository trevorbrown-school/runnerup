import React, { useEffect } from 'react'
import TiledGrid from 'components/TiledGrid'
import Workout from 'types/Workout'
import SearchWorkouts from 'components/SearchWorkouts'

interface MyWorkoutsProps {
    filteredWorkouts: Workout[],
    setFilteredWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    myWorkouts: Workout[],
    setMyWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
}

const MyWorkouts: React.FunctionComponent<MyWorkoutsProps> = ({ myWorkouts, setMyWorkouts, filteredWorkouts, setFilteredWorkouts }) => {
    
    useEffect(() => {
        setFilteredWorkouts(myWorkouts);
    }, [myWorkouts, setFilteredWorkouts])

    const removeWorkout = (workout: Workout) => {
        setMyWorkouts(oldWorkouts => oldWorkouts.filter((oldWorkout) => oldWorkout.id !== workout.id));
    }

    return (
        <div className="BrowseWorkouts">
            <SearchWorkouts content={myWorkouts} filter={setFilteredWorkouts} style={{marginBottom: "2rem"}} />
            <TiledGrid content={filteredWorkouts} removeWorkout={removeWorkout}/>
        </div>
    )
}

export default MyWorkouts
