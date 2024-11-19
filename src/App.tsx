import { useState } from 'react'
import './App.css'
import Modal from './components/Modal';
import ViewerPDF from './components/ViewerPDF';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(!isModalOpen);

  return (

    <>
      <button type='button' onClick={openModal}>
        Open Modal
      </button>

      <Modal
        title='Modal Title'
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ViewerPDF/>
      </Modal>
    </>
  );
};

export default App;
