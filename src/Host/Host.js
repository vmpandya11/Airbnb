import React from 'react';
import './Host.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Hostvideo2 from '../../src/images/Hostvideo2.mp4'
import Footer from '../../src/Components/Footer/Footer';
export default function Host() {
    return (
        <>
            <div className='header-host'>

                <h1 className="host-heading">Open your door to hosting</h1>
                <Link to="/host2">
                    <div className='try-hosting'>
                        <Button variant='danger' className='host'>Try hosting</Button>
                    </div>
                </Link>
                <div className="video-section">
                    <iframe src={Hostvideo2} height="100%" width="100%" title="YouTube video player" frameborder="0" allow=" autoplay;" autoplay muted></iframe>
                </div>

            </div >

            <Footer />
        </>

    )
}
