import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './ViewerPDF.module.css';
import pdf from '../form-example.pdf';

const ViewerPDF = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className={styles.containerPdf}>
        <Viewer fileUrl={pdf} />
      </div>
    </Worker>
  );
};

export default ViewerPDF;