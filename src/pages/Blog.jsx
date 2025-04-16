import React, { useState, useEffect } from 'react';
import Image from '../components/Image';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    isLoading ? (
      <p>Download...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      posts.length === 0 ? (
        <p>Posts not found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          {posts.map(post => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <figure className='contents!'>
                  <Image 
                    src= "blog.jpg"
                    alt= "blog"
                    className= ""/>
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title block">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )
    )
  );
};

export default Blog;