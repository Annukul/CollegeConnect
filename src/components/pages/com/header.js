import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="up">
                <img src={logo} alt="Logo" />
                <div className="search_form">
                    <form action="">
                        <input type="search" name="search" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <button className="user"><i class="fas fa-user"></i></button>
            </div>
        </header>
    );
}

export default Header;