import React, { useState } from 'react';
import Header from '../Header/Header';
import 'react-datepicker/dist/react-datepicker.css';
import './CardDetails.css';
import slider6 from '../../images/slider6.jpg';
import { FaWater, FaRegStar, FaBed, FaWifi, FaTv, FaStar, FaCheckCircle, FaStarOfLife, FaFan, FaExclamationCircle, FaClock } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md"
import { IoMdStarOutline } from "react-icons/io";
import aircover from '../../images/aircover.png';
import DatePicker from 'react-datepicker';
import h1 from '../../images/h1.png';
import h2 from '../../images/h2.png';
import h3 from '../../images/h3.png';
import h4 from '../../images/h4.png';
import h5 from '../../images/h5.png';
import h6 from '../../images/h6.png';
import h7 from '../../images/h7.png';
import h8 from '../../images/h8.png';
import LookBook from '../../images/lookbook.png'
import { Button } from 'react-bootstrap';
import ReviewDemo from '../ReviewDemo/ReviewDemo';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
export default function CardDetails() {



  const [startDate, setStartDate] = useState(new Date());

  const currentMonth = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  currentMonth.setDate(1);
  nextMonth.setDate(1);

  const [showPopBox, setShowPopBox] = useState(false);

  const handlePopBoxClose = () => {
    setShowPopBox(false);
  };

  const handleReviewClick = () => {
    setShowPopBox(true);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container" id="container_details">
        <div className='row'>
          <h3 style={{ marginTop: "30px" }}>Adaaran Club Rannalhi, Maldives, Water Bungalows</h3>

          <div id='Maldives'>
            <a href="#">Maldives</a>
            <div id="share">
              <a href='#'>Share/save</a>
            </div>
          </div>
          <div className='imageslider-container'>
            <div className='imageslider6'>
              <Link to="/ImageList"> <img src={slider6} alt="Slider 6" />  </Link>
            </div>

            <div className='imageslider6' id="second-image">
              <Link to="/ImageList"> <img src={slider6} alt="Slider 6" />  </Link>
            </div>
          </div>
          <div id='dom-hosted'>
            <h3>Dom Hosted by LookBook</h3>
            <p>6 guests. 1 bedroom. 1 bed. 1 bathroom</p>
          </div>
        </div>
        <hr className='hr'></hr>
        <div className='dive_right'>
          <div className='fawater'>
            <FaWater />
          </div>
          <h5>Dive right in</h5>
          <p>This is one of the few places in the area with a pool.</p>
        </div>
        <div className='dive_right'>
          <div className='fawater'>
            <FaRegStar />
          </div>
          <h5>Dive right in</h5>
          <p>This is one of the few places in the area with a pool.</p>
        </div>
        <hr className='hr'></hr>
        <div className='aircover'>
          <img src={aircover} alt="Aircover" />

          <div className='everybook'>
            <p>Every booking includes free protection from Host cancellations, listing inaccuracies,
              and
              other issues like trouble checking in.</p><br></br><br></br>

            <a href="">Learn More</a>
          </div>
        </div>
        <hr className='hr'></hr>
        <div className="Adaaran">
          <p>Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively<br></br>
            at the tip of the South Male atoll within the exotic collection of islands known as the<br></br>
            Maldives. Its unique location offers access to pristine beaches, excellent scuba diving<br></br>
            opportunities and a relaxed environment with easy access to the capital city of Male.
          </p>

        </div>
        <hr className='hr'></hr>
        <div className='bedroom'>
          <h3>Where you'll sleep</h3>

          <div className="box">
            <div className='fabed'> <FaBed />
            </div>
            <div className='bedh6'>
              <h6>BEDROOM</h6>
              <h6>Double BEd</h6></div>
          </div>
        </div>
        <hr className='hr'></hr>
        <div>
          <h3 style={{ marginRight: "530px" }}>What this place offers</h3>
          <div className='row'>
            <div className='col-sm-6'>
              <div className="amenities">
                <div >
                  <FaWifi /><span style={{ "marginLeft": "20px" }}>Wifi</span>
                </div>
                <FaTv /><span style={{ "marginLeft": "20px" }}>TV</span><br />
                <FaStarOfLife /><span style={{ "marginLeft": "20px" }}>HairDryer</span><br />
              </div></div>
            <div className='col-sm-6'>
              <div className="amenities2">
                <FaWater /><span style={{ "marginLeft": "20px" }}>pool</span><br />
                <FaFan /><span style={{ "marginLeft": "20px" }}>Airconditioning</span><br />
                <MdFreeBreakfast /><span style={{ "marginLeft": "20px" }}>Breakfast</span><br />
              </div>
            </div>
          </div>

        </div>
        <div className="showall">
          Show All amenities
        </div>
        <hr className='hr'></hr>
        <div className='date'>
          <h4>Select Your Dates</h4>
          <p>Minimum Stay:2 Nights</p>
          <div className="calendar-wrapper" style={{ height: "400px" }}>
            <div className="calendar" style={{ height: "100%" }}>
              <DatePicker selected={currentMonth} onChange={date => setStartDate(date)} inline />
            </div>
          </div>
        </div>
        <div className='star'>
          <FaStar style={{ marginBottom: "14px" }} />
          <span style={{ marginLeft: "15px" }}>4.92.26 reviews</span>
        </div>

        <div className='mx-5'>
          <div className='review' style={{ marginTop: "50px", display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Clealines</h6>
              <span style={{ marginBottom: "10px", marginLeft: "50px" }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Clealines</h6>
              <span style={{ marginBottom: "10px", marginLeft: "50px" }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Communication</h6>
              <span style={{ marginBottom: "10px", display: "contents" }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Communication</h6>
              <span style={{ marginBottom: "100px", display: "contents", }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Check-in</h6>
              <span style={{ marginBottom: "10px", marginLeft: "50px" }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px' }}>
              <h6 className='mx-2'>Check-in</h6>
              <span style={{ marginBottom: "10px", marginLeft: "50px" }}><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px' }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h1} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Vinayak Pandya</h6>
                    <div style={{ marginLeft: "-50px" }}>
                      <p className="text-muted m-0 small" >June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>

              <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
                <div className="col-12 my-5">
                  <div className="media d-flex align-items-center">
                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h2} alt="Profile" /></div>
                    <div className="media-body">
                      <h6 className="m-0">Nishant Golani</h6>
                      <div style={{ marginLeft: "-44px" }}>
                        <p className="text-muted m-0 small">June 2022</p></div>
                    </div>
                  </div>
                  <div className="p-4 border-light border rounded cc"  >
                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h3} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Rushi Fumkiya</h6>
                    <div style={{ marginLeft: "-44px" }}>
                      <p className="text-muted m-0 small">June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h4} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Saurabh Gohel</h6>
                    <div style={{ marginLeft: "-44px" }}>
                      <p className="text-muted m-0 small">June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px' }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h5} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Vaibhav Mavadia</h6>
                    <div style={{ marginLeft: "-56px" }}>
                      <p className="text-muted m-0 small">June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>

              <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
                <div className="col-12 my-5">
                  <div className="media d-flex align-items-center">
                    <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h6} alt="Profile" /></div>
                    <div className="media-body">
                      <h6 className="m-0">Pushp Jadeja</h6>
                      <div style={{ marginRight: "30px" }}>
                        <p className="text-muted m-0 small">June 2022</p></div>
                    </div>
                  </div>
                  <div className="p-4 border-light border rounded cc"  >
                    <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h7} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Jeet Makawana</h6>
                    <div style={{ marginLeft: "-50px" }}>
                      <p className="text-muted m-0 small">June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: '550px', marginRight: '10px', marginTop: "-60px" }}>
              <div className="col-12 my-5">
                <div className="media d-flex align-items-center">
                  <div className="profile-circle-image-70 mr-3"><img className="img-fluid" src={h8} alt="Profile" /></div>
                  <div className="media-body">
                    <h6 className="m-0">Rushi Gohil</h6>
                    <div style={{ marginRight: "20px" }}>
                      <p className="text-muted m-0 small">June 2022</p></div>
                  </div>
                </div>
                <div className="p-4 border-light border rounded cc"  >
                  <p className="mb-4 text-black-50" id="reviews_detail"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ante vitae semper pulvinar, ipsum tellus sodales lectus, quis</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className='show_all_reviews' onClick={handleReviewClick}>Show All reviews</Button>
        </div>
        <ReviewDemo show={showPopBox} onHide={handlePopBoxClose} />
        <hr className='hr'></hr>

      </div>

      <div className='map'>
        <h1 style={{ marginRight: "830px" }}>Where you'll be</h1>
        <div className="mapouter">
          <div className="gmap_canvas" style={{ marginLeft: "150px", marginTop: "50px" }}>
            <iframe
              width={1200}
              height={480}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
            <a href="https://www.analarmclock.com/" />
            <br />
            <a href="https://www.onclock.net/" />
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position: relative;text-align: right;height: 480px;width: 1200px;}"
              }}
            />
            <a href="https://www.ongooglemaps.com">html map area</a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas{overflow: hidden;background: none !important;height: 480px;width: 1200px;}"
              }}
            />
          </div>
        </div>
        <hr className='hr'></hr>
        <div className='lookbook-main'>
          <div className='loobook-img'>
            <img src={LookBook}></img>
          </div>
          <div className='lookbook-text'><h1>Hosted By LookBook</h1></div>
          <div className='inner-icon-text'>
            <div className='lookbook-star'>
              <FaStar></FaStar><h6>803Reviews</h6>

            </div>
            <div className='checkicon'>
              <FaCheckCircle /><h6>Verified Checked</h6>
            </div>
          </div>
          <div className='lookbook-p'>
            <p>
              We are a fully independent and dynamic specialist online holiday accommodation <br></br>provider world-wide company. Hotels and properties are in cities and sun & beach <br></br>destinations, mainly Turkey, Northern Cyprus, Greece, Maldives and worldwide because <br></br>of a good selection of products, competitive rates, and conditions. We have own <br></br>contracting with hotels (+1500) also get rates from 3rd party partners as supplier and <br></br>distributor and get bookings on B2B/B2C/B2E distrubition channels. “MALLI TOURISM &<br></br> TRAVEL LLC.” trading name with TURSAB A Group (11357) as “Loobookholiday” head quarter<br></br> located at Turkey as the only strategic partner company that offers Airbnb users hotel room <br></br>reservation options as well as home accommodation.
            </p>
          </div>
          <div>
            <p style={{ marginRight: "930px", marginTop: "20px" }}>Language :English,Turkey</p>

            <p style={{ marginRight: "970px", marginTop: "20px" }}>Response rate: 74%</p>

            <p style={{ marginRight: "920px", marginTop: "20px" }}>Response time:within a day</p>
          </div>
        </div>
        <div>
          <Button className='show_all_reviews' style={{ marginTop: "30px", marginLeft: "-130px" }}><b>contact Host</b></Button>
        </div>
        <div className='exclmationCircle'>
          <FaExclamationCircle />
          <p>To protect your payment, never transfer
            money or communicate outside of the Airbnb
            website or app.</p>
        </div>
        <hr className='hr'></hr>


        <div className="thing">
          <div className="thing-heading">
            <h2 style={{ marginRight: "900px" }}>Things to know</h2>
          </div>
          <div className="grid-section">
            <Row>
              <Col>
                <div className="house">
                  <p>
                    <b> House Rules</b>
                  </p>
                  <p>
                    <i class="fa-sharp fa-solid fa-clock"></i> &nbsp;
                    <FaClock style={{ marginRight: "10px", marginBottom: "2px" }}></FaClock>Check-in: After 3:00 pm
                  </p>
                </div>
              </Col>
              <Col>
                <div className="health">
                  <p>
                    <b> Health & safety</b>
                  </p>
                  <p>
                    <i class="fa-solid fa-star"></i> <FaStar></FaStar>Airbnb's COVID-19
                    safety practices apply
                  </p>
                  <p>
                    <i class="fa-sharp fa-solid fa-clock"></i> <FaStar></FaStar>Carbon
                    monoxide alarm
                  </p>
                  <p>
                    <i class="fa-sharp fa-solid fa-clock"></i> <FaClock></FaClock>Smoke
                    alarm
                  </p>
                </div>
              </Col>
              <Col>
                <div className="health">
                  <p>
                    <b> Cancellation policy</b>
                  </p>
                  <p>Free cancellation for 48 hours.</p>
                  <br />
                  <p>
                    Review the Host’s full cancellation policy which applies
                    even if you cancel for illness or disruptions caused by
                    COVID-19.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
