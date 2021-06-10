import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    }

    return (
        <Row className="login-view justify-content-md-center">
            <Col className="justify-content-center" md={8}>
                <h1 id="login-header">Login</h1>
            </Col>
            <Col md={8}>
                <Form>
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
    );
}