import { useState } from 'react';

 const SliderMain = () =>{
  const [words, setWords] =  useState (["Air Ticket", "Bus Ticket", "Hotel Booking", "Online Shopping","Stock Trading","Other Expenses"]);
  return (
    <div className="slidemain">
      <div className="scroller">
        <span>
          {words[0]}
          <br />
          {words[1]}
          <br />
          {words[2]}
          <br />
          {words[3]}
          <br />
          {words[4]}
          <br />
          {words[5]}
        </span>
      </div>
    </div>
  );
}
export default SliderMain;