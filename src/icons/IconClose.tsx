import React from 'react';
import type { TSvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

export const IconClose = React.forwardRef((props: TSvgIconProps, ref: React.Ref<SVGSVGElement>) => {
  return React.createElement(
    SvgIcon,
    { ...props, ref },
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />,
  );
});

IconClose.displayName = 'IconClose';
