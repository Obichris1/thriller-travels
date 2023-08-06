import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import BookFlight from './Pages/BookFlight';



function App() {
  return (
    <div className="App">

      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/book-flight' element={<BookFlight />} />
     


    
      
      
      </Routes>
      
    
    </div>
  );
}

export default App;
