import React, { useEffect, useState } from 'react'
import Workout from 'types/Workout'

interface SearchProps {
    content: Workout[];
    filter: React.Dispatch<React.SetStateAction<Workout[]>>;
}

const SearchWorkouts: React.FunctionComponent<SearchProps> = ({ content, filter }) => {
    const [term, setTerm] = useState("");

    useEffect(() => {
        const arr = content.filter((workout) => {
            return workout.title.includes(term);
        })
        filter(arr);

    }, [term, content, filter]);
    

    return (
        <div>
            <input type="text" placeholder="Search"
                value={term} onChange={(e) => setTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchWorkouts
