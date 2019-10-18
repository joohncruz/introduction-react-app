import React from 'react';

import './style.css';

function Item({ value, state }) {
	return (
		<div className="item">
			<h3>{state} : {value}</h3>
		</div>
	)
}

export default Item;