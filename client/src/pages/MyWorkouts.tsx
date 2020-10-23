import React, { useEffect, useState } from 'react'
import TiledGrid from 'components/TiledGrid'
import Workout from 'types/Workout'
import SearchWorkouts from 'components/SearchWorkouts'

interface MyWorkoutsProps {
    workouts: Workout[];
    filteredWorkouts: Workout[],
    setFilteredWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    myWorkouts: number[],
    setMyWorkouts: React.Dispatch<React.SetStateAction<number[]>>;
}

const MyWorkouts: React.FunctionComponent<MyWorkoutsProps> = ({workouts, myWorkouts, setMyWorkouts, filteredWorkouts, setFilteredWorkouts }) => {
    const [myFullWorkouts, setMyFullWorkouts] = useState<Workout[]>([]);
    useEffect(() => {
        setMyFullWorkouts(workouts.filter(workout => myWorkouts?.includes(workout.id)))
        setFilteredWorkouts(myFullWorkouts);
    }, [myWorkouts, setFilteredWorkouts])

    const removeWorkout = (workout: Workout) => {
        setMyWorkouts(oldWorkouts => oldWorkouts.filter((oldWorkout) => oldWorkout !== workout.id));
    }

    return (
        <div className="BrowseWorkouts">
            <SearchWorkouts content={myFullWorkouts} filter={setFilteredWorkouts} style={{marginBottom: "2rem"}} />
            <TiledGrid content={filteredWorkouts} removeWorkout={removeWorkout}/>
        </div>
    )
}

export default MyWorkouts
