import React from 'react';
import './QuickLinks.scss';

const QuickLinks = () => {

  return (
    <div className='quickLinks'>
      <div className='quickLinks_title'>
        <h3>Quick Links</h3>
      </div>
      <div className='quickLinks_links'>
        <div className='quickLinks_links_link'><p>Greetings</p></div>
        <div className='quickLinks_links_link'><p>Gurus</p></div>
        <div className='quickLinks_links_link'><p>MS Teams</p></div>
      </div>
    </div>
  );
};

export default QuickLinks;
