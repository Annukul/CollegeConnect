import React from 'react';
import post1 from '../../../../images/test-post1.jpg';
import post2 from '../../../../images/test-post2.jpg';
import post3 from '../../../../images/test-post3.jpg';
import post4 from '../../../../images/test-post4.jpg';
import post5 from '../../../../images/test-post5.jpg';

const Center = () => {
    return (
        <div className="center-content-box">
            <div className="create-post-go-to-page">
                <div className="go-to-form-box">
                    <form action="">
                        <input type="text" className="go-to-input" placeholder="Create Post" />
                    </form>
                </div>
            </div>

            <div className="options">
                <ul>
                    <li><a href="#">Top</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Notice</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </div>

            <div className="posts">
                <div className="post">
                    <div className="post-img">
                        <img src={post1} alt="" />
                    </div>
                    <div className="post-text">
                        <h3 className="post-title">Vasantkunj, high society of Delhi</h3>
                    </div>
                    <div className="post-info">
                        <small className="post-author">Raj</small>
                        <small className="post-date">12-04-21</small>
                    </div>
                </div>

                <div className="post">
                    <div className="post-img">
                        <img src={post2} alt="" />
                    </div>
                    <div className="post-text">
                        <h3 className="post-title">Vasantkunj, high society of Delhi</h3>
                    </div>
                    <div className="post-info">
                        <small className="post-author">Raj</small>
                        <small className="post-date">12-04-21</small>
                    </div>
                </div>

                <div className="post">
                    <div className="post-img">
                        <img src={post3} alt="" />
                    </div>
                    <div className="post-text">
                        <h3 className="post-title">Vasantkunj, high society of Delhi</h3>
                    </div>
                    <div className="post-info">
                        <small className="post-author">Raj</small>
                        <small className="post-date">12-04-21</small>
                    </div>
                </div>

                <div className="post">
                    <div className="post-img">
                        <img src={post4} alt="" />
                    </div>
                    <div className="post-text">
                        <h3 className="post-title">Vasantkunj, high society of Delhi</h3>
                    </div>
                    <div className="post-info">
                        <small className="post-author">Raj</small>
                        <small className="post-date">12-04-21</small>
                    </div>
                </div>

                <div className="post">
                    <div className="post-img">
                        <img src={post5} alt="" />
                    </div>
                    <div className="post-text">
                        <h3 className="post-title">Vasantkunj, high society of Delhi</h3>
                    </div>
                    <div className="post-info">
                        <small className="post-author">Raj</small>
                        <small className="post-date">12-04-21</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center;
