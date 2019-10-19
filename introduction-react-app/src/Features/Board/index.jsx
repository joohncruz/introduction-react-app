import React, { Component } from 'react';

import Column from '../Column';
import InputEdit from '../../Components/InputEdit';

import BoardService from '../../Services/BoardService';

import './style.css';

class Board extends Component {

  state = {
    loading: false,
    name: 'ToDos',
    board: { columns: [], name: '' },
  };

  async componentDidMount() {
    await this.getBoard();
  }

  getBoard = async () => {
    const { showLoading, hideLoading } = this.props

    showLoading('Carregando board...');

    await BoardService.getBoard().then(response => {
      this.setState({ board: response });
      hideLoading();
      return response
    })
  }

  alterBoardName = (text) => {
    this.setState({ board: { ...this.state.board, name: text } });
  }

  alterColumn = (id, newColumn) => {
    const { board: { columns } } = this.state;

    const alteredColums = columns.map(column =>
      column.id === id ? { ...column, ...newColumn } : { ...column }
    )

    this.setState({ board: { ...this.state.board, columns: alteredColums } });
  }

  render() {
    const { board: { columns, name } } = this.state;

    return (
      <div>
        <div className="board">
          <div className="board__title">
            <InputEdit value={name} onChange={this.alterBoardName} />
          </div>
          <div className="board__content">
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
        </div>
      </div>
    )
  }
}

export default Board;