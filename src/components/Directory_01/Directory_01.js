import React, { useState } from 'react';
import MenuItem_01 from '../MenuItem_01/MenuItem_01';
import items from '../menu-item-data.js';
import './Directory_01.scss';


function Directory_01() {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
            {
                menuItems.map(item => {
                    const { id, name, remoteUrl, size } = item;
                    return (
                        <MenuItem_01 key={id} name={name} remoteUrl={remoteUrl} size={size} />
                    )
                })
            }
        </div>
    )
};
export default Directory_01;
