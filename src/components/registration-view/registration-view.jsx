import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <div className="registration-view">
            <h1>Register</h1>
            <form>
                <label>
                    Name: 
                    <input 
                        type="text"
                        value={name}
                        onChange = {e =>
                            setName(e.target.value)}
                    />
                </label>
                <label>
                    Username: 
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e =>
                            setUsername(e.target.value)} 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange = {e =>
                            setPassword(e.target.value)} 
                    />
                </label>
                <label>
                    email: 
                    <input
                        type="text"
                        value={email}
                        onChange = {e => 
                            setEmail(e.target.value)}
                    />
                </label>
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

