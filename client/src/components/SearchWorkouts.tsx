import React, { useEffect, useState } from 'react'
import Workout from 'types/Workout'
import Input from './Input';

interface SearchTerm {
    name: string;
    muscles: number[];
}

interface SearchProps {
    content: Workout[];
    filter: React.Dispatch<React.SetStateAction<Workout[]>>;
    filterFunction: (workout: Workout, term: SearchTerm) => boolean;
    className?: string;
    style?: React.CSSProperties;


}

const SearchWorkouts: React.FunctionComponent<SearchProps> = ({ content, filter, filterFunction, className, style }) => {

    
    const [term, setTerm] = useState<SearchTerm>({
        name: "",
        muscles: []
    });
    useEffect(() => {
        const arr = content.filter((workout) => filterFunction(workout, term));
        filter(arr);

    }, [term, content, filter]);



    return (
        <div style={style}>
            <Input type="text" placeholder="&#xF002; Search"
                className={className}
                
                value={term?.name} onChange={(e) => setTerm({...term, name: e.target.value })}
            />
        </div>
    )
}

export default SearchWorkouts