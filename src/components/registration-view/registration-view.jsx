import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegistrationView(props) {
    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    }

    return (
        <Row className="registration-view justify-content-md-center">
            <Col md={8}>
            <Row className="justify-content-center">
                <h1>Register</h1>
            </Row>
                <Form>
                    <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                        <Form.Control 
                            type="text"
                            onChange = { e => 
                                setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control 
                            type="Text"
                            onChange = { e => 
                                setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                            type="password"
                            onChange = { e => 
                                setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control 
                            type="text"
                            onChange = { e => 
                                setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Button 
                        variant="primary"
                        type="submit"
                        onClick={ handleSubmit }
                    >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

