
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'tailwindcss/tailwind.css';

// createRoot(document.getElementById('root')).render(
 
//     <App />
  
// )

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'tailwindcss/tailwind.css';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/ABout.jsx';
import PostForm from './components/PostForm.jsx';
import PostDetail from './components/PostDetail.jsx';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <App/></div>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/about",
        element: <About/> 
      },
      
      { path: "/posts/create",   // Create Post
        element: <PostForm />
       },  
      { path: "/posts/edit/:id",   // Edit Post
        element: <PostForm /> 
      },
      { path: "/posts/:id", 
        element: <PostDetail /> 
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)