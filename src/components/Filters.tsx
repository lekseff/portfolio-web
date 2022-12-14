import React from 'react';

interface FiltersProps {
  items: Array<any>;
  active: string;
  changeFilter: Function;
  }

function Filters({ items, active, changeFilter }: FiltersProps) {
  return (
    <div className='filters'>
      {items.map((item, idx) => (
        <button
          className={`filters__button ${active === item.value ? 'active' : ''}`}
          onClick={() => changeFilter(item.value)}
          key={idx}
        >{item.title}</button>
      ))}
    </div>
  );
}

export default Filters;
