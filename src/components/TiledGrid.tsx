import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../scss/TiledGrid.scss';
import Modal from './Modal';
import Button from './Button';
// import Button from './Button';

interface Workout {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const TiledGrid: React.FunctionComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [modalContent, setModalContent] = useState<Workout>();
                //On click, render content in a modal!!
    
    
    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
            setWorkouts(response.data);
        }
        getPosts();
    }, [])
    
    const renderGridItems = (workouts: Workout[]) => {
        let i = 0;
            return workouts.map(workout => {
                return ( <div
                    key={workout.id}
                        onClick={() => {
                            setModalVisible(true)
                            setModalContent(workout);
                        }}
                        className={`TiledGrid_grid-container_item ${(i++ % 2 === 0) ? 'bg-primary oh-neutral' : 'bg-neutral oh-primary'}`}
                    >

                    <div className="TiledGrid_grid-container_item-container"><h1>{workout.title}</h1></div>
                    <Button onClick={(e) => e.stopPropagation()} className="btn-secondary">Add Workout</Button>
                        {/* <p>{workout.body}</p> */}
                    </div>)
            })
        }
    
    return (
        <div className="TiledGrid">
            <Modal setVisible={setModalVisible} visible={modalVisible}>
                <div className="TiledGrid_modal-body">
                    <i className="fas fa-times TiledGrid_modal-body_close"
                    onClick={() => setModalVisible(false)}
                    ></i>            
                    <h1>{modalContent?.title}</h1>    
                    <p>{modalContent?.body}</p>    
                </div>
                
                </Modal>
            <div className="TiledGrid_grid-container">
               
                {renderGridItems(workouts)}
                
             </div>
        </div>
    )
}

export default TiledGrid
