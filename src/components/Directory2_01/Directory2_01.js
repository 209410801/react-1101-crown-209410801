import React, { useState, useEffect } from 'react';
import MenuItem2_01 from '../MenuItem2_01/MenuItem2_01';
import axios from 'axios';
import './Directory2_01.scss';


function Directory2_01() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async() => {
            const HEROKU_URL = 'https://db-1101-crown-01.herokuapp.com/api_01/category_01';
            const {data} = await axios.get(HEROKU_URL);
            console.log('/api_01/category_01', data);
            setMenuItems(data)
        }
        fetchMenuItems()
    }, [])

    return (
        <div className="directory-menu">
            {
                menuItems.map(item => {
                    const { id, name, remote_url, size } = item;
                    return (
                        <MenuItem2_01 key={id} name={name} remote_url={remote_url} size={size} />
                    )
                })
            }
        </div>
    )
};
export default Directory2_01;
