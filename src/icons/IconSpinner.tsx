import React from 'react';
import type { TSvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

export const IconSpinner = React.forwardRef((props: TSvgIconProps, ref: React.Ref<SVGSVGElement>) => {
  return React.createElement(
    SvgIcon,
    { ...props, ref },
    <g clipPath="url(#prefix__clip0)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.88 4.342a1 1 0 01-1 1 6.778 6.778 0 106.778 6.779 1 1 0 112 0 8.778 8.778 0 11-8.778-8.779 1 1 0 011 1z"
        clipRule="evenodd"
      />
    </g>,
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>,
  );
});

IconSpinner.displayName = 'IconSpinner';
