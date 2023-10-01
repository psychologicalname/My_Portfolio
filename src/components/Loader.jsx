import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p className='text-[14px] text-[#F1F1F1] mt-40 font-bold'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader