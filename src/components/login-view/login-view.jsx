import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    }

    return (
        <div className="login-view">
            <h1>Login</h1>
            <form>
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

LoginView.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onLoggedIn: PropTypes.func.isRequired
};