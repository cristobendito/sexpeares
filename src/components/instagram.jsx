import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './instagram.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        const latestPosts = response.data.slice(0, 6);
        setPosts(latestPosts);
      } catch (error) {
        console.error('Error en Instagram posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="instagram-feed">
      <h1>Instagram</h1>
      <div className="post-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.media_type === 'CAROUSEL_ALBUM' && (
              <img src={post.media_url} alt={post.caption} />
            )}
            {post.media_type === 'VIDEO' && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
            <div className="post-caption">
              <p>{post.caption}</p>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;


/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './instagram.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const token = 'IGQWRPT215WW5WZAFdrYVFhYlR4c1JoQmRPZAHdRZADVxOUtaVVZAUZAkdnWThZAaTBnVmVscFFpbDFaZAzd1VElNdm9yblcwYkVQRnZAJWHlaN0Q2ZATd1T0lnWlNpS0o1bHNqSGN5b3ExaTlRS2NUVGg4bkJEQXdZAZA2pqOU0ZD';
  const userId = '8356453917698918';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`);
        const latestPosts = response.data.data.slice(0, 10);
         console.log("imagen no",latestPosts); 
        setPosts(latestPosts);
      } catch (error) {
        console.error('Error en Instagram posts', error);
      }
    };

    fetchPosts();
  }, [token, userId]);

  return (
    <div className="instagram-feed">
      <h1>Instagram</h1>
      <div className="post-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.media_type === 'CAROUSEL_ALBUM' && (
              <img src={post.media_url} alt={post.caption} />
            )}
            {post.media_type === 'VIDEO' && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
            <div className="post-caption">
              <p>{post.caption}</p>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
 */