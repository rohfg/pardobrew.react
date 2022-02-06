import React from 'react';
import './Header.css';
import img from './logo1.png'

const Header = (props) => {
    return (
        <div className='Header'>
            <img src={img} alt='logo-pardo-brew-bros' width={200} />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Header;