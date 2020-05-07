import React from 'react';
import Card from '../templates/Card';

export default () => (
  <div className='card-layout'>
    <h1 className='h1'>Pricing Plans</h1>
    <div className='card-list'>
      <Card title='Gold' cardClass='gold-card' />
      <Card title='Bronze' cardClass='bronze-card' />
      <Card title='Silver' cardClass='silver-card' />
    </div>
  </div>
);
