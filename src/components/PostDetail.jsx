
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto my-16 bg-white rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.content}</p>
      <p className="mt-4 text-gray-500">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      <div className="mt-4">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
