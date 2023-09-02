import React from 'react';
import TopHead from './tophead/TopHead';
import MainHead from './mainhead/MainHead';
import './Head.css'

export default function Head() {
  return (
    <div className='container'>
      <TopHead />
      <MainHead />
    </div>
  )
}
