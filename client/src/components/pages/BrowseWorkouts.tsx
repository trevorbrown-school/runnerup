import SearchWorkouts from 'components/SearchWorkouts'
import TiledGrid from 'components/TiledGrid'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Workout from 'types/Workout';


/* 
TODO: Make search bar and use properties of a post as criteria for filtering
*/

const BrowseWorkouts: React.FunctionComponent = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);


    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
            setWorkouts(response.data);
            setFilteredWorkouts(response.data);
        }
        getPosts();
    }, [])


    return (
        <div className="BrowseWorkouts">
            <SearchWorkouts content={workouts} filter={setFilteredWorkouts} />
            <TiledGrid content={filteredWorkouts} />
        </div>
    )
}

export default BrowseWorkouts
