import React, { useState } from 'react'
import LoginContainer from './LoginContainer'
import '../css/Modal.css';

interface ModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}


const Modal: React.FunctionComponent<ModalProps> = ({visible, setVisible}) => {
    const modalClick = (event: React.MouseEvent) => {
        setVisible(false);
    }

    const renderModal = () => {
        if (!visible) return null;
            
        return (
        <div onClick={modalClick} className="Modal">
            <div onClick={(e) => e.stopPropagation()} className="Modal_content">
                <LoginContainer/>
            </div>
        </div>
        );
    }

    return (
        renderModal()
    );
}

export default Modal
