import React from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.css';

type TTextInputProps = {
  invalid?: boolean;
  meta?: React.ReactNode;
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = React.forwardRef<HTMLInputElement, TTextInputProps>(
  ({ invalid, label, meta, ...otherProps }, ref) => {
    return (
      <label className={styles.host}>
        {label && <span className={classNames(styles.label, invalid && styles.label_error)}>{label}</span>}
        <input
          className={classNames(styles.input, invalid && styles.input_error)}
          type="text"
          ref={ref}
          {...otherProps}
        />
        {meta && <span className={classNames(styles.meta, invalid && styles.meta_error)}>{meta}</span>}
      </label>
    );
  },
);

TextInput.displayName = 'TextInput';
