import React, { useState } from 'react';

import './style.css';

function InputEdit({ value, onChange }) {
  const [isEditable, setEdit] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEdit(!isEditable)
    }
  };

  return (
    <div className="input-edit" onDoubleClick={() => setEdit(!isEditable)}>
      {isEditable ?
        <input
          autoFocus
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setEdit(!isEditable)}
        /> :
        <h1>{value}</h1>
      }
    </div>
  );
}

export default InputEdit;