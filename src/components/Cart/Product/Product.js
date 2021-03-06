import React from 'react';

import './Product.css';

export default function Product( { title, img, id } ) {
  return (
    <Link id="CartProduct__navLink" to="../../Details/Details.js">
    <div id="CartProduct__container">
      <img alt="Product" src={ img } width="70px" height="70px" />
      <span id="CartProduct__title"> { title } </span>
    </div>
    </Link>  
  )
}