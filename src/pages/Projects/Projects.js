// styles
import './projects.sass'
import 'swiper/css'
import "swiper/css/navigation"

// assets
import logo from '../../assets/logo.png'
import project1 from '../../assets/audiophile.png'
import project2 from '../../assets/invoiceAppBanner.png'
import project3 from '../../assets/appleClone.png'
import project4 from '../../assets/pizzeriaProBanner.png'
import project5 from '../../assets/barberProBanner.png'

import audiophile1 from '../../assets/audiophile1.png'
import audiophile2 from '../../assets/audiophile2.png'
import audiophile3 from '../../assets/audiophile3.png'
import audiophile4 from '../../assets/audiophile4.png'
import audiophile5 from '../../assets/audiophile5.png'

import iphone1 from '../../assets/iphone1.png'
import iphone2 from '../../assets/iphone2.png'
import iphone3 from '../../assets/iphone3.png'
import iphone4 from '../../assets/iphone4.png'

import invoiceApp1 from '../../assets/invoiceApp1.png'
import invoiceApp2 from '../../assets/invoiceApp2.png'
import invoiceApp3 from '../../assets/invoiceApp3.png'
import invoiceApp4 from '../../assets/invoiceApp4.png'
import invoiceApp5 from '../../assets/invoiceApp5.png'
import invoiceApp6 from '../../assets/invoiceApp6.png'

import pizzeriaPro1 from '../../assets/pizzeriaPro2.png'
import pizzeriaPro2 from '../../assets/pizzeriaPro1.png'
import pizzeriaPro3 from '../../assets/pizzeriaPro3.png'
import pizzeriaPro4 from '../../assets/pizzeriaPro4.png'
import pizzeriaPro5 from '../../assets/pizzeriaPro5.png'
import pizzeriaMobile1 from '../../assets/pizzeriaMobile1.png'
import pizzeriaMobile2 from '../../assets/pizzeriaMobile2.png'
import pizzeriaMobile3 from '../../assets/pizzeriaMobile3.png'
import pizzeriaMobile4 from '../../assets/pizzeriaMobile4.png'
import pizzeriaMobile5 from '../../assets/pizzeriaMobile5.png'

import barberPro1 from '../../assets/barberPro1.png'
import barberPro2 from '../../assets/barberPro2.png'
import barberPro3 from '../../assets/barberPro3.png'
import barberPro4 from '../../assets/barberPro4.png'
import barberPro5 from '../../assets/barberPro5.png'
import barberPro6 from '../../assets/barberPro6.png'
import barberPro7 from '../../assets/barberPro7.png'


// hooks
import { useParams } from 'react-router-dom'
import { HiArrowCircleRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { IoMdRocket } from 'react-icons/io'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components
import Loading from '../../components/Loading/Loading'
import AllProjects from '../../components/AllProjects/AllProjects'
import Contact from '../../components/Contact/Contact'

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger)

    const { id } = useParams()
    const navigate = useNavigate('')
    const [loading, setLoading] = useState(true)
    const [projectsVisible, setProjectsVisible] = useState(false)
    const [contactVisible, setContactVisible] = useState(false)

    // animations
    useEffect(() => {
        // first load animation
        gsap.to('.titleContainer', { opacity: 1, x: 0, duration: 1, ease: "power2.out" })
        gsap.to('.imgContainer', { opacity: 1, x: 0, duration: 1, ease: "power2.out" })
        gsap.to('.container2', { opacity: 1, y: 0, duration: 1, delay: .5 })

        // scroll animations
        gsap.to('.projectIntroduction', {
            opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.projectIntroduction',
                start: 'top 90%',
            }
        })

        gsap.to('.visitSiteButton', {
            opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.visitSiteButton',
                start: 'top 90%',
            }
        })

        gsap.to('.swiper', {
            opacity: 1, duration: .7, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.swiper',
                start: 'top 80%',
            }
        })

        gsap.to('.projectFeatures', {
            opacity: 1, duration: 1, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.projectFeatures',
                start: 'top 80%',
            }
        })

        gsap.to('.mobileText', {
            opacity: 1, duration: 1, x: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.mobileText',
                start: 'top 20%',
            }
        })

    }, [loading, projectsVisible, contactVisible])

    // imgs
    const audiophileImgs = [audiophile1, audiophile2, audiophile3, audiophile4, audiophile5]
    const iphoneCloneImgs = [iphone1, iphone2, iphone3, iphone4]
    const invoiceAppImgs = [invoiceApp1, invoiceApp2, invoiceApp3, invoiceApp4, invoiceApp5, invoiceApp6]
    const pizzeriaProImgs = [pizzeriaPro1, pizzeriaPro2, pizzeriaPro3, pizzeriaPro4, pizzeriaPro5]
    const pizzeriaProMobile = [pizzeriaMobile1, pizzeriaMobile2, pizzeriaMobile3, pizzeriaMobile4, pizzeriaMobile5]
    const barberProImgs = [barberPro1, barberPro2, barberPro3, barberPro3, barberPro4, barberPro5, barberPro6, barberPro7]

    const projectData = [
        {
            title: 'Barber Pro',
            subtitle: 'Complete system for managing your business',
            role: 'Fullstack Developer',
            introduction: 'Barber Pro is web app that offers a solution for managing your business. Built with NextJs, TypeScript, and NodeJS, Barber Pro streamlines your business operations and helps you stay organized.',
            features: 'The app features include an easy schedule management, a revenue tracking, a employee and service registration, and much more. You can even try out the apps functionality with the demo feature or create an account and start using it.',
            banner: project5,
            imgs: barberProImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Barber-Pro-Web',
            siteLink: 'https://barber-pro-web.vercel.app/'
        },
        {
            title: 'Audiophile Shop',
            subtitle: 'Bringin you the best audio gear',
            role: 'Frontend Developer',
            introduction: 'Audiophile Shop is an E-commerce website built using ReactJS, JavaScript and Sass. The website is fully responsive and optimized for all screen sizes.',
            features: 'The website features include a product listing page, product detail page, shopping cart, checkout process and an order confirmation page.',
            banner: project1,
            imgs: audiophileImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Audiophile-Ecommerce',
            siteLink: 'https://audiophile-eccomerce-fawn.vercel.app'
        },
        {
            title: 'Invoice app',
            subtitle: 'Manage your invoices easily',
            role: 'Fullstack Developer',
            introduction: 'Invoice app is a web application built with JavaScript, ReactJS, Sass, and Firebase. This app offers a complete solution for invoicing, with a full login and registration system and a demo version for trying the app without registering.',
            features: 'The app is fully animated, responsive, and features both dark mode and light mode. With real-time database tracking, users can easily manage and view their invoices, and private routes ensure secure access to sensitive information.',
            banner: project2,
            imgs: invoiceAppImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Invoice-App',
            siteLink: 'https://invoice-app-b9eae.web.app/'
        },
        {
            title: 'Pizzeria Pro',
            subtitle: 'Complete system for managing customer orders in a restaurant.',
            role: 'Fullstack Developer',
            introduction: 'Pizzeria pro is a complete solution for managing orders in restaurants. Built with NextJs, TypeScript, ReactNative and NodeJS our order management system can seamlessly handle orders, improve customer satisfaction, and increase operational efficiency.',
            features: 'Our restaurant order management system streamlines the process of taking and fulfilling customer orders. Using a mobile app built with React Native, waitstaff can easily create and send new orders directly to our web-based system. The system, built with Next.js, TypeScript, and Sass, uses a RESTFUL API built with NodeJs that allows cashiers to manage these orders and communicate them to the kitchen staff.',
            banner: project4,
            imgs: pizzeriaProImgs,
            imgsMobile: pizzeriaProMobile,
            mobile: true,
            mobileFeatures: 'Our mobile app simplifies the restaurant experience for both waiters and customers. With our easy-to-use system, waiters can quickly take and manage customer orders with all the necessary details, without having to worry about manually recording them on paper. Orders are immediately sent to the cashier for efficient processing. In addition, our app offers a comprehensive catalog of the restaurants menu, conveniently divided into  categories for quick and easy selection. This helps waiters to take orders more accurately and efficiently, and provides customers with an enjoyable, hassle-free dining experience.',
            siteLink: 'https://pizzeria-pro-web-ymj5.vercel.app/',
            gitHubRepo: 'https://github.com/adryanfrey/pizzeria-pro-web',
        },
        {
            title: 'Apple Website Clone',
            subtitle: 'Fully animated apple website',
            role: 'Frontend Developer',
            introduction: 'This apple website clone its a personal project to attest my skills as a frontend developer.',
            features: 'Apple clone landing page fully animated',
            banner: project3,
            imgs: iphoneCloneImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Iphone-Website-Clone',
            siteLink: 'https://adryanfrey.github.io/Iphone-Website-Clone/'

        },
    ]

    // navigate
    const handleNav = (url) => {
        const project = document.querySelector('.container')

        gsap.to(project, { scale: 5, duration: .6, opacity: 0, transformOrigin: 'center' })

        setTimeout(() => {
            navigate(url)
        }, 500)

    }

    // open links in a new tab
    const handleLinks = (link) => {
        window.open(link, '_blank')
    }

    // open projects modal
    const handleAllProjects = (position) => {

        // checks from where you trying to access all projects
        if (position === 'top') {
            gsap.to('.titleContainer', { x: -1000 })
            gsap.to('.imgContainer', { x: 1000 })
            gsap.to('.container2', { y: 200, opacity: 0 })
            gsap.to('.projects', { height: '100vh' })
            gsap.to('.navbar', { opacity: 0 })
        } else {
            gsap.to('.footer', { opacity: 0 })
            gsap.to('.introductionContainer', { opacity: 0 })
     
        }

        setTimeout(() => {
            setProjectsVisible(true)
        }, [500])
    }

    // open contact modal
    const handleContact = () => {
        gsap.to('.titleContainer', { x: -1000 })
        gsap.to('.imgContainer', { x: 1000 })
        gsap.to('.container2', { y: 200, opacity: 0 })
        gsap.to('.projects', { height: '100vh' })
        gsap.to('.navbar', { opacity: 0 })

        setTimeout(() => {
            setContactVisible(true)
        }, [500])
    }

    // navigate to home page
    const handleBackHome = () => {
        gsap.to('.titleContainer', { x: -1000 })
        gsap.to('.imgContainer', { x: 1000 })
        gsap.to('.container2', { y: 200, opacity: 0 })
        gsap.to('.projects', { height: '100vh' })
        gsap.to('.navbar', { opacity: 0 })

        setTimeout(() => {
            navigate('/')
        }, [500])
    }


    // close navbar mobile
    const handleCloseNavbar = (url = undefined) => {
        const navbar = document.querySelector('.nav-mobile')
        const container = document.querySelector('.projectsContainer')

        navbar.style.transform = 'translate(-100%,0)'
        container.style.height = '100%'
        container.style.overflow = ''

        if (url === '/') {
            navigate('/')
        }

        if (url === '/allProjects') {
            setProjectsVisible(true)
        }

        if (url === '/contact') {

            setContactVisible(true)
        }
    }


    // opens navbar mobile
    const handleOpenNavbar = () => {
        const navbar = document.querySelector('.nav-mobile')
        const container = document.querySelector('.projectsContainer')

        navbar.style.transform = 'translate(0,0)'
        container.style.height = '100vh'
        container.style.overflow = 'hidden'
    }


    if (loading) {
        return <Loading setLoading={setLoading} />
    }

    if (projectsVisible) {
        return <AllProjects loading={setLoading} setProjectsVisible={setProjectsVisible} />
    }

    if (contactVisible) {
        return <Contact setContactVisible={setContactVisible} />
    }

    return (
        <div className='projectsContainer'>
            <main className='projects'>
                <header className='navbar navbarProjects'>
                    <div onClick={() => handleNav('/')} className="navbar-logo">
                        <a href='#'><img src={logo} alt="Logo" /></a>
                        <a href='#'><h1>Adryan Frey</h1></a>
                    </div>

                    <nav className='navbar-container'>
                        <ul>
                            <li onClick={handleBackHome}><a>Back home</a></li>
                            <li onClick={() => handleAllProjects('top')}><a>All projects</a></li>
                            <li onClick={handleContact}><a>Contact</a></li>
                        </ul>
                    </nav>
                    <i onClick={handleOpenNavbar} id='mobile-bar' className="fa-solid fa-bars"></i>
                    <div className='nav-mobile'>
                        <div className='icon-container' onClick={handleCloseNavbar}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <ul>
                            <li onClick={() => handleCloseNavbar('/')}>Back home</li>
                            <li onClick={() => handleCloseNavbar('/allProjects')}>All projects</li>
                            <li onClick={() => handleCloseNavbar('/contact')}>Contact</li>
                        </ul>
                        <div className='socialMediaNav'>
                            <a href="http://www.linkedin.com/in/adryan-frey"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/adryanfrey"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/adryanfrey"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </header>

                <div className='container1 container'>
                    <div className='titleContainer'>
                        <h1> {projectData[id - 1].title}</h1>
                        <p>{projectData[id - 1].subtitle}</p>
                        <div className='btn-container'>
                            <button onClick={() => handleLinks(projectData[id - 1].siteLink)}>
                                <span>Visit Website</span>
                                <HiArrowCircleRight className='button-icon' />
                            </button>
                            <button onClick={() => handleLinks(projectData[id - 1].gitHubRepo)}>
                                <span>Github Repo</span>
                                <HiArrowCircleRight className='button-icon' />
                            </button>
                        </div>
                    </div>
                    <div onClick={() => handleLinks(projectData[id - 1].siteLink)} className='imgContainer'>
                        <img src={projectData[id - 1].banner} alt="Project Image" />
                    </div>
                </div>
                <div className='container2 container'>
                    <p><span>role</span> {projectData[id - 1].role}</p>
                    <p><span>Context</span> personal project</p>
                </div>
            </main>

            <section className='introductionContainer'>
                <div className='introduction'>
                    <h1>Introduction</h1>
                    <p className='projectIntroduction'>{projectData[id - 1].introduction}</p>
                    <button onClick={() => handleLinks(projectData[id - 1].siteLink)} className='visitSiteButton'>
                        <span>Visit Website</span>
                        <HiArrowCircleRight className='button-icon' />
                    </button>
                </div>

                <Swiper navigation={true} modules={[Navigation]} className='swiper'>
                    {projectData[id - 1].imgs.map((img) => (
                        <SwiperSlide key={img}><img src={img} alt="Project Demonstration" /></SwiperSlide>
                    ))}
                </Swiper>

                <div className='projectFeatures'>
                    <h1 className='featuresTitle'>Features</h1>
                    <p className='featuresText'>{projectData[id - 1].features}</p>
                </div>

                {projectData[id - 1].mobile &&
                    <div className='mobileContainer'>
                        <div className='mobileText'>
                            <h1>App Features</h1>
                            <p>
                                {projectData[id - 1].mobileFeatures}
                            </p>
                        </div>

                        <Swiper navigation={true} modules={[Navigation]} className='mobileSwiper'>
                            {projectData[id - 1].imgsMobile?.map((img) => (
                                <SwiperSlide key={img}><img src={img} alt="Project Demonstration" /></SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                }
                <div onClick={() => handleAllProjects('bottom')} className="allProjectsBottom">
                    <p>All Projects</p>

                    <div className='icon'>
                        <IoMdRocket size={40} color='#fff' />
                    </div>
                </div>
            </section>

            <Footer />
        </div>


    )
}