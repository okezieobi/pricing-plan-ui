import React from 'react';

export default ({ title, cardClass }) => (
  <div className={cardClass}>
    <h1 className='card-title'>{title}</h1>
    <div></div>
  </div>
);
