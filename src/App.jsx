
import React from 'react'
import './index.css';
import 'tailwindcss/tailwind.css';



import Nav from './components/nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      
      
      <Nav></Nav>
      <Outlet/>
    </>
  );
}

export default App;
