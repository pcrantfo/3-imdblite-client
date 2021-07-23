import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://imdblite.herokuapp.com/login', {
            username: username,
            password: password
        })
        .then(response => {
            const data = response.data;
            props.onLoggedIn(data);
        })
        .catch(e => {
            alert(`No such user, ${username}, or password, ${password}, exist.`);
        });
    };

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
                            type = "Text"
                            placeholder = "Enter username"
                            value = {username}
                            onChange = { e => 
                                setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="Enter password"
                            value = {password}
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