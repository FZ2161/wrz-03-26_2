import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Cards from './components/Cards';
import Table from './components/Table';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    // display navbar at the top of the page, then empty page

    <div className="App">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/table">Table</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cards">Cards</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/table" element={<Table/>} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter >

      

    </div>
  );
}

export default App;


// navbar: table, cards
