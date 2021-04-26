import React from 'react';
import avatar from '../../images/avatar.jpg';

export const Left = () => {
    return (
        <div className="left-content-box">
            <div className="left-options">
                <div className="side-profile">
                    <img src={avatar} alt="Avatar" /><span><a href="/my-profile">Annukul</a></span>
                </div>
                <ul>
                    <li><a href="#"><i className="fas fa-university"></i><span>College</span></a></li>
                    <li><a href="#"><i className="fas fa-exclamation-circle"></i><span>Alerts</span></a></li>
                    <li><a href="#"><i className="fas fa-flag"></i><span>Notices</span></a></li>
                    <li><a href="#"><i className="fas fa-project-diagram"></i><span>Projects</span></a></li>
                    <li><a href="#"><i className="fas fa-print"></i><span>Exams</span></a></li>
                    <li><a href="#"><i className="fas fa-snowman"></i><span>Holidays</span></a></li>
                    <li><a href="#"><i className="fas fa-th-list"></i><span>Others</span></a></li>
                </ul>
            </div>
            <div className="footer">
                <ul>
                    <li><a href="#">Contact -</a></li>
                    <li><a href="#">Report -</a></li>
                    <li><a href="#">API -</a></li>
                    <li><a href="#">FAQs -</a></li>
                    <li><a href="#">Ask</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Left;
