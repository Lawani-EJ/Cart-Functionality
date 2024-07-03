import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/Cart';
import { Navbar, Nav } from 'react-bootstrap';
import { CartContext } from './context/CartContext';
import { useContext } from "react";

function App() {

  const {cart} = useContext(CartContext)

  return (
    <div className="App">
      <Router>
        <div className="min-h-screen bg-light">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Shop Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Shop Page</Nav.Link>
                <Nav.Link href="/cart">Cart({cart.length})</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
