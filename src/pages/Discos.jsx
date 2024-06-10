import Navbar from '../components/navbar/navbar';
import './App.css'
import MediaControlCard from './components/play/player';
import Footer from './components/footer/footer';
import ModalCard from './components/main/modalCard';
import somoslopeor from "./assets/somoslopeor.jpg";
import qadg from './assets/qadg.jpg';
import revz from './assets/revz.jpg';
import mefui from './assets/mefui.jpg';
import sexpearesep from './assets/sexpearesep.jpg';


function Discos() {
  const spotifyLink1 = 'https://open.spotify.com/intl-es/album/11Gz3ysUE4fqJg3KN51n7N?si=7B8WGtNFSne6FG6qr-OnOA';
  const spotifyLink2 = 'https://open.spotify.com/intl-es/album/4hb0pZ1Bdm19TGHF8Q88vw?si=E5ImClFLRQG5RyXKmOBjtg';
  const spotifyLink3 = 'https://open.spotify.com/intl-es/album/67LI43N7nwGWoq8ZY4eASL?si=jwnusnCUTA-brYxpP-ZMQQ';
  const spotifyLink4 = 'https://open.spotify.com/album/4bKYZ40qo1j0278K5GZ3io?si=gCQZZMWNR82WRzGTttUzpg';
  const spotifyLink5 = 'https://open.spotify.com/album/77KcXNaA7zPxpcNBPh8Ecf?si=PvIJXL2zR4ajCcmnBp5qKg';


  return (
    <div className="Discos">
      <Navbar />
      <div className="modal-cards-container" title="Discografía">
      <ModalCard imageUrl={sexpearesep} spotifyLink={spotifyLink5} />
      <ModalCard imageUrl={somoslopeor} spotifyLink={spotifyLink2} />
      <ModalCard imageUrl={mefui} spotifyLink={spotifyLink3} />
      <ModalCard imageUrl={revz} spotifyLink={spotifyLink4} />
      <ModalCard imageUrl={qadg} spotifyLink={spotifyLink1} />

      </div>
      <MediaControlCard />
      <Footer />
    </div>
  );
}

export default Discos;