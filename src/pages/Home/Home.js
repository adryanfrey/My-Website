// sass
import './home.sass'
import '../../styles/navbar.sass'

// assets
import adryan from '../../assets/foto-site.png'
import JSLogo from '../../assets/js_logo.png'
import TsLogo from '../../assets/typescript.svg'
import ReactLogo from '../../assets/reactLogo.png'
import HtmlLogo from '../../assets/htmlLogo.png'
import CssLogo from '../../assets/cssLogo.png'
import SassLogo from '../../assets/sassLogo.png'
import logo from '../../assets/logo.png'
import reactNative from '../../assets/reactNative.png'
import node from '../../assets/nodejs.png'
import nextjs from '../../assets/nextjs.png'

import cv from '../../assets/adryanfreyResume.pdf'

// animations library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// hooks
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { HiArrowCircleRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { IoMdRocket } from 'react-icons/io'
import {AiOutlineLoading} from 'react-icons/ai'

// components
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import { toast } from 'react-toastify'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  // states
  const [loading, setLoading] = useState(true)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const navigate = useNavigate()
  const [formLoading, setFormLoading] = useState(false)
  const [btnClass, setBtnClass] = useState('')

  // all animations
  useEffect(() => {
    const checkWindowSizeSkill = () => {
      if (windowSize > 820) {
        return 300
      } else if (windowSize < 500) {
        return 400
      } else {
        return 630
      }
    }

    // first load animation
    gsap.to('.main-container-text', {x: 1, duration: 1, opacity: 1, ease: "power2.out"})
    gsap.to('.main-container-img', {x: 1, duration: 1, opacity: 1, ease: "power2.out"})

    // skills animation
    gsap.to('.skill-container', {
      opacity: 1, duration: 1, x: 0, ease: "back.out(4)", stagger: 0.2, scrollTrigger: {
        trigger: '.section1-container-skills',
        start: checkWindowSizeSkill(),
      }
    })

    // projects animation
    gsap.to('.project1', {
      opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
        trigger: '.project1',
        start: 'top 80%',
      }
    })

    gsap.to('.project2', {
      opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
        trigger: '.project2',
        start: 'top 80%',
      }
    })

    gsap.to('.project3', {
      opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
        trigger: '.project3',
        start: 'top 80%',
      }
    })

    gsap.to('.project4', {
      opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
        trigger: '.project4',
        start: 'top 80%',
      }
    })

    // contact animation

    gsap.to('.email-container', {opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: {
      trigger: '.email-container',
      start: 'top 90%',
    }})
  }, [loading])



  // to top button animation
  window.addEventListener('scroll', () => {
    let toTop = document.querySelector('.to-top')

    if (window.pageYOffset > 350) {
      toTop.style.display = 'block'

    } else {
      toTop.style.display = 'none'
    }
  })

  // loader
  if (loading) {
    return <Loading setLoading={setLoading} />
  }

  // navigate
  const handleNavigate = (url) => {
    gsap.to('.project1', {opacity: 0, x: -400, duration: 1})
    gsap.to('.project2', {opacity: 0, x: 400, duration: 1})
    gsap.to('.project3', {opacity: 0, x: -400, duration: 1})
    gsap.to('.project4', {opacity: 0, x: 400, duration: 1})
    gsap.to('.section2title', {opacity: 0})

    gsap.to('.section1', {y: -600, duration: 1})
    gsap.to('.section3', {y: 600, duration: 1})

    setTimeout(() => {
      navigate(url)
    }, 800)

  }

  const handleCloseNavbar = (scroll = undefined) => {
    const navbar = document.querySelector('.nav-mobile')
    const home = document.querySelector('.home')

    navbar.style.transform = 'translate(-100%,0)'
    home.style.height = '100%'
    home.style.overflow = ''

    if (scroll === '#section1' || scroll === '#section2' || scroll === '#section3') {
      setTimeout(() => {

        document.querySelector(scroll).scrollIntoView()
      }, 200)
    }
  }

  const handleOpenNavbar = () => {
    const navbar = document.querySelector('.nav-mobile')
    const home = document.querySelector('.home')

    navbar.style.transform = 'translate(0,0)'
    home.style.height = '100vh'
    home.style.overflow = 'hidden'

  }

  const handleMessage = async (e) => {
    e.preventDefault()

    setFormLoading(true)
    setBtnClass('disabled')

    try {
      await emailjs.sendForm('service_yynju27', 'template_hlzd56y', e.target, 'EFiuWxNTSflYwcYLU')
      toast.success('Thanks for your message, I will return ASAP :)')
    } catch (error) {
      toast.warn('Sorry there was an error')
    }
       
    setFormLoading(false)
    setBtnClass('')
    e.target.reset()
  }

  return (
    <div className='home'>
      <header className='navbar'>
        <div className="navbar-logo">
          <a href='#'><img src={logo} alt="Logo" /></a>
          <a href='#'><h1>Adryan Frey</h1></a>
        </div>

        <nav className='navbar-container'>
          <ul>
            <li><a className='link'><div className='whiteBorder' />Home  <div className='blueBorder' /></a></li>
            <li onClick={() => document.querySelector('.section1').scrollIntoView(false)}><a className='link'><div className='whiteBorder' /> Skills <div className='blueBorder' /></a></li>
            <li onClick={() => document.querySelector('.section2').scrollIntoView(false)}><a className='link'><div className='whiteBorder' /> Projects <div className='blueBorder' /></a></li>
            <li onClick={() => document.querySelector('.section3').scrollIntoView(false)}><a className='link'><div className='whiteBorder' /> Contact <div className='blueBorder' /></a></li>
          </ul>
        </nav>
        <i onClick={handleOpenNavbar} id='mobile-bar' className="fa-solid fa-bars"></i>
        <div className='nav-mobile'>
          <div className='icon-container' onClick={handleCloseNavbar}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul>
            <li onClick={handleCloseNavbar}>Home</li>
            <li onClick={() => handleCloseNavbar('#section1')}>Skills</li>
            <li onClick={() => handleCloseNavbar('#section2')}>Projects</li>
            <li onClick={() => handleCloseNavbar('#section3')}>Contact</li>
          </ul>
          <div className='socialMediaNav'>
            <a href="http://www.linkedin.com/in/adryan-frey"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/adryanfrey"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/adryanfrey"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </header>

      <main className='main'>
        <div className='main-container'>
          <div className='main-container-text'>
            <h1 data-text='Hello, I am Adryan,' className='title'>Hello, I am Adryan,</h1>
            <h1 data-text2='Fullstack Developer' className='subtitle'>Frontend Developer </h1>
            <p>Aspiring software engineer, seeking to apply competent developement skills with focus on collaboration, communication, and passion.</p>
            <a className='cv' href={cv} download='AdryanFreyResume.pdf'>Download CV </a>
            <div className='social-media-container'>
              <a href="http://www.linkedin.com/in/adryan-frey"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/adryanfrey"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/adryanfrey"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div className='main-container-img'>
            <img src={adryan} alt="Adryan Frey foto" />
          </div>
        </div>

      </main>

      <section className='section1'>
        <div id='section1'></div>
        <div className="section1-container">
          <div className='section1-container-title'>
            <h1>Skills</h1>
          </div>

          <div className='section1-container-skills'>

            <div className='skill-container'>
              <div>
                <img src={JSLogo} />
              </div>
              <h3>JavaScript</h3>
            </div>

            <div className='skill-container'>
              <div style={{ backgroundColor: '#0f74e1' }}>
                <img src={TsLogo} />
              </div>
              <h3>TypeScript</h3>
            </div>

            <div className='skill-container'>
              <div>
                <img src={ReactLogo} />
              </div>
              <h3>ReactJS</h3>
            </div>

            <div className='skill-container'>
              <div style={{ backgroundColor: '#fff' }}>
                <img src={nextjs} className='smallLogo' />
              </div>
              <h3>NextJS</h3>
            </div>

            <div className='skill-container'>
              <div style={{ backgroundColor: '#000' }}>
                <img src={reactNative} className='smallLogo' />
              </div>
              <h3>React Native</h3>
            </div>

            <div className='skill-container'>
              <div style={{ backgroundColor: '#a4f0a7' }}>
                <img src={node} className='smallLogo' />
              </div>
              <h3>NodeJS</h3>
            </div>

            <div className='skill-container'>
              <div>
                <img src={HtmlLogo} />
              </div>
              <h3>HTML 5</h3>
            </div>

            <div className='skill-container'>
              <div>
                <img src={CssLogo} />
              </div>
              <h3>CSS 3</h3>
            </div>

            <div className='skill-container'>
              <div>
                <img id='sassLogo' src={SassLogo} />
              </div>
              <h3>SASS</h3>
            </div>

          </div>
        </div>
      </section>

      <section id='section2' className='section2'>
        <div className='projects-container'>
          <h2 className='section2title'>Projects</h2>

          <div onClick={() => handleNavigate('/projects/1')} className='project project1'>
            <div className='filter'></div>
            <h2>Barber Pro</h2>
            <p>Complete system for managing your business</p>
            <button >
              <span>See Project</span>
              <HiArrowCircleRight className='button-icon' />
            </button>
          </div>

          <div onClick={() => handleNavigate('/projects/2')} className='project project2'>
            <div className='filter'></div>
            <h2>Audiophile Shop</h2>
            <p>Bringin you the best audio gear</p>
            <button>
              <span>See Project</span>
              <HiArrowCircleRight className='button-icon' />
            </button>
          </div>

          <div onClick={() => handleNavigate('/projects/3')} className='project project3'>
            <div className='filter'></div>
            <h2>Invoice App</h2>
            <p>Manage your invoices easily</p>
            <button>
              <span>See Project</span>
              <HiArrowCircleRight className='button-icon' />
            </button>
          </div>

          <div onClick={() => handleNavigate('/projects/4')} className='project project4'>
            <div className='filter'></div>
            <h2>Pizzeria Pro</h2>
            <p>Complete system for managing customer orders in a restaurant.</p>
            <button >
              <span>see project</span>
              <HiArrowCircleRight className='button-icon' />
            </button>
          </div>
        </div>
      </section>

      <section id='section3' className='section3'>
        <h2 className='title'>Contact</h2>
        <div className='email-container'>
          <div className='img-bg'>
            <h3 className='h3-top'><i className="fa-solid fa-phone"></i> +31 6 29800492</h3>
            <h3 className='h3-bot'><i className="fa-solid fa-envelope"></i>adryanfrey886@gmail.com</h3>
          </div>
          <form className='formMessage' onSubmit={(e) => handleMessage(e)}>
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
            <button className={btnClass} disabled={formLoading}  type='submit'>
              {formLoading ? (<AiOutlineLoading className='icon' size={20} color='#fff'/>) : ('Send')}
            </button>
          </form>
        </div>
      </section>

      <button className='to-top'>
        <a href="#"><IoMdRocket size={38} color='#25a9d7' /></a>
      </button>

      <Footer />

    </div>
  )
}

export default Home