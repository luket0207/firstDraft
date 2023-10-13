import React from 'react';
import './Favourites.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlay } from '@fortawesome/free-solid-svg-icons'

const Favourites = () => {
  const favoriteItems = ['Voice', 'Call Forwarding', 'Enhanced Encryption'];

  return (
    <div className='favourites'>
      {favoriteItems.map((item, index) => (
        <div className='favourites_favourite' key={index}>
          <span className='favourites_favourite_play'><FontAwesomeIcon icon={faPlay} /></span>
          <p>{item}</p>
          <span className='favourites_favourite_cross'><FontAwesomeIcon icon={faXmark}  /></span>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
