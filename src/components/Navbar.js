// sass
import '../styles/components/navbar.sass'

// hooks
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// assets
import logo from '../assets/logo.png'



const Navbar = () => {

  const [displayNavbar, setDisplayNavbar] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const navbarContainer = document.querySelector('.navbar-container')

    if(displayNavbar) {
      navbarContainer.style.display = 'block'
    } else {
      navbarContainer.style.display = 'none'
    }

  },[displayNavbar])

  const handleClick = () => {
    if (displayNavbar) {
      setDisplayNavbar(false)
    } else {
      setDisplayNavbar(true)
    }
  } 

  function MyComponent() {
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      if(windowSize < 1020){
        const navbarContainer = document.querySelector('.navbar-container')
        navbarContainer.style.display = 'none'
      } else {
        const navbarContainer = document.querySelector('.navbar-container')
        navbarContainer.style.display = 'block'
      }

      return _ => window.removeEventListener('resize', handleResize)
    },[windowSize])
  }
  MyComponent()

  return (
    <header className='navbar'>
        <div className="navbar-logo">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
            <Link to='/'><h1>Adryan Frey</h1></Link>
        </div>

        <nav className='navbar-container'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#section1'>Skills</a></li>
                <li><a href='#section2'>Portfolio</a></li>
                <li><a href='#section3'>Contact</a></li>
            </ul>
        </nav>
        <i onClick={handleClick} id='mobile-bar' className="fa-solid fa-bars"></i>
    </header>
  )
}

export default Navbar