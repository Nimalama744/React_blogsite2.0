// 

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post, deletePost }) => {

    const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/posts/${post.id}`);
  };

  

  const handleEdit = () => {
    navigate(`/posts/edit/${post.id}`);
  }

  const truncateContent = (content, limit) => {
    const words = content.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className="max-w-sm mx-auto mb-8 mt-16 bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
        <p className="mt-2 text-gray-500">{truncateContent(post.content, 100)}</p>
        <p className="mt-2 text-gray-400 text-xs">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
        <div className="mt-4">
          <button className="text-indigo-600 hover:text-indigo-900 mr-4"
                  onClick={handleReadMore} >
            Read More
            </button>
            <button className="text-blue-600 hover:text-blue-900 mr-4" onClick={handleEdit}>
                Edit
            </button>
            <button 
                className="text-red-600 hover:text-red-900"
                onClick={() => deletePost(post.id)} // This calls the deletePost function passed from PostList
                  >
              Delete
            </button>

          
        </div>
      </div>
    </div>
  );
};

export default PostCard;
