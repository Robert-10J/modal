import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<Props> = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{title}</h2>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {children}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button 
            onClick={onClose}
            className={styles.cancelButton}
          >Cancelar</button>
          <button
            onClick={onClose}
            className={styles.okButton}
          >OK</button>
        </div>
        
      </div>
    </div>,
    document.body
  );
};

export default Modal;
