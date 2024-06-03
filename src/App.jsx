import { useState } from 'react'
import './App.css'
import MediaControlCard from './components/play/player';


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
     <MediaControlCard />
{/*       <Navbar />

      <Footer /> */}
    </div>
  );
}

export default App
