import React, { useState } from 'react'

import '../scss/TiledGrid.scss';
import Modal from './Modal';
import Button from './Button';
import Workout from 'types/Workout';
// import Button from './Button';



interface GridProps {
    content: Workout[];
    addWorkout?: (workout: Workout) => void;
    removeWorkout?: (workout: Workout) => void;
}


const TiledGrid: React.FunctionComponent<GridProps> = ({ content, addWorkout, removeWorkout }) => {
    const workouts = content;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<Workout>();
                //On click, render content in a modal!!
    
    
    
    
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
                    <div className="TiledGrid_grid-container_item-container"><h1>{workout.name}</h1></div>
                    <Button onClick={(e) => {
                        e.stopPropagation();
                        if(addWorkout)
                            addWorkout(workout);
                        if (removeWorkout)
                            removeWorkout(workout);
                    }} className="btn-secondary">{(addWorkout) ? "Add Workout" : "Remove Workout"}</Button>
                        {/* <p>{workout.body}</p> */}
                    </div>)
            })
        }
    
    const renderModal = () => {
        return (
            <Modal setVisible={setModalVisible} visible={modalVisible}>
            <div className="TiledGrid_modal-body">
                <i className="fas fa-times modal-close"
                    onClick={() => setModalVisible(false)}
                ></i>
                <h1>{modalContent?.name}</h1>
                <p>{modalContent?.description}</p>
            </div>
            </Modal>
        );
    }
    
    return (
        <div className="TiledGrid">


            {renderModal()}
            <div className="TiledGrid_grid-container">
                {renderGridItems(workouts)}
                
             </div>
        </div>
    )
}

export default TiledGrid
