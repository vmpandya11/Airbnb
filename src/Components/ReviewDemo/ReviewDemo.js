import React from 'react'
import h1 from '../../images/h1.png'
import h2 from '../../images/h2.png'
import h3 from '../../images/h3.png'
import h4 from '../../images/h4.png'
import h5 from '../../images/h5.png'
import h6 from '../../images/h6.png'
import h7 from '../../images/h7.png'
import h8 from '../../images/h8.png'
import { Modal } from 'react-bootstrap'
import './Review.css';
import { FaStar } from 'react-icons/fa'

export default function ReviewDemo({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide}>

            <div className='main-container'>
                <div className='scroll-container'>
                    <div className='row'>
                        <div className='star2'>
                            <FaStar style={{ marginBottom: "14px" }} />
                            <span style={{ marginLeft: "15px" }}>4.92.26 reviews</span>
                        </div>
                        <hr></hr>
                        <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginLeft: "-142px" }}>
                            <div className="col-12 my-4">
                                <div className="media d-flex align-items-center">
                                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h1} alt="Profile" /></div>
                                    <div className="media-body">
                                        <h6 className="m-0">Vinayak Pandya</h6>

                                        <p className="text-muted m-0 small" >June 2022</p>
                                    </div>
                                </div>
                                <div className="p-4 border-light border rounded cc"  >
                                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                                </div>
                            </div>

                            <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginBottom: "-50px" }}>
                                <div className="col-12 my-4">
                                    <div className="media d-flex align-items-center">
                                        <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h2} alt="Profile" /></div>
                                        <div className="media-body">
                                            <h6 className="m-0">Nishant Golani</h6>
                                            <p className="text-muted m-0 small">June 2022</p>
                                        </div>
                                    </div>
                                    <div className="p-4 border-light border rounded cc"  >
                                        <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginBottom: "-50px", marginLeft: "-142px" }}>
                            <div className="col-12 my-5">
                                <div className="media d-flex align-items-center">
                                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h3} alt="Profile" /></div>
                                    <div className="media-body">
                                        <h6 className="m-0">Rushi Fumkiya</h6>

                                        <p className="text-muted m-0 small">June 2022</p>
                                    </div>
                                </div>
                                <div className="p-4 border-light border rounded cc"  >
                                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginBottom: "-50px", marginLeft: "-142px" }}>
                            <div className="col-12 my-4">
                                <div className="media d-flex align-items-center">
                                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h4} alt="Profile" /></div>
                                    <div className="media-body">
                                        <h6 className="m-0">Saurabh Gohel</h6>

                                        <p className="text-muted m-0 small">June 2022</p>
                                    </div>
                                </div>
                                <div className="p-4 border-light border rounded cc"  >
                                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginLeft: "-142px", marginBottom: "-60px" }}>
                        <div className="col-12 my-5">
                            <div className="media d-flex align-items-center">
                                <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h5} alt="Profile" /></div>
                                <div className="media-body">
                                    <h6 className="m-0">Vaibhav Mavadia</h6>

                                    <p className="text-muted m-0 small">June 2022</p>
                                </div>
                            </div>
                            <div className="p-4 border-light border rounded cc"  >
                                <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                            </div>
                        </div>

                        <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px", marginBottom: "-50px" }}>
                            <div className="col-12 my-4">
                                <div className="media d-flex align-items-center">
                                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h6} alt="Profile" /></div>
                                    <div className="media-body">
                                        <h6 className="m-0">Pushp Jadeja</h6>

                                        <p className="text-muted m-0 small">June 2022</p>
                                    </div>
                                </div>
                                <div className="p-4 border-light border rounded cc"  >
                                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px", marginLeft: "-142px", marginBottom: "-50px" }}>
                        <div className="col-12 my-5">
                            <div className="media d-flex align-items-center">
                                <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h7} alt="Profile" /></div>
                                <div className="media-body">
                                    <h6 className="m-0">Jeet Makawana</h6>

                                    <p className="text-muted m-0 small">June 2022</p>
                                </div>
                            </div>
                            <div className="p-4 border-light border rounded cc"  >
                                <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px", marginLeft: "-142px", marginBottom: "-50px" }}>
                        <div className="col-12 my-4">
                            <div className="media d-flex align-items-center">
                                <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h8} alt="Profile" /></div>
                                <div className="media-body">
                                    <h6 className="m-0">Rushi Gohil</h6>

                                    <p className="text-muted m-0 small">June 2022</p>
                                </div>
                            </div>
                            <div className="p-4 border-light border rounded cc"  >
                                <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal >
    )
}
