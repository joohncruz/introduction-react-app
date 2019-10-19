import React, { Component } from 'react';

import Column from '../Column';
import InputEdit from '../../Components/InputEdit';

import './style.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ToDos',
      columns: [
        {
          id: 1,
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

  alterBoardName = (text) => {
    this.setState({ name: text });
  }

  alterColumn = (id, newColumn) => {
    const { columns } = this.state;

    const alteredColums = columns.map(column =>
      column.id === id ? { ...column, ...newColumn } : { ...column }
    )

    this.setState({ columns: alteredColums });
  }

  render() {
    const { columns, name } = this.state;

    return (
      <div className="board">
        <InputEdit value={name} onChange={this.alterBoardName} />
        {columns.map(column => (
          <Column
            key={column.id}
            id={column.id}
            name={column.name}
            items={column.items}
            onChange={this.alterColumn}
          />
        ))}
      </div>
    )
  }
}

export default Board;