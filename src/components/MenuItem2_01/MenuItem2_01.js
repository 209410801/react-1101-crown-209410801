import React from 'react';
import './MenuItem2_01.scss';

const MenuItem2_01 = ({ name, remote_url, size }) => {
    return (
            <div className={`${size} menu-item`}>
                <img className="background-image" src={remote_url} alt="" />
                <a href="./hats.html" className="content">
                    <h1 className="title">{name}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </a>
            </div>
    )
};

export default MenuItem2_01;

