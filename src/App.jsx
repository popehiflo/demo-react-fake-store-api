import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Product />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
