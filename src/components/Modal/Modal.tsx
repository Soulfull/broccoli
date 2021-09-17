import React from 'react';
import { IconClose } from 'icons';
import styles from './Modal.module.css';

type TProps = {
  title?: React.ReactNode;
  children: React.ReactNode;
  onClose(): void;
};

export const Modal: React.FC<TProps> = ({ children, title, onClose }) => {
  const handleClose = React.useCallback(() => {
    onClose();
  }, [onClose]);
  return (
    <div className={styles.host}>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={handleClose}>
          <IconClose />
        </button>
        {title && <title className={styles.title}>{title}</title>}
        {children}
      </div>
    </div>
  );
};
