import { faDollarSign, faHashtag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="container__item" key={product.id}>
    <div className="item__image">
      <img className="item__image--img" src={product.image} alt="" />
    </div>
    <div className="item__content">
      <div className="price">
        <span>
          <FontAwesomeIcon icon={faHashtag} />
          {` ${product.category}`}
        </span>
        <span>
          <FontAwesomeIcon icon={faDollarSign} />
          {` ${product.price}`}
        </span>
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
    <Link to={`/${product.id}`} className="btn-primary" style={{ marginTop: 'auto' }}>
      {' '}
      learn more
      <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
    </Link>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
