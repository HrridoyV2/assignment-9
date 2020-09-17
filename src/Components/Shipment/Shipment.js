import React, { useState } from 'react';
import './Shipment.css'
import logo from '../../Logo.png'
import star from '../../Icon/star_1_.png'
import { Link, useParams } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';
import fakeData2 from '../../fakeData2'
import fakeData from '../../fakeData';
import finalSpot from '../../fakeData2/finalSpot';
const Shipment = () => {

    const {id} = useParams();
    const spot = fakeData.find(sp => sp.id === id);
    console.log(spot);
    const [hotel] = useState(fakeData2);
    console.log(hotel);
    return (
        
        <div className='container'>
            <nav className='d-flex bg-dark'>
                 <img src={logo} className='nav-logo'/>
                 <Link className='nav ml-auto'>News</Link>
                 <Link className='nav'>Destination</Link>
                 <Link className='nav'>Blog</Link>
                 <Link className='nav'>Contact</Link>
                 <button className='btn btn-warning'>SignOut</button>
             </nav>
             <p className='muted'>252 stays Apr 13-17 3 guests</p>
            <p><strong>Stay in {spot.name}</strong></p>
        <div className='row'>
            
                <div className='col-7'>
                <div class="card mb-3">
                {
                    hotel.map(ht => <div className='m-2'>
                        <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src={ht.img} class="card-img"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{ht.title}</h5>
                    <p class="card-text">{ht.body}</p>
                            <p class="card-text"><small class="text-muted"><img src={star} className='img-fluid' />{ht.rating}  <span className='ml-5'>${ht.price}/night $167 total </span></small></p>
                        </div>
                        </div>
                    </div>
                    </div>)
                }
                </div>
                </div>
                <div className='col-5'>
                <GoogleMap mapId={spot.id}></GoogleMap>
                </div>
            </div>
        </div>
        
    );
};

export default Shipment;