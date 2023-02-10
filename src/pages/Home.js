// sass
import '../styles/pages/home.sass'
import '../styles/pages/navbar.sass'

// assets
import adryan from '../assets/foto-site.png'
import JSLogo from '../assets/js_logo.png'
import TsLogo from '../assets/typescript.svg'
import ReactLogo from '../assets/reactLogo.png'
import HtmlLogo from '../assets/htmlLogo.png'
import CssLogo from '../assets/cssLogo.png'
import SassLogo from '../assets/sassLogo.png'
import ecommerce from '../assets/eccomerce.png'
import invoiceApp from '../assets/invoiceApp.png'
import logo from '../assets/logo.png'

import cv from '../assets/AdryanFrey_CV.pdf'

// gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// hooks
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  // states
  const [displayNavbar, setDisplayNavbar] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  // animations animation
  useEffect(() => {

    // skills animation
    gsap.to('.skill-container', {
      opacity: 1, duration: 1, x: 0, ease: "back.out(4)", stagger: 0.2, scrollTrigger: {
        trigger: '.section1-container-skills',
        start: 300
      }
    })

  }, [])

  // to top button animation
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 350) {
      const toTop = document.querySelector('.to-top')
      toTop.style.display = 'block'
    } else {
      const toTop = document.querySelector('.to-top')
      toTop.style.display = 'none'
    }
  })

  // handle message
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_yynju27', 'template_hlzd56y', e.target, 'EFiuWxNTSflYwcYLU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }

  // navbar js
  useEffect(() => {
    const navbarContainer = document.querySelector('.navbar-container')

    if (displayNavbar) {
      navbarContainer.style.display = 'block'
    } else {
      navbarContainer.style.display = 'none'
    }

  }, [displayNavbar])

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

      if (windowSize < 1020) {
        const navbarContainer = document.querySelector('.navbar-container')
        navbarContainer.style.display = 'none'
      } else {
        const navbarContainer = document.querySelector('.navbar-container')
        navbarContainer.style.display = 'block'
      }

      return _ => window.removeEventListener('resize', handleResize)
    }, [windowSize])
  }
  MyComponent()

  return (
    <div className='home'>
      <header className='navbar'>
        <div className="navbar-logo">
          <a href='#'><img src={logo} alt="Logo" /></a>
          <a href='#'><h1>Adryan Frey</h1></a>
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

      <main className='main'>
        <div className='main-container'>
          <div className='main-container-text'>
            <h1 className='gradient'>Hello, I am Adryan,</h1>
            <h1>Frontend Developer </h1>
            <p>Aspiring software engineer, seeking to apply competent developement skills with focus on collaboration, communication, and passion.</p>
            <a href={cv} download='AdryanFrey_CV.pdf'>Download CV </a>
          </div>
          <div className='main-container-img'>
            <img src={adryan} alt="Adryan Frey foto" />
          </div>
        </div>
        <div className='circle'></div>
        <div className='circle2'></div>
      </main>

      <section className='section1'>
        <div id='section1'></div>
        <div className="section1-container">
          <div className='section1-container-title'>
            <h1>Skills</h1>
          </div>

          <div className='section1-container-skills'>
            <div className='skill-container'>
              <img src={JSLogo} />
              <h3>JavaScript</h3>
            </div>

            <div className='skill-container'>
              <img src={TsLogo} />
              <h3>TypeScript</h3>
            </div>

            <div className='skill-container'>
              <img src={ReactLogo} />
              <h3>ReactJS</h3>
            </div>

            <div className='skill-container'>
              <img src={HtmlLogo} />
              <h3>HTML 5</h3>
            </div>

            <div className='skill-container'>
              <img src={CssLogo} />
              <h3>CSS 3</h3>
            </div>

            <div className='skill-container'>
              <img id='sassLogo' src={SassLogo} />
              <h3>SASS</h3>
            </div>
          </div>
        </div>
      </section>

      <section id='section2' className='section2'>
        <div className='projects-container'>
          <h2>Portfolio</h2>
          <div className='project'>
            <img src={ecommerce} alt="Project photo" />
            <h2>Eccomerce Website</h2>
            <p>Full Responsive and Functional Eccomerce Website. JavaScript, React, Sass.</p>
            <div className='btn-container'>
              <a href='https://adryanfrey.github.io/Audiophile-E-commerce/' className='siteBtn'>Visit WebSite</a>
              <a href='https://github.com/adryanfrey/Audiophile-E-commerce' className='gitBtn'>Check on GitHub</a>
            </div>
          </div>

          <div className='project'>
            <img src={invoiceApp} alt="Project photo" />
            <h2>Invoice App</h2>
            <p>FullStack Invoice App with Login and Register features for tracking and managing invoices easily. JavaScript, React, Sass, Firebase.</p>
            <div className='btn-container'>
              <a href='https://invoice-app-b9eae.web.app/' className='siteBtn'>Visit WebSite</a>
              <a href='https://github.com/adryanfrey/Invoice-App' className='gitBtn'>Check on GitHub</a>
            </div>
          </div>

          <div className='project'>
            <img src="" alt="" />
            <h2>Coming soon...</h2>
          </div>

          <div className='project'>
            <img src="" alt="" />
            <h2>Coming soon...</h2>
          </div>

        </div>
      </section>

      <section id='section3' className='section3'>
        <div className='contact-container'>
          <h2>Contact</h2>
          <div className='email-container'>
            <div className='img-bg'>
              <h3 className='h3-top'><i className="fa-solid fa-phone"></i> +31 6 29800492</h3>
              <h3 className='h3-bot'><i className="fa-solid fa-envelope"></i>adryanfrey886@gmail.com</h3>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>Send me a message!</h2>
              <label>
                Name:
                <input name='name' type="text" placeholder='Your Name' required />
              </label>
              <label>
                Email:
                <input name='email' type="email" placeholder='Your Email' required />
              </label>
              <label>
                Message:
                <textarea name='message' placeholder='Message' required />
              </label>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </section>

      <button className='to-top'>
        <a href="#"><i className="fa-solid fa-angles-up"></i></a>
      </button>

    </div>
  )
}

export default Home