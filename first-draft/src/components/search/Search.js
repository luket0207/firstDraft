import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button';

const Search = () => {

  return (
    <div className='search'>
        <div className='search_title'>
            <h3>Search</h3>
        </div>
        <div className='search_box'>
            <input type='text' className='search_box_input'></input>
            <Button color="#ffffff" bgColor="#143872"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>
    </div>
  );
};

export default Search;
