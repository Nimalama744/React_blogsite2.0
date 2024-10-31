import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

//react icons
import { FaBars, FaFacebook, FaXmark  } from "react-icons/fa6";

const Nav = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/posts/create');
  }
  
  const NavItems = [
    {path: "/", link: "Home"},
    {path: "/blogs", link: "Blogs"},
    
    {path: "/about", link: "About"},
    
    
  
  ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='p-4 max-w-7xl mx-auto flex justify-between'>
        <a href="/" className='text-xl font-bold text-white' >Nima's <span className='text-green-500'>Blogs</span></a>

        <ul className='md:flex gap-12 text-lg hidden'>
          {
            NavItems.map(({path,link}) => 
            <li className='text-white'>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>
                {link}
              </NavLink>
            </li>
          )}
        </ul>

        <div className='text-white flex '>
          <button onClick={handleCreatePost} className='bg-green-500 px-3 py-1 font-medium rounded-lg hover:bg-white hover:text-green-500 transition-all duration-200 ease-in'>
            Create
          </button>
        </div>

        {/* mobile menu buttons */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark/> : <FaBars className='w-5 h-5 text-white'/>
            }
          </button>
        </div>
      </nav>

      {/* top-0 left-0 w-full transition-all ease-out duration-150 */}
      {/* menu for mobile only */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : 
         "hidden"}`}>
          {
            NavItems.map(({path,link}) => 
            <li className='text-black'>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Nav