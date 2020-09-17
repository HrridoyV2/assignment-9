import React, { useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import fakeData from '../../fakeData';

const Home = () => {
    const [spots, setSpots] = useState(fakeData);
    
    return (
        <div className='bg'>
        <nav className='d-flex'>
        <img src={logo} className='nav-logo'/>
        <input type="search" placeholder='Search Your Destination' className='form-control m-3'/>
            <Link className='nav'>News</Link>
            <Link className='nav'>Destination</Link>
            <Link className='nav'>BLog</Link>
            <Link className='nav'>Contact</Link>
            <Link to='/login' className='btn btn-warning'>Login</Link>
        </nav>
           <div className='d-flex text-light card-card-deck'>
            {
                spots.map(sp => <Link to={'/spot/'+sp.id}>
                    <div class="card">
                    <img src={sp.img} class="img"/>
                    <div class="card-body">
                <h3 class="card-title text-dark">{sp.name}</h3>
      
                    </div>
                </div>
            </Link>)
            }
            </div>
        </div>
            
            
    );
};

export default Home;