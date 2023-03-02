import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand ms-4 fw-bold text-danger" href="/">
            ecomerce-w
          </a>
        </div>
      </nav>
      <main>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            list product
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
