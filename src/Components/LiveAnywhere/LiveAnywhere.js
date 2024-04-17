import React from 'react';
import './LiveAny.css';
import dog from '../../images/Dog.png';
import home from '../../images/Home.png'
import house from '../../images/House.png'
import sea from '../../images/Sea.png'



export default function LiveAnywhere() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='live-title'><b>Live Anywhere</b></h1>
                </div>
            </div>
            <div className='img-body'>
                <div className='row dogimg'>
                    <div className='col-md-3'>
                        <div className='dog-box'>
                            <img src={dog} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='dog-box'>
                            <img src={home} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='dog-box'>
                            <img src={house} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='dog-box'>
                            <img src={sea} alt='dog' className='dog-image' />
                            <p style={{ marginRight: "200px", marginTop: "10px" }}>Pets Allowes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
