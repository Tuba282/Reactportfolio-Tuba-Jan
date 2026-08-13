import React from 'react';
import { CoolMode } from "./magicui/cool-mode";

const PressButton = ({ text, extraClasses, ...props }) => {
  return (
    <CoolMode>
      <button className={`press-button cursor-none! ${extraClasses || ''}`} role="button" {...props}>
        {text}
      </button>
    </CoolMode>
  );
}

export default PressButton;
