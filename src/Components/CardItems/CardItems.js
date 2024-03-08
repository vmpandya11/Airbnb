import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardItems.css';
import myroom from '../../images/myroom1.png';
import slider1 from '../../images/slider1.jpg';
import { Link } from 'react-router-dom';

export default function CardItems() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://onestay.3waytech.co/api/room_list', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCards(data);
                console.log("data", data)
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container" id="silder-product-container">
            <div className="row m-3">
                {cards.map((card) => (
                    <div className="col-md-3" key={card.id}>
                        <div className="card">
                            <div className="card-body">
                                <Carousel interval={null}>
                                    <Carousel.Item>
                                        <Link to={`/CardDetails/${card.id}`}>
                                            <img src={myroom} className="card-img-top rounded carousel-image" alt="Image 1" />
                                        </Link>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Link to={`/details/${card.id}`}>
                                            <img
                                                className="d-block w-100 carousel-image"
                                                src={slider1}
                                                alt="First slide"
                                            />
                                        </Link>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Link to={`/details/${card.id}`}>
                                            <img
                                                className="d-block w-100 carousel-image"
                                                src={slider1}
                                                alt="Second slide"
                                            />
                                        </Link>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="Los-Angeles-txt d-flex">
                                <div className="detail-content">
                                    <b>{card.address}</b>
                                    <p className='description'>{card.description}</p>
                                    {/* {card.blocked_date.map((e) => (<p key={e.id}>{e.start_date}</p>))} */}
                                    <p>
                                        <b>{card.price}</b> / night
                                    </p>
                                </div>
                                <div className="now">
                                    <p>
                                        Now
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
