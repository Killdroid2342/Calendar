import React from 'react';

const Days = ({ days }: any) => {
  return (
    <div className='flex justify-evenly'>
      {days.map((day: any) => (
        <div className='m-3'>
          <div className='font-bold text-white'>{day}</div>
        </div>
      ))}
    </div>
  );
};

export default Days;
