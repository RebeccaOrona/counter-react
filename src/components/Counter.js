import React from "react";
import '../css/Counter.css'

function Counter({ quantClicks }) {
    return (
      <div className='counter'>
        {quantClicks}
      </div>
    );   
  }
  
  export default Counter;