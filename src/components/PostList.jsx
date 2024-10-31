
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PostCard from './PostCard';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const deletePost = (id) => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       axios.delete(`http://localhost:8000/posts/${id}`)
//         .then(() => {
//           setPosts(posts.filter(post => post.id !== id));
//         })
//         .catch(error => console.error('Error deleting post:', error));
//     }
//   };

  

//   useEffect(() => {
//     axios.get('http://localhost:8000/posts')
//       .then(response => {
//         const sortedPosts = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setPosts(sortedPosts);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
  
//   const filteredPosts = posts.filter(post => 
//     post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     post.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input 
//         className='mt-10 pl-4 ml-10 fixed border-2 p-1 rounded-xl text-gray-900'
//         type="text" 
//         placeholder="Search by title or author" 
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredPosts.map(post => (
//         <PostCard key={post.id} post={post} deletePost={deletePost} />
//       ))}
//     </div>
//   );
// }

// export default PostList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

const PostList = ({ onReadMore }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then(response => {
        const sortedPosts = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const deletePost = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      axios.delete(`http://localhost:8000/posts/${id}`)
        .then(() => {
          setPosts(posts.filter(post => post.id !== id));
        })
        .catch(error => console.error('Error deleting post:', error));
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <input 
        
        className="mt-10 pl-4 mb-4 w-3/5 fixed sm:w-2/5 md:w-2/5 border-2 p-2 rounded-xl text-gray-900
        flex flex-col items-center z-0"
        type="text" 
        placeholder="Search by title or author" 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostList;

