import React from 'react'
import './Rental.css'
import gradiant from '../../images/gradient.png';

export default function Gradiant() {
    return (
        <>
            <div className='gridient-div'>
                <div className="gradient-column">
                    <img src={gradiant} alt="Gradient" className="gradient-image"></img>

                </div>
                <div className="text-container">
                    <h1 className="centered-text">What kind of place will you host</h1>
                </div>
                <div className="button-container-gradiant ">
                    <button className="button-grad" style={{ margin: '0 10px' }}>Ask a Superhost</button>
                    <button className="button-grad" style={{ margin: '0 10px' }}>Help</button>
                    <button className="button-grad">Save and exit</button>
                </div>
                <div className="big-button-container">
                    <button className="big-button"><h4>An entire Place</h4></button>
                    <button className="big-button"><h4>A Private Room</h4></button>
                    <button className="big-button"><h4>A shared Room</h4></button>
                </div>
            </div>
        </>

    )
}
