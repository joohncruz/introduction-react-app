import React from 'react';

import Item from '../Item';

import './style.css';

function Column({ name, items }) {
  return (
    <div className="column">
      <h2>{name}</h2>
      {items.map(item => (
        <Item
          key={item.key}
          value={item.value}
          state={item.state}
        />
      ))}
    </div>
  )
}

export default Column;