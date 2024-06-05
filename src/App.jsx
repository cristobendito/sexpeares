import { useState } from 'react'
import Navbar from './components/navbar/navbar';
/* import './App.css' */
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';


function App() {
/*   const [count, setCount] = useState(0) */


  return (
    <div className="App">
    <MediaControlCard />
    <Navbar />
    <Footer />

    </div>
  );
}

export default App
