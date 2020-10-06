import React from 'react';


const TodaysDate = ()=>{
    var dt = new Date();
    return (
      <div className='calendar-info'>
        <div className='day'>
          {dt.toLocaleString('en-us', { weekday: 'long' }).toUpperCase()}
        </div>
        <div className='date'>
          {dt.getDate()}-
          {dt.toLocaleString('en-us', { month: 'short' }).toUpperCase()}-
          {dt.getFullYear()}
        </div>
      </div>
    );

}

export default TodaysDate;