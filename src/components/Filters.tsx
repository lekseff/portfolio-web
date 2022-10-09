import React from 'react';

interface FiltersProps {
  items: Array<any>;
  active: string;
  changeFilter: Function;
  }

function Filters({ items, active, changeFilter }: FiltersProps) {
  return (
    <div className='filters'>
      {items.map((item) => (
        <button
          className={`filters__button ${active === item ? 'active' : ''}`}
          onClick={() => changeFilter(item)}
        >{item}</button>
      ))}
    </div>
  );
}

export default Filters;