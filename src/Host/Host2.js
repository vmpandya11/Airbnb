import React from 'react';
import './Host2.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hostvideo from '../../src/images/Hostvideo.mp4';
import Footer from '../../src/Components/Footer/Footer';

export default function Host() {
    return (
        <>
            <div className='header-host2'>
                <div className="video-section2">
                    <iframe src={Hostvideo} height="100%" width="100%" title="YouTube video player" frameborder="0" allow="autoplay;" autoplay muted></iframe>
                </div>
                <h1 className="host-heading2">Become a Host in 10 easy steps</h1>
                <h5 className="host-h5">Join Join us. We'll help you every step of the way.</h5>
                <div className='try-hosting2'>
                    <Button variant='danger' className='host2' > <Link to="/gradiant" style={{ textDecoration: 'none', color: 'inherit' }}>Let's Go  </Link></Button>
                </div>

            </div>
            <Footer />
        </>
    )
}
