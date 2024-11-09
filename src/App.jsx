import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchItem } from './api';

const itemIds = [1, 2, 3, 4, 16, 18, 19, 20];

function App() {

  const [items, setItems] = useState([]);

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
          <Route path="/shop" element={<Shop items={items}></Shop>}></Route>
      </Routes>
    </Router>
  );
}

export default App;