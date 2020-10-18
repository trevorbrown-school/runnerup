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
            const response = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=50');
            console.log(response.data);
            const results: Workout[] = response.data.results;

            results.forEach(result => {
                result.name = result.name.replace(/<.+?>/g, '');
                result.description = result.description.replace(/<.+?>/g, '');
            })

            setWorkouts(results);



            setFilteredWorkouts(results);
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
