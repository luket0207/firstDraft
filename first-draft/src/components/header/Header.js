import React from 'react';
import './Header.scss'; 
import logo from '../../assets/images/ucskills-logo.svg';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <div className='header_logo'><img src={logo}></img></div>
        <div className='header_search'>
            <input type='text' className='header_search_box'></input>
            <Button color="#ffffff" bgColor="#143872"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>
        <div className='header_hamburger'>
            <div className='header_hamburger_container'>
                <div className='header_hamburger_bar'></div>
                <div className='header_hamburger_bar'></div>
                <div className='header_hamburger_bar'></div>
            </div>
        </div>
    </div>
  );
};

export default Header;
