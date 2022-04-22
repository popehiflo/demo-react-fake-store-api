import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';
import { setProducts } from '../../redux/actions/productActions';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const productData = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    await axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        dispatch(setProducts(res.data));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="products" id="products">

      <h1 className="section-heading">products</h1>
      <div className="products__container">
        {loading && (
          <h1 className="section-heading">
            <span>Loading...</span>
          </h1>
        )}

        {productData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
