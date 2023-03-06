import { useContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import { Store } from './Store';
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <nav className="navbar bg-light">
            <div className="container ">
              <Link className="navbar-brand text-success fw-bold" to="/">
                ecommerce-w
              </Link>
              <Link className="nav-item text-danger " to="/cart">
                <div class=" position-relative">
                  <i class="fas fa-cart-plus"></i>
                  {cart.cartItems.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <div className="container mt-2">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div className="card">
            <div className="card-header">ecomerce-w</div>
            <div className="card-body text-center">
              <h5 className="card-title text-success">2023 - All Rights Reserved</h5>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
