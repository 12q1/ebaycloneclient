import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductList(props){
  return (
    <div>
      <ul>
        {props.products && props.products.products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id.toString().toUpperCase()}`}>{product.title}</Link><span> Price: ${product.price} </span>
          </li>
        ))}
        {!props.products && <li>Loading...</li>}
      </ul>
    </div>
  )
}
