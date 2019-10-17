import React, { Component } from 'react';

import Column from '../Column';

import './style.css';

class Board extends Component {

    render() {
        return (
            <div className="board">
                <h1>Board</h1>
                <Column />
            </div>
        )
    }
}

export default Board;