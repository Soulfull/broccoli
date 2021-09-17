import React from 'react';
import classNames from 'classnames';
import { IconSpinner } from 'icons';
import styles from './Button.module.css';

type TButtonProps = {
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<TButtonProps> = ({
  children,
  loading,
  fullWidth,
  className,
  disabled,
  ...otherProps
}: TButtonProps) => {
  return (
    <button
      disabled={loading || disabled}
      className={classNames(styles.host, fullWidth && styles.fullWidth, className)}
      {...otherProps}
    >
      <>
        {loading ? (
          <span className={styles.spinner}>
            <IconSpinner />
          </span>
        ) : (
          children
        )}
      </>
    </button>
  );
};
