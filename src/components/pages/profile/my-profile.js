import React from 'react';
import profile from '../../images/avatar.jpg';
import Header from '../com/header';

const Profile = () => {
    return (
        <>
            <Header />
            <div className="profile">
                <div className="profile-img">
                    <img src={profile} alt="Profile image" />
                </div>
                <div className="profile-info">
                    <p><strong>Name:</strong> Annukul</p>
                    <p><strong>Email:</strong> thak@gmail.com</p>
                    <p><strong>Mobile:</strong> +911234567890</p>
                    <p><strong>College:</strong> SAITM</p>
                    <p><strong>Sec:</strong> B</p>
                    <p><strong>Wing:</strong> A</p>
                    <p><strong>Status:</strong> Single</p>
                    <p><strong>Type:</strong> Full-stack developer</p>
                    <p><strong>Available:</strong> Yes</p>
                    <div className="ask">
                        <button className="ask-email">Ask for email</button>
                        <button className="ask-mobile">Ask for number</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
