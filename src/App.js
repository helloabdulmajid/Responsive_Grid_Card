import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/card" element={<Card/>}/>

          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
