import React from 'react';
import { Button } from 'components';
import styles from './SuccessSub.module.css';

type TProps = {
  onClick(): void;
};

export const SuccessSub: React.FC<TProps> = ({ onClick }) => {
  return (
    <div className={styles.host}>
      <p className={styles.text}>Thank you! We really appreciate that you are interested in our products.</p>
      <Button fullWidth onClick={onClick}>
        Close
      </Button>
    </div>
  );
};
