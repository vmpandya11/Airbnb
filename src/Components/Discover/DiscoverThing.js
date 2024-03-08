import React from 'react';
import './DiscoverThing.css';
import dog from '../../images/Dog.png';
import home from '../../images/Home.png';
import house from '../../images/House.png';
import Footer from '../../Components/Footer/Footer';

export default function DiscoverThing() {
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='live-title-discover'><b>Discover thing to do</b></h1>
                </div>
            </div>
            <div className='img-body'>
                <div className='row dogimg'>
                    <div className='col-md-4'>
                        <div className='dog-box'>
                            <img src={dog} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='dog-box'>
                            <img src={home} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='dog-box'>
                            <img src={house} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
