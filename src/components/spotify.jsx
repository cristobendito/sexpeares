import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyAlbum = ({ albumId }) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/album/${albumId}`);
        setAlbum(response.data);
      } catch (error) {
        console.error('Error al obtener datos del álbum:', error);
      }
    };

    fetchData();
  }, [albumId]);

  if (!album) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{album.name}</h1>
      <img src={album.images[0].url} alt={album.name} />
      <h2>Tracks</h2>
      <ul>
        {album.tracks.items.map(track => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyAlbum;
