import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './components/Cart';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchItem } from './api';

const itemIds = [1, 2, 3, 4, 16, 18, 19, 20];

function App() {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      // Item exists, so update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity; // Update quantity
      setCart(updatedCart); // Update the cart state
    } else {
      // Item doesn't exist, so add it to the cart with the specified quantity
      item.quantity = quantity;
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.id !== itemToRemove.id));
  }

  async function getItems() {
    const itemsList = [];
    for (const id of itemIds) {
      const data = await fetchItem(id);
      itemsList.push(data);
    }
    setItems(itemsList);
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <Router>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop items={items} handleClick={addToCart}></Shop>}></Route>
          <Route path="/cart" element={<Cart cart={cart} handleClick={removeFromCart}></Cart>}></Route>
      </Routes>
    </Router>
  );
}

export default App;