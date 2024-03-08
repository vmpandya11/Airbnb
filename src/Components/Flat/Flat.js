import React from 'react'
import './Flat.css'
import gradiant from '../../images/gradient.png';
import { Link } from 'react-router-dom';



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
                    <Link to="/Rental">  <button className="big-button"><h4>Rental unit</h4></button></Link>
                    <Link to="/Rental">   <button className="big-button"><h4>Apartment</h4></button></Link>
                    <Link to="/Rental">  <button className="big-button"><h4>Loft</h4></button></Link>
                    <Link to="/Rental">  <button className="big-button"><h4>Serviced Apartment</h4></button></Link>
                    <Link to="/Rental">  <button className="big-button"><h4>Casa Particular</h4></button></Link>
                    <Link to="/Rental">  <button className="big-button"><h4>Holiday Home</h4></button></Link>
                </div>
            </div>
        </>

    )
}
