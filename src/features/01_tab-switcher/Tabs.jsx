import React, { useState } from 'react';
import { tabs } from '../../constant';

import './tabs.css';

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick (index) {
    setActiveIndex(index)
  }

  return (
    <div className='tab-switcher'>

      <div className='tab-buttons'>
        {tabs?.map((tab, index) => <Button 
          className={activeIndex === index && 'active'}
          key={tab?.id} 
          label={tab?.label} 
          onClick={() => handleClick(index)} 
        />)}
      </div>

      <div className="tab-content">
        {tabs[activeIndex]?.content}
      </div>

    </div>
  )
}

function Button ({ label, onClick, className }) {
  return <button className={className} onClick={onClick}>{label}</button>
}
