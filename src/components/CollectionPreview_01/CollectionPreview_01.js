import React from 'react';
import CollectionItem_01 from '../CollectionItem_01/CollectionItem_01';
import './CollectionPreview_01.scss';

const CollectionPreview_01 = () => {
    return (
        <div className="collection-preview">
        <h2 className="title">Mens</h2>
        <div className="preview">
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/xJS0T3Y/camo-vest.png" name =" Camo Down Vest" price = "325"/>
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/qMQ75QZ/floral-shirt.png" name = "Floral T-shirt" price = "20"/>
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/55z32tw/long-sleeve.png" name = "Black & White Longsleeve" price = "25"/>
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/RvwnBL8/pink-shirt.png" name = "Pink T-shirt" price = "25"/>
        </div>
        <h2 className="title">Hats</h2>
        <div className="preview">
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/ZYW3VTp/brown-brim.png" name = "Brown Brim" price = "25" />
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/ypkgK0X/blue-beanie.png" name = "Blue Beanie" price = "18" />
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/QdJwgmp/brown-cowboy.png" name = "Brown Cowboy" price = "35"  />
            <CollectionItem_01 remoteUrl = "https://i.ibb.co/RjBLWxB/grey-brim.png" name = "Grey Brim" price = "25"  />
        </div>
      </div>
    )
};

export default CollectionPreview_01;