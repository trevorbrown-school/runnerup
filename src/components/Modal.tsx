import React from 'react'
import '../css/Modal.css';

interface ModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    children: React.ReactNode;
}


const Modal: React.FunctionComponent<ModalProps> = ({visible, setVisible, children}) => {
    const modalClick = (event: React.MouseEvent) => {
        setVisible(false);
    }

    const renderModal = () => {
        if (!visible) return null;
            
        return (
        <div onClick={modalClick} className="Modal">
            <div onClick={(e) => e.stopPropagation()} className="Modal_content">
            {children}
            </div>
        </div>
        );
    }

    return (
        renderModal()
    );
}

export default Modal
