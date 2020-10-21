import React, { useEffect, useState } from 'react'
import Workout from 'types/Workout'
import Input from './Input';

interface SearchProps {
    content: Workout[];
    filter: React.Dispatch<React.SetStateAction<Workout[]>>;
    className?: string;
    style?: React.CSSProperties;

}

const SearchWorkouts: React.FunctionComponent<SearchProps> = ({ content, filter, className, style }) => {
    const [term, setTerm] = useState("");
    useEffect(() => {
        const arr = content.filter((workout) => {
            return workout.name.toLowerCase().includes(term.toLowerCase());
        })
        filter(arr);

    }, [term, content, filter]);



    return (
        <div style={style}>
            <Input type="text" placeholder="&#xF002; Search"
                className={className}
                
                value={term} onChange={(e) => setTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchWorkouts