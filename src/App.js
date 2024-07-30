import {useEffect, useState} from 'react';
import Book from './components/Book';
import NavBar from './components/NavBar';
import './App.css';


//CRUD: create, read, update, delete

function App() {
  
  const [books, setBooks] = useState([]);
  const fetchData = () => { fetch('https://api.itbook.store/1.0/new')
    .then(res => res.json())
    .then(data => setBooks(data.books)) 
  }
  
  //in useEffect () => {} this is what we want 
  // to run while [ ] is the dependency. if [] changes useEffect will run
  // We only want this to run once so we will leave it empty
  useEffect(() => {
      fetchData();
  }, [] )

   
  return (
    <div>
      <NavBar />
      <h2>Books Available</h2>
     
      <div className="books-card">
        {books.map(element => <Book key={element.isbn13} book={element} />)}
      </div>
    
    </div>
  );
}

export default App;
