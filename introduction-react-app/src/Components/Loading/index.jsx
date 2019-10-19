import React from 'react';
import Spinner from 'react-spinkit';

import './style.css';

const Loading = ({ loading, message }) => {
  return loading ? (
    <div className='loading'>
      <div className='loading__wrapper'>
        <Spinner
          name='pacman'
          fadeIn='none'
          color='#a11d54'
        />
        <span className='loading__wrapper__message'>
          {message}
        </span>
      </div>
    </div>
  ) : null
}

export default Loading