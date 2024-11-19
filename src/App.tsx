import { useState } from 'react'
import './App.css'
import Modal from './components/Modal';

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
        <p>Modal</p>
      </Modal>
    </>
  );
};

export default App;
