import React, { useContext } from 'react';
import './Book.css'
import logo from '../../Logo.png'
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const Book = () => {
    const {id} = useParams();
    const spot = fakeData.find(sp =>
        sp.id === id
    )
    
    
    const history = useHistory();
    const handleBookingCheckout = () => {
        history.push('/shipment')
    }
    return (
        <div className='bg'>
            <nav className='d-flex'>
            <img src={logo} className='nav-logo'/>
            <input type="search" placeholder='Search Your Destination' className='form-control m-3'/>
                <Link className='nav'>News</Link>
                <Link className='nav'>Destination</Link>
                <Link className='nav'>BLog</Link>
                <Link className='nav'>Contact</Link>
                <Link className='btn btn-warning'>Login</Link>
            </nav>
            <div className='row text-light mt-5 container'>
                <div className='col-6'>
                    <h1>{spot.name}</h1>
                    <p>{spot.body}</p>
                </div>
                <div className='col-6 bg-light'>
                    <div className='m-4'>
                        <span className='text-muted'>Origin</span>
                        <h5 className='text'>Dhaka</h5>
                        <span className='text-muted'>Destination</span>
                        <h5 className='text'>{spot.name}</h5>
                        
                        <div className='row'>
                            <div className='col'>
                            <span className='text-muted'>from</span>
                            <p className='text'><input type="datetime-local" className='text form-control'/></p>
                            </div>
                            <div className='col'>
                            <span className='text-muted'>to</span>
                            <p className='text'><input type="datetime-local" className='text form-control'/></p>
                            </div>
                        </div>
                        <Link to={'/'+spot.id + '/shipment'}><button className='btn btn-warning btn-block'>Start Booking</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;