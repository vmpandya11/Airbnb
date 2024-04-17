import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './PopBox2.css';

export default function PopBox({ show, onHide }) {

    const [username, setUserName] = useState("");
    const [fullname, setFulllName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [number, setUserNumber] = useState("");

    function getDetail() {
        let item = ["username:", username, "fullname:", fullname, "email:", email, "password:", password, "date:", date, "number:", number]
        console.warn(item);
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title><hr>
                </hr>
            </Modal.Header><br></br>
            <h4>Welcome to Airbnb
            </h4>
            <Modal.Body className="scrollbar-custom">
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Control onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group><br></br>

                    <Form.Group controlId="formFullName">
                        <Form.Control onChange={(e) => setFulllName(e.target.value)} type="text" placeholder="Enter full name" />
                    </Form.Group><br></br>

                    <Form.Group controlId="formEmail">
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group><br></br>

                    <Form.Group controlId="formPassword">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group><br></br>

                    <Form.Group controlId="formDateOfBirth">
                        <Form.Control onChange={(e) => setDate(e.target.value)} type="date" />
                    </Form.Group><br></br>

                    <Form.Group controlId="formPhoneNumber">
                        <Form.Control onChange={(e) => setUserNumber(e.target.value)} type="tel" placeholder="Enter phone number" />
                    </Form.Group><br></br>

                    <Button onClick={getDetail} variant="danger" className="w-100 mb-3">Sign Up</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
