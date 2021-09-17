import React from 'react';
import styles from './SvgIcon.module.css';

export type TSvgIconProps = React.ComponentPropsWithRef<'svg'>;

export const SvgIcon = React.forwardRef<SVGSVGElement, TSvgIconProps>(({ children }: TSvgIconProps, ref) => {
  return (
    <svg
      className={styles.host}
      viewBox="0 0 24 24"
      ref={ref}
      role={'presentation'}
      focusable="false"
      aria-hidden={'true'}
    >
      {children}
    </svg>
  );
});

SvgIcon.displayName = 'SvgIcon';
