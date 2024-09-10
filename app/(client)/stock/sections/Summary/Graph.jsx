import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Graph() {

  const [data, setData] = useState({});

  return <div className='my-[180px]'>
    <div className='flex justify-center mt-3 relative'>

      <div className='absolute -ml-[590px]'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[230px] text-center py-1 bg-red-700 rounded-lg absolute -mt-[100px]'>
          {'SL (-4.9%) 355.00'}
        </div>
        <div className='h-[90px] -mt-[90px] w-[1px] bg-red-700 animate-expand-y absolute' />
      </div>

      <div className='absolute'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[230px] text-center py-1 bg-blue-700 rounded-lg absolute mt-[100px]'>
          {'Buy (-3.05%) 359.0'}
        </div>
        <div className='h-[130px] w-[1px] bg-blue-700 animate-expand-y absolute' />
      </div>

      <div className='absolute ml-[590px]'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[230px] text-center py-1 bg-green-700 rounded-lg absolute mt-[35px] -ml-[229px]'>
          {'SL (-4.9%) 355.00'}
        </div>
        <div className='h-[40px] w-[1px] bg-green-700 animate-expand-y absolute' />
      </div>

      <div className='w-[600px] h-3 bg-gradient-to-r from-red-700 via-blue-700 to-green-700 rounded-lg absolute' />
    </div>
  </div>
};
