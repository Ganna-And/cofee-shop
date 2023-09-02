import React from 'react';
import LanguageNav from './LanguageNav';
import Contacts from './Contacts';


export default function TopHead() {
  return (
    <div className='header_line'>
      <LanguageNav />
      <Contacts />
    </div>
  )
}
