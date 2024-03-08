import React from 'react'
import custombanner from '../../images/custombanner.png'
import './TryingHost.css';

export default function TryingHost() {
    return (
        <div className='trying-host-conatiner'>
            <div className='custombanner'>
                <img src={custombanner} />
            </div>
            <div className='main-try-host-data'>
                <div className='try-hosting-item'>
                    <h1 className='try-host-title'>
                        Try Hosting
                    </h1>
                    <p style={{ color: "white" }}>
                        Earn extra income and unlock new <br></br>opportunities by sharing your space.
                    </p>
                    <div>
                        <button className='try-hosting-button' >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
