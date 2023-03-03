import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <nav className="navbar bg-light">
            <div className="container ">
              <Link className="navbar-brand text-success fw-bold" to="/">
                ecommerce-w
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div class="card">
            <div class="card-header">ecomerce-w</div>
            <div class="card-body text-center">
              <h5 class="card-title text-success">2023 - All Rights Reserved</h5>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
