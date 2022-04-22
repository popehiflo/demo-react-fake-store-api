import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/productActions';
import './Product.css';

const Product = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <section className="product">
      <h1 className="section-heading">{title}</h1>

      <div className="product__row">
        <div className="product__image">
          <img className="product__image--img" src={image} alt="product" />
        </div>
        <div className="product__data">
          <h3 className="data__title">{category}</h3>
          <p className="data__description">{price}</p>
          <p className="data__description">{description}</p>
          <Link to="/" className="btn-primary">
            {' Go back to products'}
            <span><FontAwesomeIcon icon={faArrowLeft} /></span>
            {' '}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
