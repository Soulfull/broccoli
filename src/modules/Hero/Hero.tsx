import React from 'react';
import styles from './Hero.module.css';
import { Button } from 'components';

type THeroProps = {
  title: string;
  desc: string;
  buttonText?: string;
  onClick(): void;
};

export const Hero: React.FC<THeroProps> = ({ title, desc, buttonText, onClick }) => {
  return (
    <div className={styles.host}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.desc}>{desc}</div>
      {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
    </div>
  );
};
