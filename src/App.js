import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


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
    <div className="App-header">
      
    </div>
  );
}

export default App;
