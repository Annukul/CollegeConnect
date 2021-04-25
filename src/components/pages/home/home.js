import React from 'react'
import Header from '../com/header';
import Content from './in-home/content';
import Left from './left';

const Home = () => {
    return (
        <>
            <Header />
            <div className="content">
                <Left />
                <Content />
            </div>
        </>
    )
}

export default Home
