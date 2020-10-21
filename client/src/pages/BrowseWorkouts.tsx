import SearchWorkouts from 'components/SearchWorkouts'
import TiledGrid from 'components/TiledGrid'
import React, { useEffect, useState } from 'react'
import wger from '../api/wger';
import Workout from 'types/Workout';
import Loading from 'components/Loading';
import '../scss/BrowseWorkouts.scss';


/* 
TODO: Make search bar and use properties of a post as criteria for filtering
*/

const BrowseWorkouts: React.FunctionComponent = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);
    
    

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



            setFilteredWorkouts(results);
        }
        getPosts();
    }, [])

    const resourceLoading = () => {
        if(workouts.length === 0) return <Loading /> 
            
    }
    
    return (
        
        <div className="BrowseWorkouts">
            
            <SearchWorkouts content={workouts} style={{marginBottom: "2rem"}} filter={setFilteredWorkouts} />
            {resourceLoading()}
            <TiledGrid content={filteredWorkouts} />
        </div>
    )
}

export default BrowseWorkouts
