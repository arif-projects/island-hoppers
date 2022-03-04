import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    return (
        <div>
            <h1>Please Log in!</h1>
            <button onClick = {signInUsingGoogle} className="btn btn-warning">Google SignIn</button>
        </div>
    );
};

export default Login;