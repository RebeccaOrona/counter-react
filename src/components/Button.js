import React from "react";
import '../css/Button.css'

function Button({ text, isAClickButton, handleClick }) {
    return (
      <button
        className={isAClickButton ? 'button-click' : 'button-reset'}
        onClick={handleClick}>
        {text}
      </button>
    );
  }

  export default Button