import React from 'react';
import Options from './options';

const Signup = () => {
    return (
        <div className="login_container">
            <div className="login_form">
                <div className="login_form_inside">
                    <h1 className="signup_head"><span className="grey_head">Let's</span> go</h1>
                    <p className="signup_message">Welcome, you'll love the journey.</p>
                    <form action="">
                        <div className="form_inputs">
                            <label for="Name">Name:</label>
                            <input type="text" />
                        </div>
                        <div className="form_inputs">
                            <label for="email">Email:</label>
                            <input type="text" />
                        </div>
                        <div className="form_inputs">
                            <label for="password">Password:</label>
                            <input type="password" />
                        </div>
                        <div className="form_inputs">
                            <label for="confirm_password">Confirm password:</label>
                            <input type="text" />
                        </div>
                        <div className="form_submits">
                            <button type="submit">Signup</button>
                            <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
            <Options />
        </div>
    );
}

export default Signup