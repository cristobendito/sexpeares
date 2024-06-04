import { useState } from 'react'
import Navbar from './components/navbar/navbar';
/* import './App.css' */
import MediaControlCard from './components/play/player';


function App() {
/*   const [count, setCount] = useState(0) */


  return (
    <div className="App">
    <MediaControlCard />
    <Navbar />

    </div>
  );
}

export default App
