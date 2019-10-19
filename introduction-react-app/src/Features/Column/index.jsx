import React from 'react';

import InputEdit from '../../Components/InputEdit';

import Item from '../Item';

import './style.css';

function Column({ id, name, items, onChange }) {

  const alterName = (text) => {
    onChange(id, { name: text, items });
  }

  const alterActiveItem = (key) => {
    const alteredItems = items.map(item => item.key === key ? { ...item, state: !item.state } : { ...item })
    onChange(id, { items: alteredItems });
  }

  return (
    <div className="column">
      <div className="column__title">
        <InputEdit value={name} onChange={alterName}></InputEdit>
      </div>
      {items.map(item => (
        <Item
          key={item.key}
          id={item.key}
          value={item.value}
          state={item.state}
          onChange={alterActiveItem}
        />
      ))}
    </div>
  )
}

export default Column;