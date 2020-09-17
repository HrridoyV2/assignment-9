import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import Content from '../Content/Content';

const Header = () => {
    return (
        <div className='bg'>
            <nav className='d-flex'>
            <img src={logo} className='logo'/>
            <input type="search" placeholder='Search Your Destination' className='form-control m-3'/>
                <Link className='nav'>News</Link>
                <Link className='nav'>Destination</Link>
                <Link className='nav'>BLog</Link>
                <Link className='nav'>Contact</Link>
                <Link className='btn btn-warning'>Login</Link>
            </nav>
            <Content></Content>
            </div>
    );
};

export default Header;