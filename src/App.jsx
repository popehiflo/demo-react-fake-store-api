import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export default App;
