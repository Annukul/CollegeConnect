import React, { useState } from 'react';
import post1 from '../../../../images/test-post1.jpg';
import post2 from '../../../../images/test-post2.jpg';
import post3 from '../../../../images/test-post3.jpg';
import post4 from '../../../../images/test-post4.jpg';
import post5 from '../../../../images/test-post5.jpg';

const Center = () => {
    const [like, setLike] = useState(0);

    const likeCount = () => {
        setLike((prevState) => {
            return prevState + 1;
        });
    }

    return (
        <div className="center-content-box">
            <div className="create-post-go-to-page">
                <div className="go-to-form-box">
                    <form action="">
                        <input onFocus={() => window.location.href = 'http://localhost:3000/create'} type="text" className="go-to-input" placeholder="Create Post" />
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
                        <div className="post-btns">
                            <button className="like-btn" onClick={() => likeCount()}><i class="far fa-heart"></i><span className="like-count">{like}</span></button>
                            <button className="comment-btn"><i class="far fa-comment-alt"></i></button>
                        </div>
                        <div className="post-auth">
                            <small className="post-author">Raj</small>
                            <small className="post-date">12-04-21</small>
                        </div>
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
                        <div className="post-btns">
                            <button className="like-btn" onClick={() => likeCount()}><i class="far fa-heart"></i><span className="like-count">{like}</span></button>
                            <button className="comment-btn"><i class="far fa-comment-alt"></i></button>
                        </div>
                        <div className="post-auth">
                            <small className="post-author">Raj</small>
                            <small className="post-date">12-04-21</small>
                        </div>
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
                        <div className="post-btns">
                            <button className="like-btn" onClick={() => likeCount()}><i class="far fa-heart"></i><span className="like-count">{like}</span></button>
                            <button className="comment-btn"><i class="far fa-comment-alt"></i></button>
                        </div>
                        <div className="post-auth">
                            <small className="post-author">Raj</small>
                            <small className="post-date">12-04-21</small>
                        </div>
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
                        <div className="post-btns">
                            <button className="like-btn" onClick={() => likeCount()}><i class="far fa-heart"></i><span className="like-count">{like}</span></button>
                            <button className="comment-btn"><i class="far fa-comment-alt"></i></button>
                        </div>
                        <div className="post-auth">
                            <small className="post-author">Raj</small>
                            <small className="post-date">12-04-21</small>
                        </div>
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
                        <div className="post-btns">
                            <button className="like-btn" onClick={() => likeCount()}><i class="far fa-heart"></i><span className="like-count">{like}</span></button>
                            <button className="comment-btn"><i class="far fa-comment-alt"></i></button>
                        </div>
                        <div className="post-auth">
                            <small className="post-author">Raj</small>
                            <small className="post-date">12-04-21</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center;
