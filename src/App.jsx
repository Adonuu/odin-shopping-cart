import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
      </Routes>
    </Router>
  );
}

export default App;