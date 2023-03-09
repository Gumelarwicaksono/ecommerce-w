import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import { Store } from './Store';
import ShippingAdressScreen from './screens/ShippingAdressScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_LOGOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="d-flex flex-column site-container">
        <header>
          <nav className="navbar bg-light  ">
            <div className="container  ">
              <Link className="navbar-brand text-success fw-bold" to="/">
                ecommerce-w
              </Link>
              <div className="nav">
                <Link className="nav-item position-relative mt-2 " to="/cart">
                  <i className="fas fa-cart-plus text-primary"></i>
                  {cart.cartItems.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>}
                </Link>
                {userInfo ? (
                  <div className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {userInfo.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/orderhistory">
                          Order History
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#logout" onClick={logoutHandler}>
                          logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="nav-link" to="/login">
                    login
                  </Link>
                )}
              </div>
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
              <Route path="/shipping" element={<ShippingAdressScreen />} />
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
