import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Graph() {

  const [data, setData] = useState({});

  return <div className='my-[180px]'>
    <div className='flex justify-center mt-3 relative font-semibold text-sm'>

      <div className='absolute -ml-[300px] lg:-ml-[590px]'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[150px] text-sm lg:w-[230px] text-center py-1 bg-[#ec545b] rounded-lg absolute -mt-[100px]'>
          {'SL (-4.9%) 355.00'}
        </div>
        <div className='h-[90px] -mt-[90px] w-[1px] bg-[#ec545b] animate-expand-y absolute' />
      </div>

      <div className='absolute'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[150px] lg:w-[230px] text-center py-1 bg-[#446bc2] rounded-lg absolute mt-[110px]'>
          {'Buy (-3.05%) 359.0'}
        </div>
        <div className='h-[130px] w-[1px] bg-[#446bc2] animate-expand-y absolute' />
      </div>

      <div className='absolute ml-[300px] lg:ml-[590px]'>
        <div className='w-1 h-3 -ml-[1px] bg-white rounded-full absolute z-10' />
        <div className='px-4 w-[150px] lg:w-[230px] text-sm text-center py-1 bg-green-500 rounded-lg absolute mt-[35px] -ml-[140px] lg:-ml-[229px]'>
          {'SL (-4.9%) 355.00'}
        </div>
        <div className='h-[40px] w-[1px] bg-[#38d193] animate-expand-y absolute' />
      </div>

      <div className='w-[300px] lg:w-[600px] h-3 bg-gradient-to-r from-[#ec545b] via-[#9bbcff] to-green-500 rounded-lg absolute' />
    </div>
  </div>
};
