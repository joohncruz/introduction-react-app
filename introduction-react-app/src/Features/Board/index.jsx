import React, { Component } from 'react';

import Column from '../Column';

import './style.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ToDos',
      columns: [
        {
          key: 1,
          name: 'Lazer',
          items: [
            { key: 11, value: 'Masterchef no YouTube', state: 0 },
            { key: 22, value: 'Jogar no celular', state: 0 },
            { key: 33, value: 'Leitura', state: 0 },
          ],
        }
      ]
    };
  }

  render() {
    const { columns, name } = this.state;

    return (
      <div className="board">
        <h1>{name}</h1>
        {columns.map(column => (
          <Column
            key={column.key}
            name={column.name}
            items={column.items}
          />
        ))}
      </div>
    )
  }
}

export default Board;