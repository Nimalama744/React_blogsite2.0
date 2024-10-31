// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const PostForm = () => {
//   const [post, setPost] = useState({ title: '', content: '', author: '', tags: [], date: '' });
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       axios.get(`http://localhost:8000/posts/${id}`)
//         .then(response => {
//           const postData = response.data;
//           postData.date = new Date(postData.date).toISOString().split('T')[0];
//           setPost(postData);
//         })
//         .catch(error => console.error('Error fetching post:', error));
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPost(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (id) {
//       axios.put(`http://localhost:8000/posts/${id}`, post)
//         .then(() => navigate('/'))
//         .catch(error => console.error('Error updating post:', error));
//     } else {
//       axios.post('http://localhost:8000/posts', post)
//         .then(() => navigate('/'))
//         .catch(error => console.error('Error creating post:', error));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
//       <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Post' : 'Create Post'}</h1>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
//         <input 
//           type="text" 
//           name="title" 
//           value={post.title} 
//           onChange={handleChange} 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required 
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
//         <textarea 
//           name="content" 
//           value={post.content} 
//           onChange={handleChange} 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required 
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
//         <input 
//           type="text" 
//           name="author" 
//           value={post.author} 
//           onChange={handleChange} 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required 
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
//         <input 
//           type="date" 
//           name="date" 
//           value={post.date} 
//           onChange={handleChange} 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required 
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
//         <input 
//           type="text" 
//           name="tags" 
//           value={post.tags.join(', ')} 
//           onChange={(e) => setPost(prevState => ({ ...prevState, tags: e.target.value.split(', ') }))} 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button 
//           type="submit" 
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Save
//         </button>
//         <button 
//           type="button" 
//           onClick={() => navigate('/')} 
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PostForm = () => {
  const [post, setPost] = useState({ title: '', content: '', author: '', tags: [], date: '' });
  const navigate = useNavigate();
  const { id } = useParams();

 
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/posts/${id}`)
        .then(response => {
          const postData = response.data;
          postData.date = new Date(postData.date).toISOString();
          setPost(postData);
        })
        .catch(error => console.error('Error fetching post:', error));
    } else {
      const currentDate = new Date().toISOString();
      setPost(prevState => ({ ...prevState, date: currentDate }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString(); // Get the exact current date and time
    if (id) {
      axios.put(`http://localhost:8000/posts/${id}`, { ...post, date: currentDateTime })
        .then(() => navigate('/'))
        .catch(error => console.error('Error updating post:', error));
    } else {
      axios.post('http://localhost:8000/posts', { ...post, date: currentDateTime })
        .then(() => navigate('/'))
        .catch(error => console.error('Error creating post:', error));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-16 bg-white rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Post' : 'Create Post'}</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input 
          type="text" 
          name="title" 
          value={post.title} 
          onChange={handleChange} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea 
          name="content" 
          value={post.content} 
          onChange={handleChange} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
        <input 
          type="text" 
          name="author" 
          value={post.author} 
          onChange={handleChange} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <input 
          type="text" 
          name="tags" 
          value={post.tags.join(', ')} 
          onChange={(e) => setPost(prevState => ({ ...prevState, tags: e.target.value.split(', ') }))} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button 
          type="button" 
          onClick={() => navigate('/')} 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;
