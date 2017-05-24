import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    changeForm = () => {
        console.log('something');
    }

    render() {
        return (
            <div className="signingForm__container">
                <h1 className="signingForm__title">Sign in</h1>

                <form action="" className="signingForm">
                    <div className="signingForm__control-group">
                        <label htmlFor="user_email" className="signingForm__label">Email</label>
                        <input type="email" id="user_email" className="signingForm__input" />
                    </div>

                    <div className="signingForm__control-group">
                        <label htmlFor="user_password" className="signingForm__label">Password</label>
                        <input type="password" id="user_password" className="signingForm__input" />
                    </div>

                    <input type="submit" value="Sign in" className="signingForm__submit-btn" />
                    <Link to="/track" className="signingForm__link signingForm__link_change-form">Sign in</Link>
                </form>
            </div>
        );
    }
};

export default Dashboard;
