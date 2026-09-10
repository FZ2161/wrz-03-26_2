import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Cards from './components/Cards';
import Table from './components/Table';
import SingleUser from './components/SingleUser';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (

    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/table">Table</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cards">Cards</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/table" element={<Table users={users}/>} />
          <Route path="/cards" element={<Cards users={users}/>} />
          <Route path='/users/:userId' element={<SingleUser/>} />
        </Routes>
      </BrowserRouter >

      

    </div>
  );
}

export default App;


// navbar: table, cards
// /users/2