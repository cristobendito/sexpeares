import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './instagram.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const token = 'IGQWRNVDZAhWF9JblBZASjFfMWdMb3dGM010R0hKWXlNb0JXMTd2NmxjQWplbi1acFRUQUItM3ZA2WjQxME1HUjgxal9vVjlsVFlVdnJoLUpBWWpzMnYzaEdSeWZA0UE5iS3VIYUt6S19Yb1JTNGczbmJWQjBfM2lXWXcZD';
  const userId = '8356453917698918';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`);
        const latestPosts = response.data.data.slice(0, 20);
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
