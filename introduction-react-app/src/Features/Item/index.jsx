import React from 'react';

import './style.css';

function Item({ id, value, state, onChange }) {
	return (
		<div className="item item--noselect" onDoubleClick={() => onChange(id)}>
			<h3 className={state ? "item--done" : ""}>{value}</h3>
		</div>
	)
}

export default Item;