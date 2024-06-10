import React, { useEffect } from 'react';

const YouTubeChannel = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/youtube-channel-videos/widget.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []); //  array vacio para que el efecto solo se ejecute una vez al montar el componente

  return (
    <div>
      <div className='sk-ww-youtube-channel-videos' data-embed-id='25423805'></div>
    </div>
  );
};

export default YouTubeChannel;






/* import React from 'react';

const videos = [
  
    {
        id: 'nxEXUBwcLZo',
        title: 'Pégales Fuego',
        thumbnail: 'https://img.youtube.com/vi/nxEXUBwcLZo/0.jpg',
        description: 'Description for video 1'
      },
      {
        id: 'nxEXUBwcLZo',
        title: 'Video Title 2',
        thumbnail: 'https://img.youtube.com/vi/nxEXUBwcLZo/0.jpg',
        description: 'Description for video 2'
      },
      {
        id: 'nxEXUBwcLZo',
        title: 'Video Title 3',
        thumbnail: 'https://img.youtube.com/vi/nxEXUBwcLZo/0.jpg',
        description: 'Description for video 3'
      }
    ];


const YouTubeChannel = () => {
  return (
    <div>
      <h1>Videos</h1>
      {videos.length > 0 ? (
        <div>
          {videos.map(video => (
            <div key={video.id}>
              <h2>{video.title}</h2>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.description}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default YouTubeChannel; */


/* import React, { useState, useEffect } from 'react';

const YouTubeChannel = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const url = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_name=LinusTechTips';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '7d634ba80fmsh9d5749a6d82b4a1p154050jsn49d6b4ab355c',
          'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setVideos(result.videos); // Asume que el resultado contiene una propiedad 'videos'
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      {error && <p>Error: {error}</p>}
      {videos.length > 0 ? (
        <div>
          {videos.map(video => (
            <div key={video.id}>
              <h2>{video.title}</h2>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.description}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YouTubeChannel;
 */