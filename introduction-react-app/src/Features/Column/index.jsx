import React from 'react';

import InputEdit from '../../Components/InputEdit';

import Item from '../Item';

import './style.css';

function Column({ id, name, items, onChange }) {

  const alterName = (text) => {
    onChange(id, {name: text, items});
  }

  return (
    <div className="column">
      <InputEdit value={name} onChange={alterName}></InputEdit>
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