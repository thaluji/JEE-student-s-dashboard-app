
import React from 'react';

//import { useStateContext } from '../contexts/ContextProvider';

const Button = ({  bgColor, color, bgHoverColor, size, text, borderRadius}) => {
 // const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
     // onClick={()=>{}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3  hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text}
    </button>
  );
};

export default Button;