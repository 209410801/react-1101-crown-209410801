import React from 'react';
import './CollectionItem_01.scss';

const CollectionItem_01 = ( { remoteUrl, name, price} ) => {
  return (
    <div>
      <div className="collection-item">
        <img className="image" src = {remoteUrl} />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  )
};

export default CollectionItem_01;