import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Container } from 'react-bootstrap';
import FacebookLogo from '../../images/FacebookLogo.png';
import './PopBox.css';
import GoogleLogo from '../../images/google_logo.png';
import AppleLogo from '../../images/AppleLogo.png';
import GmailLogo from '../../images/GmailLogo.jpg';

export default function PopBox({ show, onHide }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function getInfo() {
        let item = ["email:", email, "password:", password];
        console.warn(item);
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >

                <Modal.Title>
                    <span>Login and Signup Page</span>
                    <hr className="my-3" />
                    Welcome to Airbnb
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="scrollbar-custom">
                <Container>
                    <Form>
                        <Form.Group as={Row} controlId="formEmail">
                            <p>Email Address</p>
                            <Col sm="10">
                                <Form.Control
                                    onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                            </Col>
                        </Form.Group>
                        <br />

                        <Form.Group as={Row} controlId="formPassword">
                            <p>Password</p>
                            <Col sm="10">
                                <Form.Control
                                    onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <br />
                        <Button variant="danger"
                            onClick={getInfo} className="w-100 mb-3">Continue</Button>
                        <Button variant="outline-primary" className="w-100 mb-2">
                            <img src={FacebookLogo} alt="Facebook Logo" className="logo" />
                            Continue with Facebook
                        </Button>
                        <Button variant="outline-danger" className="w-100 mb-2">
                            <img src={GoogleLogo} alt="Google Logo" className="logo" />
                            Continue with Google
                        </Button>
                        <Button variant="outline-success" className="w-100 mb-2">
                            <img src={AppleLogo} alt="Apple Logo" className="logo" />
                            Continue with Apple
                        </Button>
                        <Button variant="outline-secondary" className="w-100 mb-2">
                            <img src={GmailLogo} alt="Gmail Logo" className="logo" />
                            Continue with Gmail
                        </Button>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
