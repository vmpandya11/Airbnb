import slider1 from '../../images/slider1.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpg'
import slider5 from '../../images/slider5.jpg'
import slider6 from '../../images/slider6.jpg'
import seaview from '../../images/seaview1.jpg'
import seaview2 from '../../images/seaview2.jpeg'

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
    Captions,
    Download,
    Fullscreen,
    Thumbnails,
    Zoom,
    Share,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
export default function ImageList() {
    return(
        <>  
        <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
                <div className="row my-3" >
                    <img src={slider4} style={{ height: "500px" }} alt="House" className="image"></img>
                </div>
            </div >

            <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
                <div className="row my-3" >
                    <img src={slider5} style={{ height: "500px" }} alt="House" className="image"></img>
                </div>
            </div >
            <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
                <div className="row my-3" >

                    <img src={slider4} style={{ height: "500px" }} alt="House" className="image"></img>
                </div>
            </div >
            <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
                <div className="row my-3" >

                    <img src={slider3} style={{ height: "500px" }} alt="House" className="image"></img>
                </div>
            </div >
            <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
            </div >
        </ >
    )
}


