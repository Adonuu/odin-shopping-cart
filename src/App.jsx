import './App.css';
import { Item } from './components/Item';
import { fetchItem } from './api';
import { useState, useEffect } from 'react';

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const item = await fetchItem(1);
      console.log(item);
      setProduct(item);
    }

    loadProduct();
  }, []);

  return (
    <>
      {product ? <Item product={product} /> : <p>Loading...</p>}
    </>
  );
}

export default App;