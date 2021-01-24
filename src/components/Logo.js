import * as React from 'react';
import theme from '../config/theme';

function Logo(props) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 42 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12.361 5.04v3.12L.937 12.504v-3L8.93 6.6.937 3.672V.696L12.361 5.04zm14.367-1.368L18.736 6.6l7.992 2.904v3L15.304 8.16V5.04L26.728.696v2.976zM41.096 5.04v3.12l-11.424 4.344v-3L37.664 6.6l-7.992-2.928V.696L41.096 5.04z"
        fill={theme.colors.primary100}
      />
    </svg>
  );
}

export default Logo;
