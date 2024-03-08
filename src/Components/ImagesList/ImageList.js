import React,{useState} from 'react'
import './ImageList.css'
import slider1 from '../../images/slider1.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpg'
import slider5 from '../../images/slider5.jpg'
import slider6 from '../../images/slider6.jpg'
import seaview from '../../images/seaview1.jpg'
import seaview2 from '../../images/seaview2.jpeg'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default function ImageList() {

    // const [isOpen, setIsOpen] = useState(false);
    // const [photoIndex, setPhotoIndex] = useState(0);
    // const images = [seaview, seaview2];

    // const openLightbox = (index) => {
    //     setPhotoIndex(index);
    //     setIsOpen(true);
    // };
    return (
        <>
             {/* <div className="container mx-auto" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-6 d-flex" onClick={() => openLightbox(0)}>
                        <img src={seaview} alt="home" className="image"></img>
                    </div>
                    <div className="col-md-6" onClick={() => openLightbox(1)}>
                        <img src={seaview2} alt="House" className="image"></img>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )} */}
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
