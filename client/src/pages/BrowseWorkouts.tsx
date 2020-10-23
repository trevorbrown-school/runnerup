import SearchWorkouts from 'components/SearchWorkouts'
import TiledGrid from 'components/TiledGrid'
import React, { useEffect } from 'react'
import Workout from 'types/Workout';
import Loading from 'components/Loading';
import '../scss/BrowseWorkouts.scss';


/* 
TODO: Make search bar and use properties of a post as criteria for filtering
*/
interface BrowseWorkoutsParams {
    workouts: Workout[],
    filteredWorkouts: Workout[],
    setFilteredWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    myWorkouts: number[],
    addWorkout: (workout: Workout) => void;
}


const BrowseWorkouts: React.FunctionComponent<BrowseWorkoutsParams> = ({ workouts, filteredWorkouts, setFilteredWorkouts, myWorkouts, addWorkout }) => {
    
    useEffect(() => {
        setFilteredWorkouts(workouts);
    }, [workouts, setFilteredWorkouts]);

    
    
    const resourceLoading = () => {
        if(workouts.length === 0) return <Loading /> 
            
    }
    
    return (
        
        <div className="BrowseWorkouts">
            
            <SearchWorkouts content={workouts} style={{marginBottom: "2rem"}} filter={setFilteredWorkouts}  />
            {resourceLoading()}
            <TiledGrid content={filteredWorkouts} addWorkout={addWorkout} />
        </div>
    )
}

export default BrowseWorkouts
